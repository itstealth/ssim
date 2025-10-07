import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const [rows] = await connection.query(
      "SELECT id, title, authors, journal, classification, year, created_at FROM publications ORDER BY id"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching publication records:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch publication records.",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

export async function POST(request) {
  let connection;
  try {
    const { title, authors, journal, classification, year } =
      await request.json();

    if (!title || !authors || !journal) {
      return NextResponse.json(
        { message: "Missing required fields: title, authors, journal." },
        { status: 400 }
      );
    }

    connection = await dbPool.getConnection();
    const query =
      "INSERT INTO publications (title, authors, journal, classification, year) VALUES (?, ?, ?, ?, ?)";
    const [result] = await connection.execute(query, [
      title,
      authors,
      journal,
      classification,
      year,
    ]);

    return NextResponse.json(
      {
        message: "Publication record created successfully!",
        publicationId: result.insertId,
        record: {
          id: result.insertId,
          title,
          authors,
          journal,
          classification,
          year,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating publication record:", error);
    return NextResponse.json(
      {
        message: "Failed to create publication record.",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
