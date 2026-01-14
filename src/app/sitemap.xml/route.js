import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import { getStaticRoutes, generateSitemapXml } from "@/lib/sitemap-utils";

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ssim.ac.in";

/**
 * Fetch all published blog posts from the database
 */
async function fetchBlogPosts() {
  if (!dbPool) {
    console.log("[SITEMAP] Database pool not available, skipping blog posts");
    return [];
  }

  let connection;
  try {
    connection = await dbPool.getConnection();

    const sql = `
      SELECT id, slug, publishDate, updatedAt
      FROM blogs 
      WHERE publishDate <= NOW()
      ORDER BY publishDate DESC
    `;

    const [rows] = await connection.query(sql);
    console.log(`[SITEMAP] Fetched ${rows.length} blog posts`);

    return rows
      .filter((row) => {
        // Exclude blog post with id 22 or the specific blocked slug
        const isBlocked = row.id === 22 || row.slug === 'cat-2025-results-out-your-complete-guide-to-next-steps';
        return !isBlocked;
      })
      .map((row) => ({
        url: `/blog/${row.slug}`,
        lastmod: new Date(row.updatedAt || row.publishDate).toISOString(),
        priority: 0.7,
        changefreq: "monthly",
      }));
  } catch (error) {
    console.error("[SITEMAP] Error fetching blog posts:", error.message);
    return [];
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

/**
 * GET handler for sitemap.xml
 */
export async function GET() {
  try {
    console.log("[SITEMAP] Generating sitemap...");

    // Get current timestamp for static routes
    const currentTime = new Date().toISOString();

    // Get static routes from utility function
    const staticRoutes = getStaticRoutes();

    // Add lastmod to static routes
    const staticUrls = staticRoutes.map((route) => ({
      ...route,
      lastmod: currentTime,
    }));

    // Fetch dynamic blog posts
    const blogUrls = await fetchBlogPosts();

    // Combine all URLs
    const allUrls = [...staticUrls, ...blogUrls];

    console.log(`[SITEMAP] Generated sitemap with ${allUrls.length} URLs`);
    console.log(`[SITEMAP] - Static routes: ${staticUrls.length}`);
    console.log(`[SITEMAP] - Blog posts: ${blogUrls.length}`);

    // Generate XML using utility function
    const sitemapXml = generateSitemapXml(allUrls, baseUrl);

    return new NextResponse(sitemapXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("[SITEMAP] Error generating sitemap:", error);

    // Return a basic sitemap with just static routes if there's an error
    const currentTime = new Date().toISOString();
    const staticRoutes = getStaticRoutes();
    const staticUrls = staticRoutes.map((route) => ({
      ...route,
      lastmod: currentTime,
    }));

    const fallbackSitemap = generateSitemapXml(staticUrls, baseUrl);

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=300, s-maxage=300", // Shorter cache for fallback
      },
    });
  }
}
