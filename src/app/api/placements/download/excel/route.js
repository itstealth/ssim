import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";
import * as xlsx from "xlsx";

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    const [rows] = await connection.execute("SELECT * FROM placements");

    if (rows.length === 0) {
      return NextResponse.json({ message: "No placements found to export." }, { status: 404 });
    }

    // Convert database rows (JSON array) to Excel worksheet
    const worksheet = xlsx.utils.json_to_sheet(rows);
    
    // Create a new workbook and append the worksheet
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Placements");

    // Generate an Excel file buffer
    const excelBuffer = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Return the generated buffer as a downloadable file
    return new NextResponse(excelBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="placements_export.xlsx"',
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error generating Excel file:", error);
    return NextResponse.json(
      { message: "Failed to generate Excel file.", error: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
