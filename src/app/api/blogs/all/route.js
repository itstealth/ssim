import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";

export async function GET(request) {
  let connection;
  const startTime = Date.now();

  try {
    console.log('=== FETCHING ALL BLOG POSTS (NEW ROUTE) ===');
    console.log('Request URL:', request.url);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Database pool status:', dbPool ? 'Available' : 'Not available');

    // Check if database pool is available
    if (!dbPool) {
      console.error('Database pool is not available');
      return NextResponse.json(
        {
          message: "Database connection not available",
          error: "Database pool is null"
        },
        { status: 500 }
      );
    }

    connection = await dbPool.getConnection();
    console.log('Database connection established for fetching all blogs.');

    // Fetch only essential fields for listing page (no content field to avoid production issues)
    const sql = `
      SELECT 
        slug, 
        title, 
        metaDescription, 
        imageUrl, 
        imageAlt, 
        authorName, 
        publishDate, 
        categories 
      FROM blogs 
      ORDER BY publishDate DESC
    `;

    console.log('Executing SELECT query for all blogs...');
    console.log('SQL Query:', sql);
    
    const [rows] = await connection.query(sql);
    console.log('Blog posts fetched:', rows.length);
    console.log('Raw rows sample:', rows.length > 0 ? JSON.stringify(rows[0], null, 2) : 'No rows');
    
    // Add estimated read time based on metaDescription length (fallback approach)
    const processedRows = rows.map((row, index) => {
      try {
        return {
          ...row,
          // Use metaDescription length as fallback for read time estimation
          estimatedWordCount: Math.ceil((row.metaDescription || '').length / 5) || 200
        };
      } catch (error) {
        console.error(`Error processing row ${index}:`, error);
        console.error('Problematic row:', row);
        return {
          ...row,
          estimatedWordCount: 200
        };
      }
    });
    
    console.log('Blog posts processed successfully');
    console.log('Processed rows sample:', processedRows.length > 0 ? JSON.stringify(processedRows[0], null, 2) : 'No processed rows');

    const duration = Date.now() - startTime;
    console.log('=== BLOG POSTS FETCHED SUCCESSFULLY (NEW ROUTE) ===');
    console.log('Duration:', duration + 'ms');

    return NextResponse.json(processedRows);
  } catch (error) {
    const duration = Date.now() - startTime;

    console.log('=== ERROR FETCHING BLOG POSTS (NEW ROUTE) ===');
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
