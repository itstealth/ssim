#!/bin/sh

# Azure App Service startup script
# This script ensures proper directory permissions and structure

echo "Starting Azure App Service initialization..."

# Create necessary directories with proper permissions
echo "Creating cache directories..."
mkdir -p /home/site/wwwroot/.next/cache/images
chmod -R 755 /home/site/wwwroot/.next

# Install dependencies if node_modules doesn't exist or is incomplete
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.package-lock.json" ]; then
    echo "Installing dependencies..."
    npm ci --only=production
fi

# Ensure .next directory exists and has proper permissions
if [ ! -d ".next" ]; then
    echo "Building application..."
    npm run build
else
    echo ".next directory exists, skipping build"
fi

# Set proper ownership
echo "Setting directory permissions..."
chown -R $(whoami):$(whoami) /home/site/wwwroot

# Validate environment variables
echo "Validating environment configuration..."
if [ -z "$DB_HOST" ] || [ -z "$DB_USER" ] || [ -z "$DB_PASSWORD" ] || [ -z "$DB_DATABASE" ]; then
    echo "ERROR: Missing required database environment variables"
    echo "Required: DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE"
    exit 1
fi

if [ -z "$AZURE_STORAGE_CONNECTION_STRING" ]; then
    echo "ERROR: Missing Azure Storage connection string"
    echo "Required: AZURE_STORAGE_CONNECTION_STRING"
    exit 1
fi

echo "Environment validation completed successfully"

# Start the application
echo "Starting Next.js application..."
exec npm start
