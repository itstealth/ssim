import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// Enhanced SSL configuration with better error handling
function getSSLOptions() {
  try {
    // Try to read the certificate file
    const certPath = path.join(process.cwd(), "public", "DigiCertGlobalRootG2.crt.pem");
    
    if (fs.existsSync(certPath)) {
      console.log("✓ SSL certificate found at:", certPath);
      return {
        ca: fs.readFileSync(certPath),
        rejectUnauthorized: false,
      };
    } else {
      console.warn("⚠ SSL certificate not found at:", certPath);
      console.warn("Using rejectUnauthorized: false for production compatibility");
      return {
        rejectUnauthorized: false,
      };
    }
  } catch (error) {
    console.error("❌ Error reading SSL certificate:", error.message);
    return {
      rejectUnauthorized: false,
    };
  }
}

// Validate environment variables
function validateEnvironmentVariables() {
  const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
  
  console.log("✓ All required environment variables are present");
}

// Enhanced database configuration
export const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  multipleStatements: true,
  ssl: getSSLOptions(),
  // Enhanced error handling
  reconnect: true,
});

// Test database connection on startup
export async function testDatabaseConnection() {
  let connection;
  try {
    console.log("🔄 Testing database connection...");
    connection = await dbPool.getConnection();
    
    // Test a simple query
    const [rows] = await connection.query("SELECT 1 as test");
    console.log("✅ Database connection successful");
    console.log("📊 Test query result:", rows[0]);
    
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error("   Error code:", error.code);
    console.error("   Error message:", error.message);
    console.error("   Host:", process.env.DB_HOST);
    console.error("   Database:", process.env.DB_DATABASE);
    return false;
  } finally {
    if (connection) connection.release();
  }
}

// Enhanced schema initialization with blogs table
async function initializeDatabaseSchema() {
  let connection;
  try {
    console.log("🔄 Checking and creating database tables...");
    connection = await dbPool.getConnection();

    // Create all existing tables...
    const createEventsTableSQL = `
      CREATE TABLE IF NOT EXISTS events (
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
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

    // Execute table creations
    await connection.query(createEventsTableSQL);
    console.log("✓ Table 'events' checked/created.");

    await connection.query(createBlogsTableSQL);
    console.log("✓ Table 'blogs' checked/created.");

    // ... rest of your table creations

    console.log("✅ Database schema initialization completed");
  } catch (error) {
    console.error("❌ Error initializing database schema:", error);
    console.error("   Error code:", error.code);
    console.error("   Error message:", error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

// Initialize and test
validateEnvironmentVariables();
testDatabaseConnection().then(success => {
  if (success) {
    return initializeDatabaseSchema();
  } else {
    throw new Error("Database connection failed - cannot initialize schema");
  }
}).catch(error => {
  console.error("❌ Database initialization failed:", error);
  process.exit(1);
});
