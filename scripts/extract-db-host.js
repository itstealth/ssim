#!/usr/bin/env node

/**
 * Script to extract database host from production environment
 * This script checks various sources to find the database host
 */

import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("🔍 Extracting database host information...\n");

// 1. Check .env file
console.log("1️⃣ Checking .env file...");
try {
  const envPath = join(__dirname, "..", ".env");
  if (existsSync(envPath)) {
    const envFile = readFileSync(envPath, "utf-8");
    const dbHostMatch = envFile.match(/DB_HOST=(.+)/);
    if (dbHostMatch) {
      console.log(`   ✅ Found in .env: ${dbHostMatch[1]}`);
    } else {
      console.log("   ❌ DB_HOST not found in .env");
    }
  } else {
    console.log("   ❌ .env file not found");
  }
} catch (error) {
  console.log(`   ❌ Error reading .env: ${error.message}`);
}

console.log("");

// 2. Check for Azure MySQL patterns
console.log("2️⃣ Azure MySQL Database Host Patterns:");
console.log("   Based on your Azure Blob Storage (ssimblogstorage), your database might be:");
console.log("   - ssimdb.mysql.database.azure.com");
console.log("   - ssim-db.mysql.database.azure.com");
console.log("   - ssimmysql.mysql.database.azure.com");
console.log("   - Or a custom Azure MySQL server name");
console.log("");

// 3. Instructions for finding Azure MySQL host
console.log("3️⃣ How to find your Azure MySQL Database Host:");
console.log("");
console.log("   Option A: Azure Portal");
console.log("   1. Go to https://portal.azure.com");
console.log("   2. Navigate to: Azure Database for MySQL servers");
console.log("   3. Select your MySQL server");
console.log("   4. Check 'Overview' → 'Server name'");
console.log("   5. Format: <server-name>.mysql.database.azure.com");
console.log("");
console.log("   Option B: Check Azure App Service Configuration");
console.log("   1. Go to Azure Portal → Your App Service");
console.log("   2. Navigate to: Configuration → Application settings");
console.log("   3. Look for DB_HOST environment variable");
console.log("");
console.log("   Option C: Check Production Environment");
console.log("   1. Visit: https://www.ssim.ac.in/api/debug/db");
console.log("   2. This will show current database configuration");
console.log("   3. (Note: This endpoint may require authentication)");
console.log("");

// 4. Common Azure MySQL host format
console.log("4️⃣ Typical Azure MySQL Host Format:");
console.log("   <server-name>.mysql.database.azure.com");
console.log("   Example: myserver.mysql.database.azure.com");
console.log("");
console.log("   Azure MySQL username format:");
console.log("   <username>@<server-name>");
console.log("   Example: admin@myserver");
console.log("");

// 5. Update .env file suggestion
console.log("5️⃣ To update your .env file:");
console.log("   DB_HOST=<your-azure-mysql-server>.mysql.database.azure.com");
console.log("   DB_USER=<username>@<server-name>");
console.log("   DB_PASSWORD=<your-password>");
console.log("   DB_DATABASE=<database-name>");
console.log("");
console.log("   Example:");
console.log("   DB_HOST=ssimdb.mysql.database.azure.com");
console.log("   DB_USER=admin@ssimdb");
console.log("   DB_PASSWORD=your_secure_password");
console.log("   DB_DATABASE=ssim_production");
console.log("");

