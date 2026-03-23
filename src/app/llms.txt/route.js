import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * GET handler for llms.txt
 */
export async function GET() {
  const filePath = path.join(process.cwd(), "llms.txt");

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (error) {
    return new NextResponse("Not Found", { status: 404 });
  }
}
