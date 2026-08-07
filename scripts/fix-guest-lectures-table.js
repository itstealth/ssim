// One-time script to fix the guest_lectures table
// Run with: node scripts/fix-guest-lectures-table.js

import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const certPath = path.join(__dirname, "../public/DigiCertGlobalRootG2.crt.pem");

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

console.log("Connected to database.");

try {
  // Show current table structure
  const [cols] = await connection.query("SHOW COLUMNS FROM guest_lectures");
  console.log("Current guest_lectures structure:");
  console.table(cols);

  // Fix id column: set NOT NULL, PRIMARY KEY, AUTO_INCREMENT
  console.log("\nFixing id column...");
  await connection.query(`
    ALTER TABLE guest_lectures 
    MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
  `);
  console.log("✓ Fixed id column to AUTO_INCREMENT PRIMARY KEY.");

  // Also ensure optional columns allow NULL
  await connection.query(`
    ALTER TABLE guest_lectures 
    MODIFY COLUMN designation VARCHAR(255) NULL,
    MODIFY COLUMN topic VARCHAR(255) NULL,
    MODIFY COLUMN year VARCHAR(50) NULL
  `);
  console.log("✓ Fixed optional columns to allow NULL.");

  // Verify final structure
  const [newCols] = await connection.query("SHOW COLUMNS FROM guest_lectures");
  console.log("\nUpdated guest_lectures structure:");
  console.table(newCols);
} catch (err) {
  console.error("Error fixing table:", err.message);
} finally {
  await connection.end();
  console.log("Done.");
}
