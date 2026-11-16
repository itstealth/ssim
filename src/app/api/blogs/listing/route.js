import { NextResponse } from "next/server";
import { getBlogListing } from "@/lib/wordpress-blog";

export async function GET() {
  try {
    return NextResponse.json(await getBlogListing(), {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Unable to load blog listing:", error.message);
    return NextResponse.json({ message: "Unable to load blogs. Please try again." }, {
      status: 502,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
