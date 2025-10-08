import { BlobServiceClient } from "@azure/storage-blob";
import mime from "mime-types";

// Enhanced error handling for Azure Storage
export async function uploadImageToAzure(fileBuffer, originalFilename, blogId) {
  try {
    console.log("📤 Starting Azure upload for blog:", blogId);
    console.log("📁 File details:", {
      name: originalFilename,
      size: fileBuffer.length,
      type: mime.lookup(originalFilename)
    });

    // Validate inputs
    if (!fileBuffer || fileBuffer.length === 0) {
      throw new Error("File buffer is empty or invalid");
    }

    if (!originalFilename) {
      throw new Error("Original filename is required");
    }

    if (!blogId) {
      throw new Error("Blog ID is required");
    }

    // Initialize Azure clients
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("AZURE_STORAGE_CONNECTION_STRING environment variable is not set");
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerName = process.env.AZURE_CONTAINER_NAME || "blog-images";
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Check if container exists
    const containerExists = await containerClient.exists();
    if (!containerExists) {
      console.warn("⚠ Container does not exist, creating:", containerName);
      await containerClient.create();
      console.log("✅ Container created");
    }

    // Generate filename and upload
    const fileExtension = originalFilename.split(".").pop();
    const newFilename = `${blogId}.${fileExtension}`;
    const contentType = mime.lookup(newFilename) || "application/octet-stream";

    console.log("📤 Uploading file:", newFilename);
    
    const blockBlobClient = containerClient.getBlockBlobClient(newFilename);
    
    await blockBlobClient.uploadData(fileBuffer, {
      blobHTTPHeaders: { 
        blobContentType: contentType,
        blobContentDisposition: `attachment; filename="${newFilename}"`
      },
      metadata: {
        originalName: originalFilename,
        blogId: blogId.toString(),
        uploadedAt: new Date().toISOString(),
      }
    });

    const imageUrl = blockBlobClient.url;
    console.log("✅ Upload successful. URL:", imageUrl);

    return imageUrl;
  } catch (error) {
    console.error("❌ Azure Blob Storage upload failed:");
    console.error("   Error:", error.message);
    console.error("   Code:", error.code);
    console.error("   Details:", error.details);
    console.error("   Stack:", error.stack);
    
    throw new Error(`Failed to upload image to Azure: ${error.message}`);
  }
}
