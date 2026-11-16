import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/wordpress-blog";
import BlogDetail from "./BlogDetail";

export const revalidate = 300;

export function generateStaticParams() {
  return [];
}

export default async function BlogPage({ params }) {
  const { blogId } = await params;
  const post = await getBlogPost(blogId);
  if (!post) notFound();
  return <BlogDetail key={blogId} initialPost={post} />;
}
