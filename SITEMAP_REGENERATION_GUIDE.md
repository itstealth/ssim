# Sitemap Regeneration Guide

Your sitemap is **already dynamic** and regenerates automatically! Here are all the ways you can regenerate it:

## 🔄 Automatic Regeneration (Default Behavior)

Your sitemap automatically regenerates:
- ✅ **Every time someone visits** `/sitemap.xml`
- ✅ **When new blog posts are published**
- ✅ **When blog posts are updated**
- ✅ **On every deployment**
- ✅ **After cache expires** (1 hour)

## 🚀 Manual Regeneration Methods

### Method 1: NPM Scripts (Recommended)

```bash
# Check sitemap status and statistics
pnpm sitemap:status

# Force regenerate sitemap (bypasses cache)
pnpm sitemap:regenerate

# Test sitemap XML validity
pnpm sitemap:test
```

### Method 2: Direct API Calls

```bash
# Check status
curl https://www.ssim.ac.in/api/sitemap/regenerate

# Force regeneration
curl -X POST https://www.ssim.ac.in/api/sitemap/regenerate
```

### Method 3: Cache Busting

```bash
# Visit with cache-busting parameter
curl "https://www.ssim.ac.in/sitemap.xml?t=$(date +%s)"

# Or with no-cache header
curl -H "Cache-Control: no-cache" https://www.ssim.ac.in/sitemap.xml
```

### Method 4: Browser Cache Clear

1. Open browser developer tools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"
4. Visit `/sitemap.xml`

## 📊 Understanding Your Sitemap

### Current Configuration
- **Cache Duration**: 1 hour
- **Static Routes**: 35+ pages
- **Dynamic Content**: Blog posts from database
- **Auto-updates**: Yes, when content changes

### What Gets Regenerated
- ✅ All static pages (about, programs, admissions, etc.)
- ✅ All published blog posts
- ✅ Last modified dates
- ✅ URL priorities and change frequencies

## 🛠️ Advanced Regeneration

### For Development
```bash
# Start dev server
pnpm dev

# In another terminal, test sitemap
pnpm sitemap:test
```

### For Production
```bash
# Deploy your changes
git push origin main

# Sitemap automatically updates on deployment
# Or manually trigger:
curl -X POST https://www.ssim.ac.in/api/sitemap/regenerate
```

### With Authentication (Optional)
If you set `SITEMAP_REGENERATE_TOKEN` in your environment:

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  https://www.ssim.ac.in/api/sitemap/regenerate
```

## 🔍 Monitoring Your Sitemap

### Check Status
```bash
pnpm sitemap:status
```

This shows:
- Number of static routes
- Number of published blog posts
- Total URLs in sitemap
- Cache status
- Last generation time

### Test Validity
```bash
pnpm sitemap:test
```

This checks:
- XML format validity
- URL count
- Content length
- Common issues

## 🚨 Troubleshooting

### Sitemap Not Updating
1. **Check cache**: Wait 1 hour or use cache-busting
2. **Check database**: Ensure blog posts are published
3. **Check logs**: Look for `[SITEMAP]` messages in console
4. **Test API**: Use `pnpm sitemap:test`

### Common Issues
- **Empty sitemap**: Database connection issue
- **Missing blog posts**: Check `publishDate <= NOW()`
- **Invalid XML**: Check for special characters in URLs
- **404 errors**: Ensure routes exist in your app

### Debug Mode
Check your console logs for messages starting with `[SITEMAP]`:
- `[SITEMAP] Generating sitemap...`
- `[SITEMAP] Fetched X blog posts`
- `[SITEMAP] Generated sitemap with X URLs`

## 📈 Performance Tips

### Optimize Regeneration
- **Database indexing**: Add index on `publishDate` column
- **Connection pooling**: Already configured
- **Caching**: 1-hour cache reduces database load

### Monitor Performance
- Check generation time in logs
- Monitor database query performance
- Watch cache hit rates

## 🔧 Customization

### Add New Static Routes
Edit `src/lib/sitemap-utils.js`:
```javascript
export function getStaticRoutes() {
  return [
    // ... existing routes
    { url: "/new-page", priority: 0.8, changefreq: "monthly" },
  ];
}
```

### Modify Cache Duration
Edit `src/app/sitemap.xml/route.js`:
```javascript
'Cache-Control': 'public, max-age=7200, s-maxage=7200' // 2 hours
```

### Add Authentication
Set environment variable:
```bash
SITEMAP_REGENERATE_TOKEN=your-secret-token
```

## 📝 Best Practices

### Regular Maintenance
- ✅ Monitor sitemap status weekly
- ✅ Test after major content updates
- ✅ Check Google Search Console for errors
- ✅ Verify all important pages are included

### SEO Optimization
- ✅ Keep priorities between 0.0-1.0
- ✅ Use appropriate change frequencies
- ✅ Ensure all published content is included
- ✅ Update last modified dates when content changes

### Performance
- ✅ Don't regenerate unnecessarily
- ✅ Monitor database performance
- ✅ Use appropriate cache durations
- ✅ Test with production data

## 🎯 Quick Commands Reference

```bash
# Most common commands
pnpm sitemap:status          # Check status
pnpm sitemap:regenerate      # Force regeneration
pnpm sitemap:test           # Test validity

# Direct URLs
https://www.ssim.ac.in/sitemap.xml                    # View sitemap
https://www.ssim.ac.in/api/sitemap/regenerate         # API status
https://www.ssim.ac.in/robots.txt                     # Robots.txt
```

Your sitemap is production-ready and will automatically stay up-to-date! 🚀
