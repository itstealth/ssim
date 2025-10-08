import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// --- MySQL Connection Pool ---

// Base SSL options
const sslOptions = {
  ca: fs.readFileSync(path.join(process.cwd(), "public", "DigiCertGlobalRootG2.crt.pem")),
  rejectUnauthorized: false,
};

// For local development, we need to bypass the self-signed certificate issue.
// In production, we will not set this, allowing a pragmatic but functional connection.
// if (process.env.NODE_ENV !== "production") {
//   sslOptions.rejectUnauthorized = false;
// }

export const dbPool = mysql.createPool({
  host: process.env.DB_HOST, // Using environment variables
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
  ssl: sslOptions,
});

async function initializeDatabaseSchema() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    console.log(
      "Checking and creating database tables if they do not exist..."
    );

    const createEventsTableSQL = `
            CREATE TABLE IF NOT EXISTS events (
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createEventImagesTableSQL = `
            CREATE TABLE IF NOT EXISTS event_images (
                image_id INT AUTO_INCREMENT PRIMARY KEY,
                event_id VARCHAR(255) NOT NULL,
                image_path VARCHAR(255) NOT NULL,
                uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
            );
        `;

    const createPlacementsTableSQL = `
            CREATE TABLE IF NOT EXISTS placements (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                designation VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createInternshipsTableSQL = `
            CREATE TABLE IF NOT EXISTS internships (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                majorSpecialization VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createGuestLecturesTableSQL = `
            CREATE TABLE IF NOT EXISTS guest_lectures (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                designation VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                topic VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createPublicationsTableSQL = `
            CREATE TABLE IF NOT EXISTS publications (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                authors VARCHAR(255) NOT NULL,
                journal VARCHAR(255) NOT NULL,
                classification VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createBlogsTableSQL = `
            CREATE TABLE IF NOT EXISTS blogs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                content TEXT NOT NULL,
                imageUrl VARCHAR(500),
                imageAlt VARCHAR(255),
                authorName VARCHAR(255),
                publishDate DATETIME NOT NULL,
                metaTitle VARCHAR(255),
                metaDescription TEXT,
                keywords VARCHAR(500),
                tags JSON,
                categories JSON,
                canonicalUrl VARCHAR(500),
                jsonLdSchema TEXT,
                ogTitle VARCHAR(255),
                ogDescription TEXT,
                ogImageUrl VARCHAR(500),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `;

    await connection.query(createEventsTableSQL);
    console.log("Table 'events' checked/created.");

    await connection.query(createEventImagesTableSQL);
    console.log("Table 'event_images' checked/created.");

    await connection.query(createPlacementsTableSQL);
    console.log("Table 'placements' checked/created.");

    await connection.query(createInternshipsTableSQL);
    console.log("Table 'internships' checked/created.");

    await connection.query(createGuestLecturesTableSQL);
    console.log("Table 'guest_lectures' checked/created.");

    await connection.query(createPublicationsTableSQL);
    console.log("Table 'publications' checked/created.");

    await connection.query(createBlogsTableSQL);
    console.log("Table 'blogs' checked/created.");
  } catch (error) {
    console.error("Error initializing database schema:", error);
    // Exit the process if we can't set up the database, as the app won't work.
    process.exit(1);
  } finally {
    if (connection) connection.release();
  }
}
