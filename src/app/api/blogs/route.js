import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import slugify from "@/utils/slugify";
import sanitizeHtml from "sanitize-html";
import { uploadImageToAzure } from "@/lib/azure-blob-storage";

export async function POST(request) {
  let connection;
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData.entries());
    const imageFile = formData.get("imageUrl");

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

    if (!title || !content || !imageFile || !imageAlt || !publishDate) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = manualSlug ? slugify(manualSlug) : slugify(title);
    
    // Sanitize HTML content to prevent XSS attacks
    // Allows a generous set of tags and attributes suitable for a blog
    const sanitizedContent = sanitizeHtml(content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'th', 'td' ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': [ 'class', 'style' ],
        'a': [ 'href', 'name', 'target' ],
        'img': [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
      }
    });

    connection = await dbPool.getConnection();
    await connection.beginTransaction();

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

    const [result] = await connection.query(initialSql, initialValues);
    const blogId = result.insertId;

    // Step 2: Upload image to Azure with the new blog ID
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const imageUrl = await uploadImageToAzure(imageBuffer, imageFile.name, blogId);

    // Step 3: Update the blog post with the actual image URL
    const updateSql = "UPDATE blogs SET imageUrl = ? WHERE id = ?";
    await connection.query(updateSql, [imageUrl, blogId]);

    await connection.commit();

    return NextResponse.json(
      { message: "Blog post created successfully", blogId },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("Error creating blog post:", error);
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "A blog post with this title or slug already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
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
