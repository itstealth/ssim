# 🔍 Production Debugging System

This guide explains how to use the comprehensive debugging system I've implemented for your Next.js application. This system allows you to debug production issues without needing Azure portal access.

## 🎯 What's Included

### 1. **File-Based Logging System**
- Structured logs written to filesystem in `/logs/` directory
- Automatic log rotation (keeps last 10 files, 10MB max per file)
- Separate error dump files for detailed error analysis

### 2. **Error Dump System**
- Detailed error reports saved as JSON files
- Includes request context, environment info, stack traces
- Automatic cleanup (keeps last 50 dumps)

### 3. **Debug API Endpoint**
- RESTful API to inspect logs and error dumps remotely
- Basic authentication for security
- Health checks and system monitoring

### 4. **Local Inspection Tools**
- Command-line tools to inspect logs locally
- NPM scripts for easy access

## 🚀 Quick Start

### 1. Environment Setup

Add these environment variables to your production environment:

```bash
# Debug API authentication (change this!)
DEBUG_PASSWORD=your_secure_password_here

# Optional: Set log level (DEBUG, INFO, WARN, ERROR)
LOG_LEVEL=DEBUG

# Required for Azure Blob Storage
AZURE_STORAGE_CONNECTION_STRING=your_connection_string
AZURE_CONTAINER_NAME=blog-images
```

### 2. Deploy the Code

Deploy your application with these changes. The logging system will automatically:
- Create log directories on first run
- Start logging all API requests and errors
- Create detailed error dumps when errors occur

### 3. Access Debug Information

#### Option A: Debug API Endpoint (Remote Access)

```bash
# Get overview of all logs
curl -H "Authorization: Bearer your_secure_password_here" \
  https://yourdomain.com/api/debug

# Get recent error dumps
curl -H "Authorization: Bearer your_secure_password_here" \
  https://yourdomain.com/api/debug?action=error-dumps

# Get specific error dump
curl -H "Authorization: Bearer your_secure_password_here" \
  https://yourdomain.com/api/debug?action=error-dump&id=error_1234567890_abcdef

# Get system health
curl -H "Authorization: Bearer your_secure_password_here" \
  https://yourdomain.com/api/debug?action=health

# View specific log file
curl -H "Authorization: Bearer your_secure_password_here" \
  "https://yourdomain.com/api/debug?action=logs&file=app-2025-01-08.log&lines=50&level=ERROR"
```

#### Option B: Local File Inspection (Direct Access)

Connect to your production server and run:

```bash
# Overview of all logs
npm run logs:overview

# View recent errors
npm run logs:errors

# Inspect specific error dump
node scripts/inspect-logs.js error error_1640995200000_abc123

# View log file content
node scripts/inspect-logs.js logs app-2025-01-08.log --lines 100 --level ERROR

# Clear all logs
npm run logs:clear
```

## 📊 What You'll Find

### Log Files Structure

Logs are saved in JSON format with this structure:

```json
{
  "timestamp": "2025-01-08T10:30:45.123Z",
  "level": "ERROR",
  "message": "Database connection failed",
  "requestId": "req_abc123def456",
  "userId": "unknown",
  "error": {
    "name": "ConnectionError",
    "message": "Connection timeout after 30000ms",
    "stack": "...",
    "code": "ETIMEDOUT"
  },
  "duration": "30000ms"
}
```

### Error Dumps Structure

Error dumps contain comprehensive debugging information:

```json
{
  "id": "error_1640995200000_abc123def456",
  "timestamp": "2025-01-08T10:30:45.123Z",
  "error": {
    "name": "Error",
    "message": "Something went wrong",
    "stack": "..."
  },
  "context": {
    "url": "/api/blogs",
    "method": "POST",
    "userAgent": "Mozilla/5.0...",
    "ip": "192.168.1.100",
    "body": {
      "title": "My Blog Post",
      "content": "...",
      "imageUrl": "[FILE OBJECT]"
    }
  },
  "environment": {
    "NODE_ENV": "production",
    "nodeVersion": "v20.19.3",
    "memoryUsage": { "heapUsed": 67108864 },
    "uptime": 3600
  }
}
```

