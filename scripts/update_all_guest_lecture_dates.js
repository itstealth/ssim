import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const certPath = path.join(process.cwd(), "public/DigiCertGlobalRootG2.crt.pem");
const sslOptions = fs.existsSync(certPath)
  ? { ca: fs.readFileSync(certPath), rejectUnauthorized: false }
  : { rejectUnauthorized: false };

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: sslOptions,
});

try {
  const raw = fs.readFileSync("scripts/input_data.txt", "utf-8");
  const rawLines = raw.split("\n");

  let lines = [];
  let pending = "";

  for (let i = 1; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (!line.trim()) continue;

    if (pending) {
      pending += " " + line;
      if (/(2024-25|2023-24|2022-23|2025-26)\s*$/.test(pending.trim())) {
        lines.push(pending);
        pending = "";
      }
    } else {
      if (/(2024-25|2023-24|2022-23|2025-26)\s*$/.test(line.trim())) {
        lines.push(line);
      } else {
        pending = line;
      }
    }
  }

  let lastDate = "";
  let lastTopic = "";

  const allParsed = lines.map((line, idx) => {
    const parts = line.split("\t");
    let rawDate = parts[0]?.trim();
    let name = parts[1]?.trim() || "";
    let designation = parts[2]?.trim().replace(/^"|"$/g, "").replace(/\s+/g, " ") || null;
    let company = parts[3]?.trim() || null;
    let topic = parts[4]?.trim() || null;
    let year = parts[5]?.trim() || "";

    if (rawDate) {
      lastDate = rawDate;
    }
    const date = rawDate || lastDate;

    if (topic) {
      lastTopic = topic;
    } else if (!topic && lastTopic) {
      topic = lastTopic;
    }

    if (year === "2024-25") year = "2024 - 25";
    if (year === "2023-24") year = "2023 -24";
    if (year === "2022-23") year = "2022 -23";

    return {
      index: idx,
      date: date || null,
      name,
      designation: designation && designation !== "________" ? designation : null,
      company: company && company !== "________" && company !== "_____" ? company : (company || null),
      topic,
      year,
    };
  });

  console.log(`Parsed ${allParsed.length} records for 2024-25, 2023-24, and 2022-23.`);

  // Delete records for 2024-25, 2023-24, 2022-23 to refresh with all date-populated records
  await connection.query("DELETE FROM guest_lectures WHERE year IN ('2024 - 25', '2023 -24', '2022 -23', '2024-25', '2023-24', '2022-23')");
  console.log("Cleared existing older records.");

  // Insert all parsed records
  const insertQuery = "INSERT INTO guest_lectures (date, name, designation, company, topic, year) VALUES (?, ?, ?, ?, ?, ?)";
  for (const item of allParsed) {
    await connection.execute(insertQuery, [
      item.date,
      item.name,
      item.designation,
      item.company || "—",
      item.topic,
      item.year
    ]);
  }
  console.log(`Successfully inserted all ${allParsed.length} records with dates!`);

  // Verify total count and dates across all years
  const [counts] = await connection.query("SELECT year, COUNT(*) as count, SUM(CASE WHEN date IS NOT NULL AND date != '' THEN 1 ELSE 0 END) as with_date FROM guest_lectures GROUP BY year ORDER BY year DESC");
  console.log("\nUpdated Guest Lectures DB Summary:");
  console.table(counts);

  const [sampleRows] = await connection.query("SELECT id, date, name, designation, company, topic, year FROM guest_lectures ORDER BY id LIMIT 10");
  console.log("\nSample 10 DB Rows:");
  console.table(sampleRows);

} catch (err) {
  console.error("Migration error:", err);
} finally {
  await connection.end();
  console.log("Done.");
}
