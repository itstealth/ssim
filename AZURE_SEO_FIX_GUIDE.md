# 🚀 Azure SEO Fix - Complete Deployment Guide

## 🎯 Problem Summary

Your SEO metadata (title, description, OpenGraph, Twitter cards) works in local development but **NOT on Azure production**. This guide fixes all issues and ensures proper SEO on Azure.

---

## 🔧 What Was Fixed

### **1. Metadata Generation Logic** (`src/app/blog/[blogId]/layout.jsx`)

**Before (Broken on Azure):**
```javascript
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const response = await fetch(`${baseUrl}/api/blogs/${blogId}`);
```

**Problems:**
- ❌ Falls back to `localhost:3000` in production (doesn't work)
- ❌ No proper error logging
- ❌ Assumes environment variable is always set
- ❌ No debugging capabilities

**After (Fixed):**
```javascript
// Dynamic URL construction that works in both dev and production
let apiUrl;

if (process.env.NEXT_PUBLIC_BASE_URL) {
  apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${blogId}`;
} else {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || 'localhost:3000';
  apiUrl = `${protocol}://${host}/api/blogs/${blogId}`;
}

console.log('[SEO Debug] Fetching metadata from:', apiUrl);
```

**Improvements:**
- ✅ Works with or without environment variables
- ✅ Automatic protocol detection (http/https)
- ✅ Multiple fallback options
- ✅ Comprehensive logging for debugging
- ✅ Strips HTML from meta descriptions
- ✅ Adds proper canonical URLs
- ✅ Includes robots meta tags

---

## ⚙️ Azure Configuration Steps

### **Step 1: Set Environment Variables in Azure**

1. **Go to Azure Portal**
2. **Navigate to:** Your App Service → **Configuration** → **Application settings**
3. **Add these environment variables:**

| Name | Value | Example |
|------|-------|---------|
| `NEXT_PUBLIC_BASE_URL` | Your production domain | `https://ssim.ac.in` |
| `NEXT_PUBLIC_SITE_URL` | Same as above | `https://ssim.ac.in` |
| `NODE_ENV` | Environment | `production` |
| `NEXT_PUBLIC_SITE_NAME` | Site name | `Siva Sivani Institute of Management` |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Twitter handle | `@SSIM` |

**CRITICAL:** 
- ✅ Use your actual domain (e.g., `https://ssim.ac.in`)
- ✅ Do NOT include trailing slash
- ✅ Use `https://` protocol (not `http://`)
- ✅ Click **Save** after adding variables
- ✅ **Restart the App Service** after saving

### **Step 2: Verify Environment Variables**

Create a test API endpoint to verify variables are set:

**Create: `src/app/api/debug/env/route.js`**

```javascript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'NOT SET',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV || 'NOT SET',
  });
}
```

**Test:** Visit `https://yourdomain.com/api/debug/env`

**Expected Output:**
```json
{
  "NEXT_PUBLIC_BASE_URL": "https://yourdomain.com",
  "NEXT_PUBLIC_SITE_URL": "https://yourdomain.com",
  "NODE_ENV": "production"
}
```

**⚠️ IMPORTANT:** Delete this file after verification (don't expose env vars publicly)!

---

### **Step 3: Update next.config.mjs for Azure**

Add this to your `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Azure
  output: 'standalone',

  // Ensure dynamic routes are not pre-rendered
  experimental: {
    serverActions: true,
  },

  // Configure headers for proper SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.ggpht.com", pathname: "/**" },
      // Add your Azure Blob Storage domain
      { protocol: "https", hostname: "*.blob.core.windows.net", pathname: "/**" },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp", "image/avif"],
  },

  async rewrites() {
    return [
      {
        source: "/pdfs/:path*",
        destination: "https://raw.githack.com/Stealth-Rishabh/ssim-assets/main/:path*",
      },
    ];
  },
};

export default nextConfig;
```

---

### **Step 4: Configure Azure App Service for Next.js**

#### **A. Update package.json start script**

Ensure your `package.json` has:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 8080",
    "lint": "next lint"
  }
}
```

**Note:** Azure uses port `8080` by default (or set via `PORT` env var)

#### **B. Create/Update web.config for Azure**

Create `web.config` in your project root:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js"/>
        </rule>
      </rules>
    </rewrite>
    <httpErrors existingResponse="PassThrough" />
    <iisnode nodeProcessCommandLine="node" />
  </system.webServer>
</configuration>
```

