/**
 * Utility functions for sitemap generation.
 */

import fs from "fs";
import path from "path";
import generatedRoutes from "./generated-sitemap-routes.json";

const APP_DIR = path.join(process.cwd(), "src", "app");
const PAGE_FILE_NAMES = ["page.js", "page.jsx", "page.ts", "page.tsx"];

const EXCLUDED_STATIC_ROUTES = new Set([
  "/api",
  "/admin",
  "/admin/blog/new",
  "/thank-you",
]);

const ROUTE_METADATA_OVERRIDES = {
  "/": { priority: 1.0, changefreq: "daily" },
  "/blog": { priority: 0.8, changefreq: "daily" },
  "/events": { priority: 0.7, changefreq: "weekly" },
  "/events/convocation-2024": { priority: 0.6, changefreq: "monthly" },
  "/admissions/fpm-efpm": { priority: 0.8, changefreq: "weekly" },
  "/admissions/pgdm-ba": { priority: 0.8, changefreq: "weekly" },
  "/admissions/pgdm-bifs": { priority: 0.8, changefreq: "weekly" },
  "/admissions/pgdm-triple-specialisation": {
    priority: 0.8,
    changefreq: "weekly",
  },
  "/about/academic-advisory-board": {
    priority: 0.8,
    changefreq: "monthly",
  },
  "/about/accreditations-rankings": {
    priority: 0.8,
    changefreq: "monthly",
  },
  "/about/board-of-governors": { priority: 0.8, changefreq: "monthly" },
  "/about/board-of-studies": { priority: 0.8, changefreq: "monthly" },
  "/about/leadership": { priority: 0.8, changefreq: "monthly" },
  "/about/message-from-leaders": { priority: 0.8, changefreq: "monthly" },
  "/about/vision-mission": { priority: 0.8, changefreq: "monthly" },
  "/accreditations": { priority: 0.8, changefreq: "monthly" },
  "/alumni": { priority: 0.7, changefreq: "monthly" },
  "/alumni-guidance": { priority: 0.7, changefreq: "monthly" },
  "/careers": { priority: 0.6, changefreq: "monthly" },
  "/contact-us": { priority: 0.8, changefreq: "monthly" },
  "/faculty/areas": { priority: 0.7, changefreq: "monthly" },
  "/faculty/publications": { priority: 0.7, changefreq: "monthly" },
  "/grievance-redressal-mechanism": { priority: 0.6, changefreq: "monthly" },
  "/internal-complaints": { priority: 0.6, changefreq: "monthly" },
  "/international-relations": { priority: 0.7, changefreq: "monthly" },
  "/iqac": { priority: 0.7, changefreq: "monthly" },
  "/placement/guest-lectures": { priority: 0.7, changefreq: "monthly" },
  "/placement/internships": { priority: 0.7, changefreq: "monthly" },
  "/placement/records": { priority: 0.7, changefreq: "monthly" },
  "/placement/team": { priority: 0.7, changefreq: "monthly" },
  "/pgdm-admissions": { priority: 0.7, changefreq: "weekly" },
  "/programs/fpm-efpm": { priority: 0.8, changefreq: "weekly" },
  "/programs/pgdm-ba": { priority: 0.8, changefreq: "weekly" },
  "/programs/pgdm-bifs": { priority: 0.8, changefreq: "weekly" },
  "/programs/pgdm-triple-specialisation": {
    priority: 0.8,
    changefreq: "weekly",
  },
  "/research/case-research-center": { priority: 0.6, changefreq: "monthly" },
  "/research/conferences": { priority: 0.6, changefreq: "monthly" },
  "/success-stories": { priority: 0.7, changefreq: "monthly" },
  "/students-life/life-at-ssim": { priority: 0.6, changefreq: "monthly" },
  "/students-life/news": { priority: 0.6, changefreq: "weekly" },
  "/students-life/students-achievements": {
    priority: 0.6,
    changefreq: "monthly",
  },
  "/students-life/students-feedback": {
    priority: 0.6,
    changefreq: "monthly",
  },
  "/virtual-tour": { priority: 0.6, changefreq: "monthly" },
};

const BLOCKED_BLOG_SLUGS = new Set([
  "cat-2025-results-out-your-complete-guide-to-next-steps",
]);

function normalizeRoutePath(routePath) {
  if (!routePath) return "/";
  const normalized = routePath === "/" ? "/" : `/${routePath}`.replace(/\/+/g, "/");
  return normalized.replace(/\/$/, "") || "/";
}

function isRouteGroup(segment) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicSegment(segment) {
  return segment.startsWith("[") && segment.endsWith("]");
}

function shouldExcludeRoute(routePath) {
  const normalized = normalizeRoutePath(routePath);

  if (EXCLUDED_STATIC_ROUTES.has(normalized)) {
    return true;
  }

  const segments = normalized.split("/").filter(Boolean);
  if (segments.some(isRouteGroup) || segments.some(isDynamicSegment)) {
    return true;
  }

  if (segments[0] === "api" || segments[0] === "admin") {
    return true;
  }

  return false;
}

