"use client";

import { useState, useMemo } from "react";
import "@/app/blog-content.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArticleSchema } from "@/components/Schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
  TableCaption,
} from "@/components/ui/table";
import { Clock, Calendar, ArrowLeft, List, ChevronDown, ChevronUp } from "lucide-react";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { MidContentCTA } from "@/components/blog/MidContentCTA";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { RecommendedPosts } from "@/components/blog/RecommendedPosts";

const fetchBlogPost = async (slug) => {
  const response = await fetch(`/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!response.ok) throw new Error('Failed to fetch blog post');
  const posts = await response.json();
  if (!posts.length) throw new Error('Blog post not found');
  const post = posts[0];
  const meta = post.meta || {};
  const terms = post._embedded?.['wp:term'] || [];

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || '',
    content: post.content?.rendered || '',
    imageUrl: meta.ssim_image_url || '',
    imageAlt: meta.ssim_image_alt || '',
    authorName: meta.ssim_author_name || 'SSIM Hyderabad',
    publishDate: post.date,
    metaTitle: meta.ssim_meta_title || '',
    metaDescription: meta.ssim_meta_description || '',
    keywords: meta.ssim_keywords || '',
    canonicalUrl: meta.ssim_canonical_url || '',
    jsonLdSchema: meta.ssim_json_ld || '',
    ogTitle: meta.ssim_og_title || '',
    ogDescription: meta.ssim_og_description || '',
    ogImageUrl: meta.ssim_og_image_url || '',
    categories: (terms[0] || []).map(t => t.name),
    tags: (terms[1] || []).map(t => t.name),
  };
};

// Safe JSON parse that NEVER throws
const parseJsonField = (value, defaultValue = []) => {
  if (typeof value !== "string") return defaultValue;
  const s = value.trim();
  if (!s) return defaultValue;
  try {
    return JSON.parse(s);
  } catch {
    return defaultValue;
  }
};

export default function BlogDetail() {
  const params = useParams();
  const blogId = params?.blogId;

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogPost(blogId),
    staleTime: 5 * 60 * 1000,
    // react-query v4 uses cacheTime, v5 uses gcTime. Keep this one since your original had cacheTime.
    cacheTime: 30 * 60 * 1000,
    enabled: !!blogId,
  });

  // Convert HTML table to shadcn Table component
  const convertTableToComponent = (tableElement) => {
    const thead = tableElement.querySelector("thead");
    const tbody = tableElement.querySelector("tbody");
    const tfoot = tableElement.querySelector("tfoot");
    const caption = tableElement.querySelector("caption");

    const allRows = tableElement.querySelectorAll("tr");
    let headerRows = [];
    let bodyRows = [];

    const isHeaderRow = (row) => {
      const cells = row.querySelectorAll("th, td");
      if (cells.length === 0) return false;

      const hasThElements = Array.from(cells).some(
        (cell) => cell.tagName === "TH"
      );
      if (hasThElements) return true;

      const allCellsHaveStrong = Array.from(cells).every((cell) =>
        cell.querySelector("strong")
      );
      if (allCellsHaveStrong) return true;

      const allCellsCentered = Array.from(cells).every((cell) => {
        const style = cell.getAttribute("style") || "";
        const p = cell.querySelector("p");
        const pStyle = p ? p.getAttribute("style") || "" : "";
        return (
          style.includes("text-align:center") ||
          pStyle.includes("text-align:center")
        );
      });
      if (allCellsCentered && cells.length > 0) return true;

      return false;
    };

    if (!thead) {
      if (tbody) {
        const tbodyRows = tbody.querySelectorAll("tr");
        if (tbodyRows.length > 0) {
          const firstRow = tbodyRows[0];
          if (isHeaderRow(firstRow)) {
            headerRows = [firstRow];
            bodyRows = Array.from(tbodyRows).slice(1);
          } else {
            bodyRows = Array.from(tbodyRows);
          }
        }
      } else {
        if (allRows.length > 0) {
          const firstRow = allRows[0];
          if (isHeaderRow(firstRow)) {
            headerRows = [firstRow];
            bodyRows = Array.from(allRows).slice(1);
          } else {
            bodyRows = Array.from(allRows);
          }
        }
      }
    } else {
      if (tbody) bodyRows = Array.from(tbody.querySelectorAll("tr"));
    }

    return (
      <div className="my-8 w-full table-scroll-container">
        <Table className="w-full min-w-full border-collapse border border-slate-200 rounded-lg blog-table">
          {caption && (
            <TableCaption className="mb-4 text-left">
              <div dangerouslySetInnerHTML={{ __html: caption.innerHTML }} />
            </TableCaption>
          )}

          {(thead || headerRows.length > 0) && (
            <TableHeader
              className="blog-table-header"
              style={{ backgroundColor: "#002F87", background: "#002F87" }}
            >
              {thead
                ? Array.from(thead.querySelectorAll("tr")).map(
                    (tr, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="blog-table-header-row"
                        style={{
                          backgroundColor: "#002F87",
                          background: "#002F87",
                        }}
                      >
                        {Array.from(tr.querySelectorAll("th, td")).map(
                          (cell, cellIndex) => (
                            <TableHead
                              key={cellIndex}
                              className="px-6 py-4 text-left font-bold text-white border-b-2 border-slate-300 whitespace-nowrap blog-table-header-cell"
                              style={{
                                backgroundColor: "#002F87",
                                background: "#002F87",
                                color: "#ffffff",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: cell.innerHTML,
                              }}
                            />
                          )
                        )}
                      </TableRow>
                    )
                  )
                : headerRows.map((tr, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      className="blog-table-header-row"
                      style={{
                        backgroundColor: "#002F87",
                        background: "#002F87",
                      }}
                    >
                      {Array.from(tr.querySelectorAll("th, td")).map(
                        (cell, cellIndex) => (
                          <TableHead
                            key={cellIndex}
                            className="px-6 py-4 text-left font-bold text-white border-b-2 border-slate-300 whitespace-nowrap blog-table-header-cell"
                            style={{
                              backgroundColor: "#002F87",
                              background: "#002F87",
                              color: "#ffffff",
                            }}
                            dangerouslySetInnerHTML={{ __html: cell.innerHTML }}
                          />
                        )
                      )}
                    </TableRow>
                  ))}
            </TableHeader>
          )}

          {(tbody || bodyRows.length > 0) && (
            <TableBody>
              {tbody && !headerRows.length
                ? Array.from(tbody.querySelectorAll("tr")).map(
                    (tr, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="border-b border-slate-200 hover:bg-slate-50"
                      >
                        {Array.from(tr.querySelectorAll("td, th")).map(
                          (cell, cellIndex) => {
                            const isHeader = cell.tagName === "TH";
                            const CellComponent = isHeader
                              ? TableHead
                              : TableCell;
                            return (
                              <CellComponent
                                key={cellIndex}
                                className={`px-6 py-4 text-slate-700 whitespace-nowrap ${
                                  isHeader
                                    ? "font-bold text-white bg-mainBlue"
                                    : ""
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: cell.innerHTML,
                                }}
                              />
                            );
                          }
                        )}
                      </TableRow>
                    )
                  )
                : bodyRows.map((tr, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      className="border-b border-slate-200 hover:bg-slate-50"
                    >
                      {Array.from(tr.querySelectorAll("td, th")).map(
                        (cell, cellIndex) => {
                          const isHeader = cell.tagName === "TH";
                          const CellComponent = isHeader
                            ? TableHead
                            : TableCell;
                          return (
                            <CellComponent
                              key={cellIndex}
                              className={`px-6 py-4 text-slate-700 whitespace-nowrap ${
                                isHeader
                                  ? "font-bold text-white bg-mainBlue"
                                  : ""
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: cell.innerHTML,
                              }}
                            />
                          );
                        }
                      )}
                    </TableRow>
                  ))}
            </TableBody>
          )}

          {tfoot && (
            <TableFooter>
              {Array.from(tfoot.querySelectorAll("tr")).map((tr, rowIndex) => (
                <TableRow key={rowIndex}>
                  {Array.from(tr.querySelectorAll("td, th")).map(
                    (cell, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        className="px-6 py-4 font-medium whitespace-nowrap"
                        dangerouslySetInnerHTML={{ __html: cell.innerHTML }}
                      />
                    )
                  )}
                </TableRow>
              ))}
            </TableFooter>
          )}
        </Table>
      </div>
    );
  };

  const { tocHtml, contentWithoutToc } = useMemo(() => {
    if (!blog?.content) return { tocHtml: null, contentWithoutToc: "" };
    const html = blog.content;
    const startStr = '<div id="ez-toc-container"';
    const startIdx = html.indexOf(startStr);
    if (startIdx === -1) return { tocHtml: null, contentWithoutToc: html };

    let divCount = 0;
    let endIdx = -1;
    const tagRegex = /<\/?div[^>]*>/gi;
    tagRegex.lastIndex = startIdx;
    
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
      if (match[0].toLowerCase().startsWith('</div')) {
        divCount--;
        if (divCount === 0) {
          endIdx = match.index + match[0].length;
          break;
        }
      } else if (match[0].toLowerCase().startsWith('<div')) {
        divCount++;
      }
    }

    if (endIdx !== -1) {
      let extractedToc = html.substring(startIdx, endIdx);
      
      // Fix TOC links: The WP plugin generates absolute URLs like 
      // href="https://ssim.ac.in/slug/#hash", which breaks Next.js routing.
      // We convert them to purely relative anchor links href="#hash"
      extractedToc = extractedToc.replace(/href="[^"]*#/g, 'href="#');

      return {
        tocHtml: extractedToc,
        contentWithoutToc: html.substring(0, startIdx) + html.substring(endIdx)
      };
    }
    return { tocHtml: null, contentWithoutToc: html };
  }, [blog?.content]);

  const processedContent = useMemo(() => {
    if (!contentWithoutToc) return [];

    const content = contentWithoutToc;

    // Find the position right after the 3rd </p> in the entire content
    const pCloseRegex = /<\/p>/gi;
    let paraCount = 0;
    let insertPos = -1;
    let match;

    while ((match = pCloseRegex.exec(content)) !== null) {
      paraCount++;
      if (paraCount === 3) {
        insertPos = match.index + match[0].length;
        break;
      }
    }

    // If there aren't 3 paragraphs, just render the whole content without CTA
    if (insertPos === -1) {
      return [{ type: "html", content, key: "main-chunk-0" }];
    }

    const before = content.substring(0, insertPos);
    const after = content.substring(insertPos);

    const parts = [];

    // Helper to expand an HTML segment into table + html parts (no CTA injection)
    const expandTables = (html, keyPrefix) => {
      if (!html.includes("<table") && !html.includes("<TABLE")) {
        return [{ type: "html", content: html, key: `${keyPrefix}-0` }];
      }
      const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/gi;
      const result = [];
      let lastIdx = 0;
      let tIdx = 0;
      let m;
      while ((m = tableRegex.exec(html)) !== null) {
        if (m.index > lastIdx) {
          const chunk = html.substring(lastIdx, m.index);
          if (chunk.trim()) result.push({ type: "html", content: chunk, key: `${keyPrefix}-h${tIdx}` });
        }
        result.push({ type: "table", content: m[0], key: `${keyPrefix}-t${tIdx}` });
        lastIdx = m.index + m[0].length;
        tIdx++;
      }
      if (lastIdx < html.length) {
        const rest = html.substring(lastIdx);
        if (rest.trim()) result.push({ type: "html", content: rest, key: `${keyPrefix}-h${tIdx}` });
      }
      return result.length > 0 ? result : [{ type: "html", content: html, key: `${keyPrefix}-0` }];
    };

    if (before.trim()) parts.push(...expandTables(before, "before"));
    parts.push({ type: "cta", key: "mid-cta" });
    if (after.trim()) parts.push(...expandTables(after, "after"));

    return parts;
  }, [blog?.content]);

  // Build schema data before any conditional returns to keep hook order stable
  const blogSchema = useMemo(() => {
    if (!blog) return null;
    return {
      headline: blog.title,
      image:
        blog.featuredImage ||
        blog.image ||
        blog.imageUrl ||
        "https://www.ssim.ac.in/ssimlogo.webp",
      author: {
        "@type": "Organization",
        name: blog.authorName || "Siva Sivani Institute of Management",
      },
      publisher: {
        "@type": "Organization",
        name: "Siva Sivani Institute of Management",
        logo: {
          "@type": "ImageObject",
          url: "https://www.ssim.ac.in/ssimlogo.webp",
        },
      },
      datePublished: blog.publishDate,
    };
  }, [blog]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-1/4" />
            <div className="h-12 bg-slate-200 rounded w-3/4" />
            <div className="h-64 bg-slate-200 rounded" />
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
              <div className="h-4 bg-slate-200 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-semibold mb-2">
            Error loading blog post
          </p>
          <p className="text-slate-600">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50/50 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-700 font-semibold">No blog data found.</p>
        </div>
      </div>
    );
  }

  // IMPORTANT FIX:
  // Your API returns categories as an ARRAY already (as shown in your response).
  // If it ever comes as a JSON string, this still handles it safely.
  const categories = Array.isArray(blog.categories)
    ? blog.categories
    : parseJsonField(blog.categories, []);

  const tags = Array.isArray(blog.tags)
    ? blog.tags
    : parseJsonField(blog.tags, []);

  const readTime = `${Math.ceil(
    ((blog.content || "").split(" ").length || 0) / 200
  )} min read`;

  const publishDate = new Date(blog.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const authorInitials = (blog.authorName || "A")
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {blogSchema && <ArticleSchema {...blogSchema} />}

      <div className="min-h-screen bg-slate-50/50 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <Button
            variant="ghost"
            className="mb-8 text-purple-600 hover:text-purple-700 hover:bg-purple-50 -ml-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>

          <article className="space-y-8">
            <div className="space-y-6">
              <h1
                className="text-3xl sm:text-5xl font-bold text-mainBlue leading-tight"
                dangerouslySetInnerHTML={{ __html: blog.title }}
              />

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-purple-100">
                    <AvatarImage src="/placeholder.svg" alt={blog.authorName} />
                    <AvatarFallback>{authorInitials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {blog.authorName}
                    </p>
                    <p className="text-sm text-slate-600">Author</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {readTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt || blog.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Sidebar - Sticky TOC (Desktop) */}
              {tocHtml && (
                <div className="hidden lg:block w-full lg:w-[320px] shrink-0 sticky top-6">
                  <ScrollArea className="h-[calc(100vh-3rem)] w-full rounded-2xl bg-white border-none shadow-lg text-sm blog-content sidebar-toc-only">
                    <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
                  </ScrollArea>
                </div>
              )}

              {/* Right Main Content */}
              <div className="w-full flex-1 min-w-0">
                {/* Mobile / Tablet Collapsible TOC (< lg screens) */}
                {tocHtml && (
                  <div className="block lg:hidden w-full mb-6 rounded-2xl bg-white p-4 sm:p-5 shadow-md border border-slate-200/80 text-sm blog-content sidebar-toc-only mobile-toc-hide-title">
                    <button
                      type="button"
                      onClick={() => setIsMobileTocOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between font-bold text-mainBlue text-base focus:outline-none cursor-pointer"
                      aria-expanded={isMobileTocOpen}
                    >
                      <span className="flex items-center gap-2">
                        <List className="w-5 h-5 text-purple-600" />
                        <span>Table of Contents</span>
                      </span>
                      {isMobileTocOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-500 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500 transition-transform duration-200" />
                      )}
                    </button>

                    {isMobileTocOpen && (
                      <div className="mt-3 pt-3 border-t border-slate-100 animate-in fade-in duration-200">
                        <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
                      </div>
                    )}
                  </div>
                )}

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <div className="blog-content main-content-no-toc">
                      {processedContent.map((part) => {
                        if (part.type === "cta") return <MidContentCTA key={part.key} />;
                        if (part.type === "table") {
                          if (typeof window === "undefined")
                            return <div key={part.key} dangerouslySetInnerHTML={{ __html: part.content }} />;
                          try {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(part.content, "text/html");
                            const tableEl = doc.querySelector("table");
                            if (!tableEl)
                              return (
                                <div
                                  key={part.key}
                                  dangerouslySetInnerHTML={{ __html: part.content }}
                                />
                              );
                            return <div key={part.key}>{convertTableToComponent(tableEl)}</div>;
                          } catch {
                            return (
                              <div
                                key={part.key}
                                dangerouslySetInnerHTML={{ __html: part.content }}
                              />
                            );
                          }
                        }
                        return (
                          <div
                            key={part.key}
                            dangerouslySetInnerHTML={{ __html: part.content }}
                          />
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>

          {((categories && categories.length > 0) || (tags && tags.length > 0)) && (
            <div className="my-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-200/80 space-y-4">
              {categories && categories.length > 0 && (
                <div className="flex gap-2 flex-wrap items-center">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2">Categories:</span>
                  {categories.map((category) => (
                    <Link key={`cat-${category}`} href={`/blog?category=${encodeURIComponent(category)}`}>
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 hover:bg-purple-200 cursor-pointer"
                      >
                        {category}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
              
              {tags && tags.length > 0 && (
                <div className="flex gap-2 flex-wrap items-center">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
                  {tags.map((tag) => (
                    <Link key={`tag-${tag}`} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge
                        variant="outline"
                        className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer border-slate-300"
                      >
                        # {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <AuthorBio />
          <BlogCTA />
          <RecommendedPosts currentSlug={blogId} />
        </div>
      </div>
    </>
  );
}