#### **C. Create Azure deployment script**

Create `.deployment` file:

```ini
[config]
command = deploy.sh
```

Create `deploy.sh`:

```bash
#!/bin/bash

# Deployment script for Azure App Service
echo "Starting deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install --production=false

# Build Next.js app
echo "Building Next.js app..."
npm run build

# Copy standalone files if needed
if [ -d ".next/standalone" ]; then
  echo "Copying standalone files..."
  cp -r .next/standalone/* .
  cp -r .next/static .next/standalone/.next/static
  cp -r public .next/standalone/public
fi

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

---

### **Step 5: Clear Azure Cache**

Azure caches aggressively. Clear all caches:

1. **In Azure Portal:**
   - Go to your App Service
   - Navigate to **Development Tools** → **Advanced Tools (Kudu)**
   - Click **Go** → Opens Kudu console

2. **In Kudu Console, run:**
   ```bash
   cd site/wwwroot
   rm -rf .next
   ```

3. **Restart the App:**
   - Azure Portal → Your App Service → **Restart**

4. **Force browser cache clear:**
   - Open your site in incognito/private mode
   - Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`

---

### **Step 6: Enable Logging in Azure**

1. **Azure Portal** → Your App Service → **App Service logs**
2. **Enable:**
   - Application logging (Filesystem) → **Verbose**
   - Detailed error messages → **On**
   - Failed request tracing → **On**
3. **Save** and **Restart** the app

4. **View logs:**
   - Go to **Log stream** to see real-time logs
   - Check for `[SEO Debug]` messages

---

## 🧪 Testing & Verification

### **Test 1: Check Metadata in Production**

1. **Open your blog post on production:**
   ```
   https://yourdomain.com/blog/your-post-slug
   ```

2. **View page source** (`Ctrl+U` or `Cmd+U`)

3. **Search for these tags:**

```html
<!-- Should see dynamic title -->
<title>Your Blog Post Title | SSIM Blog</title>

<!-- Should see description -->
<meta name="description" content="Your blog post description...">

<!-- Should see Open Graph tags -->
<meta property="og:title" content="Your Blog Post Title">
<meta property="og:description" content="Your description...">
<meta property="og:image" content="https://yourdomain.com/image.jpg">
<meta property="og:url" content="https://yourdomain.com/blog/your-post">

<!-- Should see Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Blog Post Title">
<meta name="twitter:description" content="Your description...">
<meta name="twitter:image" content="https://yourdomain.com/image.jpg">

<!-- Should see canonical URL -->
<link rel="canonical" href="https://yourdomain.com/blog/your-post">
```

**✅ If you see these tags with dynamic content → SEO is working!**  
**❌ If you see generic/default content → Continue troubleshooting**

---

### **Test 2: Social Media Preview Testing**

Test how your links appear when shared:

1. **Facebook Sharing Debugger:**
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter your blog post URL
   - Click **Debug**
   - Should show your title, description, and image

2. **Twitter Card Validator:**
   - Visit: https://cards-dev.twitter.com/validator
   - Enter your blog post URL
   - Should show preview card

3. **LinkedIn Post Inspector:**
   - Visit: https://www.linkedin.com/post-inspector/
   - Enter your blog post URL
   - Click **Inspect**

4. **Generic Open Graph Checker:**
   - Visit: https://www.opengraph.xyz/
   - Enter your blog post URL

**⚠️ Note:** Social platforms cache metadata. After fixing, you may need to:
- Use the "Scrape Again" or "Refresh" button in debugging tools
- Wait 24-48 hours for cache to clear
- Add `?v=1` to your URL to force a new scrape

---

### **Test 3: Check Server-Side Rendering**

Verify that metadata is rendered server-side:

1. **Disable JavaScript in browser:**
   - Chrome: DevTools → Settings → Debugger → Disable JavaScript
   - Firefox: about:config → javascript.enabled → false

2. **Visit your blog post**

3. **View source**

**✅ If you still see metadata → SSR is working correctly**  
**❌ If metadata is missing → SSR is not working (major issue)**

