import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// --- MySQL Connection Pool ---

// SSL configuration with better error handling
function getSSLOptions() {
  try {
    // Try to read SSL certificate file
    const certPath = path.join(process.cwd(), "public", "DigiCertGlobalRootG2.crt.pem");

    if (fs.existsSync(certPath)) {
      console.log('[DB] SSL certificate found:', certPath);

      return {
        ca: fs.readFileSync(certPath),
        rejectUnauthorized: process.env.NODE_ENV === "production",
      };
    } else {
      console.log('[DB] SSL certificate file not found, using system certificates');

      // Use system certificates when file is not available
      return {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      };
    }
  } catch (error) {
    console.log('[DB] Error loading SSL certificate:', error.message);

    // Fallback to system certificates
    return {
      rejectUnauthorized: false,
    };
  }
}

// Only log and create pool if we have database credentials
let dbPool = null;

// Function to initialize the database pool (lazy initialization)
function initializePool() {
  if (dbPool) {
    return dbPool; // Pool already exists
  }

  // Check for required environment variables
  const requiredVars = ['DB_HOST', 'DB_USER', 'DB_DATABASE'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('[DB] Missing required environment variables:', missingVars.join(', '));
    console.error('[DB] Please set the following in your .env file:');
    missingVars.forEach(varName => {
      console.error(`[DB]   ${varName}=your_value_here`);
    });
    console.error('[DB] Example .env file:');
    console.error('[DB]   DB_HOST=your-database-host');
    console.error('[DB]   DB_USER=your-database-user');
    console.error('[DB]   DB_PASSWORD=your-database-password');
    console.error('[DB]   DB_DATABASE=your-database-name');
    return null;
  }

  console.log('[DB] Creating database pool (lazy initialization)...');
  console.log('[DB] DB_HOST:', process.env.DB_HOST);
  console.log('[DB] DB_DATABASE:', process.env.DB_DATABASE);
  console.log('[DB] DB_USER:', process.env.DB_USER);

  try {
    dbPool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      multipleStatements: true,
      ssl: getSSLOptions(),
      connectTimeout: 60000,
    });

    console.log('[DB] Database pool created successfully');
    return dbPool;
  } catch (error) {
    console.error('[DB] Failed to create database pool:', error.message);
    console.error('[DB] Error details:', error);
    return null;
  }
}

// Initialize pool on module load if environment variables are available
if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_DATABASE) {
  initializePool();
} else {
  console.log('[DB] Skipping initial database pool creation - credentials not available at module load');
  console.log('[DB] Pool will be created lazily when first accessed');
}

// Export both the pool and the initialization function
export { dbPool, initializePool };

async function initializeDatabaseSchema() {
  // Skip initialization during build or if no database credentials
  if (!dbPool || !process.env.DB_HOST) {
    console.log('[DB] Skipping database schema initialization (build time or no credentials)');
    return;
  }

  let connection;
  try {
    console.log('[DB] Initializing database schema...');

    connection = await dbPool.getConnection();
    console.log('[DB] Checking and creating database tables if they do not exist...');

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
    console.log('[DB] Table "events" checked/created.');

    await connection.query(createEventImagesTableSQL);
    console.log('[DB] Table "event_images" checked/created.');

    await connection.query(createPlacementsTableSQL);
    console.log('[DB] Table "placements" checked/created.');

    await connection.query(createInternshipsTableSQL);
    console.log('[DB] Table "internships" checked/created.');

    await connection.query(createGuestLecturesTableSQL);
    console.log('[DB] Table "guest_lectures" checked/created.');

    await connection.query(createPublicationsTableSQL);
    console.log('[DB] Table "publications" checked/created.');

    await connection.query(createBlogsTableSQL);
    console.log('[DB] Table "blogs" checked/created.');
  } catch (error) {
    console.error('[DB] Error initializing database schema:', error.message);
    console.error('[DB] Error details:', error);
    // Don't exit the process - tables might already exist, or connection might be temporary
    // The app can still work if tables already exist from previous runs
    // Only log the error and continue
  } finally {
    if (connection) connection.release();
  }
}

// Initialize database schema on startup (only at runtime, not during build)
// Check if we're in build mode by looking for Next.js build indicators
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' || 
                    process.env.NEXT_PHASE === 'phase-development-build' ||
                    (typeof process.env.npm_lifecycle_event !== 'undefined' && 
                     process.env.npm_lifecycle_event.includes('build'));

if (!isBuildTime && typeof window === 'undefined' && dbPool) {
  // Only run at runtime, not during build
  initializeDatabaseSchema().catch(error => {
    console.error('[DB] Failed to initialize database schema:', error);
    // Don't exit process during runtime - just log the error
    // The app can still work if tables already exist
  });
}
