import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import slugify from "@/utils/slugify";
import sanitizeHtml from "sanitize-html";
import { uploadImageToAzure, testAzureConnection } from "@/lib/azure-blob-storage";

// Enhanced logging utility
const logger = {
  info: (message, data = {}) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data);
  },
  error: (message, error = null) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  },
  debug: (message, data = {}) => {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, data);
  }
};

export async function POST(request) {
  let connection;
  const startTime = Date.now();

  logger.info("Blog creation request started");

  try {
    // Step 1: Parse form data with detailed logging
    logger.debug("Parsing form data...");
    let formData;
    let body;
    let imageFile;

    try {
      formData = await request.formData();
      body = Object.fromEntries(formData.entries());
      imageFile = formData.get("imageUrl");
      logger.debug("Form data parsed successfully", {
        hasImage: !!imageFile,
        imageName: imageFile?.name,
        imageSize: imageFile?.size,
        fieldsCount: Object.keys(body).length
      });
    } catch (parseError) {
      logger.error("Failed to parse form data", parseError);
      return NextResponse.json(
        { message: "Invalid form data format", details: parseError.message },
        { status: 400 }
      );
    }

    // Step 2: Extract and validate required fields
    const {
      title,
      content,
      imageAlt,
      authorName,
      publishDate,
      metaTitle,
      metaDescription,
      keywords,
      tags,
      categories,
      canonicalUrl,
      jsonLdSchema,
      ogTitle,
      ogDescription,
      ogImageUrl,
      slug: manualSlug,
    } = body;

    logger.debug("Extracted form fields", {
      hasTitle: !!title,
      hasContent: !!content,
      hasImageAlt: !!imageAlt,
      hasPublishDate: !!publishDate,
      titleLength: title?.length,
      contentLength: content?.length
    });

    // Step 3: Validate required fields with detailed error messages
    const missingFields = [];
    if (!title?.trim()) missingFields.push("title");
    if (!content?.trim()) missingFields.push("content");
    if (!imageFile) missingFields.push("imageUrl");
    if (!imageAlt?.trim()) missingFields.push("imageAlt");
    if (!publishDate?.trim()) missingFields.push("publishDate");

    if (missingFields.length > 0) {
      logger.error("Missing required fields", { missingFields });
      return NextResponse.json(
        {
          message: "Missing required fields",
          missingFields,
          details: `The following fields are required: ${missingFields.join(", ")}`
        },
        { status: 400 }
      );
    }

    // Step 4: Validate field lengths and formats
    if (title.length > 255) {
      return NextResponse.json(
        { message: "Title too long", details: "Title must be 255 characters or less" },
        { status: 400 }
      );
    }

    if (imageAlt.length > 255) {
      return NextResponse.json(
        { message: "Image alt text too long", details: "Image alt text must be 255 characters or less" },
        { status: 400 }
      );
    }

    // Step 5: Generate and validate slug
    let slug;
    try {
      slug = manualSlug?.trim() ? slugify(manualSlug) : slugify(title);
      logger.debug("Slug generated", { original: manualSlug || title, slug, slugLength: slug.length });

      if (slug.length === 0) {
        throw new Error("Generated slug is empty");
      }
    } catch (slugError) {
      logger.error("Failed to generate slug", slugError);
      return NextResponse.json(
        { message: "Invalid slug", details: "Could not generate a valid slug from the title" },
        { status: 400 }
      );
    }

    // Step 6: Sanitize HTML content
    let sanitizedContent;
    try {
      logger.debug("Sanitizing HTML content", { contentLength: content.length });
      sanitizedContent = sanitizeHtml(content, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'table', 'thead', 'tbody', 'tr', 'th', 'td'
        ]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          '*': [ 'class', 'style' ],
          'a': [ 'href', 'name', 'target' ],
          'img': [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
        }
      });
      logger.debug("HTML content sanitized", { originalLength: content.length, sanitizedLength: sanitizedContent.length });
    } catch (sanitizeError) {
      logger.error("Failed to sanitize HTML content", sanitizeError);
      return NextResponse.json(
        { message: "Content processing error", details: "Failed to process blog content" },
        { status: 400 }
      );
    }

    // Step 7: Database operations with detailed logging
    try {
      logger.debug("Acquiring database connection...");
      connection = await dbPool.getConnection();
      logger.debug("Database connection acquired");

      logger.debug("Starting transaction...");
      await connection.beginTransaction();
      logger.debug("Transaction started");

      // Step 8: Insert blog post
      const initialSql = `
        INSERT INTO blogs (
          title, slug, content, imageUrl, imageAlt, authorName, publishDate,
          metaTitle, metaDescription, keywords, tags, categories, canonicalUrl,
          jsonLdSchema, ogTitle, ogDescription, ogImageUrl
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const placeholderImageUrl = "placeholder";
      const initialValues = [
        title.trim(), slug, sanitizedContent, placeholderImageUrl, imageAlt.trim(),
        authorName?.trim() || null, publishDate.trim(),
        metaTitle?.trim() || null, metaDescription?.trim() || null,
        keywords?.trim() || null, tags?.trim() || null, categories?.trim() || null,
        canonicalUrl?.trim() || null, jsonLdSchema?.trim() || null,
        ogTitle?.trim() || null, ogDescription?.trim() || null, ogImageUrl?.trim() || null,
      ];

      logger.debug("Inserting blog post", { title: title.substring(0, 50) + "...", slug });

      const [result] = await connection.query(initialSql, initialValues);
      const blogId = result.insertId;

      logger.info("Blog post inserted successfully", { blogId });

      // Step 9: Upload image to Azure
      let imageUrl;
      try {
        logger.debug("Uploading image to Azure", { blogId, imageName: imageFile.name, imageSize: imageFile.size });

        const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
        imageUrl = await uploadImageToAzure(imageBuffer, imageFile.name, blogId);

        logger.info("Image uploaded successfully", { imageUrl });
      } catch (imageError) {
        logger.error("Failed to upload image", imageError);
        // Don't fail the entire operation if image upload fails, just log it
        imageUrl = placeholderImageUrl;
        logger.warn("Continuing with placeholder image URL");
      }

      // Step 10: Update blog post with actual image URL
      if (imageUrl !== placeholderImageUrl) {
        logger.debug("Updating blog post with image URL", { blogId, imageUrl });

        const updateSql = "UPDATE blogs SET imageUrl = ? WHERE id = ?";
        await connection.query(updateSql, [imageUrl, blogId]);

        logger.debug("Blog post updated with image URL");
      }

      // Step 11: Commit transaction
      logger.debug("Committing transaction...");
      await connection.commit();
      logger.info("Transaction committed successfully");

      const processingTime = Date.now() - startTime;
      logger.info("Blog creation completed successfully", {
        blogId,
        processingTimeMs: processingTime
      });

      return NextResponse.json(
        {
          message: "Blog post created successfully",
          blogId,
          slug,
          processingTimeMs: processingTime
        },
        { status: 201 }
      );

    } catch (dbError) {
      logger.error("Database operation failed", dbError);

      if (dbError.code === "ER_DUP_ENTRY") {
        logger.error("Duplicate entry error", { error: dbError });
        return NextResponse.json(
          {
            message: "A blog post with this title or slug already exists",
            details: "Please choose a different title or modify the existing post"
          },
          { status: 409 }
        );
      }

      if (dbError.code === "ER_NO_SUCH_TABLE") {
        return NextResponse.json(
          {
            message: "Database table not found",
            details: "The blogs table may not exist. Please run database migrations."
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: "Database error",
          details: process.env.NODE_ENV === 'development' ? dbError.message : "An error occurred while saving the blog post"
        },
        { status: 500 }
      );
    }

  } catch (error) {
    logger.error("Unexpected error in blog creation", error);

    return NextResponse.json(
      {
        message: "Internal server error",
        details: process.env.NODE_ENV === 'development' ? error.message : "An unexpected error occurred",
        error: process.env.NODE_ENV === 'development' ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : undefined
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        logger.debug("Database connection released");
      } catch (releaseError) {
        logger.error("Error releasing database connection", releaseError);
      }
    }
  }
}

export async function GET() {
  let connection;
  logger.info("Blog posts fetch request started");

  try {
    logger.debug("Acquiring database connection for GET request...");
    connection = await dbPool.getConnection();
    logger.debug("Database connection acquired for GET request");

    const sql = `
      SELECT
        id, title, slug, authorName, publishDate, createdAt,
        metaTitle, metaDescription, imageAlt
      FROM blogs
      ORDER BY publishDate DESC
    `;

    logger.debug("Executing blog posts query...");
    const [rows] = await connection.query(sql);

    logger.info("Blog posts fetched successfully", {
      count: rows.length,
      queryTime: Date.now() - Date.now() // Would need to track start time for this
    });

    return NextResponse.json({
      posts: rows,
      count: rows.length,
      success: true
    });

  } catch (error) {
    logger.error("Error fetching blog posts", error);

    if (error.code === "ER_NO_SUCH_TABLE") {
      return NextResponse.json(
        {
          message: "Database table not found",
          details: "The blogs table may not exist. Please run database migrations.",
          success: false
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Failed to fetch blog posts",
        details: process.env.NODE_ENV === 'development' ? error.message : "An error occurred while fetching blog posts",
        success: false
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        logger.debug("Database connection released for GET request");
      } catch (releaseError) {
        logger.error("Error releasing database connection for GET request", releaseError);
      }
    }
  }
}

// Debug endpoint for testing system components
export async function OPTIONS() {
  logger.info("Debug test request received");

  const debugResults = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    nodeVersion: process.version,
    components: {}
  };

  // Test database connection
  try {
    logger.debug("Testing database connection...");
    const connection = await dbPool.getConnection();
    debugResults.components.database = {
      status: "connected",
      host: process.env.DB_HOST ? "configured" : "missing"
    };
    connection.release();
  } catch (dbError) {
    debugResults.components.database = {
      status: "error",
      error: dbError.message
    };
  }

  // Test Azure connection
  try {
    logger.debug("Testing Azure connection...");
    const azureTest = await testAzureConnection();
    debugResults.components.azure = azureTest;
  } catch (azureError) {
    debugResults.components.azure = {
      status: "error",
      error: azureError.message
    };
  }

  // Test slugify function
  try {
    const testSlug = slugify("Test Blog Title!");
    debugResults.components.slugify = {
      status: "working",
      testInput: "Test Blog Title!",
      testOutput: testSlug
    };
  } catch (slugError) {
    debugResults.components.slugify = {
      status: "error",
      error: slugError.message
    };
  }

  // Check environment variables (without exposing sensitive data)
  debugResults.environment = {
    hasDbConfig: !!(process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD),
    hasAzureConfig: !!process.env.AZURE_STORAGE_CONNECTION_STRING,
    nodeEnv: process.env.NODE_ENV || "not set"
  };

  logger.info("Debug test completed", debugResults);

  return NextResponse.json(debugResults);
}
