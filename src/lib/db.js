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

// Global connection pool singleton for Next.js dev server HMR
let dbPool = globalThis.dbPool || null;

if (!dbPool && process.env.DB_HOST && process.env.DB_USER && process.env.DB_DATABASE) {
  console.log('[DB] Creating database pool...');
  console.log('[DB] DB_HOST:', process.env.DB_HOST);
  console.log('[DB] DB_DATABASE:', process.env.DB_DATABASE);
  console.log('[DB] DB_USER:', process.env.DB_USER);

  dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 30000,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
    queueLimit: 0,
    multipleStatements: true,
    ssl: getSSLOptions(),
    connectTimeout: 10000,
  });

  if (process.env.NODE_ENV !== "production") {
    globalThis.dbPool = dbPool;
  }

  console.log('[DB] Database pool created successfully');
} else if (!dbPool) {
  console.log('[DB] Skipping database pool creation - no credentials provided (build time)');
}

export { dbPool };

/**
 * Execute a query with automatic retry on transient connection drops / timeouts.
 */
export async function dbQuery(sql, params = []) {
  if (!dbPool) {
    throw new Error("Database connection pool is not initialized.");
  }
  try {
    return await dbPool.query(sql, params);
  } catch (err) {
    const isNetworkError =
      err.code === "ETIMEDOUT" ||
      err.code === "ECONNRESET" ||
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "EPIPE" ||
      err.code === "ER_SOCKET_UNEXPECTED_CLOSE";
    if (isNetworkError) {
      console.warn(`[DB] Transient connection error (${err.code}), retrying query once...`);
      return await dbPool.query(sql, params);
    }
    throw err;
  }
}

let schemaInitialized = globalThis.schemaInitialized || false;

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
                roll VARCHAR(100),
                name VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                program VARCHAR(100),
                majorSpecialization VARCHAR(255),
                year VARCHAR(20),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createGuestLecturesTableSQL = `
            CREATE TABLE IF NOT EXISTS guest_lectures (
                id INT AUTO_INCREMENT PRIMARY KEY,
                date VARCHAR(50),
                name VARCHAR(255) NOT NULL,
                designation VARCHAR(255),
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

    // Research section tables. Papers live in `publications` (above); these four
    // cover the remaining Research tabs. Column shapes follow the source
    // spreadsheet the institute maintains, so Excel uploads map straight across.
    const createConferencesTableSQL = `
            CREATE TABLE IF NOT EXISTS conferences (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(500) NOT NULL,
                faculty VARCHAR(500) NOT NULL,
                theme VARCHAR(500),
                organized_by VARCHAR(500),
                month_year VARCHAR(100),
                academic_year VARCHAR(20),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createPatentsTableSQL = `
            CREATE TABLE IF NOT EXISTS patents (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(500) NOT NULL,
                faculty VARCHAR(500) NOT NULL,
                patent_no VARCHAR(100),
                published_date VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createAwardsTableSQL = `
            CREATE TABLE IF NOT EXISTS awards (
                id INT AUTO_INCREMENT PRIMARY KEY,
                award VARCHAR(500) NOT NULL,
                faculty VARCHAR(500) NOT NULL,
                host_organization VARCHAR(500),
                year VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createBooksTableSQL = `
            CREATE TABLE IF NOT EXISTS books (
                id INT AUTO_INCREMENT PRIMARY KEY,
                book_name VARCHAR(500) NOT NULL,
                faculty VARCHAR(500) NOT NULL,
                publisher VARCHAR(500),
                academic_year VARCHAR(20),
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

    await connection.query(createConferencesTableSQL);
    console.log('[DB] Table "conferences" checked/created.');

    await connection.query(createPatentsTableSQL);
    console.log('[DB] Table "patents" checked/created.');

    await connection.query(createAwardsTableSQL);
    console.log('[DB] Table "awards" checked/created.');

    await connection.query(createBooksTableSQL);
    console.log('[DB] Table "books" checked/created.');

    await connection.query(createBlogsTableSQL);
    console.log('[DB] Table "blogs" checked/created.');

    // Ensure AUTO_INCREMENT on id columns and NULL permissions for optional fields
    const autoIncrementTables = [
      "placements",
      "internships",
      "guest_lectures",
      "publications",
      "conferences",
      "patents",
      "awards",
      "books",
      "blogs"
    ];

    for (const table of autoIncrementTables) {
      try {
        await connection.query(`ALTER TABLE ${table} MODIFY COLUMN id INT AUTO_INCREMENT`);
        console.log(`[DB] Ensured AUTO_INCREMENT on table "${table}".`);
      } catch (alterErr) {
        // Ignore if already AUTO_INCREMENT or column type differs
      }
    }

    try {
      await connection.query("ALTER TABLE guest_lectures ADD COLUMN date VARCHAR(50) NULL AFTER id");
    } catch (alterErr) {
      // Ignore if date column already exists
    }

    try {
      await connection.query("ALTER TABLE guest_lectures MODIFY COLUMN designation VARCHAR(255) NULL");
      await connection.query("ALTER TABLE guest_lectures MODIFY COLUMN topic VARCHAR(255) NULL");
      await connection.query("ALTER TABLE guest_lectures MODIFY COLUMN year VARCHAR(50) NULL");
    } catch (alterErr) {
      // Ignore if columns already allow NULL
    }
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

if (!isBuildTime && typeof window === 'undefined' && dbPool && !schemaInitialized) {
  schemaInitialized = true;
  if (process.env.NODE_ENV !== "production") {
    globalThis.schemaInitialized = true;
  }
  // Only run at runtime, not during build
  initializeDatabaseSchema().catch(error => {
    console.error('[DB] Failed to initialize database schema:', error);
    // Don't exit process during runtime - just log the error
    // The app can still work if tables already exist
  });
}
