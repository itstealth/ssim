import { BlobServiceClient } from "@azure/storage-blob";
import mime from "mime-types";

// Enhanced logging utility for Azure operations
const azureLogger = {
  info: (message, data = {}) => {
    console.log(`[AZURE] ${new Date().toISOString()} - ${message}`, data);
  },
  error: (message, error = null) => {
    console.error(`[AZURE ERROR] ${new Date().toISOString()} - ${message}`, error);
  },
  debug: (message, data = {}) => {
    console.debug(`[AZURE DEBUG] ${new Date().toISOString()} - ${message}`, data);
  }
};

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.AZURE_CONTAINER_NAME || "blog-images";

// Lazily initialize the blob service client only when needed
let blobServiceClient = null;
let containerClient = null;

function initializeAzureClients() {
  azureLogger.debug("Initializing Azure Blob Storage clients...");

  if (!connectionString) {
    const error = new Error(
      "Azure Storage Connection String is not configured. Please set AZURE_STORAGE_CONNECTION_STRING environment variable."
    );
    azureLogger.error("Azure connection string missing", error);
    throw error;
  }

  if (!blobServiceClient) {
    try {
      azureLogger.debug("Creating BlobServiceClient...");
      blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
      containerClient = blobServiceClient.getContainerClient(containerName);
      azureLogger.info("Azure Blob Storage clients initialized successfully");
    } catch (initError) {
      azureLogger.error("Failed to initialize Azure Blob Storage clients", initError);
      throw new Error(`Azure Blob Storage initialization failed: ${initError.message}`);
    }
  }

  return containerClient;
}

export async function uploadImageToAzure(fileBuffer, originalFilename, blogId) {
  const startTime = Date.now();
  azureLogger.info("Starting image upload to Azure", {
    originalFilename,
    fileSize: fileBuffer?.length || 0,
    blogId
  });

  try {
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

    azureLogger.debug("Validating file inputs", {
      hasBuffer: !!fileBuffer,
      bufferLength: fileBuffer.length,
      filename: originalFilename,
      blogId
    });

    // Only initialize Azure clients when actually uploading
    let container;
    try {
      container = initializeAzureClients();
    } catch (initError) {
      azureLogger.error("Azure client initialization failed", initError);
      throw new Error(`Azure initialization failed: ${initError.message}`);
    }

    // Generate new filename and determine content type
    const fileExtension = originalFilename.split(".").pop()?.toLowerCase() || "bin";
    const newFilename = `${blogId}.${fileExtension}`;
    const contentType = mime.lookup(newFilename) || "application/octet-stream";

    azureLogger.debug("Generated upload details", {
      originalFilename,
      newFilename,
      contentType,
      fileExtension
    });

    // Upload to Azure
    const blockBlobClient = container.getBlockBlobClient(newFilename);

    azureLogger.debug("Starting blob upload", {
      blobName: newFilename,
      contentType,
      size: fileBuffer.length
    });

    try {
      await blockBlobClient.uploadData(fileBuffer, {
        blobHTTPHeaders: { blobContentType: contentType },
        metadata: {
          originalFilename,
          blogId: blogId.toString(),
          uploadedAt: new Date().toISOString()
        }
      });

      const uploadTime = Date.now() - startTime;
      azureLogger.info("Image uploaded successfully to Azure", {
        blobUrl: blockBlobClient.url,
        blobName: newFilename,
        uploadTimeMs: uploadTime,
        fileSize: fileBuffer.length
      });

      return blockBlobClient.url;

    } catch (uploadError) {
      azureLogger.error("Blob upload operation failed", uploadError);

      // Check for specific Azure errors
      if (uploadError.code === "ContainerNotFound") {
        throw new Error(`Azure container '${containerName}' not found. Please create the container first.`);
      }

      if (uploadError.code === "AuthenticationFailed") {
        throw new Error("Azure authentication failed. Please check your connection string.");
      }

      if (uploadError.code === "NetworkError" || uploadError.code === "ECONNRESET") {
        throw new Error("Network error while uploading to Azure. Please check your internet connection.");
      }

      throw new Error(`Azure upload failed: ${uploadError.message}`);
    }

  } catch (error) {
    const processingTime = Date.now() - startTime;
    azureLogger.error("Image upload to Azure failed", {
      error: error.message,
      processingTimeMs: processingTime,
      originalFilename,
      blogId
    });

    // Re-throw with additional context
    throw error;
  }
}

// Utility function to check Azure connectivity
export async function testAzureConnection() {
  azureLogger.info("Testing Azure Blob Storage connection...");

  try {
    const container = initializeAzureClients();

    // Try to list blobs (this tests connectivity without uploading)
    const blobList = [];
    for await (const blob of container.listBlobsFlat({ maxResults: 1 })) {
      blobList.push(blob.name);
    }

    azureLogger.info("Azure Blob Storage connection test successful", {
      containerName,
      sampleBlobs: blobList.length
    });

    return {
      success: true,
      containerName,
      accessible: true
    };

  } catch (error) {
    azureLogger.error("Azure Blob Storage connection test failed", error);

    return {
      success: false,
      containerName,
      accessible: false,
      error: error.message
    };
  }
}
