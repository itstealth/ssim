import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await dbQuery(
      "SELECT id, date, name, designation, company, topic, year, created_at FROM guest_lectures ORDER BY id"
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
  }
}

export async function POST(request) {
  try {
    const { date, name, designation, company, topic, year } = await request.json();

    if (!name || !company) {
      return NextResponse.json(
        { message: "Missing required fields: name, company." },
        { status: 400 }
      );
    }

    const query =
      "INSERT INTO guest_lectures (date, name, designation, company, topic, year) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await dbQuery(query, [
      date || null,
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
          date,
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
  }
}
