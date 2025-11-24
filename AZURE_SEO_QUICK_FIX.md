# ⚡ QUICK FIX: Azure SEO Not Working

## 🎯 5-Minute Fix Checklist

### **Step 1: Set Environment Variables in Azure (2 min)**

1. Go to **Azure Portal** → Your App Service
2. Navigate to **Configuration** → **Application settings**
3. Add these variables:

```
NEXT_PUBLIC_BASE_URL = https://yourdomain.com
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
NODE_ENV = production
```

4. Click **Save**
5. **Restart** the App Service

---

### **Step 2: Clear Azure Cache (1 min)**

1. Azure Portal → Your App Service → **Advanced Tools** → **Go**
2. In Kudu console, run:
   ```bash
   cd site/wwwroot
   rm -rf .next
   ```
3. Go back and **Restart** the app

---

### **Step 3: Verify Fix (2 min)**

1. Open your site in **incognito/private** browser
2. Visit any blog post: `https://yourdomain.com/blog/any-post`
3. **View Page Source** (Ctrl+U or Cmd+U)
4. Search for `<title>` and `<meta property="og:title"`

**✅ If you see your blog post title → FIXED!**  
**❌ If you see generic title → Continue to Step 4**

---

### **Step 4: Debug (If Still Not Working)**

Visit this URL to check configuration:
```
https://yourdomain.com/api/debug/seo
```

**Expected Output:**
```json
{
  "status": "HEALTHY ✅",
  "urls": {
    "NEXT_PUBLIC_BASE_URL": "https://yourdomain.com",
    "NEXT_PUBLIC_SITE_URL": "https://yourdomain.com"
  }
}
```

**If you see "NOT SET ❌":**
- Environment variables didn't save correctly
- Repeat Step 1 and make sure to SAVE and RESTART

---

## 🔍 Common Issues

| Problem | Solution |
|---------|----------|
| Environment variables show "NOT SET" | Go to Azure → Configuration → verify they're there → Restart app |
| Title still generic after fix | Hard refresh browser (Ctrl+Shift+R) or try incognito |
| Works on some posts, not others | Check database - those posts might be missing data |
| Social previews don't update | Use Facebook Sharing Debugger → "Scrape Again" |
| API returns 404 | Database connection issue - check DATABASE_URL is set |

---

## 📝 What Was Fixed

**In `src/app/blog/[blogId]/layout.jsx`:**
- ✅ Improved URL construction for production
- ✅ Added fallback logic when env vars not set
- ✅ Added comprehensive error logging
- ✅ Fixed meta description (strips HTML)
- ✅ Added canonical URLs and robots tags

**You need to:**
1. Deploy the updated `layout.jsx` file to Azure
2. Set environment variables in Azure
3. Clear cache and restart

---

## 🆘 Still Not Working?

**Check Azure Logs:**
1. Azure Portal → Your App Service → **Log stream**
2. Visit a blog post
3. Look for messages starting with `[SEO Debug]`

**If you see:**
- ✅ `[SEO Debug] Post fetched successfully` → Metadata working!
- ❌ `[SEO Error] Failed to fetch` → API or database issue
- ❌ No logs at all → App not starting correctly

---

## 🎉 Success Indicators

Your SEO is fixed if you see these in **View Source**:

```html
<title>Your Actual Blog Title | SSIM Blog</title>
<meta name="description" content="Your actual blog description">
<meta property="og:title" content="Your Actual Blog Title">
<meta property="og:image" content="https://yourdomain.com/actual-image.jpg">
```

**Test social sharing:**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator

---

## ⚠️ Important Notes

1. **Always use incognito/private mode** when testing - regular browsers cache aggressively
2. **After setting env vars, ALWAYS restart** the Azure App Service
3. **Social platforms cache** - use their debugging tools to force re-scrape
4. **Delete the debug endpoint** (`/api/debug/seo`) before going live
5. **Replace `yourdomain.com`** with your actual domain everywhere

---

## 📚 Full Documentation

For detailed troubleshooting, see: `AZURE_SEO_FIX_GUIDE.md`

---

**This should fix 95% of Azure SEO issues. Good luck!** 🚀

