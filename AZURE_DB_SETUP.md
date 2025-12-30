# Azure Database Setup Guide

## Azure Portal Login
- **URL**: https://portal.azure.com
- **User ID**: admin@sivasivani.onmicrosoft.com
- **Password**: Ssim@2024

## Steps to Find Database Host

### Step 1: Login to Azure Portal
1. Go to https://portal.azure.com
2. Login with: `admin@sivasivani.onmicrosoft.com` / `Ssim@2024`

### Step 2: Find MySQL Database Server
1. In Azure Portal, search for: **"Azure Database for MySQL servers"** or **"MySQL"**
2. Look for MySQL servers in your subscription
3. Click on the MySQL server (likely named something like `ssimdb`, `ssim-db`, or similar)

### Step 3: Get Database Information
1. In the MySQL server overview, you'll see:
   - **Server name**: `<name>.mysql.database.azure.com` ← This is your DB_HOST
   - **Server admin login name**: Usually something like `admin@<server-name>` ← This is your DB_USER format

2. Go to **"Databases"** section to find the database name ← This is your DB_DATABASE

3. Go to **"Connection security"** to:
   - Check firewall rules (ensure your IP is allowed)
   - See connection strings

### Step 4: Update .env File

Once you have the information, update your `.env` file:

```env
# Database Configuration
DB_HOST=<server-name>.mysql.database.azure.com
DB_USER=<username>@<server-name>
DB_PASSWORD=<your-mysql-password>
DB_DATABASE=<database-name>

# Azure Blob Storage
AZURE_STORAGE_CONNECTION_STRING=<your-connection-string>
AZURE_CONTAINER_NAME=blog-images

# Application URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Node Environment
NODE_ENV=development
```

### Step 5: Test Connection

After updating `.env`, test the connection:

```bash
pnpm run db:find
# or
node scripts/find-azure-db.js
```

## Important Notes

1. **Username Format**: Azure MySQL uses `username@server-name` format
   - Example: If server is `ssimdb.mysql.database.azure.com` and username is `admin`
   - Then DB_USER should be: `admin@ssimdb`

2. **Firewall Rules**: Make sure your current IP address is whitelisted in Azure MySQL firewall rules

3. **SSL**: Azure MySQL requires SSL connections (already configured in the code)

4. **Password**: The MySQL password might be different from the Azure Portal password

## Common Server Name Patterns

Based on your organization name "sivasivani", the server might be:
- `sivasivani.mysql.database.azure.com`
- `ssim.mysql.database.azure.com`
- `ssimdb.mysql.database.azure.com`
- `ssim-db.mysql.database.azure.com`

## Troubleshooting

If connection fails:
1. Check firewall rules in Azure Portal
2. Verify username format (must include @server-name)
3. Ensure password is correct (might be different from Azure login)
4. Check if server name is correct

