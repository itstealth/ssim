#!/usr/bin/env node

/**
 * Script to find and test Azure MySQL database connection
 * This will help identify the correct database host
 */

import mysql from "mysql2/promise";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
function loadEnvFile() {
  try {
    const envPath = join(__dirname, "..", ".env");
    const envFile = readFileSync(envPath, "utf-8");
    const envVars = {};
    
    envFile.split("\n").forEach((line) => {
      line = line.trim();
      if (line && !line.startsWith("#") && line.includes("=")) {
        const [key, ...valueParts] = line.split("=");
        const value = valueParts.join("=").trim();
        const cleanValue = value.replace(/^["']|["']$/g, "");
        if (key && cleanValue) {
          envVars[key.trim()] = cleanValue;
        }
      }
    });
    
    Object.assign(process.env, envVars);
  } catch (error) {
    // .env file not found
  }
}

loadEnvFile();

// Common Azure MySQL host patterns
const potentialHosts = [
  "ssimdb.mysql.database.azure.com",
  "ssim-db.mysql.database.azure.com",
  "ssimmysql.mysql.database.azure.com",
  "ssim.mysql.database.azure.com",
  "ssim-production.mysql.database.azure.com",
  "ssimprod.mysql.database.azure.com",
  "ssim-wordpress.mysql.database.azure.com",
];

// Common database names
const potentialDatabases = [
  "ssim_db",
  "ssim",
  "ssim_production",
  "ssim_wordpress",
  "wordpress",
];

async function testConnection(host, username, password, database) {
  try {
    const connection = await mysql.createConnection({
      host: host,
      port: 3306,
      user: username,
      password: password,
      database: database,
      ssl: {
        rejectUnauthorized: false
      },
      connectTimeout: 5000,
    });

    // Test query
    const [rows] = await connection.query("SELECT DATABASE() as current_db, USER() as current_user, VERSION() as version");
    
    // Check if blogs table exists
    const [tables] = await connection.query("SHOW TABLES LIKE 'blogs'");
    
    await connection.end();
    
    return {
      success: true,
      host: host,
      database: rows[0].current_db,
      user: rows[0].current_user,
      version: rows[0].version,
      hasBlogsTable: tables.length > 0,
    };
  } catch (error) {
    return {
      success: false,
      host: host,
      error: error.message,
      code: error.code,
    };
  }
}

async function findDatabase() {
  console.log("🔍 Finding Azure MySQL Database...\n");
  
  // Azure credentials provided
  const azureUser = "admin@sivasivani.onmicrosoft.com";
  
  console.log("Using Azure account: admin@sivasivani.onmicrosoft.com");
  console.log("Note: You'll need to find the database server name from Azure Portal\n");
  
  console.log("📋 Steps to find database host:");
  console.log("1. Login to https://portal.azure.com");
  console.log("2. Search for 'Azure Database for MySQL' or 'MySQL servers'");
  console.log("3. Look for servers under 'sivasivani' organization");
  console.log("4. Check the server name (format: <name>.mysql.database.azure.com)");
  console.log("5. Check the database name in the server");
  console.log("6. Check Connection security for username format\n");
  
  // Check if credentials are in .env
  if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD) {
    console.log("✅ Found credentials in .env file:");
    console.log(`   DB_HOST: ${process.env.DB_HOST}`);
    console.log(`   DB_USER: ${process.env.DB_USER}`);
    console.log(`   DB_PASSWORD: ${process.env.DB_PASSWORD ? "[SET]" : "[NOT SET]"}`);
    console.log(`   DB_DATABASE: ${process.env.DB_DATABASE || "[NOT SET]"}`);
    console.log("");
    
    console.log("🧪 Testing connection...");
    const result = await testConnection(
      process.env.DB_HOST,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_DATABASE || "ssim_db"
    );
    
    if (result.success) {
      console.log("\n✅ Connection successful!");
      console.log(`   Host: ${result.host}`);
      console.log(`   Database: ${result.database}`);
      console.log(`   User: ${result.user}`);
      console.log(`   MySQL Version: ${result.version}`);
      console.log(`   Blogs table exists: ${result.hasBlogsTable ? "Yes ✅" : "No ❌"}`);
    } else {
      console.log(`\n❌ Connection failed: ${result.error}`);
      console.log(`   Error code: ${result.code}`);
      
      if (result.code === "ENOTFOUND" || result.code === "ETIMEDOUT") {
        console.log("\n   → Host not found or unreachable");
        console.log("   → Your DB_HOST is currently: " + process.env.DB_HOST);
        console.log("   → This should be: <server-name>.mysql.database.azure.com");
        console.log("   → Please check Azure Portal for the correct server name");
      } else if (result.code === "ER_ACCESS_DENIED_ERROR") {
        console.log("\n   → Access denied");
        console.log("   → Possible issues:");
        console.log("      - Wrong username/password");
        console.log("      - Username format incorrect (should be: username@server-name)");
        console.log("      - Your IP address not whitelisted in Azure MySQL firewall");
        console.log("   → Your DB_USER is currently: " + process.env.DB_USER);
        console.log("   → Azure MySQL format: <username>@<server-name>");
      } else if (result.code === "ER_BAD_DB_ERROR") {
        console.log("\n   → Database doesn't exist");
        console.log("   → Your DB_DATABASE is currently: " + (process.env.DB_DATABASE || "[NOT SET]"));
        console.log("   → Check Azure Portal → MySQL server → Databases section");
      } else if (process.env.DB_HOST === "localhost" || process.env.DB_USER === "your_database_user") {
        console.log("\n   ⚠️  Your .env file still contains placeholder values!");
        console.log("   → Please update your .env file with actual Azure MySQL credentials");
        console.log("   → Run: pnpm run db:setup (for instructions)");
      }
      
      console.log("\n📝 Next steps:");
      console.log("   1. Login to Azure Portal: https://portal.azure.com");
      console.log("   2. Find your MySQL server and get the server name");
      console.log("   3. Update your .env file with the correct values");
      console.log("   4. Run this script again to test");
    }
  } else {
    console.log("⚠️  Database credentials not found in .env file");
    console.log("\n📝 Please update your .env file with:");
    console.log("   DB_HOST=<server-name>.mysql.database.azure.com");
    console.log("   DB_USER=<username>@<server-name>");
    console.log("   DB_PASSWORD=<password>");
    console.log("   DB_DATABASE=<database-name>");
    console.log("\nThen run this script again to test the connection.");
  }
}

findDatabase().catch(console.error);

