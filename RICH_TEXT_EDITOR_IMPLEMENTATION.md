# Rich-Text Editor with Azure Blob Storage Integration

## Complete Implementation Guide

This document explains the complete implementation of image and document uploads in your Next.js blog editor with Azure Blob Storage integration.

---

## 📁 **File Organization in Azure Blob Storage**

All files are stored in your Azure Blob Storage container with the following structure:

```
your-container/
├── featured-images/          # Blog thumbnail/featured images
│   ├── 1.jpg                 # Blog ID as filename
│   ├── 2.png
│   └── 3.webp
├── images/                   # Images uploaded from editor
│   ├── 1234567890-abc123.jpg
│   ├── 1234567891-def456.png
│   └── 1234567892-ghi789.webp
└── documents/                # Documents uploaded from editor
    ├── 1234567890-xyz123.pdf
    ├── 1234567891-uvw456.docx
    └── 1234567892-rst789.xlsx
```

---

## 🎯 **Implementation Overview**

### **1. Featured Image Upload** (Blog Thumbnail)
- **Location**: `src/app/admin/blog/new/page.jsx`
- **Component**: `<ImageUpload>`
- **Storage**: Azure Blob Storage → `featured-images/` folder
- **Filename**: `{blogId}.{extension}`
- **Uploaded via**: `/api/blogs` endpoint
- **Function**: `uploadImageToAzure()` in `azure-blob-storage.js`

### **2. Editor Content Images**
- **Location**: Inside rich-text editor
- **Button**: Image icon dropdown → "Upload from Computer"
- **Storage**: Azure Blob Storage → `images/` folder
- **Filename**: `{timestamp}-{random}.{extension}`
- **Uploaded via**: `/api/upload` endpoint
- **Function**: `uploadFileToAzure()` in `azure-blob-storage.js`

### **3. Editor Content Documents**
- **Location**: Inside rich-text editor
- **Button**: Document icon dropdown → "Upload Document"
- **Storage**: Azure Blob Storage → `documents/` folder
- **Filename**: `{timestamp}-{random}.{extension}`
- **Uploaded via**: `/api/upload` endpoint
- **Function**: `uploadFileToAzure()` in `azure-blob-storage.js`

---

## 📋 **File Structure**

```
src/
├── app/
│   ├── admin/blog/new/page.jsx       # Blog creation form
│   └── api/
│       ├── blogs/route.js            # Blog submission (handles featured image)
│       └── upload/route.js           # Editor file uploads (images + documents)
├── components/
│   ├── RichTextEditor.jsx            # TipTap editor with upload buttons
│   └── ImageUpload.jsx               # Featured image dropzone
└── lib/
    └── azure-blob-storage.js         # Azure Blob Storage utilities
```

---

## 🔧 **Key Functions Explained**

### **1. `uploadImageToAzure()` - Featured Image**

```javascript
// Location: src/lib/azure-blob-storage.js
// Purpose: Upload blog thumbnail/featured image
// Used by: /api/blogs endpoint

uploadImageToAzure(fileBuffer, originalFilename, blogId)
// Uploads to: featured-images/{blogId}.{extension}
// Returns: https://youraccount.blob.core.windows.net/container/featured-images/1.jpg
```

**Usage Example:**
```javascript
const imageUrl = await uploadImageToAzure(imageBuffer, "photo.jpg", 123);
// Result: featured-images/123.jpg
```

### **2. `uploadFileToAzure()` - Editor Uploads**

```javascript
// Location: src/lib/azure-blob-storage.js
// Purpose: Upload images and documents from editor
// Used by: /api/upload endpoint

uploadFileToAzure(fileBuffer, originalFilename, fileType)
// Images uploaded to: images/{timestamp}-{random}.{extension}
// Documents uploaded to: documents/{timestamp}-{random}.{extension}
```

**Usage Example:**
```javascript
// Image upload
const url = await uploadFileToAzure(buffer, "sunset.jpg", "image/jpeg");
// Result: images/1234567890-abc123.jpg

// Document upload
const url = await uploadFileToAzure(buffer, "report.pdf", "application/pdf");
// Result: documents/1234567890-xyz456.pdf
```

---

## 🎨 **How It Works: Complete Flow**

### **Featured Image Upload Flow**

```
1. User selects image in ImageUpload component
2. ImageUpload passes File object to form
3. Form submits via /api/blogs with FormData
4. API extracts imageUrl file from FormData
5. API inserts blog post with placeholder imageUrl
6. API calls uploadImageToAzure(buffer, filename, blogId)
7. File uploaded to: featured-images/{blogId}.jpg
8. API updates blog post with Azure URL
9. Transaction committed
```

