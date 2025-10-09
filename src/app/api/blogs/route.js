import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import slugify from "@/utils/slugify";
import sanitizeHtml from "sanitize-html";
import { uploadImageToAzure } from "@/lib/azure-blob-storage";
import * as z from "zod";

// Zod schema for validation, now directly in the API route
const blogFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long." })
    .max(255, { message: "Title cannot be longer than 255 characters." }),
  slug: z
    .string()
    .min(1, { message: "Slug is required." })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug can only contain lowercase letters, numbers, and hyphens.",
    }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long." }),
  
  imageUrl: z.any().refine((file) => file instanceof File, "Image is required."),

  imageAlt: z
    .string()
    .min(5, { message: "Image alt text must be at least 5 characters long." })
    .max(125, { message: "Image alt text cannot be longer than 125 characters." }),
  
  publishDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date.",
  }),

  authorName: z.string().max(100).optional(),
  
  tags: z.string().optional(),
  categories: z.string().optional(),

  metaTitle: z.string().max(70).optional(),
  metaDescription: z.string().max(160).optional(),
  keywords: z.string().optional(),
  canonicalUrl: z.string().url().optional().or(z.literal("")),
  
  ogTitle: z.string().max(70).optional(),
  ogDescription: z.string().max(160).optional(),
  ogImageUrl: z.string().url().optional().or(z.literal("")),

  jsonLdSchema: z.string().optional(),
});


