/**
 * Downloads the real campus images used on the About SSGI page into
 * public/images/about-ssgi/ so they're served from your own domain instead
 * of being hotlinked from ssim.ac.in.
 *
 * Why this matters: hotlinking the ssim.ac.in /_next/image URLs is almost
 * certainly why images weren't rendering — Next.js's image optimizer
 * endpoint (and/or the CDN in front of it) commonly rejects requests that
 * don't come from its own site (hotlink / referer protection), so the
 * browser gets a 403 when a *different* site's page tries to load them.
 * Downloading once and serving locally sidesteps that entirely, and is
 * better practice anyway (no dependency on ssim.ac.in staying up or
 * keeping the same file paths).
 *
 * Usage:
 *   node scripts/fetch-about-ssgi-images.mjs
 *
 * Requires Node 18+ (built-in fetch). Run from your project root.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "public", "images", "about-ssgi");

const IMAGES = {
  "hero-campus.jpg": "https://ssim.ac.in/hero-sm.png",
  "campus-life.jpg": "https://ssim.ac.in/_next/image?url=%2FHome%2Fcampus-image.webp&w=3840&q=75",
  "campus-wide.jpg": "https://ssim.ac.in/_next/image?url=%2Fcampus.webp&w=1920&q=75",
  "about-campus.jpg": "https://ssim.ac.in/_next/image?url=%2Fabout_ssim%2Faboutssim.webp&w=1920&q=75",
};

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const [filename, url] of Object.entries(IMAGES)) {
    process.stdout.write(`Fetching ${filename} ... `);
    try {
      const res = await fetch(url, {
        headers: {
          // Some hotlink protection only checks Referer; requesting with
          // no referer / a same-site-looking UA from a server context
          // (not a browser tab on another domain) usually gets through.
          "User-Agent": "Mozilla/5.0 (compatible; ImageFetchScript/1.0)",
        },
      });
      if (!res.ok) {
        console.log(`FAILED (${res.status} ${res.statusText})`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(path.join(OUT_DIR, filename), buf);
      console.log(`OK (${(buf.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`FAILED (${err.message})`);
    }
  }

  console.log(`\nDone. Images saved to public/images/about-ssgi/`);
  console.log(
    `If any failed, open the URL directly in a browser, save it manually into that folder with the matching filename, or swap in your own campus photography — the component just expects /images/about-ssgi/<filename>.`
  );
}

main();
