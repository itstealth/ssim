#!/usr/bin/env node

/**
 * Script to test common Azure MySQL database host patterns
 * Based on your blob storage name: ssimblogstorage
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

// Common Azure MySQL host patterns based on blob storage name
const potentialHosts = [
  "ssimdb.mysql.database.azure.com",
  "ssim-db.mysql.database.azure.com",
  "ssimmysql.mysql.database.azure.com",
  "ssim.mysql.database.azure.com",
  "ssim-production.mysql.database.azure.com",
  "ssimprod.mysql.database.azure.com",
];

// Get credentials from environment or prompt
const dbUser = process.env.DB_USER || "admin";
const dbPassword = process.env.DB_PASSWORD || "";
const dbDatabase = process.env.DB_DATABASE || "ssim_db";

async function testHost(host, username, password, database) {
  try {
    console.log(`   Testing: ${host}...`);
    
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
    
    await connection.end();
    
    return {
      success: true,
      host: host,
      database: rows[0].current_db,
      user: rows[0].current_user,
      version: rows[0].version,
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

async function testAzureHosts() {
  console.log("🔍 Testing Azure MySQL Database Hosts\n");
  console.log("Based on your blob storage: ssimblogstorage\n");
  
  if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
    console.log("⚠️  DB_USER and/or DB_PASSWORD not set in .env file");
    console.log("   Please set these in your .env file before testing:\n");
    console.log("   DB_USER=your_username@server_name");
    console.log("   DB_PASSWORD=your_password");
    console.log("   DB_DATABASE=your_database_name\n");
    console.log("   Then run this script again.\n");
    return;
  }

  console.log(`Using credentials:`);
  console.log(`   User: ${process.env.DB_USER}`);
  console.log(`   Password: ${process.env.DB_PASSWORD ? "[SET]" : "[NOT SET]"}`);
  console.log(`   Database: ${process.env.DB_DATABASE || dbDatabase}`);
  console.log("");

  let found = false;

  for (const host of potentialHosts) {
    const result = await testHost(host, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_DATABASE || dbDatabase);
    
    if (result.success) {
      console.log(`\n✅ SUCCESS! Found working database host:\n`);
      console.log(`   Host: ${result.host}`);
      console.log(`   Database: ${result.database}`);
      console.log(`   User: ${result.user}`);
      console.log(`   MySQL Version: ${result.version}`);
      console.log("\n📝 Update your .env file with:");
      console.log(`   DB_HOST=${result.host}`);
      found = true;
      break;
    } else {
      if (result.code === "ENOTFOUND" || result.code === "ETIMEDOUT") {
        console.log(`   ❌ Host not found or unreachable`);
      } else if (result.code === "ER_ACCESS_DENIED_ERROR") {
        console.log(`   ⚠️  Host exists but access denied (wrong credentials or IP not whitelisted)`);
      } else {
        console.log(`   ❌ ${result.error}`);
      }
    }
  }

  if (!found) {
    console.log("\n❌ Could not find working database host from common patterns.\n");
    console.log("💡 Next steps:");
    console.log("   1. Check Azure Portal for the exact database server name");
    console.log("   2. Verify your credentials are correct");
    console.log("   3. Ensure your IP is whitelisted in Azure MySQL firewall rules");
    console.log("   4. Check if you need to use a different username format");
    console.log("      (Azure MySQL format: username@server-name)");
  }
}

testAzureHosts().catch(console.error);