export async function POST(request) {
  let connection;
  const startTime = Date.now();

  try {
    console.log('=== BLOG POST CREATION START ===');
    console.log('Request URL:', request.url);
    console.log('Request Method:', request.method);

    const formData = await request.formData();
    const imageFile = formData.get("imageUrl");

    // Convert FormData to a plain object
    const body = Object.fromEntries(formData.entries());

    // Validate the form data using the Zod schema
    const validatedData = blogFormSchema.safeParse({
      ...body,
      imageUrl: imageFile,
    });

    if (!validatedData.success) {
      console.log("Validation errors:", validatedData.error.errors);
      return NextResponse.json(
        {
          message: "Invalid form data.",
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    
    // Use the validated data from now on
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
    } = validatedData.data;

    console.log('Form data received:', {
      fieldCount: Object.keys(body).length,
      hasImage: !!imageFile,
      imageName: imageFile?.name,
      imageSize: imageFile?.size,
    });

    console.log('Extracted fields:', {
      title: title?.substring(0, 50) + '...',
      hasContent: !!content,
      hasImageAlt: !!imageAlt,
      hasAuthor: !!authorName,
      hasPublishDate: !!publishDate,
    });

    // Manual validation is no longer needed
    // const missingFields = [];
    // if (!title?.trim()) missingFields.push('title');
    // if (!content?.trim()) missingFields.push('content');
    // if (!imageFile) missingFields.push('imageUrl');
    // if (!imageAlt?.trim()) missingFields.push('imageAlt');
    // if (!publishDate?.trim()) missingFields.push('publishDate');

    // if (missingFields.length > 0) {
    //   console.log('Missing fields:', missingFields);
    //   return NextResponse.json(
    //     {
    //       message: `Missing required fields: ${missingFields.join(', ')}`,
    //       missingFields
    //     },
    //     { status: 400 }
    //   );
    // }

    console.log('=== STEP 1: SLUG GENERATION ===');
    // Generate slug
    const slug = manualSlug?.trim() ? slugify(manualSlug) : slugify(title);
    console.log('Generated slug:', slug);

    if (!slug) {
      console.log('ERROR: Failed to generate slug');
      return NextResponse.json(
        { message: "Failed to generate valid slug from title" },
        { status: 400 }
      );
    }

    console.log('=== STEP 2: CONTENT SANITIZATION ===');
    // Sanitize HTML content
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
      console.log('Content sanitized successfully');
    } catch (error) {
      console.log('ERROR: HTML sanitization failed:', error.message);
      return NextResponse.json(
        { message: "Failed to process content" },
        { status: 400 }
      );
    }

    console.log('=== STEP 3: DATABASE CONNECTION ===');
    // Get database connection
    try {
      connection = await dbPool.getConnection();
      console.log('Database connection established');
    } catch (error) {
      console.log('ERROR: Database connection failed:', error.message);
      console.log('Error details:', {
        name: error.name,
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState,
        sqlMessage: error.sqlMessage,
        stack: error.stack
      });
      return NextResponse.json(
        {
          message: "Database connection failed",
          error: error.message,
          details: error.code
        },
        { status: 500 }
      );
    }

    console.log('=== STEP 4: DATABASE TRANSACTION ===');
    try {
      await connection.beginTransaction();
      console.log('Transaction started');

      // Insert blog post
      const initialSql = `
        INSERT INTO blogs (
          title, slug, content, imageUrl, imageAlt, authorName, publishDate,
          metaTitle, metaDescription, keywords, tags, categories, canonicalUrl,
          jsonLdSchema, ogTitle, ogDescription, ogImageUrl
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const placeholderImageUrl = "placeholder";
      
      const initialValues = [
        title,
        slug,
        sanitizedContent,
        placeholderImageUrl,
        imageAlt,
        authorName,
        publishDate,
        metaTitle,
        metaDescription,
        keywords,
        tags, // Now sending the raw string, to be parsed on the frontend
        categories, // Now sending the raw string
        canonicalUrl,
        jsonLdSchema,
        ogTitle,
        ogDescription,
        ogImageUrl,
      ];

      console.log('Executing INSERT query...');
      const [result] = await connection.query(initialSql, initialValues);
      const blogId = result.insertId;
      console.log('Blog post inserted with ID:', blogId);

      console.log('=== STEP 5: IMAGE PROCESSING ===');
      // Process image
      let imageBuffer;
      try {
        imageBuffer = Buffer.from(await imageFile.arrayBuffer());
        console.log('Image buffer created, size:', imageBuffer.length);
      } catch (error) {
        console.log('ERROR: Failed to create image buffer:', error.message);
        throw new Error('Failed to process uploaded image');
      }

      console.log('=== STEP 6: AZURE UPLOAD ===');
      let imageUrl;
      try {
        imageUrl = await uploadImageToAzure(imageBuffer, imageFile.name, blogId);
        console.log('Image uploaded to Azure:', imageUrl);
      } catch (error) {
        console.log('ERROR: Azure upload failed:', error.message);
        console.log('Azure error details:', {
          name: error.name,
          code: error.code,
          statusCode: error.statusCode,
          stack: error.stack
        });
        throw error;
      }

      console.log('=== STEP 7: UPDATE BLOG WITH IMAGE URL ===');
      // Update blog with image URL
      const updateSql = "UPDATE blogs SET imageUrl = ? WHERE id = ?";
      await connection.query(updateSql, [imageUrl, blogId]);
      console.log('Blog updated with image URL');

      await connection.commit();
      console.log('Transaction committed successfully');

      const duration = Date.now() - startTime;
      console.log('=== BLOG POST CREATION SUCCESS ===');
      console.log('Duration:', duration + 'ms');

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
      console.log('ERROR: Database operation failed:', error.message);
      console.log('Error details:', {
        name: error.name,
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState,
        sqlMessage: error.sqlMessage,
        stack: error.stack
      });

      if (connection) {
        try {
          await connection.rollback();
          console.log('Transaction rolled back');
        } catch (rollbackError) {
          console.log('ERROR: Failed to rollback:', rollbackError.message);
        }
      }

      return NextResponse.json(
        {
          message: "Database operation failed",
          error: error.message,
          code: error.code,
          details: error.sqlMessage || error.message
        },
        { status: 500 }
      );
    }

  } catch (error) {
    const duration = Date.now() - startTime;

    console.log('=== FATAL ERROR ===');
    console.log('Error name:', error.name);
    console.log('Error message:', error.message);
    console.log('Error code:', error.code);
    console.log('Error stack:', error.stack);
    console.log('Duration:', duration + 'ms');

    if (connection) {
      try {
        await connection.rollback();
        console.log('Transaction rolled back');
      } catch (rollbackError) {
        console.log('ERROR: Failed to rollback:', rollbackError.message);
      }
    }

    // Handle specific database errors
    if (error.code === "ER_DUP_ENTRY") {
      console.log('Duplicate entry error detected');
      return NextResponse.json(
        { message: "A blog post with this title or slug already exists." },
        { status: 409 }
      );
    }

    // Handle Azure errors
    if (error.message.includes('Azure')) {
      console.log('Azure storage error detected');
      return NextResponse.json(
        {
          message: "Failed to upload image",
          error: error.message,
          details: error.code
        },
        { status: 500 }
      );
    }

    // Handle database errors
    if (error.message.includes('database') || error.message.includes('SQL')) {
      console.log('Database error detected');
      return NextResponse.json(
        {
          message: "Database operation failed",
          error: error.message,
          code: error.code,
          details: error.sqlMessage || error.message
        },
        { status: 500 }
      );
    }

    // Return detailed error information
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: {
          name: error.name,
          message: error.message,
          code: error.code,
          stack: error.stack
        },
        duration: `${duration}ms`
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        console.log('Database connection released');
      } catch (error) {
        console.log('ERROR: Failed to release connection:', error.message);
      }
    }
  }
}

export async function GET(request) {
  let connection;
  const startTime = Date.now();

  try {
    console.log('=== FETCHING BLOG POSTS ===');
    console.log('Request URL:', request.url);

    connection = await dbPool.getConnection();
    console.log('Database connection established');

    const sql = "SELECT id, title, slug, authorName, publishDate, createdAt FROM blogs ORDER BY publishDate DESC";

    console.log('Executing SELECT query...');
    const [rows] = await connection.query(sql);
    console.log('Blog posts fetched:', rows.length);

    const duration = Date.now() - startTime;
    console.log('=== BLOG POSTS FETCHED SUCCESSFULLY ===');
    console.log('Duration:', duration + 'ms');

    return NextResponse.json(rows);
  } catch (error) {
    const duration = Date.now() - startTime;

    console.log('=== ERROR FETCHING BLOG POSTS ===');
    console.log('Error name:', error.name);
    console.log('Error message:', error.message);
    console.log('Error code:', error.code);
    console.log('Error stack:', error.stack);
    console.log('Duration:', duration + 'ms');

    if (error.message.includes('database') || error.message.includes('SQL')) {
      return NextResponse.json(
        {
          message: "Database operation failed",
          error: error.message,
          code: error.code,
          details: error.sqlMessage || error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
        code: error.code,
        stack: error.stack,
        duration: `${duration}ms`
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      try {
        connection.release();
        console.log('Database connection released');
      } catch (error) {
        console.log('ERROR: Failed to release connection:', error.message);
      }
    }
  }
}
