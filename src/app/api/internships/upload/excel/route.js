import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";
import * as xlsx from "xlsx";

export async function POST(request) {
  let connection;
  try {
    const formData = await request.formData();
    const excelFile = formData.get("internshipExcelFile");

    if (!excelFile) {
      return NextResponse.json(
        { message: "No Excel file uploaded." },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await excelFile.arrayBuffer());

    const workbook = xlsx.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, {
      header: 0,
      defval: "",
    });

    if (!jsonData || jsonData.length === 0) {
      return NextResponse.json(
        { message: "Excel sheet is empty or has no data after header." },
        { status: 400 }
      );
    }

    const internshipsToInsert = jsonData
      .map((row, index) => {
        const name = row["Student Name"] || row["student name"];
        const company = row["Placed in Company"] || row["placed in company"];
        const majorSpecialization =
          row["Major Specialization"] || row["major specialization"];
        const year = row["Year"] || row["year"] || null;

        if (!name || !company) {
          console.warn(
            `Row ${
              index + 2
            } (Excel row number): Skipping due to missing Name or Company. Data: ${JSON.stringify(
              row
            )}`
          );
          return null;
        }
        return { name, company, majorSpecialization, year };
      })
      .filter((p) => p !== null);

    if (internshipsToInsert.length === 0) {
      return NextResponse.json(
        {
          message:
            "No valid internship records found in the Excel sheet (Name and Company are required for each row).",
        },
        { status: 400 }
      );
    }

    connection = await dbPool.getConnection();
    await connection.beginTransaction();

    const query =
      "INSERT INTO internships (name, company, majorSpecialization, year) VALUES (?, ?, ?, ?)";
    let successfulInserts = 0;
    const errors = [];

    for (let i = 0; i < internshipsToInsert.length; i++) {
      const internship = internshipsToInsert[i];
      try {
        await connection.execute(query, [
          internship.name,
          internship.company,
          internship.majorSpecialization,
          internship.year,
        ]);
        successfulInserts++;
      } catch (dbError) {
        console.error(
          `Failed to insert record: ${JSON.stringify(internship)}`,
          dbError
        );
        errors.push({
          record: internship,
          error: dbError.message,
          excel_row: jsonData.findIndex((r) => r === internship) + 2,
        });
      }
    }

    if (errors.length > 0) {
      if (successfulInserts > 0) {
        await connection.commit();
        return NextResponse.json(
          {
            message: `Partially processed records. Successfully inserted: ${successfulInserts}. Failed: ${errors.length}. Check errors for details.`,
            successCount: successfulInserts,
            failureCount: errors.length,
            errors: errors,
          },
          { status: 207 }
        );
      } else {
        await connection.rollback();
        return NextResponse.json(
          {
            message: `Failed to insert any valid records from the Excel sheet. All attempted insertions failed.`,
            failureCount: errors.length,
            errors: errors,
          },
          { status: 500 }
        );
      }
    } else {
      await connection.commit();
      return NextResponse.json(
        {
          message: `Successfully inserted ${successfulInserts} records from the Excel sheet.`,
          successCount: successfulInserts,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("Error processing Excel file for internships:", error);
    return NextResponse.json(
      { message: "Failed to process Excel file.", error: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