---

### **Test 4: Check Logs in Azure**

1. **Azure Portal** → Your App Service → **Log stream**

2. **Visit a blog post**

3. **Look for these log messages:**
   ```
   [SEO Debug] Fetching metadata from: https://yourdomain.com/api/blogs/your-slug
   [SEO Debug] Environment: { NODE_ENV: 'production', NEXT_PUBLIC_BASE_URL: 'https://...' }
   [SEO Debug] Response status: 200
   [SEO Debug] Post fetched successfully: { id: 1, title: '...', slug: '...' }
   ```

**✅ If you see these logs → Metadata generation is running**  
**❌ If you see errors → Check the error messages**

---

## 🐛 Troubleshooting

### **Issue 1: Metadata still shows default/generic content**

**Symptoms:**
- Title: "Blog Post - SSIM" (generic)
- Description: "Read articles and insights..." (default)
- No dynamic content

**Causes:**
1. Environment variable `NEXT_PUBLIC_BASE_URL` not set in Azure
2. API fetch failing silently
3. Cache not cleared

**Solutions:**

**A. Verify environment variables:**
```bash
# In Azure Kudu console
cd site/wwwroot
node -e "console.log(process.env.NEXT_PUBLIC_BASE_URL)"
```

**B. Check if API is accessible:**
```bash
# Test API endpoint
curl https://yourdomain.com/api/blogs/your-slug
```

**C. Force cache clear:**
- Delete `.next` folder in Azure
- Restart app
- Clear browser cache

---

### **Issue 2: API fetch returns 404 or 500**

**Symptoms:**
- Log shows: `[SEO Error] Failed to fetch blog post: 404`
- Metadata falls back to default

**Causes:**
1. API route not deployed correctly
2. Database connection failing
3. Blog post doesn't exist

**Solutions:**

**A. Check API route exists:**
```bash
# In Azure, verify file exists
ls site/wwwroot/src/app/api/blogs/[slug]/route.js
```

**B. Test API directly:**
```
https://yourdomain.com/api/blogs/test-slug
```

**C. Check database connection:**
- Verify `DATABASE_URL` is set in Azure
- Check database is accessible from Azure

---

### **Issue 3: Metadata works but social previews don't update**

**Symptoms:**
- View source shows correct meta tags
- Facebook/Twitter show old preview

**Cause:**
- Social platforms cache metadata aggressively

**Solutions:**

**A. Force re-scrape:**
- Facebook: Use Sharing Debugger → "Scrape Again"
- Twitter: Add query parameter `?v=2`
- LinkedIn: Use Post Inspector → "Inspect"

**B. Add version query parameter:**
```
https://yourdomain.com/blog/your-post?v=1
```

**C. Wait 24-48 hours for cache to expire**

---

### **Issue 4: Works on some blogs, not others**

**Symptoms:**
- Some blog posts have correct metadata
- Others show default

**Causes:**
1. Database records incomplete
2. Missing fields in blog posts
3. Inconsistent data

**Solutions:**

**A. Check database records:**
```sql
SELECT id, title, metaTitle, metaDescription, slug
FROM blogs
WHERE id = 'your-post-id';
```

**B. Verify all required fields exist:**
- title
- content
- imageUrl
- publishDate

**C. Add fallbacks in code** (already done in the fix)

---

### **Issue 5: Build fails on Azure**

**Symptoms:**
- Deployment succeeds but app doesn't start
- 500 errors on all pages

**Causes:**
1. Missing dependencies
2. Build errors
3. Node version mismatch

**Solutions:**

**A. Check Node version:**
In Azure Portal → Configuration → General settings:
- Set Node version: `20.x` (LTS)

**B. Check build logs:**
Azure Portal → Deployment Center → Logs

**C. Test build locally:**
```bash
npm run build
npm run start
```

---

### **Issue 6: Images not loading in Open Graph**

**Symptoms:**
- Meta tags show image URLs
- Social preview shows broken image

**Causes:**
1. Image URLs are relative
2. Images not accessible publicly
3. CORS issues

**Solutions:**

**A. Use absolute URLs:**
```javascript
const featuredImage = post.imageUrl.startsWith('http')
  ? post.imageUrl
  : `${siteUrl}${post.imageUrl}`;
```