### **Editor Image Upload Flow**

```
1. User clicks image icon → "Upload from Computer"
2. File selected via hidden input
3. handleImageUpload() triggered
4. FormData created with file
5. POST request to /api/upload
6. uploadFileToAzure() called with image type
7. File uploaded to: images/{timestamp}-{random}.jpg
8. Azure URL returned
9. Editor inserts <img> tag with Azure URL
10. Image visible in editor!
```

### **Editor Document Upload Flow**

```
1. User clicks document icon → "Upload Document"
2. File selected via hidden input
3. handleDocumentUpload() triggered
4. FormData created with file
5. POST request to /api/upload
6. uploadFileToAzure() called with document type
7. File uploaded to: documents/{timestamp}-{random}.pdf
8. Azure URL returned
9. Editor inserts styled download link with Azure URL
10. Document link visible in editor!
```

---

## 💾 **What Gets Saved to MySQL**

### Blog Post Record:
```javascript
{
  id: 1,
  title: "My Blog Post",
  slug: "my-blog-post",
  content: "<p>This is content with <img src='https://...blob.core.windows.net/.../images/123-abc.jpg'> and <a href='https://...documents/456-def.pdf'>Download PDF</a></p>",
  imageUrl: "https://...blob.core.windows.net/.../featured-images/1.jpg",
  imageAlt: "Featured image description",
  // ... other fields
}
```

**Content Field Contains:**
- HTML with Azure Blob Storage URLs
- Images: `<img src="https://youraccount.blob.core.windows.net/container/images/...">`
- Documents: `<a href="https://youraccount.blob.core.windows.net/container/documents/...">Download</a>`

---

## 🎯 **Editor Features**

### **Image Upload Options:**
1. **Upload from Computer** - Upload local images to Azure
2. **Insert from URL** - Insert external image URLs

### **Document Upload Options:**
1. **Upload Document** - Upload files to Azure (PDF, DOCX, XLSX, etc.)
2. **Link to Document** - Insert external document URLs

### **Supported File Types:**

**Images:**
- PNG, JPG, JPEG, GIF, WebP, SVG
- Max size: 5MB

**Documents:**
- PDF (.pdf)
- Word (.doc, .docx)
- Excel (.xls, .xlsx)
- PowerPoint (.ppt, .pptx)
- Text (.txt)
- Archives (.zip, .rar)
- Max size: 10MB

---

## ⚙️ **Environment Configuration**

### Required Environment Variables:

```env
# Azure Blob Storage
AZURE_STORAGE_CONNECTION_STRING=your_connection_string_here
AZURE_CONTAINER_NAME=blog-media

# Database (existing)
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name

# Next.js
NEXT_PUBLIC_BASE_URL=https://ssim.ac.in
```

### Get Your Connection String:
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Storage Account
3. Click "Access keys" in sidebar
4. Copy "Connection string" from Key 1 or Key 2

---

## 📊 **API Endpoints**

### **POST /api/upload**
Upload files from the rich-text editor.

**Request:**
```javascript
const formData = new FormData();
formData.append("file", fileObject);

fetch("/api/upload", {
  method: "POST",
  body: formData
});
```

**Response:**
```json
{
  "success": true,
  "url": "https://youraccount.blob.core.windows.net/container/images/1234567890-abc.jpg",
  "fileName": "original-filename.jpg",
  "fileType": "image/jpeg",
  "fileSize": 123456
}
```

**Error Response:**
```json
{
  "error": "Failed to upload file",
  "details": "Error message here"
}
```

### **POST /api/blogs**
Create a new blog post with featured image.

**Request:**
```javascript
const formData = new FormData();
formData.append("title", "Blog Title");
formData.append("content", "<p>HTML content</p>");
formData.append("imageUrl", featuredImageFile);
formData.append("imageAlt", "Image description");
// ... other fields

fetch("/api/blogs", {
  method: "POST",
  body: formData
});
```

**Response:**
```json
{
  "message": "Blog post created successfully",
  "blogId": 123,
  "slug": "blog-title",
  "imageUrl": "https://youraccount.blob.core.windows.net/container/featured-images/123.jpg"
}
```

---

## 🧪 **Testing Checklist**

### Environment Setup:
- [ ] `AZURE_STORAGE_CONNECTION_STRING` is set
- [ ] `AZURE_CONTAINER_NAME` is set
- [ ] Container exists in Azure Portal
- [ ] Container access level is "Blob" (public read)
- [ ] Next.js dev server restarted after adding env vars

