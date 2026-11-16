import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

const WORDPRESS_URL = "https://ssim-blog-b9egbrcnfccjbzee.centralindia-01.azurewebsites.net";

// Cache validated public listing data across visitors. Throwing on upstream
// failures lets Next retain the last successful result during revalidation.
const getBlogListing = unstable_cache(async () => {
  const url = new URL("/wp-json/wp/v2/posts", WORDPRESS_URL);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("_embed", "wp:term,wp:featuredmedia");
  // Keep embedding links, but omit article bodies and unused SEO metadata.
  url.searchParams.set("_fields", "slug,title,date,meta.ssim_author_name,meta.ssim_meta_description,meta.ssim_image_url,meta.ssim_image_alt,_links,_embedded");

  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`WordPress listing failed: ${response.status}`);
  const posts = await response.json();
  if (!Array.isArray(posts)) throw new Error("Invalid WordPress listing response");
  return posts;
}, ["wordpress-blog-listing-v1"], { revalidate: 300 });

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
