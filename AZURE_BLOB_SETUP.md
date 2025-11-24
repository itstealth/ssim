# Azure Blob Storage Setup Guide for Rich-Text Editor

This guide explains how to configure Azure Blob Storage for handling media uploads in your blog editor.

## Prerequisites

- Azure Storage Account
- Azure Blob Storage container

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Azure Blob Storage Configuration
AZURE_STORAGE_CONNECTION_STRING=your_azure_storage_connection_string_here
AZURE_STORAGE_CONTAINER_NAME=blog-media
```

## Getting Your Azure Storage Connection String

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Storage Account
3. In the left sidebar, click on "Access keys"
4. Copy the "Connection string" from either key1 or key2

## Container Configuration

The API will automatically create the container if it doesn't exist. The default container name is `blog-media`, but you can change it via the environment variable.

### Container Access Level

The container is set to `blob` access level, which means:
- Blobs are publicly readable
- Container properties are private
- Perfect for serving images and documents on your blog

## File Organization

Files are automatically organized in folders:
- Images: `images/[timestamp]-[random].ext`
- Documents: `documents/[timestamp]-[random].ext`

## API Endpoint

**Endpoint:** `/api/upload`

**Method:** `POST`

**Content-Type:** `multipart/form-data`

**Request Body:**
- `file`: The file to upload (File object)

**Response:**
```json
{
  "success": true,
  "url": "https://yourstorageaccount.blob.core.windows.net/blog-media/images/1234567890-abc123.jpg",
  "fileName": "original-filename.jpg",
  "fileType": "image/jpeg",
  "fileSize": 123456
}
```

## How It Works

### Image Upload Flow:
1. User clicks "Upload from Computer" in the image dropdown
2. File is selected and sent to `/api/upload`
3. API uploads the file to Azure Blob Storage
4. API returns the public URL
5. Editor inserts an `<img>` tag with the Azure URL
6. Image is now visible in the editor

### Document Upload Flow:
1. User clicks "Upload Document" in the document dropdown
2. File is selected and sent to `/api/upload`
3. API uploads the file to Azure Blob Storage
4. API returns the public URL
5. Editor inserts a styled download link with the Azure URL
6. Document link is now visible in the editor

## Supported File Types

### Images:
- PNG, JPG, JPEG, GIF, WebP, SVG
- All file types starting with `image/`

### Documents:
- PDF (`.pdf`)
- Word (`.doc`, `.docx`)
- Excel (`.xls`, `.xlsx`)
- PowerPoint (`.ppt`, `.pptx`)
- Text (`.txt`)
- Archives (`.zip`, `.rar`)

## Testing

1. Ensure your environment variables are set
2. Restart your Next.js development server
3. Go to your blog creation page
4. Try uploading an image - it should appear in the editor
5. Try uploading a document - it should appear as a download button

## Troubleshooting

### "Azure Storage connection string is not configured"
- Make sure `AZURE_STORAGE_CONNECTION_STRING` is set in your `.env.local`
- Restart your Next.js server after adding the variable

### "Failed to upload file"
- Check your Azure Storage Account permissions
- Verify the connection string is correct
- Check Azure Portal for any access issues

### Images/documents not appearing
- Check browser console for errors
- Verify the blob URLs are publicly accessible
- Check that container access level is set to "blob"

### CORS Issues
If accessing from a different domain, you may need to configure CORS in Azure:
1. Go to your Storage Account in Azure Portal
2. Navigate to "Resource sharing (CORS)"
3. Add your domain to allowed origins
4. Enable appropriate methods (GET, POST, OPTIONS)

## Security Considerations

1. **File Size Limits**: Consider adding file size validation
2. **File Type Validation**: Currently validated on client-side, consider server-side validation
3. **Access Control**: For private content, consider using SAS tokens instead of public blob access
4. **Cost Management**: Monitor your storage usage and bandwidth

## Production Checklist

- [ ] Environment variables are set in production
- [ ] Azure Storage container is created
- [ ] Container access level is configured correctly
- [ ] CORS is configured if needed
- [ ] File upload limits are appropriate
- [ ] Error monitoring is in place
- [ ] Backup strategy is defined

## Need Help?

- [Azure Blob Storage Documentation](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [TipTap Editor Documentation](https://tiptap.dev/)

