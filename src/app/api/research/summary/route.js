import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * GET /api/research/summary
 *
 * Feeds the Home page Research section: a total count plus the few most recent
 * entries for each dataset, in ONE request. The Home page only ever shows a
 * preview, so pulling all ~300 rows across six endpoints just to render three
 * lines each would be wasted payload on the site's most-visited page.
 *
 * The full lists are fetched per-tab by /research.
 */

const PREVIEW_LIMIT = 3;

// `label` is what the card shows; `order` puts the newest work first.
const SECTIONS = [
  {
    key: "papers",
    table: "publications",
    select: "id, title, authors AS people, journal AS detail, year AS period",
    order: "CAST(year AS UNSIGNED) DESC, id DESC",
  },
  {
    key: "conferences",
    table: "conferences",
    select: "id, title, faculty AS people, organized_by AS detail, month_year AS period",
    order: "academic_year DESC, id DESC",
  },
  {
    key: "patents",
    table: "patents",
    select: "id, title, faculty AS people, patent_no AS detail, published_date AS period",
    order: "published_date DESC, id DESC",
  },
  {
    key: "awards",
    table: "awards",
    select: "id, award AS title, faculty AS people, host_organization AS detail, year AS period",
    order: "year DESC, id DESC",
  },
  {
    key: "books",
    table: "books",
    select: "id, book_name AS title, faculty AS people, publisher AS detail, academic_year AS period",
    order: "academic_year DESC, id DESC",
  },
];

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();

    const result = {};
    for (const s of SECTIONS) {
      const [[{ total }]] = await connection.query(
        `SELECT COUNT(*) AS total FROM ${s.table}`
      );
      const [items] = await connection.query(
        `SELECT ${s.select} FROM ${s.table} ORDER BY ${s.order} LIMIT ${PREVIEW_LIMIT}`
      );
      result[s.key] = { total, items };
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error building research summary:", error);
    return NextResponse.json(
      { message: "Failed to build research summary.", error: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
