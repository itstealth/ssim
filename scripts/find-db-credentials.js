#!/usr/bin/env node

/**
 * Script to help find and test database credentials
 * This script will help you identify the correct database configuration
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
    // .env file not found or couldn't be read
  }
}

loadEnvFile();

// Common database configurations to try
const commonConfigs = [
  {
    name: "Local MySQL (default port)",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ssim_db"
  },
  {
    name: "Local MySQL (root with password)",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "ssim_db"
  },
  {
    name: "Environment variables",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "ssim_db"
  }
];

async function testConnection(config) {
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      connectTimeout: 3000,
    });

    // Try to use the database
    if (config.database) {
      await connection.query(`USE ${config.database}`);
    }

    // Test query
    const [rows] = await connection.query("SELECT DATABASE() as current_db, USER() as current_user");
    
    await connection.end();
    
    return {
      success: true,
      currentDatabase: rows[0].current_db,
      currentUser: rows[0].current_user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
}

async function findCredentials() {
  console.log("🔍 Searching for database credentials...\n");
  
  // Check if SSL certificate exists (indicates remote database)
  const certPath = join(__dirname, "..", "public", "DigiCertGlobalRootG2.crt.pem");
  const hasSSLCert = existsSync(certPath);
  
  if (hasSSLCert) {
    console.log("✅ SSL certificate found - This suggests a remote/cloud database (e.g., Azure MySQL)\n");
  }
  
  // Check current environment variables
  console.log("📋 Current environment variables:");
  console.log(`   DB_HOST: ${process.env.DB_HOST || "[NOT SET]"}`);
  console.log(`   DB_USER: ${process.env.DB_USER || "[NOT SET]"}`);
  console.log(`   DB_PASSWORD: ${process.env.DB_PASSWORD ? "[SET]" : "[NOT SET]"}`);
  console.log(`   DB_DATABASE: ${process.env.DB_DATABASE || "[NOT SET]"}`);
  console.log("");
  
  // If environment variables are set, test them first
  if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_DATABASE) {
    console.log("🧪 Testing connection with current environment variables...");
    const envConfig = {
      name: "Environment Variables",
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE,
    };
    
    const result = await testConnection(envConfig);
    if (result.success) {
      console.log("✅ Connection successful with environment variables!");
      console.log(`   Database: ${result.currentDatabase}`);
      console.log(`   User: ${result.currentUser}`);
      console.log("\n💡 Your .env file credentials are working correctly!");
      return;
    } else {
      console.log(`❌ Connection failed: ${result.error}`);
      console.log("");
    }
  }
  
  console.log("🧪 Testing common database configurations...\n");
  
  for (const config of commonConfigs) {
    console.log(`Testing: ${config.name}...`);
    const result = await testConnection(config);
    
    if (result.success) {
      console.log(`✅ SUCCESS! Found working configuration:`);
      console.log(`   Host: ${config.host}`);
      console.log(`   Port: ${config.port}`);
      console.log(`   User: ${config.user}`);
      console.log(`   Password: ${config.password ? "[SET]" : "[EMPTY]"}`);
      console.log(`   Database: ${result.currentDatabase || config.database}`);
      console.log(`   Current User: ${result.currentUser}`);
      console.log("\n📝 Update your .env file with these values:");
      console.log(`   DB_HOST=${config.host}`);
      console.log(`   DB_USER=${config.user}`);
      console.log(`   DB_PASSWORD=${config.password || ""}`);
      console.log(`   DB_DATABASE=${result.currentDatabase || config.database}`);
      return;
    } else {
      console.log(`   ❌ Failed: ${result.error}`);
    }
    console.log("");
  }
  
  console.log("❌ Could not find working database configuration.");
  console.log("\n💡 Next steps:");
  console.log("   1. Make sure your MySQL/MariaDB server is running");
  console.log("   2. Check your database credentials");
  console.log("   3. If using a remote database, ensure:");
  console.log("      - The host address is correct");
  console.log("      - Your IP is whitelisted");
  console.log("      - SSL is properly configured");
  console.log("   4. Manually update your .env file with the correct credentials");
}

findCredentials().catch(console.error);

