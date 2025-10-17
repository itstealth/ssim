import { NextResponse } from "next/server";

/**
 * GET handler for robots.txt
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ssim.ac.in";
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /debug-logs/
Disallow: /logs/

# Allow important pages
Allow: /blog/
Allow: /programs/
Allow: /admissions/
Allow: /about/
Allow: /faculty/
Allow: /placement/
Allow: /research/
Allow: /students-life/
Allow: /events/
Allow: /success-stories/
Allow: /alumni/
Allow: /contact-us/
Allow: /accreditations/
Allow: /international-relations/
Allow: /iqac/
Allow: /grievance-redressal-mechanism/
Allow: /internal-complaints/
Allow: /alumni-guidance/
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  });
}
