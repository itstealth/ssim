import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import {
  buildSitemapUrls,
  generateSitemapXml,
} from "@/lib/sitemap-utils";

// Base URL for the site
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://ssim.ac.in";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET handler for sitemap.xml
 */
export async function GET() {
  try {
    console.log("[SITEMAP] Generating sitemap...");

    const { staticRoutes, blogUrls, allUrls } = await buildSitemapUrls({
      dbPool,
    });

    console.log(`[SITEMAP] Generated sitemap with ${allUrls.length} URLs`);
    console.log(`[SITEMAP] - Static routes: ${staticRoutes.length}`);
    console.log(`[SITEMAP] - Blog posts: ${blogUrls.length}`);

    const sitemapXml = generateSitemapXml(allUrls, baseUrl);

    return new NextResponse(sitemapXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("[SITEMAP] Error generating sitemap:", error);

    // Return a basic sitemap with just static routes if there's an error
    const { staticRoutes } = await buildSitemapUrls({ currentTime: new Date().toISOString() });
    const fallbackSitemap = generateSitemapXml(staticRoutes, baseUrl);

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }
}
