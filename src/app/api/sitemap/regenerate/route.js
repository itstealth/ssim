import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import {
  buildSitemapUrls,
  generateSitemapXml,
} from "@/lib/sitemap-utils";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://ssim.ac.in";

export const runtime = "nodejs";

/**
 * POST handler for manual sitemap regeneration
 * This bypasses cache and forces immediate regeneration
 */
export async function POST(request) {
  try {
    console.log('[SITEMAP-REGENERATE] Manual regeneration requested');
    
    // Optional: Add authentication check
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.SITEMAP_REGENERATE_TOKEN;
    
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { staticRoutes, blogUrls, allUrls, generatedAt } =
      await buildSitemapUrls({ dbPool });
    
    // Generate XML
    const sitemapXml = generateSitemapXml(allUrls, baseUrl);
    
    console.log(`[SITEMAP-REGENERATE] Generated sitemap with ${allUrls.length} URLs`);
    
    return NextResponse.json({
      message: "Sitemap regenerated successfully",
      urlCount: allUrls.length,
      staticRoutes: staticRoutes.length,
      blogPosts: blogUrls.length,
      generatedAt,
      sitemapUrl: `${baseUrl}/sitemap.xml`
    });
    
  } catch (error) {
    console.error('[SITEMAP-REGENERATE] Error:', error);
    
    return NextResponse.json(
      {
        message: "Failed to regenerate sitemap",
        error: error.message
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler to check sitemap status
 */
export async function GET() {
  try {
    const currentTime = new Date().toISOString();
    const { staticRoutes, blogUrls } = await buildSitemapUrls({ dbPool, currentTime });
    
    return NextResponse.json({
      status: "Sitemap is dynamic and auto-regenerates",
      staticRoutes: staticRoutes.length,
      publishedBlogs: blogUrls.length,
      totalUrls: staticRoutes.length + blogUrls.length,
      lastChecked: currentTime,
      sitemapUrl: `${baseUrl}/sitemap.xml`,
      cacheDuration: "no-store",
      nextRegeneration: "Automatic on next request"
    });
    
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error checking sitemap status",
        error: error.message
      },
      { status: 500 }
    );
  }
}
