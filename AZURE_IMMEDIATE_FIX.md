# 🚨 IMMEDIATE FIX: Azure SEO Issue

## Your Current Situation

Based on your debug output, here's what's happening:

```json
{
  "status": "MISSING CONFIGURATION ❌",
  "urls": {
    "NEXT_PUBLIC_BASE_URL": "NOT SET ❌",
    "NEXT_PUBLIC_SITE_URL": "NOT SET ❌"
  }
}
```

**Problem:** Environment variables are not set in Azure.

---

## ⚡ 2-Minute Fix

### **Option 1: Set Environment Variables (RECOMMENDED)**

1. **Open Azure Portal** (portal.azure.com)
2. **Find your App Service** (search for "App Services")
3. **Click your app** → **Configuration** (left menu)
4. **Click "Application settings"** tab
5. **Click "+ New application setting"**

**Add these 2 variables:**

```
Name: NEXT_PUBLIC_BASE_URL
Value: https://YOUR-ACTUAL-DOMAIN.com
```

```
Name: NEXT_PUBLIC_SITE_URL  
Value: https://YOUR-ACTUAL-DOMAIN.com
```

**Replace `YOUR-ACTUAL-DOMAIN.com` with your real domain!**

6. **Click "Save"** at the top
7. **Click "Continue"** to restart
8. **Wait 30 seconds**

### **Option 2: Use Auto-Detection (Temporary Fix)**

If you deploy the updated code I just provided, it will **automatically detect** your Azure hostname from the `WEBSITE_HOSTNAME` environment variable.

**Steps:**
1. Deploy the updated `layout.jsx` and `route.js` files
2. Restart your Azure App Service
3. Test again

**Note:** This is a fallback. Setting environment variables explicitly (Option 1) is more reliable.

---

## ✅ Verify the Fix

### **Test 1: Check Debug Endpoint**

Visit: `https://your-domain.com/api/debug/seo`

**Expected to see:**
```json
{
  "status": "HEALTHY ✅" or "WORKING (with fallbacks) ⚠️",
  "urls": {
    "NEXT_PUBLIC_BASE_URL": "https://your-domain.com"
  }
}
```

OR if using auto-detection:

```json
{
  "azureDetection": {
    "WEBSITE_HOSTNAME": "your-app.azurewebsites.net",
    "detectedAzureUrl": "https://your-app.azurewebsites.net"
  }
}
```

### **Test 2: Check a Blog Post**

1. Open: `https://your-domain.com/blog/any-post`
2. **Right-click** → **View Page Source**
3. **Search for:** `<title>`

**Should see:**
```html
<title>Your Actual Blog Title | SSIM Blog</title>
```

**NOT:**
```html
<title>Blog Post - SSIM</title>  ❌ Generic title = Still broken
```

---

## 🔍 Understanding Your Debug Output

Let's break down what each part means:

```json
{
  "currentRequestUrl": "https://localhost:8080"
}
```
**⚠️ This is WRONG!** It should be your actual domain, not localhost.

**Why:** The debug endpoint is detecting the URL incorrectly because no environment variables are set.

```json
{
  "constructedUrls": {
    "result": "https://localhost:3000/api/blogs/test-slug"
  }
}
```
**⚠️ This is WRONG!** When metadata is generated, it's trying to fetch from localhost, which doesn't exist in production.

**Why:** Without environment variables, the old code fell back to localhost.

---

## 🆕 What Changed in the Fix

### **Before (Old Code):**
```javascript
// Always fell back to localhost:3000
const host = 'localhost:3000';
```
**Problem:** Metadata fetch fails in production.

### **After (New Code):**
```javascript
// Checks multiple sources in order:
1. NEXT_PUBLIC_BASE_URL (if you set it) ✅ BEST
2. NEXT_PUBLIC_SITE_URL (if you set it) ✅ GOOD
3. WEBSITE_HOSTNAME (Azure auto-detect) ⚠️ OK
4. Relative URL (last resort) ⚠️ FALLBACK
```

**Result:** Works even without env vars, but explicit env vars are better!

---

## 📋 Step-by-Step: Set Environment Variables

### **Visual Guide:**

1. **Azure Portal Homepage**
   - Search bar at top → Type your app name → Click it

2. **App Service Page**
   - Left sidebar → Scroll to "Settings" section
   - Click **"Configuration"**

3. **Configuration Page**
   - You'll see tabs: "Application settings", "General settings", etc.
   - Make sure **"Application settings"** tab is selected

4. **Add Setting**
   - Click **"+ New application setting"** button
   - A dialog pops up with two fields:

   ```
   Name:  [NEXT_PUBLIC_BASE_URL        ]
   Value: [https://yourdomain.com      ]
   
   [ ] Deployment slot setting
   
   [Cancel] [OK]
   ```

   - Fill in the name EXACTLY as shown (case-sensitive!)
   - Fill in your actual domain URL
   - Click **OK**