## 🔧 Debug API Endpoints

### GET `/api/debug`

**Query Parameters:**
- `action` - Action to perform (overview, logs, error-dumps, error-dump, system-info, clear-logs, health)
- `file` - Log file name (for logs action)
- `lines` - Number of lines to return (default: 50)
- `level` - Log level filter (ERROR, WARN, INFO, DEBUG)
- `id` - Error dump ID (for error-dump action)
- `limit` - Number of error dumps to return (default: 20)
- `type` - Type of logs to clear (logs, error-dumps, all)

**Authentication:** Bearer token with `DEBUG_PASSWORD`

### Available Actions:

1. **`overview`** - Get summary of all logs and error dumps
2. **`logs`** - View content of specific log file
3. **`error-dumps`** - List recent error dumps
4. **`error-dump`** - Get detailed error dump by ID
5. **`system-info`** - Get system and environment information
6. **`clear-logs`** - Clear logs and/or error dumps
7. **`health`** - Get system health status

## 🛠️ Troubleshooting Common Issues

### "Internal Server Error" When Adding Blogs

1. **Check recent error dumps:**
   ```bash
   curl -H "Authorization: Bearer your_password" \
     "https://yourdomain.com/api/debug?action=error-dumps&limit=5"
   ```

2. **Get detailed error information:**
   ```bash
   curl -H "Authorization: Bearer your_password" \
     "https://yourdomain.com/api/debug?action=error-dump&id=ERROR_ID_HERE"
   ```

3. **Check system health:**
   ```bash
   curl -H "Authorization: Bearer your_password" \
     "https://yourdomain.com/api/debug?action=health"
   ```

4. **Review recent application logs:**
   ```bash
   curl -H "Authorization: Bearer your_password" \
     "https://yourdomain.com/api/debug?action=logs&file=app-$(date +%Y-%m-%d).log&level=ERROR&lines=20"
   ```

### Common Error Patterns

#### Database Connection Issues
```json
{
  "error": {
    "name": "ConnectionError",
    "message": "Connection timeout",
    "code": "ETIMEDOUT"
  }
}
```
**Solution:** Check database credentials and network connectivity.

#### Azure Blob Storage Issues
```json
{
  "error": {
    "name": "Error",
    "message": "Azure Storage authentication failed"
  }
}
```
**Solution:** Verify Azure connection string and permissions.

#### Missing Environment Variables
```json
{
  "error": {
    "name": "Error",
    "message": "Missing required environment variables"
  }
}
```
**Solution:** Check that all required environment variables are set.

## 🔒 Security Considerations

1. **Change the debug password** from the default (`debug123`)
2. **Restrict access** to the debug endpoint (IP whitelisting, VPN, etc.)
3. **Monitor access** to the debug endpoint
4. **Regularly rotate logs** to prevent disk space issues
5. **Remove debug endpoint** from production when not needed

## 📈 Monitoring and Alerts

Consider setting up monitoring for:

1. **Error dump creation** - Alert when new error dumps are created
2. **Disk space usage** - Monitor `/logs/` directory size
3. **System health** - Monitor the health endpoint
4. **Response times** - Monitor API performance

## 🧹 Maintenance

### Regular Cleanup

```bash
# Clear old logs (run weekly)
curl -H "Authorization: Bearer your_password" \
  "https://yourdomain.com/api/debug?action=clear-logs&type=all"

# Or locally:
npm run logs:clear
```

### Log Rotation

The system automatically:
- Rotates log files when they exceed 10MB
- Keeps only the last 10 log files
- Keeps only the last 50 error dumps

## 📞 Support

When reporting issues:

1. Include the **error ID** from error dumps
2. Include **relevant log excerpts** (not full logs)
3. Include **system health information**
4. Include **environment details** (Node version, memory usage, etc.)

This debugging system should help you identify and resolve production issues quickly without needing Azure portal access.
