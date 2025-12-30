#!/usr/bin/env node

/**
 * Interactive script to help set up Azure MySQL database credentials
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = join(__dirname, "..", ".env");

function readEnvFile() {
  try {
    if (!existsSync(envPath)) {
      return {};
    }
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
    
    return envVars;
  } catch (error) {
    return {};
  }
}

function writeEnvFile(envVars) {
  const lines = [
    "# Database Configuration",
    "# Azure MySQL Database Settings",
    "",
    `DB_HOST=${envVars.DB_HOST || "localhost"}`,
    `DB_USER=${envVars.DB_USER || "your_database_user"}`,
    `DB_PASSWORD=${envVars.DB_PASSWORD || "your_database_password"}`,
    `DB_DATABASE=${envVars.DB_DATABASE || "your_database_name"}`,
    "",
    "# Azure Blob Storage (for image uploads)",
    `AZURE_STORAGE_CONNECTION_STRING=${envVars.AZURE_STORAGE_CONNECTION_STRING || "your_azure_connection_string"}`,
    `AZURE_CONTAINER_NAME=${envVars.AZURE_CONTAINER_NAME || "blog-images"}`,
    "",
    "# Application URLs",
    `NEXT_PUBLIC_BASE_URL=${envVars.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}`,
    `NEXT_PUBLIC_SITE_URL=${envVars.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}`,
    "",
    "# Node Environment",
    `NODE_ENV=${envVars.NODE_ENV || "development"}`,
    "",
  ];
  
  writeFileSync(envPath, lines.join("\n"), "utf-8");
}

function setupDatabase() {
  console.log("🔧 Azure MySQL Database Setup\n");
  console.log("This script will help you update your .env file with Azure MySQL credentials.\n");
  
  const current = readEnvFile();
  
  console.log("📋 Current .env values:");
  console.log(`   DB_HOST: ${current.DB_HOST || "[NOT SET]"}`);
  console.log(`   DB_USER: ${current.DB_USER || "[NOT SET]"}`);
  console.log(`   DB_PASSWORD: ${current.DB_PASSWORD ? "[SET]" : "[NOT SET]"}`);
  console.log(`   DB_DATABASE: ${current.DB_DATABASE || "[NOT SET]"}`);
  console.log("");
  
  console.log("📖 How to find these values in Azure Portal:\n");
  console.log("1. Login to: https://portal.azure.com");
  console.log("   User: admin@sivasivani.onmicrosoft.com");
  console.log("   Password: Ssim@2024\n");
  console.log("2. Search for: 'Azure Database for MySQL servers'\n");
  console.log("3. Click on your MySQL server\n");
  console.log("4. Find these values:");
  console.log("   - Server name → DB_HOST (format: <name>.mysql.database.azure.com)");
  console.log("   - Server admin login → DB_USER (format: <username>@<server-name>)");
  console.log("   - Database name → DB_DATABASE (check 'Databases' section)");
  console.log("   - Password → DB_PASSWORD (the MySQL password, not Azure login)\n");
  
  console.log("💡 Example values:");
  console.log("   DB_HOST=ssimdb.mysql.database.azure.com");
  console.log("   DB_USER=admin@ssimdb");
  console.log("   DB_PASSWORD=YourMySQLPassword123");
  console.log("   DB_DATABASE=ssim_db\n");
  
  // Check if values are still placeholders
  const hasPlaceholders = 
    !current.DB_HOST || 
    current.DB_HOST === "localhost" ||
    current.DB_USER === "your_database_user" ||
    current.DB_DATABASE === "your_database_name";
  
  if (hasPlaceholders) {
    console.log("⚠️  Your .env file still contains placeholder values.\n");
    console.log("Please update your .env file manually with the actual Azure MySQL credentials.");
    console.log("You can edit the file at: " + envPath + "\n");
    
    console.log("After updating, you can test the connection with:");
    console.log("   pnpm run db:azure\n");
  } else {
    console.log("✅ Your .env file appears to have real values (not placeholders).");
    console.log("You can test the connection with:");
    console.log("   pnpm run db:azure\n");
  }
  
  // Show the current .env file location
  console.log("📁 .env file location:");
  console.log("   " + envPath + "\n");
}

setupDatabase();

