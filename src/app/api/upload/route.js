import { NextResponse } from "next/server";
import { uploadFileToAzure } from "@/lib/azure-blob-storage";

/**
 * API Route: /api/upload
 * Purpose: Handle file uploads from the rich-text editor
 * Supports: Images and Documents
 * Storage: Azure Blob Storage (images/ and documents/ folders)
 */
export async function POST(request) {
  const requestId = Math.random().toString(36).substring(2, 15);

  try {
    console.log('[API/UPLOAD] Upload request received', { requestId });

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      console.log('[API/UPLOAD] No file provided', { requestId });
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    console.log('[API/UPLOAD] File received:', {
      requestId,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
    });

    // Validate file size (10MB max for documents, 5MB for images)
    const maxSize = file.type.startsWith("image/") ? 5 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      const maxSizeMB = maxSize / (1024 * 1024);
      console.log('[API/UPLOAD] File too large', { requestId, size: file.size, maxSize });
      return NextResponse.json(
        { error: `File size must be less than ${maxSizeMB}MB` },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('[API/UPLOAD] Uploading to Azure Blob Storage...', { requestId });

    // Upload to Azure Blob Storage using centralized function
    const fileUrl = await uploadFileToAzure(buffer, file.name, file.type);

    console.log('[API/UPLOAD] Upload successful:', {
      requestId,
      url: fileUrl,
    });

    return NextResponse.json({
      success: true,
      url: fileUrl,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
    });

  } catch (error) {
    console.error('[API/UPLOAD] Upload failed:', {
      requestId,
      error: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: "Failed to upload file",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

