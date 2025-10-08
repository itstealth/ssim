import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import slugify from "@/utils/slugify";
import sanitizeHtml from "sanitize-html";
import { uploadImageToAzure } from "@/lib/azure-blob-storage";
import { logger, logDatabaseOperation } from "@/lib/api-debug";

export async function POST(request) {
  let connection;
  const startTime = Date.now();

  try {
    logger.info('Starting blog post creation', {
      method: request.method,
      url: request.url,
    });

    const formData = await request.formData();
    const body = Object.fromEntries(formData.entries());
    const imageFile = formData.get("imageUrl");

    logger.debug('Received form data', {
      fieldCount: Object.keys(body).length,
      hasImage: !!imageFile,
      imageName: imageFile?.name,
      imageSize: imageFile?.size,
    });

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

    // Validate required fields with detailed error messages
    const missingFields = [];
    if (!title?.trim()) missingFields.push('title');
    if (!content?.trim()) missingFields.push('content');
    if (!imageFile) missingFields.push('imageUrl');
    if (!imageAlt?.trim()) missingFields.push('imageAlt');
    if (!publishDate?.trim()) missingFields.push('publishDate');

    if (missingFields.length > 0) {
      logger.warn('Missing required fields', { missingFields });
      return NextResponse.json(
        {
          message: `Missing required fields: ${missingFields.join(', ')}`,
          missingFields
        },
        { status: 400 }
      );
    }

    // Generate and validate slug
    const slug = manualSlug?.trim() ? slugify(manualSlug) : slugify(title);

    if (!slug) {
      logger.error('Failed to generate slug', { title, manualSlug });
      return NextResponse.json(
        { message: "Failed to generate valid slug from title" },
        { status: 400 }
      );
    }

    logger.debug('Generated slug', { slug, title });

    // Sanitize HTML content to prevent XSS attacks
    let sanitizedContent;
    try {
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

      if (sanitizedContent.length < 10) {
        logger.warn('Content too short after sanitization', {
          originalLength: content.length,
          sanitizedLength: sanitizedContent.length
        });
        return NextResponse.json(
          { message: "Content too short after sanitization" },
          { status: 400 }
        );
      }
    } catch (error) {
      logger.error('HTML sanitization failed', error);
      return NextResponse.json(
        { message: "Failed to process content" },
        { status: 400 }
      );
    }

    // Get database connection with logging
    connection = await logDatabaseOperation(
      'GET_CONNECTION',
      'blogs',
      () => dbPool.getConnection(),
      { operation: 'getConnection' }
    );

    await connection.beginTransaction();
    logger.debug('Database transaction started');

    // Step 1: Insert blog post with a placeholder image URL
    const initialSql = `
      INSERT INTO blogs (
        title, slug, content, imageUrl, imageAlt, authorName, publishDate,
        metaTitle, metaDescription, keywords, tags, categories, canonicalUrl,
        jsonLdSchema, ogTitle, ogDescription, ogImageUrl
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const placeholderImageUrl = "placeholder";
    const initialValues = [
      title, slug, sanitizedContent, placeholderImageUrl, imageAlt, authorName, publishDate,
      metaTitle, metaDescription, keywords, tags, categories, canonicalUrl,
      jsonLdSchema, ogTitle, ogDescription, ogImageUrl,
    ];

    logger.debug('Inserting blog post', {
      title,
      slug,
      authorName,
      publishDate,
    });

    const [result] = await logDatabaseOperation(
      'INSERT',
      'blogs',
      () => connection.query(initialSql, initialValues),
      { operation: 'insertBlog' }
    );

    const blogId = result.insertId;
    logger.info('Blog post inserted', { blogId });

    // Step 2: Upload image to Azure with the new blog ID
    let imageBuffer;
    try {
      imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      logger.debug('Image buffer created', {
        size: imageBuffer.length,
        name: imageFile.name
      });
    } catch (error) {
      logger.error('Failed to create image buffer', error);
      throw new Error('Failed to process uploaded image');
    }

    let imageUrl;
    try {
      imageUrl = await uploadImageToAzure(imageBuffer, imageFile.name, blogId);
      logger.info('Image uploaded to Azure', { imageUrl, blogId });
    } catch (error) {
      logger.error('Azure upload failed', error, { blogId });
      throw error;
    }

    // Step 3: Update the blog post with the actual image URL
    const updateSql = "UPDATE blogs SET imageUrl = ? WHERE id = ?";

    await logDatabaseOperation(
      'UPDATE',
      'blogs',
      () => connection.query(updateSql, [imageUrl, blogId]),
      { operation: 'updateImageUrl', blogId }
    );

    await connection.commit();
    logger.info('Blog post creation completed successfully', {
      blogId,
      duration: `${Date.now() - startTime}ms`
    });

    return NextResponse.json(
      {
        message: "Blog post created successfully",
        blogId,
        slug,
        imageUrl
      },
      { status: 201 }
    );

  } catch (error) {
    const duration = Date.now() - startTime;

    if (connection) {
      try {
        await connection.rollback();
        logger.warn('Transaction rolled back due to error');
      } catch (rollbackError) {
        logger.error('Failed to rollback transaction', rollbackError);
      }
    }

    // Handle specific database errors
    if (error.code === "ER_DUP_ENTRY") {
      logger.warn('Duplicate entry error', { error: error.message });
      return NextResponse.json(
        { message: "A blog post with this title or slug already exists." },
        { status: 409 }
      );
    }

    // Handle other specific errors
    if (error.message.includes('Azure')) {
      logger.error('Azure storage error', error);
      return NextResponse.json(
        {
          message: "Failed to upload image",
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    if (error.message.includes('database') || error.message.includes('SQL')) {
      logger.error('Database error', error);
      return NextResponse.json(
        {
          message: "Database operation failed",
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    // Log the error and return generic response
    logger.error('Unexpected error creating blog post', error, {
      duration: `${duration}ms`,
      stack: error.stack
    });

    return NextResponse.json(
      {
        message: "Internal Server Error",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
        duration: `${duration}ms`
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        logger.debug('Database connection released');
      } catch (error) {
        logger.error('Error releasing database connection', error);
      }
    }
  }
}

export async function GET(request) {
  let connection;
  const startTime = Date.now();

  try {
    logger.info('Fetching blog posts', {
      method: request.method,
      url: request.url,
    });

    connection = await logDatabaseOperation(
      'GET_CONNECTION',
      'blogs',
      () => dbPool.getConnection(),
      { operation: 'getConnection' }
    );

    const sql =
      "SELECT id, title, slug, authorName, publishDate, createdAt FROM blogs ORDER BY publishDate DESC";

    const [rows] = await logDatabaseOperation(
      'SELECT',
      'blogs',
      () => connection.query(sql),
      { operation: 'fetchBlogs' }
    );

    logger.info('Blog posts fetched successfully', {
      count: rows.length,
      duration: `${Date.now() - startTime}ms`
    });

    return NextResponse.json(rows);
  } catch (error) {
    const duration = Date.now() - startTime;

    logger.error('Error fetching blog posts', error, {
      duration: `${duration}ms`,
      stack: error.stack
    });

    if (error.message.includes('database') || error.message.includes('SQL')) {
      return NextResponse.json(
        {
          message: "Database operation failed",
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
        duration: `${duration}ms`
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        logger.debug('Database connection released');
      } catch (error) {
        logger.error('Error releasing database connection', error);
      }
    }
  }
}
