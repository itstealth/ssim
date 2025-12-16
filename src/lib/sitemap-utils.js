/**
 * Utility functions for sitemap generation
 */

/**
 * Get all static routes from the app directory structure
 * This function can be extended to automatically discover routes
 */
export function getStaticRoutes() {
  return [
    // Main pages
    { url: "", priority: 1.0, changefreq: "daily" },
    {
      url: "/about/academic-advisory-board",
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      url: "/about/accreditations-rankings",
      priority: 0.8,
      changefreq: "monthly",
    },
    { url: "/about/board-of-governors", priority: 0.8, changefreq: "monthly" },
    { url: "/about/board-of-studies", priority: 0.8, changefreq: "monthly" },
    { url: "/about/leadership", priority: 0.8, changefreq: "monthly" },
    { url: "/about/vision-mission", priority: 0.8, changefreq: "monthly" },
    { url: "/accreditations", priority: 0.8, changefreq: "monthly" },
    { url: "/admissions/fpm-efpm", priority: 0.8, changefreq: "weekly" },
    { url: "/admissions/pgdm-ba", priority: 0.8, changefreq: "weekly" },
    { url: "/admissions/pgdm-bifs", priority: 0.8, changefreq: "weekly" },
    {
      url: "/admissions/pgdm-triple-specialisation",
      priority: 0.8,
      changefreq: "weekly",
    },
    { url: "/alumni", priority: 0.7, changefreq: "monthly" },
    { url: "/alumni-guidance", priority: 0.7, changefreq: "monthly" },
    { url: "/blog", priority: 0.8, changefreq: "daily" },
    { url: "/contact-us", priority: 0.8, changefreq: "monthly" },
    { url: "/events", priority: 0.7, changefreq: "weekly" },
    { url: "/events/convocation-2024", priority: 0.6, changefreq: "monthly" },
    { url: "/faculty/areas", priority: 0.7, changefreq: "monthly" },
    { url: "/faculty/publications", priority: 0.7, changefreq: "monthly" },
    {
      url: "/grievance-redressal-mechanism",
      priority: 0.6,
      changefreq: "monthly",
    },
    { url: "/internal-complaints", priority: 0.6, changefreq: "monthly" },
    { url: "/international-relations", priority: 0.7, changefreq: "monthly" },
    { url: "/iqac", priority: 0.7, changefreq: "monthly" },
    { url: "/placement/guest-lectures", priority: 0.7, changefreq: "monthly" },
    { url: "/placement/internships", priority: 0.7, changefreq: "monthly" },
    { url: "/placement/records", priority: 0.7, changefreq: "monthly" },
    { url: "/placement/team", priority: 0.7, changefreq: "monthly" },
    { url: "/programs/fpm-efpm", priority: 0.8, changefreq: "weekly" },
    { url: "/programs/pgdm-ba", priority: 0.8, changefreq: "weekly" },
    { url: "/programs/pgdm-bifs", priority: 0.8, changefreq: "weekly" },
    {
      url: "/programs/pgdm-triple-specialisation",
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      url: "/research/case-research-center",
      priority: 0.6,
      changefreq: "monthly",
    },
    { url: "/research/conferences", priority: 0.6, changefreq: "monthly" },
    {
      url: "/students-life/life-at-ssim",
      priority: 0.6,
      changefreq: "monthly",
    },
    { url: "/students-life/news", priority: 0.6, changefreq: "weekly" },
    {
      url: "/students-life/students-achievements",
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: "/students-life/students-feedback",
      priority: 0.6,
      changefreq: "monthly",
    },
    { url: "/success-stories", priority: 0.7, changefreq: "monthly" },
  ];
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXml(urls, baseUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}

/**
 * Validate URL structure
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitize URL for sitemap
 */
export function sanitizeUrl(url) {
  return url.replace(/[<>"&]/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}
