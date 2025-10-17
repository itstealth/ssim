import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db";
import { getStaticRoutes, generateSitemapXml } from "@/lib/sitemap-utils";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ssim.ac.in";

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
    
    // Get current timestamp
    const currentTime = new Date().toISOString();
    
    // Get static routes
    const staticRoutes = getStaticRoutes();
    const staticUrls = staticRoutes.map(route => ({
      ...route,
      lastmod: currentTime
    }));
    
    // Fetch blog posts
    let blogUrls = [];
    if (dbPool) {
      let connection;
      try {
        connection = await dbPool.getConnection();
        
        const sql = `
          SELECT slug, publishDate, updatedAt
          FROM blogs 
          WHERE publishDate <= NOW()
          ORDER BY publishDate DESC
        `;
        
        const [rows] = await connection.query(sql);
        blogUrls = rows.map(row => ({
          url: `/blog/${row.slug}`,
          lastmod: new Date(row.updatedAt || row.publishDate).toISOString(),
          priority: 0.7,
          changefreq: "monthly"
        }));
        
        console.log(`[SITEMAP-REGENERATE] Fetched ${blogUrls.length} blog posts`);
      } catch (error) {
        console.error('[SITEMAP-REGENERATE] Error fetching blog posts:', error.message);
      } finally {
        if (connection) {
          connection.release();
        }
      }
    }
    
    // Combine all URLs
    const allUrls = [...staticUrls, ...blogUrls];
    
    // Generate XML
    const sitemapXml = generateSitemapXml(allUrls, baseUrl);
    
    console.log(`[SITEMAP-REGENERATE] Generated sitemap with ${allUrls.length} URLs`);
    
    return NextResponse.json({
      message: "Sitemap regenerated successfully",
      urlCount: allUrls.length,
      staticRoutes: staticUrls.length,
      blogPosts: blogUrls.length,
      generatedAt: currentTime,
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
    const staticRoutes = getStaticRoutes();
    
    let blogCount = 0;
    if (dbPool) {
      let connection;
      try {
        connection = await dbPool.getConnection();
        const [rows] = await connection.query(
          "SELECT COUNT(*) as count FROM blogs WHERE publishDate <= NOW()"
        );
        blogCount = rows[0].count;
      } catch (error) {
        console.error('[SITEMAP-REGENERATE] Error counting blogs:', error.message);
      } finally {
        if (connection) {
          connection.release();
        }
      }
    }
    
    return NextResponse.json({
      status: "Sitemap is dynamic and auto-regenerates",
      staticRoutes: staticRoutes.length,
      publishedBlogs: blogCount,
      totalUrls: staticRoutes.length + blogCount,
      lastChecked: currentTime,
      sitemapUrl: `${baseUrl}/sitemap.xml`,
      cacheDuration: "1 hour",
      nextRegeneration: "Automatic on next request after cache expires"
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
