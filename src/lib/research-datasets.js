import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";
import * as xlsx from "xlsx";

/**
 * Shared definitions for the Research section datasets (Conferences, Patents,
 * Awards, Books).
 *
 * Papers deliberately are NOT here - they live in the older `publications`
 * table and keep their own hand-written routes so that existing behaviour and
 * the /faculty/publications page are untouched.
 *
 * Each dataset is described once and the GET / Excel-upload handlers are
 * generated from that description, so the four routes stay in lockstep instead
 * of drifting as four copies of the same 140 lines.
 *
 * `aliases` lists the accepted spreadsheet column headings for each field. The
 * institute's own workbook uses long headings ("Name of the faculty", "Title of
 * the paper"), so those are included alongside the plain field names to let a
 * re-upload of that same file work without hand-editing the sheet first.
 */
export const RESEARCH_DATASETS = {
  conferences: {
    table: "conferences",
    columns: ["title", "faculty", "theme", "organized_by", "month_year", "academic_year"],
    required: ["title", "faculty"],
    orderBy: "academic_year DESC, id ASC",
    aliases: {
      title: ["Title", "title", "Title of the paper"],
      faculty: ["Faculty", "faculty", "Name of the faculty", "Name of faculty"],
      theme: ["Theme", "theme", "Theme of the conference"],
      organized_by: ["Organized by", "organized_by", "Organised by"],
      month_year: ["Month and Year", "month_year", "Month & Year"],
      academic_year: ["Academic Year", "academic_year", "A.Y"],
    },
  },
  patents: {
    table: "patents",
    columns: ["title", "faculty", "patent_no", "published_date"],
    required: ["title", "faculty"],
    orderBy: "published_date DESC, id ASC",
    aliases: {
      title: ["Title", "title"],
      faculty: ["Faculty", "faculty", "Name of the Faculty"],
      patent_no: ["Patent No", "patent_no", "Patent Number"],
      published_date: ["Published Date", "published_date", "Date"],
    },
  },
  awards: {
    table: "awards",
    columns: ["award", "faculty", "host_organization", "year"],
    required: ["award", "faculty"],
    orderBy: "year DESC, id ASC",
    aliases: {
      award: ["Award", "award", "Award received"],
      faculty: ["Faculty", "faculty", "Name of the Faculty"],
      host_organization: ["Host organization", "host_organization", "Host Organisation"],
      year: ["Year", "year"],
    },
  },
  books: {
    table: "books",
    columns: ["book_name", "faculty", "publisher", "academic_year"],
    required: ["book_name", "faculty"],
    orderBy: "academic_year DESC, id ASC",
    aliases: {
      book_name: ["Book Name", "book_name", "Name of the Book", "Title"],
      faculty: ["Faculty", "faculty", "Faculty Name", "Name of the Faculty"],
      publisher: ["Publisher", "publisher"],
      academic_year: ["Academic Year", "academic_year", "A.Y"],
    },
  },
};

function datasetOrThrow(key) {
  const ds = RESEARCH_DATASETS[key];
  if (!ds) throw new Error(`Unknown research dataset: ${key}`);
  return ds;
}

/** Read a field from a spreadsheet row, trying each accepted heading. */
function pick(row, aliases) {
  for (const a of aliases) {
    const v = row[a];
    if (v !== undefined && v !== null && String(v).trim() !== "") {
      return String(v).trim();
    }
  }
  return null;
}

/** GET /api/<dataset> - list all records. */
export function createListHandler(key) {
  const ds = datasetOrThrow(key);
  return async function GET() {
    let connection;
    try {
      connection = await dbPool.getConnection();
      const [rows] = await connection.query(
        `SELECT id, ${ds.columns.join(", ")}, created_at FROM ${ds.table} ORDER BY ${ds.orderBy}`
      );
      return NextResponse.json(rows);
    } catch (error) {
      console.error(`Error fetching ${ds.table} records:`, error);
      return NextResponse.json(
        { message: `Failed to fetch ${ds.table} records.`, error: error.message },
        { status: 500 }
      );
    } finally {
      if (connection) connection.release();
    }
  };
}

/**
 * POST /api/<dataset>/upload/excel - replace or append records from a sheet.
 *
 * `?mode=replace` clears the table first, which is what a "here is the current
 * full list" spreadsheet re-upload means. Default is append. The whole thing
 * runs in one transaction so a bad sheet can never leave the table half-empty.
 */
export function createExcelUploadHandler(key, formField) {
  const ds = datasetOrThrow(key);
  return async function POST(request) {
    let connection;
    try {
      const formData = await request.formData();
      const excelFile = formData.get(formField) || formData.get("file");

      if (!excelFile) {
        return NextResponse.json(
          { message: `No Excel file uploaded. Expected form field "${formField}".` },
          { status: 400 }
        );
      }

      const url = new URL(request.url);
      const replace = url.searchParams.get("mode") === "replace";

      const fileBuffer = Buffer.from(await excelFile.arrayBuffer());
      const workbook = xlsx.read(fileBuffer, { type: "buffer" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 0, defval: "" });

      if (!jsonData || jsonData.length === 0) {
        return NextResponse.json(
          { message: "Excel sheet is empty or has no data after the header row." },
          { status: 400 }
        );
      }

      const skipped = [];
      const records = jsonData
        .map((row, i) => {
          const rec = {};
          for (const col of ds.columns) {
            rec[col] = pick(row, ds.aliases[col] || [col]);
          }
          const missing = ds.required.filter((f) => !rec[f]);
          if (missing.length) {
            skipped.push({ excel_row: i + 2, missing });
            return null;
          }
          return rec;
        })
        .filter(Boolean);

      if (records.length === 0) {
        return NextResponse.json(
          {
            message: `No valid ${ds.table} rows found. Required columns: ${ds.required.join(", ")}.`,
            skipped,
          },
          { status: 400 }
        );
      }

      connection = await dbPool.getConnection();
      await connection.beginTransaction();

      if (replace) {
        await connection.query(`DELETE FROM ${ds.table}`);
      }

      const placeholders = ds.columns.map(() => "?").join(", ");
      const sql = `INSERT INTO ${ds.table} (${ds.columns.join(", ")}) VALUES (${placeholders})`;
      for (const rec of records) {
        await connection.execute(sql, ds.columns.map((c) => rec[c]));
      }

      await connection.commit();

      return NextResponse.json(
        {
          message: `Inserted ${records.length} ${ds.table} record(s)${replace ? " (table replaced)" : ""}.`,
          successCount: records.length,
          skippedCount: skipped.length,
          skipped,
        },
        { status: 201 }
      );
    } catch (error) {
      if (connection) await connection.rollback();
      console.error(`Error processing Excel upload for ${ds.table}:`, error);
      return NextResponse.json(
        { message: "Failed to process Excel file.", error: error.message },
        { status: 500 }
      );
    } finally {
      if (connection) connection.release();
    }
  };
}