5. **Repeat for Second Variable**
   - Click **"+ New application setting"** again
   - Add:
   ```
   Name:  NEXT_PUBLIC_SITE_URL
   Value: https://yourdomain.com
   ```
   - Click **OK**

6. **Save**
   - At the top of the page, click **"Save"**
   - A warning appears: "Save changes? Updating application settings will restart your web app."
   - Click **"Continue"**

7. **Wait**
   - App will restart (takes 10-30 seconds)
   - Status will show "Restarting..." then "Running"

8. **Verify**
   - Visit `/api/debug/seo` endpoint
   - Check that variables now show your domain

---

## 🎯 Quick Checklist

After following the fix:

- [ ] Environment variables added in Azure
- [ ] App Service restarted
- [ ] Debug endpoint shows "HEALTHY ✅" or "WORKING ⚠️"
- [ ] Blog post page source shows actual title (not generic)
- [ ] No "localhost" in any URLs
- [ ] Meta tags have correct domain
- [ ] OpenGraph image URLs are absolute (https://)

---

## 🐛 If Still Not Working

### **Issue: Variables still show "NOT SET"**

**Possible causes:**
1. Typo in variable name (must be exact: `NEXT_PUBLIC_BASE_URL`)
2. Didn't click "Save" button
3. App didn't restart
4. Looking at wrong App Service

**Fix:**
- Go back to Configuration
- Verify variables are in the list
- Check spelling exactly
- Click "Save" again
- Manually restart: Overview → Restart button

---

### **Issue: Still seeing "localhost" in URLs**

**Possible causes:**
1. Browser cache
2. App Service cache

**Fix:**
```bash
# Method 1: Clear browser completely
- Open incognito/private window
- Visit site there

# Method 2: Clear Azure cache
1. Azure Portal → Your App Service
2. Development Tools → Advanced Tools → Go
3. In Kudu, run:
   cd site/wwwroot
   rm -rf .next
4. Restart app
```

---

### **Issue: Debug endpoint still shows errors**

**Check Azure Logs:**
1. Azure Portal → Your App Service
2. Monitoring → **Log stream**
3. Refresh the page
4. Visit `/api/debug/seo`
5. Look for error messages in log stream

---

## 🎯 What Your Domain Should Be

### **Common Patterns:**

| If your site is... | Use this value |
|-------------------|----------------|
| ssim.ac.in | `https://ssim.ac.in` |
| www.ssim.ac.in | `https://www.ssim.ac.in` |
| Custom Azure subdomain | `https://yourapp.azurewebsites.net` |
| Custom domain with www | `https://www.yourdomain.com` |

### **Rules:**
- ✅ Must start with `https://` (not `http://`)
- ✅ No trailing slash at the end
- ✅ Include `www` if your site uses it
- ✅ Use the exact domain users visit in their browser

### **Test Your Domain:**
1. Open your site in a browser
2. Look at the URL bar
3. Copy exactly what you see
4. That's your `NEXT_PUBLIC_BASE_URL`

---

## 📞 Next Steps

### **After Setting Variables:**

1. **Deploy Updated Code** (if not done yet)
   ```bash
   git add .
   git commit -m "Fix: Azure SEO with hostname detection"
   git push azure main
   ```

2. **Test Everything**
   - Debug endpoint: Should show "HEALTHY ✅"
   - Blog posts: Should have unique titles
   - View source: Should show your domain
   - Social sharing: Test with Facebook/Twitter debuggers

3. **Clean Up**
   - Delete `/api/debug/seo` endpoint (security risk!)
   - Remove console.log statements (optional)

4. **Monitor**
   - Check Azure logs for `[SEO Debug]` messages
   - Verify all blog posts work
   - Test social media sharing

---

## ✨ Expected Result

### **Before:**
```html
<!-- Generic, doesn't work -->
<title>Blog Post - SSIM</title>
<meta property="og:image" content="/image.jpg">
```

### **After:**
```html
<!-- Specific, works perfectly -->
<title>10 Best PGDM Colleges in Hyderabad | SSIM Blog</title>
<meta property="og:image" content="https://yourdomain.com/images/featured.jpg">
<meta property="og:url" content="https://yourdomain.com/blog/post-slug">
<link rel="canonical" href="https://yourdomain.com/blog/post-slug">
```

---

## 🚀 You're Almost There!

The code fix handles Azure's hostname automatically, but **explicitly setting environment variables is more reliable**.

**Do this now:**
1. Set `NEXT_PUBLIC_BASE_URL` in Azure → Configuration
2. Restart the app
3. Test `/api/debug/seo`
4. Check a blog post's page source

**It should work immediately!** 🎉

---

**Need more help?** Check the other documentation files:
- `AZURE_SEO_QUICK_FIX.md` - 5-minute overview
- `AZURE_SEO_FIX_GUIDE.md` - Complete detailed guide
- `ENVIRONMENT_VARIABLES_TEMPLATE.md` - All env var templates