function getRouteFromPageDir(dirPath) {
  const relativeDir = path.relative(APP_DIR, dirPath);
  const normalized = relativeDir.split(path.sep).filter(Boolean);

  if (normalized.length === 0) {
    return "/";
  }

  return `/${normalized.join("/")}`;
}

function hasPageFile(dirPath) {
  return PAGE_FILE_NAMES.some((fileName) =>
    fs.existsSync(path.join(dirPath, fileName))
  );
}

function walkAppRoutes(dirPath = APP_DIR) {
  const routes = [];

  if (!fs.existsSync(dirPath)) {
    return routes;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const currentDirHasPage = hasPageFile(dirPath);

  if (currentDirHasPage) {
    const routePath = getRouteFromPageDir(dirPath);
    if (!shouldExcludeRoute(routePath)) {
      routes.push(routePath);
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "api" || entry.name === "admin") continue;
    if (isRouteGroup(entry.name) || isDynamicSegment(entry.name)) continue;

    routes.push(...walkAppRoutes(path.join(dirPath, entry.name)));
  }

  return routes;
}

function inferRouteMetadata(routePath) {
  const normalized = normalizeRoutePath(routePath);
  const override = ROUTE_METADATA_OVERRIDES[normalized];
  if (override) {
    return override;
  }

  if (normalized === "/") {
    return { priority: 1.0, changefreq: "daily" };
  }

  if (normalized.startsWith("/blog")) {
    return {
      priority: normalized === "/blog" ? 0.8 : 0.7,
      changefreq: normalized === "/blog" ? "daily" : "monthly",
    };
  }

  if (normalized.startsWith("/events")) {
    return {
      priority: normalized.split("/").filter(Boolean).length > 1 ? 0.6 : 0.7,
      changefreq: "weekly",
    };
  }

  if (
    normalized.startsWith("/admissions") ||
    normalized.startsWith("/programs")
  ) {
    return { priority: 0.8, changefreq: "weekly" };
  }

  if (
    normalized.startsWith("/about") ||
    normalized.startsWith("/faculty") ||
    normalized.startsWith("/research") ||
    normalized.startsWith("/placement") ||
    normalized.startsWith("/students-life")
  ) {
    return { priority: 0.6, changefreq: "monthly" };
  }

  return { priority: 0.5, changefreq: "monthly" };
}

/**
 * Get all static routes from the app directory structure.
 * This is filesystem-driven so newly added pages are picked up automatically.
 */
export function getStaticRoutes() {
  const generated = Array.isArray(generatedRoutes) ? generatedRoutes : [];
  if (generated.length > 0) {
    const uniqueRoutes = new Map();

    for (const route of generated) {
      const routeUrl =
        typeof route === "string" ? route : route?.url || route?.path || "/";
      const normalized = normalizeRoutePath(routeUrl);
      if (uniqueRoutes.has(normalized)) continue;

      uniqueRoutes.set(normalized, {
        url: normalized,
        ...inferRouteMetadata(normalized),
        ...(typeof route === "string" ? {} : route),
      });
    }

    return [...uniqueRoutes.values()].sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }

      return a.url.localeCompare(b.url);
    });
  }

  const discoveredRoutes = walkAppRoutes();
  const uniqueRoutes = new Map();

  for (const routePath of discoveredRoutes) {
    const normalized = normalizeRoutePath(routePath);
    if (uniqueRoutes.has(normalized)) continue;

    uniqueRoutes.set(normalized, {
      url: normalized,
      ...inferRouteMetadata(normalized),
    });
  }

  return [...uniqueRoutes.values()].sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }

    return a.url.localeCompare(b.url);
  });
}

/**
 * Fetch all published blog posts from the database.
 */
export async function fetchPublishedBlogPosts(dbPool) {
  if (!dbPool) {
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

    return rows
      .filter((row) => !BLOCKED_BLOG_SLUGS.has(row.slug) && row.id !== 22)
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
 * Build the full sitemap URL set.
 */
export async function buildSitemapUrls({
  dbPool,
  currentTime = new Date().toISOString(),
} = {}) {
  const staticRoutes = getStaticRoutes().map((route) => ({
    ...route,
    lastmod: currentTime,
  }));

  const blogUrls = await fetchPublishedBlogPosts(dbPool);

  return {
    staticRoutes,
    blogUrls,
    allUrls: [...staticRoutes, ...blogUrls],
    generatedAt: currentTime,
  };
}

/**
 * Generate XML sitemap content.
 */
export function generateSitemapXml(urls, baseUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, priority, changefreq }) => `  <url>
    <loc>${sanitizeUrl(`${baseUrl}${url}`)}</loc>
    <lastmod>${sanitizeUrl(lastmod)}</lastmod>
    <changefreq>${sanitizeUrl(changefreq)}</changefreq>
    <priority>${sanitizeUrl(String(priority))}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}

/**
 * Validate URL structure.
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
 * Sanitize URL for sitemap output.
 */
export function sanitizeUrl(url) {
  return String(url).replace(/[<>"&]/g, (match) => {
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
