import BlogListing from "./BlogListing";
import { getBlogListing } from "@/lib/wordpress-blog";

export const revalidate = 300;

export default async function BlogPage({ searchParams }) {
  // Render query-filtered listings on the server as well as client navigation.
  await searchParams;
  const posts = await getBlogListing();
  return <BlogListing initialPosts={posts} />;
}
