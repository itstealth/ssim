import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "src", "app");
const outFile = path.join(process.cwd(), "src", "lib", "generated-sitemap-routes.json");
const pageFiles = ["page.js", "page.jsx", "page.ts", "page.tsx"];
const excluded = new Set(["/api", "/admin", "/admin/blog/new", "/thank-you"]);

function isRouteGroup(segment) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicSegment(segment) {
  return segment.startsWith("[") && segment.endsWith("]");
}

function normalize(routePath) {
  if (!routePath) return "/";
  const normalized = routePath === "/" ? "/" : `/${routePath}`.replace(/\/+/g, "/");
  return normalized.replace(/\/$/, "") || "/";
}

function hasPageFile(dirPath) {
  return pageFiles.some((file) => fs.existsSync(path.join(dirPath, file)));
}

function walk(dirPath = appDir) {
  const routes = [];
  if (!fs.existsSync(dirPath)) return routes;

  if (hasPageFile(dirPath)) {
    const relative = path.relative(appDir, dirPath);
    const route = normalize(relative.split(path.sep).filter(Boolean).join("/"));
    const segments = route.split("/").filter(Boolean);
    if (
      !excluded.has(route) &&
      !segments.some(isRouteGroup) &&
      !segments.some(isDynamicSegment) &&
      segments[0] !== "api" &&
      segments[0] !== "admin"
    ) {
      routes.push(route);
    }
  }

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "api" || entry.name === "admin") continue;
    if (isRouteGroup(entry.name) || isDynamicSegment(entry.name)) continue;
    routes.push(...walk(path.join(dirPath, entry.name)));
  }

  return routes;
}

const routes = [...new Set(walk())].sort();
fs.writeFileSync(outFile, `${JSON.stringify(routes, null, 2)}\n`);
console.log(`Wrote ${routes.length} sitemap routes to ${outFile}`);
