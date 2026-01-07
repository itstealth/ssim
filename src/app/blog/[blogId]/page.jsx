"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArticleSchema } from "@/components/Schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Clock, Calendar, ArrowLeft } from "lucide-react";

// Helper function to fetch a single blog post from our API
const fetchBlogPost = async (slug) => {
  const response = await fetch(`/api/blogs/${slug}`);
  if (!response.ok) {
    if (response.status === 404) throw new Error("Blog post not found");
    throw new Error("Failed to fetch blog post");
  }
  return response.json();
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
        <Table className="w-full min-w-full border-collapse border border-slate-200 dark:border-slate-700 rounded-lg blog-table">
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
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50"
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
                                className={`px-6 py-4 text-slate-700 dark:text-slate-300 whitespace-nowrap ${
                                  isHeader
                                    ? "font-bold text-white dark:text-slate-100 bg-mainBlue dark:bg-slate-800"
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
                      className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50"
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
                              className={`px-6 py-4 text-slate-700 dark:text-slate-300 whitespace-nowrap ${
                                isHeader
                                  ? "font-bold text-white dark:text-slate-100 bg-mainBlue dark:bg-slate-800"
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

  const processedContent = useMemo(() => {
    if (!blog?.content) return null;

    if (!blog.content.includes("<table") && !blog.content.includes("<TABLE")) {
      return { __html: blog.content };
    }

    try {
      const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/gi;
      const parts = [];
      let lastIndex = 0;
      let match;
      let tableIndex = 0;

      while ((match = tableRegex.exec(blog.content)) !== null) {
        if (match.index > lastIndex) {
          const beforeContent = blog.content.substring(lastIndex, match.index);
          if (beforeContent.trim()) {
            parts.push({
              type: "html",
              content: beforeContent,
              key: `html-before-${tableIndex}`,
            });
          }
        }

        parts.push({
          type: "table",
          content: match[0],
          key: `table-${tableIndex}`,
        });

        lastIndex = match.index + match[0].length;
        tableIndex++;
      }

      if (lastIndex < blog.content.length) {
        const afterContent = blog.content.substring(lastIndex);
        if (afterContent.trim()) {
          parts.push({
            type: "html",
            content: afterContent,
            key: "html-after",
          });
        }
      }

      if (parts.length === 0) return { __html: blog.content };

      return parts.map((part) => {
        if (part.type === "html") {
          return (
            <div
              key={part.key}
              dangerouslySetInnerHTML={{ __html: part.content }}
            />
          );
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(part.content, "text/html");
        const tableElement = doc.querySelector("table");

        if (!tableElement) {
          return (
            <div
              key={part.key}
              dangerouslySetInnerHTML={{ __html: part.content }}
            />
          );
        }

        return (
          <div key={part.key}>{convertTableToComponent(tableElement)}</div>
        );
      });
    } catch (e) {
      console.error("Error processing blog content:", e);
      return { __html: blog.content };
    }
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
        <div className="container mx-auto px-4 max-w-5xl">
          <Button
            variant="ghost"
            className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 -ml-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>

          <article className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <h1
                className="text-3xl sm:text-5xl font-bold text-mainBlue leading-tight"
                dangerouslySetInnerHTML={{ __html: blog.title }}
              />

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-blue-100">
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

            <div className="relative aspect-video w-full sm:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt || blog.title}
                className="object-cover w-full h-full"
              />
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="blog-content">
                  {processedContent && Array.isArray(processedContent) ? (
                    processedContent
                  ) : processedContent && processedContent.__html ? (
                    <div dangerouslySetInnerHTML={processedContent} />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  )}
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </>
  );
}
