import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const [rows] = await connection.query(
      "SELECT id, name, company, majorSpecialization, year, created_at FROM internships ORDER BY id"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching internship records:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch internship records.",
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
    const { name, company, majorSpecialization, year } = await request.json();

    if (!name || !company) {
      return NextResponse.json(
        { message: "Missing required fields: name, company." },
        { status: 400 }
      );
    }

    connection = await dbPool.getConnection();
    const query =
      "INSERT INTO internships (name, company, majorSpecialization, year) VALUES (?, ?, ?, ?)";
    const [result] = await connection.execute(query, [
      name,
      company,
      majorSpecialization || null,
      year || null,
    ]);

    return NextResponse.json(
      {
        message: "Internship record created successfully!",
        internshipId: result.insertId,
        record: {
          id: result.insertId,
          name,
          company,
          majorSpecialization,
          year,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating internship record:", error);
    return NextResponse.json(
      {
        message: "Failed to create internship record.",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
