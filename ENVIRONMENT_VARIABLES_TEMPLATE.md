# 🔐 Environment Variables Template

## Azure App Service Configuration

Copy these values into **Azure Portal** → **Your App Service** → **Configuration** → **Application settings**

---

## Required Variables (CRITICAL for SEO)

| Variable Name | Value | Example | Notes |
|---------------|-------|---------|-------|
| `NEXT_PUBLIC_BASE_URL` | Your production domain | `https://ssim.ac.in` | ⚠️ REQUIRED - No trailing slash |
| `NEXT_PUBLIC_SITE_URL` | Same as BASE_URL | `https://ssim.ac.in` | ⚠️ REQUIRED - Backup fallback |
| `NODE_ENV` | `production` | `production` | ⚠️ REQUIRED - Must be exactly "production" |

---

## Optional Variables (Recommended)

| Variable Name | Value | Example | Notes |
|---------------|-------|---------|-------|
| `NEXT_PUBLIC_SITE_NAME` | Your site name | `Siva Sivani Institute of Management` | Used in meta tags |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Twitter handle | `@SSIM` | Used in Twitter cards |
| `DATABASE_URL` | Database connection | `postgresql://user:pass@host/db` | Already set (don't change) |
| `AZURE_STORAGE_CONNECTION_STRING` | Azure Storage | `DefaultEndpointsProtocol=https...` | Already set (don't change) |
| `AZURE_CONTAINER_NAME` | Container name | `blog-media` | Already set (don't change) |

---

## How to Add in Azure

### **Method 1: Azure Portal (Recommended)**

1. Log into Azure Portal
2. Navigate to your App Service
3. Click **Configuration** in the left menu
4. Click **+ New application setting**
5. For each variable:
   - Enter the **Name** (e.g., `NEXT_PUBLIC_BASE_URL`)
   - Enter the **Value** (e.g., `https://ssim.ac.in`)
   - Click **OK**
6. After adding all variables, click **Save** at the top
7. Click **Continue** to confirm restart
8. **Restart** the App Service (if it doesn't restart automatically)

### **Method 2: Azure CLI**

```bash
# Set variables using Azure CLI
az webapp config appsettings set \
  --name YOUR_APP_NAME \
  --resource-group YOUR_RESOURCE_GROUP \
  --settings \
    NEXT_PUBLIC_BASE_URL="https://yourdomain.com" \
    NEXT_PUBLIC_SITE_URL="https://yourdomain.com" \
    NODE_ENV="production" \
    NEXT_PUBLIC_SITE_NAME="Your Site Name" \
    NEXT_PUBLIC_TWITTER_HANDLE="@YourHandle"

# Restart the app
az webapp restart \
  --name YOUR_APP_NAME \
  --resource-group YOUR_RESOURCE_GROUP
```

---

## Local Development (.env.local)

Create a `.env.local` file in your project root for local development:

```bash
# Local Development Environment Variables
# DO NOT commit this file to Git!

# Base URLs (use localhost for development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Environment
NODE_ENV=development

# Site Information
NEXT_PUBLIC_SITE_NAME="Siva Sivani Institute of Management"
NEXT_PUBLIC_TWITTER_HANDLE=@SSIM

# Database (use your local database)
DATABASE_URL=postgresql://user:password@localhost:5432/ssim_dev

# Azure Blob Storage (use development storage or same as production)
AZURE_STORAGE_CONNECTION_STRING=your_connection_string
AZURE_CONTAINER_NAME=blog-media
```

**Important:**
- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`
- Keep development and production variables separate

---

## Verification

After setting variables in Azure, verify they're working:

### **Step 1: Check via Debug Endpoint**

Visit: `https://yourdomain.com/api/debug/seo`

**Expected Response:**
```json
{
  "status": "HEALTHY ✅",
  "urls": {
    "NEXT_PUBLIC_BASE_URL": "https://yourdomain.com",
    "NEXT_PUBLIC_SITE_URL": "https://yourdomain.com"
  },
  "recommendations": [
    "All required environment variables are set! 🎉"
  ]
}
```

### **Step 2: Check Azure Logs**

1. Azure Portal → Your App Service → **Log stream**
2. Visit a blog post
3. Look for:
   ```
   [SEO Debug] Environment: {
     NODE_ENV: 'production',
     NEXT_PUBLIC_BASE_URL: 'https://yourdomain.com'
   }
   ```

### **Step 3: Check Page Source**

1. Visit any blog post
2. View Page Source (Ctrl+U)
3. Verify `<title>` and meta tags have dynamic content

---

## Common Mistakes to Avoid

❌ **Wrong Protocol:**
```bash
NEXT_PUBLIC_BASE_URL=http://yourdomain.com  # ❌ Should be https
```

✅ **Correct:**
```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com  # ✅
```

---

❌ **Trailing Slash:**
```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com/  # ❌ Has trailing slash
```

✅ **Correct:**
```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com  # ✅ No trailing slash
```

---

❌ **Not Restarting App:**
```
Set variables → Save → ❌ Forget to restart
```

✅ **Correct:**
```
Set variables → Save → ✅ Restart app service
```

---

❌ **Testing in Regular Browser:**
```
Change variables → Test in same browser tab → ❌ Shows cached version
```

✅ **Correct:**
```
Change variables → Open incognito/private → ✅ Fresh load
```

---

## Troubleshooting

### Variables Not Taking Effect

**Problem:** Changed variables but still see old values

**Solutions:**
1. **Restart the app:**
   - Azure Portal → Your App Service → **Restart**
2. **Clear browser cache:**
   - Open in incognito/private mode
   - Or hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Verify variables were saved:**
   - Azure Portal → Configuration → Check they're listed
4. **Check for typos:**
   - Variable names are case-sensitive
   - `NEXT_PUBLIC_BASE_URL` ≠ `NEXT_PUBLIC_BASE_url`

---

### Variables Showing "NOT SET"

**Problem:** Debug endpoint shows variables as "NOT SET"

**Solutions:**
1. **Double-check spelling:**
   - Exact: `NEXT_PUBLIC_BASE_URL`
   - Not: `NEXT_PUBLIC_BASE_url` or `NEXT_PUBLIC_BASEURL`
2. **Check deployment slot:**
   - If using slots, set variables for the correct slot
3. **Verify not overridden:**
   - Check slot-specific settings aren't overriding
4. **Wait a moment:**
   - Sometimes takes 1-2 minutes to propagate

---

### Variables Work Locally, Not in Azure

**Problem:** Works on `localhost:3000` but not on Azure

**Cause:** Different `.env.local` (local) vs Azure Configuration (production)

**Solution:**
- Set variables in **both** places
- Local: `.env.local` file
- Azure: Configuration → Application settings

---

## Security Best Practices

### ✅ Safe to Expose (NEXT_PUBLIC_*)

These variables are embedded in client-side code and visible to users:

- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_TWITTER_HANDLE`

### ⚠️ Keep Secret (No NEXT_PUBLIC_ prefix)

These should NEVER have `NEXT_PUBLIC_` prefix:

- `DATABASE_URL` (database credentials)
- `AZURE_STORAGE_CONNECTION_STRING` (storage keys)
- `API_SECRET_KEY` (API keys)
- `JWT_SECRET` (authentication secrets)

**Rule:** If it contains passwords, keys, or secrets → **NO** `NEXT_PUBLIC_` prefix

---

## Final Checklist

Before deploying:

- [ ] All variables set in Azure App Service Configuration
- [ ] Variable values use **https://** (not http://)
- [ ] No trailing slashes in URLs
- [ ] App Service restarted after setting variables
- [ ] Tested in incognito/private browser
- [ ] Debug endpoint confirms "HEALTHY ✅"
- [ ] Page source shows dynamic meta tags
- [ ] Social preview tools show correct metadata
- [ ] Azure logs show `[SEO Debug]` messages
- [ ] Delete `/api/debug/seo` before going live

---

## Quick Copy-Paste Template

```bash
# Copy this and fill in your actual domain
NEXT_PUBLIC_BASE_URL=https://YOUR_DOMAIN_HERE.com
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN_HERE.com
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=Your Site Name Here
NEXT_PUBLIC_TWITTER_HANDLE=@YourHandle
```

**Replace:**
- `YOUR_DOMAIN_HERE.com` → Your actual domain (e.g., `ssim.ac.in`)
- `Your Site Name Here` → Your actual site name
- `@YourHandle` → Your actual Twitter handle

---

**Save this file as a reference for future deployments!** 📋

