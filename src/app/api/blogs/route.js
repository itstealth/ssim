import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import slugify from "@/utils/slugify";
import sanitizeHtml from "sanitize-html";
import { uploadImageToAzure } from "@/lib/azure-blob-storage";

// Environment validation middleware
function validateEnvironment() {
  const required = ['AZURE_STORAGE_CONNECTION_STRING'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Enhanced error response helper
function createErrorResponse(error, status = 500) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const errorResponse = {
    message: isDevelopment ? error.message : "Internal Server Error",
    status,
    timestamp: new Date().toISOString(),
  };

  // Add stack trace in development
  if (isDevelopment && error.stack) {
    errorResponse.stack = error.stack;
  }

  console.error("❌ API Error:", {
    message: error.message,
    code: error.code,
    stack: error.stack,
    status,
  });

  return NextResponse.json(errorResponse, { status });
}

// Enhanced success response helper
function createSuccessResponse(data, status = 200) {
  return NextResponse.json({
    ...data,
    timestamp: new Date().toISOString(),
  }, { status });
}

export async function POST(request) {
  let connection;
  let blogId = null;
  
  try {
    // Validate environment first
    validateEnvironment();
    
    console.log("📝 Processing blog creation request...");
    
    // Parse form data with enhanced error handling
    let formData;
    try {
      formData = await request.formData();
    } catch (error) {
      console.error("❌ Form data parsing failed:", error);
      return createErrorResponse(
        new Error("Invalid form data format"),
        400
      );
    }
    
    const body = Object.fromEntries(formData.entries());
    const imageFile = formData.get("imageUrl");
    
    console.log("📋 Form data received:", {
      title: body.title?.substring(0, 50) + "...",
      hasImage: !!imageFile,
      imageName: imageFile?.name,
      imageSize: imageFile?.size,
    });

    // Validate required fields
    const requiredFields = ['title', 'content', 'imageAlt', 'publishDate'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.error("❌ Missing required fields:", missingFields);
      return createErrorResponse(
        new Error(`Missing required fields: ${missingFields.join(', ')}`),
        400
      );
    }

    if (!imageFile) {
      console.error("❌ No image file provided");
      return createErrorResponse(
        new Error("Image file is required"),
        400
      );
    }

    // Validate file type and size
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(imageFile.type)) {
      console.error("❌ Invalid file type:", imageFile.type);
      return createErrorResponse(
        new Error(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`),
        400
      );
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (imageFile.size > maxSize) {
      console.error("❌ File too large:", imageFile.size);
      return createErrorResponse(
        new Error(`File too large. Maximum size: ${maxSize / (1024 * 1024)}MB`),
        400
      );
    }

    // Generate slug and sanitize content
    const slug = body.slug ? slugify(body.slug) : slugify(body.title);
    
    console.log("🔒 Sanitizing content...");
    const sanitizedContent = sanitizeHtml(body.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': ['class', 'style'],
        'a': ['href', 'name', 'target'],
        'img': ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading']
      }
    });

    // Database operations with enhanced error handling
    console.log("💾 Connecting to database...");
    connection = await dbPool.getConnection();
    await connection.beginTransaction();

    console.log("📝 Inserting blog post...");
    const initialSql = `
      INSERT INTO blogs (
        title, slug, content, imageUrl, imageAlt, authorName, publishDate,
        metaTitle, metaDescription, keywords, tags, categories, canonicalUrl,
        jsonLdSchema, ogTitle, ogDescription, ogImageUrl
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const placeholderImageUrl = "placeholder";
    const initialValues = [
      body.title, slug, sanitizedContent, placeholderImageUrl, body.imageAlt, 
      body.authorName, body.publishDate, body.metaTitle, body.metaDescription,
      body.keywords, body.tags, body.categories, body.canonicalUrl,
      body.jsonLdSchema, body.ogTitle, body.ogDescription, body.ogImageUrl,
    ];

    const [result] = await connection.query(initialSql, initialValues);
    blogId = result.insertId;
    console.log("✅ Blog post inserted with ID:", blogId);

    // Upload image to Azure
    console.log("📤 Uploading image to Azure...");
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const imageUrl = await uploadImageToAzure(imageBuffer, imageFile.name, blogId);
    console.log("✅ Image uploaded to:", imageUrl);

    // Update blog post with actual image URL
    console.log("📝 Updating blog post with image URL...");
    const updateSql = "UPDATE blogs SET imageUrl = ? WHERE id = ?";
    await connection.query(updateSql, [imageUrl, blogId]);
    console.log("✅ Blog post updated with image URL");

    await connection.commit();
    console.log("✅ Transaction committed successfully");

    return createSuccessResponse({
      message: "Blog post created successfully",
      blogId,
      slug,
      imageUrl,
    }, 201);

  } catch (error) {
    console.error("❌ Blog creation failed:", error);
    
    // Rollback transaction if connection exists
    if (connection) {
      try {
        await connection.rollback();
        console.log("🔄 Transaction rolled back");
      } catch (rollbackError) {
        console.error("❌ Rollback failed:", rollbackError);
      }
    }

    // Handle specific error types
    if (error.code === "ER_DUP_ENTRY") {
      return createErrorResponse(
        new Error("A blog post with this title or slug already exists"),
        409
      );
    }

    if (error.message.includes("Azure Storage")) {
      return createErrorResponse(
        new Error("Failed to upload image. Please check Azure Storage configuration"),
        500
      );
    }

    if (error.message.includes("database") || error.message.includes("SQL")) {
      return createErrorResponse(
        new Error("Database operation failed. Please check database configuration"),
        500
      );
    }

    return createErrorResponse(error, 500);
  } finally {
    if (connection) {
      connection.release();
      console.log("🔌 Database connection released");
    }
  }
}

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const sql =
      "SELECT id, title, slug, authorName, publishDate, createdAt FROM blogs ORDER BY publishDate DESC";
    const [rows] = await connection.query(sql);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
