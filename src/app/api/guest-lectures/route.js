import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const [rows] = await connection.query(
      "SELECT id, name, designation, company, topic, year, created_at FROM guest_lectures ORDER BY id"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching guest lecture records:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch guest lecture records.",
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
    const { name, designation, company, topic, year } = await request.json();

    if (!name || !company) {
      return NextResponse.json(
        { message: "Missing required fields: name, company." },
        { status: 400 }
      );
    }

    connection = await dbPool.getConnection();
    const query =
      "INSERT INTO guest_lectures (name, designation, company, topic, year) VALUES (?, ?, ?, ?, ?)";
    const [result] = await connection.execute(query, [
      name,
      designation,
      company,
      topic,
      year,
    ]);

    return NextResponse.json(
      {
        message: "Guest lecture record created successfully!",
        guestLectureId: result.insertId,
        record: {
          id: result.insertId,
          name,
          designation,
          company,
          topic,
          year,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating guest lecture record:", error);
    return NextResponse.json(
      {
        message: "Failed to create guest lecture record.",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
