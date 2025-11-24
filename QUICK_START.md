# 🚀 Quick Start Guide

## Get Your Blog Editor Running with Azure Blob Storage

---

## Step 1: Set Up Environment Variables ⚙️

Create or update `.env.local` in your project root:

```env
# Azure Blob Storage - REQUIRED
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
AZURE_CONTAINER_NAME=blog-media

# Your existing variables
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
NEXT_PUBLIC_BASE_URL=https://ssim.ac.in
```

### Get Your Connection String:
1. Go to [Azure Portal](https://portal.azure.com)
2. Find your Storage Account
3. Click **"Access keys"** in left sidebar
4. Copy **"Connection string"** from Key 1

---

## Step 2: Restart Your Server 🔄

```bash
# Stop current server (Ctrl+C)
# Then restart:
pnpm dev
```

---

## Step 3: Test It! 🧪

### Test 1: Featured Image ✅
1. Go to `http://localhost:3000/admin/blog/new`
2. Scroll to "Featured Image" section
3. Drag & drop or click to select an image
4. Fill in other required fields
5. Click "Create Blog Post"
6. **Expected:** Image uploads to Azure, blog created

### Test 2: Editor Image Upload ✅
1. In the "Blog Content" editor
2. Click the **📷 image icon**
3. Choose **"Upload from Computer"**
4. Select an image file
5. **Expected:** Image appears in editor immediately

### Test 3: Editor Document Upload ✅
1. In the "Blog Content" editor
2. Click the **📄 document icon**
3. Choose **"Upload Document"**
4. Select a PDF or Word doc
5. **Expected:** Download button appears in editor

---

## Step 4: Verify Azure Storage 🔍

1. Go to [Azure Portal](https://portal.azure.com)
2. Open your Storage Account
3. Click **"Containers"**
4. Open your container (e.g., `blog-media`)
5. You should see folders:
   - `featured-images/` - Blog thumbnails
   - `images/` - Images from editor
   - `documents/` - Documents from editor

---

## ✨ What's Working Now

✅ **Featured Images** → Upload to `featured-images/` folder  
✅ **Editor Images** → Upload to `images/` folder  
✅ **Editor Documents** → Upload to `documents/` folder  
✅ **Images render** in editor at full size  
✅ **Documents show** as styled download buttons  
✅ **All files** stored in Azure Blob Storage  
✅ **Public URLs** for fast delivery  

---

## 🐛 Common Issues

### Error: "Azure Storage connection string is not configured"
**Fix:** Check `.env.local` has `AZURE_STORAGE_CONNECTION_STRING` and restart server

### Images don't appear in editor
**Fix:** 
1. Open browser console (F12)
2. Check for errors
3. Copy the image URL and test in new tab
4. Ensure Azure container access is set to "Blob" (public read)

### "Failed to upload file"
**Fix:**
1. Verify connection string is correct
2. Check container name matches
3. Ensure container exists in Azure Portal
4. Check server terminal for detailed errors

---

## 📁 File Organization

Your Azure container structure:

```
blog-media/
├── featured-images/
│   ├── 1.jpg          ← Blog ID 1's featured image
│   ├── 2.png          ← Blog ID 2's featured image
│   └── 3.webp
├── images/
│   ├── 1701234567890-abc123.jpg
│   ├── 1701234567891-def456.png
│   └── 1701234567892-ghi789.webp
└── documents/
    ├── 1701234567893-xyz123.pdf
    ├── 1701234567894-uvw456.docx
    └── 1701234567895-rst789.xlsx
```

---

## 🎯 Features Overview

### Rich-Text Editor Tools:

**Row 1:**
- Undo/Redo
- Blocks dropdown (Paragraph, H1-H6, Blockquote, Code)
- Alignment dropdown (Left, Center, Right, Justify)
- Font Family selector
- H1, H2, H3 quick buttons
- Bold, Italic, Underline, Strikethrough
- Superscript, Subscript
- Text color picker, Highlight
- Clear formatting

**Row 2:**
- Alignment buttons (Left, Center, Right, Justify)
- Lists (Bullet, Numbered, Indent, Outdent)
- Code, Code Block, Blockquote
- **Link** insertion
- **Image** upload (📷 with dropdown)
- **Document** upload (📄 with dropdown)
- Table insertion
- Horizontal rule

---

## 📊 File Limits

- **Images:** 5MB max
- **Documents:** 10MB max
- **Featured Image:** 2MB max

### Supported Formats:
- **Images:** PNG, JPG, JPEG, GIF, WebP, SVG
- **Documents:** PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, ZIP, RAR

---

## 🔒 Security Features

✅ Server-side uploads only (no direct client access)  
✅ File type validation  
✅ File size limits  
✅ Unique filenames (no collisions)  
✅ HTML content sanitization  
✅ Environment variable security  

---

## 📚 Need More Help?

- **Configuration Guide:** `AZURE_BLOB_SETUP.md`
- **Complete Documentation:** `RICH_TEXT_EDITOR_IMPLEMENTATION.md`
- **Summary:** `IMPLEMENTATION_SUMMARY.md`

---

## 🎉 You're Ready!

Your blog editor is now fully integrated with Azure Blob Storage. Start creating amazing blog posts with images and documents! 🚀

**Happy Blogging!** ✍️

