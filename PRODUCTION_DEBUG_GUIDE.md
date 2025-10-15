# 🚨 PRODUCTION DEBUGGING GUIDE

## ✅ What Has Been Fixed

I've **completely removed** all complex debugging dependencies that were causing import errors. Everything now uses simple `console.log` statements that will show up directly in Azure logs.

### Files Updated:
1. ✅ **`src/lib/db.js`** - Removed logger/debugger, using pure console.log
2. ✅ **`src/lib/azure-blob-storage.js`** - Removed logger/debugger, using pure console.log  
3. ✅ **`src/app/api/blogs/route.js`** - Already using console.log with step-by-step logging
4. ✅ **`src/app/api/test-error/route.js`** - NEW: Test endpoint to verify error handling

---

## 🚀 DEPLOYMENT STEPS

### 1. **Commit and Deploy**
```bash
git add .
git commit -m "Fix: Simplified debugging with console.log only"
git push
```

### 2. **Wait for Azure Deployment**
Wait for Azure to finish deploying (usually 2-5 minutes)

### 3. **Test Error Handling First**
Before trying to add a blog, test if error details are showing:

```bash
# Test generic error
curl https://ssim.ac.in/api/test-error

# Test database error
curl https://ssim.ac.in/api/test-error?type=database

# Test Azure error
curl https://ssim.ac.in/api/test-error?type=azure
```

**Expected Response:**
```json
{
  "message": "Test Error",
  "error": {
    "name": "Error",
    "message": "This is a test error with full stack trace",
    "code": undefined,
    "stack": "Error: This is a test error...\n    at GET (/app/src/app/api/test-error/route.js:25:15)"
  }
}
```

✅ **If you see the full error details above, debugging is working!**

---

## 🔍 HOW TO SEE THE REAL ERROR

### Option 1: Check Azure Console Logs (Recommended)

1. Go to **Azure Portal** → **App Services** → **Your App**
2. Click **Log stream** in the left menu
3. Try to add a blog post
4. You'll see output like:

```
[DB] Creating database pool...
[DB] DB_HOST: your-db-host.mysql.database.azure.com
[DB] DB_DATABASE: your-database
[DB] DB_USER: your-user

=== BLOG POST CREATION START ===
Request URL: /api/blogs
=== STEP 1: SLUG GENERATION ===
Generated slug: my-blog-post
=== STEP 2: CONTENT SANITIZATION ===
Content sanitized successfully
=== STEP 3: DATABASE CONNECTION ===
ERROR: Database connection failed: Connection timeout after 30000ms
Error details: {
  name: 'ConnectionError',
  code: 'ETIMEDOUT',
  errno: -110,
  sqlState: 'HY000',
  ...
}
```

### Option 2: Check API Response

When you try to create a blog, the API will return:

```json
{
  "message": "Database connection failed",
  "error": "Connection timeout after 30000ms",
  "details": "ETIMEDOUT"
}
```

---

## 📋 WHAT EACH STEP LOGS

### Database Connection (`db.js`)
```
[DB] Creating database pool...
[DB] DB_HOST: your-host
[DB] DB_DATABASE: your-database
[DB] DB_USER: your-user
[DB] Database pool created successfully
[DB] Initializing database schema...
[DB] Table "blogs" checked/created.
```

### Azure Blob Storage (`azure-blob-storage.js`)
```
[AZURE] Azure Storage Configuration:
[AZURE] Container Name: blog-images
[AZURE] Connection String Length: 324
[AZURE] Initializing Azure clients...
[AZURE] Azure Blob Storage client initialized successfully
[AZURE] Uploading file to Azure: { newFilename: '123.jpg', contentType: 'image/jpeg' }
[AZURE] Azure Blob Storage upload completed: https://...blob.url
```

### Blog API (`/api/blogs`)
```
=== BLOG POST CREATION START ===
=== STEP 1: SLUG GENERATION ===
Generated slug: my-blog-post
=== STEP 2: CONTENT SANITIZATION ===
=== STEP 3: DATABASE CONNECTION ===
Database connection established
=== STEP 4: DATABASE TRANSACTION ===
Transaction started
Executing INSERT query...
Blog post inserted with ID: 123
=== STEP 5: IMAGE PROCESSING ===
Image buffer created, size: 52434
=== STEP 6: AZURE UPLOAD ===
[AZURE] Starting Azure Blob Storage upload...
=== STEP 7: UPDATE BLOG WITH IMAGE URL ===
Blog updated with image URL
Transaction committed successfully
=== BLOG POST CREATION SUCCESS ===
```

---

## 🐛 COMMON ERRORS AND SOLUTIONS

### Error: "Database connection failed"
**Logs will show:**
```
ERROR: Database connection failed: Connection timeout
Error details: { code: 'ETIMEDOUT', errno: -110 }
```

**Solutions:**
- Check `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE` environment variables
- Verify MySQL server is running
- Check firewall rules allow Azure to connect to database

---

### Error: "Azure Storage authentication failed"
**Logs will show:**
```
[AZURE] Failed to initialize Azure Blob Storage client: AuthenticationFailed
```

**Solutions:**
- Check `AZURE_STORAGE_CONNECTION_STRING` environment variable
- Verify connection string is correct
- Check Azure Storage account is active

---

### Error: "Failed to process content"
**Logs will show:**
```
ERROR: HTML sanitization failed: ...
```

**Solutions:**
- Content might be too large
- Content might have invalid HTML
- Check content encoding

---

## 🎯 NEXT STEPS

1. **Deploy** the updated code
2. **Test** the `/api/test-error` endpoint first to verify error handling works
3. **Try to add a blog** and watch the Azure logs
4. **Look for the exact error** in either:
   - Azure Log Stream
   - API Response JSON

**The exact error message, stack trace, and file/line number will be clearly visible!**

---

## 📞 TROUBLESHOOTING

### Still seeing "Internal Server Error" without details?

1. **Check if the deployment completed successfully:**
   ```bash
   curl https://ssim.ac.in/api/test-error
   ```
   Should return full error details.

2. **Check Azure logs are enabled:**
   - Azure Portal → App Service → Diagnostic Settings
   - Ensure "Application Logging" is ON

3. **Restart the App Service:**
   - Azure Portal → App Service → Overview → Restart

4. **Check for build errors:**
   - Azure Portal → Deployment Center → Logs
   - Look for any build/deployment failures

---

## ⚠️ IMPORTANT NOTES

- All console.log statements will appear in **Azure Log Stream**
- Error responses will include **full stack traces** in production (remember to remove this later!)
- No external logging libraries are used - everything is native Node.js console methods
- All complex debugging files (logger.js, production-debug.js, etc.) are **NOT imported** in the core files

---

## 🎉 SUCCESS CRITERIA

You'll know the debugging is working when:

1. ✅ `/api/test-error` returns full error details
2. ✅ Azure Log Stream shows step-by-step logs
3. ✅ API responses include error.message, error.code, and error.stack
4. ✅ You can see EXACTLY which step is failing and why

**This is the simplest, most direct debugging solution possible. It WILL show you the exact error!**