### Featured Image Upload:
- [ ] Can drag & drop featured image
- [ ] Can click to select featured image
- [ ] Image preview shows correctly
- [ ] Can remove and re-select image
- [ ] Image uploads to Azure on form submit
- [ ] Featured image URL saved to database
- [ ] Featured image displays on blog page

### Editor Image Upload:
- [ ] Image icon dropdown works
- [ ] "Upload from Computer" opens file picker
- [ ] Image uploads to Azure
- [ ] Image appears in editor immediately
- [ ] Image has correct Azure URL in HTML
- [ ] Image saves with blog content
- [ ] Image displays on published blog

### Editor Document Upload:
- [ ] Document icon dropdown works
- [ ] "Upload Document" opens file picker
- [ ] Document uploads to Azure
- [ ] Styled download button appears in editor
- [ ] Button has correct Azure URL
- [ ] Document saves with blog content
- [ ] Document link works on published blog

---

## 🐛 **Troubleshooting**

### Images Not Appearing in Editor

**Symptom:** Image uploads but doesn't show in editor

**Solutions:**
1. Check browser console for errors
2. Verify Azure URL is returned from API
3. Check if image URL is public (test in new browser tab)
4. Verify TipTap Image extension is properly configured
5. Check `Image.configure({ inline: false })` setting

### Documents Not Creating Download Links

**Symptom:** Document uploads but link doesn't appear

**Solutions:**
1. Check `insertContent()` is properly inserting HTML
2. Verify Azure URL is valid
3. Check CSS styles for download links
4. Test raw HTML output from editor

### Azure Upload Fails

**Symptom:** "Failed to upload file" error

**Solutions:**
1. Verify `AZURE_STORAGE_CONNECTION_STRING` is correct
2. Check container name matches `AZURE_CONTAINER_NAME`
3. Ensure container exists in Azure Portal
4. Check Azure Portal for any access restrictions
5. Verify internet connectivity from server
6. Check server logs for detailed error messages

### Featured Image Not Uploading

**Symptom:** Blog creates but featured image missing

**Solutions:**
1. Check `/api/blogs` logs in terminal
2. Verify `uploadImageToAzure()` is being called
3. Check if transaction is rolling back
4. Verify ImageUpload component passes File object
5. Check FormData contains imageUrl field

---

## 🔒 **Security Considerations**

### File Validation:
- ✅ File type validation on client and server
- ✅ File size limits enforced
- ✅ Sanitized file names
- ✅ Unique filenames prevent collisions

### Azure Security:
- ✅ Connection string stored in environment variables
- ✅ Container access level set to "blob" (public read only)
- ✅ No write access from client-side
- ✅ All uploads go through server-side API

### Content Security:
- ✅ HTML content sanitized before database storage
- ✅ XSS protection via sanitize-html
- ✅ Azure URLs are trusted sources

---

## 📈 **Performance Optimization**

### Image Optimization:
- Consider adding image compression before upload
- Use appropriate image formats (WebP for web)
- Lazy load images in blog posts

### Caching:
- Azure Blob Storage has built-in CDN support
- Enable Azure CDN for faster global delivery
- Set appropriate cache headers

### Database:
- Featured image URL stored as string
- Content HTML stored as TEXT/LONGTEXT
- Index on slug for fast blog lookups

---

## 🚀 **Production Deployment**

### Pre-deployment Checklist:
- [ ] All environment variables set in production
- [ ] Azure Storage Account in production region
- [ ] Container created with proper access level
- [ ] CORS configured if needed
- [ ] File size limits appropriate for production
- [ ] Error logging configured
- [ ] Monitoring set up for upload failures

### Post-deployment Verification:
- [ ] Test featured image upload
- [ ] Test editor image upload
- [ ] Test editor document upload
- [ ] Test blog creation end-to-end
- [ ] Verify files accessible via Azure URLs
- [ ] Check Azure Storage usage/costs

---

## 📚 **Additional Resources**

- [Azure Blob Storage Documentation](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [TipTap Editor Documentation](https://tiptap.dev/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Hook Form Documentation](https://react-hook-form.com/)

---

## 🎉 **Summary**

Your blog editor now has complete Azure Blob Storage integration:

✅ **Featured images** → `featured-images/` folder
✅ **Editor images** → `images/` folder  
✅ **Editor documents** → `documents/` folder
✅ **All files** stored in Azure Blob Storage
✅ **Public URLs** for fast access
✅ **Proper organization** and naming
✅ **Full error handling** and validation
✅ **Scalable** and production-ready!

**Questions?** Check the troubleshooting section or review the inline code comments.

