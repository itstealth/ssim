import { BlobServiceClient } from "@azure/storage-blob";
import mime from "mime-types";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = "blog-images"; // Or use an environment variable

// Lazily initialize the blob service client only when needed
let blobServiceClient = null;
let containerClient = null;

function initializeAzureClients() {
  if (!connectionString) {
    throw new Error(
      "Azure Storage Connection String is not configured. Please set AZURE_STORAGE_CONNECTION_STRING environment variable."
    );
  }

  if (!blobServiceClient) {
    blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    containerClient = blobServiceClient.getContainerClient(containerName);
  }

  return containerClient;
}

export async function uploadImageToAzure(fileBuffer, originalFilename, blogId) {
  try {
    // Only initialize Azure clients when actually uploading
    const container = initializeAzureClients();

    const fileExtension = originalFilename.split(".").pop();
    const newFilename = `${blogId}.${fileExtension}`;
    const contentType = mime.lookup(newFilename) || "application/octet-stream";

    const blockBlobClient = container.getBlockBlobClient(newFilename);

    await blockBlobClient.uploadData(fileBuffer, {
      blobHTTPHeaders: { blobContentType: contentType },
    });

    return blockBlobClient.url;
  } catch (error) {
    console.error("Error uploading to Azure Blob Storage:", error);
    throw new Error("Failed to upload image to Azure.");
  }
}
