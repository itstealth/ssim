import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const [rows] = await connection.query(
      "SELECT name, company, designation, year, created_at FROM placements"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching placement records:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch placement records.",
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
    const { name, company, designation, year } = await request.json();

    if (!name || !company) {
      return NextResponse.json(
        { message: "Missing required fields: name, company." },
        { status: 400 }
      );
    }

    connection = await dbPool.getConnection();
    const query =
      "INSERT INTO placements (name, company, designation, year) VALUES (?, ?, ?, ?)";
    const [result] = await connection.execute(query, [
      name,
      company,
      designation,
      year,
    ]);

    return NextResponse.json(
      {
        message: "Placement record created successfully!",
        placementId: result.insertId,
        record: {
          id: result.insertId,
          name,
          company,
          designation,
          year,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating placement record:", error);
    return NextResponse.json(
      {
        message: "Failed to create placement record.",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
