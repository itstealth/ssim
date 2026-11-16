import { unstable_cache } from "next/cache";

const WORDPRESS_URL = "https://ssim-blog-b9egbrcnfccjbzee.centralindia-01.azurewebsites.net";

// Cache validated public listing data across visitors. Throwing on upstream
// failures lets Next retain the last successful result during revalidation.
export const getBlogListing = unstable_cache(async () => {
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
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    meta: post.meta,
    _embedded: {
      "wp:term": (post._embedded?.["wp:term"] || []).map((terms) =>
        terms.map(({ name }) => ({ name }))
      ),
      "wp:featuredmedia": (post._embedded?.["wp:featuredmedia"] || []).map((media) => ({
        source_url: media.source_url,
        alt_text: media.alt_text,
      })),
    },
  }));
}, ["wordpress-blog-listing-v2"], { revalidate: 300 });

export const getBlogPost = unstable_cache(async (slug) => {
  const url = new URL("/wp-json/wp/v2/posts", WORDPRESS_URL);
  url.searchParams.set("slug", slug);
  url.searchParams.set("_embed", "wp:term,wp:featuredmedia");
  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`WordPress post failed: ${response.status}`);
  const posts = await response.json();
  if (!Array.isArray(posts)) throw new Error("Invalid WordPress post response");
  return posts[0] || null;
}, ["wordpress-blog-post-v1"], { revalidate: 300 });