**B. Verify image is accessible:**
```bash
curl -I https://yourdomain.com/your-image.jpg
```

**C. Check Azure Blob Storage permissions:**
- Ensure container has public access
- Verify CORS settings allow external access

---

## 📋 Deployment Checklist

Before deploying to Azure:

- [ ] Set `NEXT_PUBLIC_BASE_URL` in Azure App Service Configuration
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Azure App Service Configuration
- [ ] Set `NODE_ENV=production` in Azure
- [ ] Update `next.config.mjs` with `output: 'standalone'`
- [ ] Create `web.config` for Azure
- [ ] Create `.deployment` and `deploy.sh` scripts
- [ ] Enable logging in Azure App Service
- [ ] Test build locally: `npm run build && npm run start`
- [ ] Clear `.next` folder in Azure before deployment
- [ ] Restart App Service after deployment
- [ ] Test in incognito/private mode
- [ ] Verify logs in Azure Log stream
- [ ] Check metadata in view source
- [ ] Test social previews with debugging tools
- [ ] Verify all blog posts, not just one

---

## 🚀 Deployment Commands

### **Deploy to Azure:**

```bash
# 1. Build locally (optional, to verify)
npm run build

# 2. Commit changes
git add .
git commit -m "Fix: SEO metadata for Azure production"

# 3. Push to Azure (if using Git deployment)
git push azure main

# 4. Or use Azure CLI
az webapp deploy --name your-app-name --resource-group your-resource-group --src-path ./

# 5. Restart app
az webapp restart --name your-app-name --resource-group your-resource-group
```

---

## 📊 Monitoring

### **Set up monitoring for SEO:**

1. **Azure Application Insights:**
   - Enable Application Insights for your App Service
   - Monitor page load times
   - Track failed requests

2. **Log Analytics:**
   - Query logs for `[SEO Debug]` and `[SEO Error]` messages
   - Set up alerts for metadata generation failures

3. **Custom Monitoring:**

Create `src/app/api/seo-health/route.js`:

```javascript
import { NextResponse } from 'next/server';

export async function GET() {
  const checks = {
    baseUrl: !!process.env.NEXT_PUBLIC_BASE_URL,
    siteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  };

  const allHealthy = checks.baseUrl && checks.siteUrl;

  return NextResponse.json({
    status: allHealthy ? 'healthy' : 'unhealthy',
    checks,
  }, {
    status: allHealthy ? 200 : 500,
  });
}
```

Monitor: `https://yourdomain.com/api/seo-health`

---

## ✅ Success Criteria

Your SEO is working correctly if:

1. ✅ **View source shows dynamic meta tags** (title, description, OG tags)
2. ✅ **Each blog post has unique metadata** (not default/generic)
3. ✅ **Social sharing previews work** on Facebook, Twitter, LinkedIn
4. ✅ **Google Search Console** can crawl and index pages
5. ✅ **SEO debug logs** appear in Azure Log stream
6. ✅ **No 404/500 errors** when fetching blog metadata
7. ✅ **Works in production** AND in local development
8. ✅ **Images appear** in social previews
9. ✅ **Canonical URLs** are correct
10. ✅ **Metadata renders server-side** (visible without JavaScript)

---

## 🎯 Final Verification Steps

**After deployment, do this:**

1. **Hard refresh** production site (Ctrl+Shift+R)
2. **Open incognito/private** browser
3. **Visit:** `https://yourdomain.com/blog/any-post`
4. **Right-click** → **View Page Source**
5. **Search for:** `<title>` and `<meta property="og:title"`
6. **Verify:** Content is specific to that blog post, not generic
7. **Test social preview:** Use Facebook Sharing Debugger
8. **Check logs:** Azure Portal → Log stream → Look for `[SEO Debug]`

**If ALL of the above work → You're done! 🎉**

---

## 📞 Support & References

### **Next.js Documentation:**
- Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Deployment: https://nextjs.org/docs/deployment

### **Azure Documentation:**
- App Service: https://learn.microsoft.com/en-us/azure/app-service/
- Node.js apps: https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs

### **Debugging Tools:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- OpenGraph Checker: https://www.opengraph.xyz/

---

**Good luck with your deployment! Your SEO should now work perfectly on Azure.** 🚀

