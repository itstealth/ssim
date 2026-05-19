// src/components/blog/RecommendedPosts.jsx
"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Calendar } from "lucide-react";

const fetchAllBlogs = async () => {
  const res = await fetch("/api/blogs/all");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export function RecommendedPosts({ currentSlug }) {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllBlogs,
    staleTime: 5 * 60 * 1000,
  });

  const recommended = (posts || [])
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);

  if (!recommended.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#003366" }}>
        Recommended Reading
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {recommended.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group block rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p
                className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-[#003366] transition-colors"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
