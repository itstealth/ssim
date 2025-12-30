import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";

export async function GET(request, { params }) {
  const { blogId } = params; // Can be a slug or an ID
  let connection;

  try {
    console.log(`=== FETCHING SINGLE BLOG POST: ${blogId} ===`);
    connection = await dbPool.getConnection();
    console.log("Database connection established for fetching single blog.");

    // Check if the blogId is numeric (an ID) or a string (a slug)
    const isNumericId = /^\d+$/.test(blogId);

    let sql;
    let values;

    if (isNumericId) {
      console.log(`BlogId "${blogId}" is numeric. Querying by ID.`);
      sql = "SELECT * FROM blogs WHERE id = ?";
      values = [parseInt(blogId, 10)];
    } else {
      console.log(`BlogId "${blogId}" is a string. Querying by slug.`);
      sql = "SELECT * FROM blogs WHERE slug = ?";
      values = [blogId];
    }

    const [rows] = await connection.query(sql, values);

    if (rows.length === 0) {
      console.log(`Blog post with blogId "${blogId}" not found.`);
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    console.log(`Blog post "${blogId}" fetched successfully.`);
    return NextResponse.json(rows[0]);

  } catch (error) {
    console.error(`=== ERROR FETCHING BLOG POST: ${blogId} ===`);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: {
          name: error.name,
          message: error.message,
        },
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
      console.log("Database connection released for single blog fetch.");
    }
  }
}
