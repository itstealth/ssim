"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
// import SEO from "@/components/Seo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArticleSchema } from "@/components/Schema";

const fetchBlogPosts = async () => {
  const response = await fetch('/wp-json/wp/v2/posts?per_page=100&_embed');
  if (!response.ok) throw new Error(`Failed to fetch blogs (Status: ${response.status})`);
  const posts = await response.json();
  if (!Array.isArray(posts)) throw new Error('Invalid response format from API');

  return posts.map(post => {
    const meta = post.meta || {};
    const terms = post._embedded?.['wp:term'] || [];
    const categories = (terms[0] || []).map(t => t.name);
    const tags = (terms[1] || []).map(t => t.name);
    const authorName = meta.ssim_author_name || 'Siva Sivani Institute of Management';
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const featuredImageUrl = featuredMedia?.source_url || '';

    return {
      id: post.slug,
      title: post.title?.rendered || '',
      description: meta.ssim_meta_description || '',
      image: meta.ssim_image_url || featuredImageUrl || '/placeholder.svg',
      imageAlt: meta.ssim_image_alt || featuredMedia?.alt_text || '',
      author: {
        name: authorName,
        avatar: '/placeholder.svg',
        initials: authorName.split(' ').map(n => n[0]).join('').substring(0, 2),
      },
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
      }),
      readTime: '5 min read',
      category: categories.length > 0 ? categories[0] : 'Uncategorized',
      categories,
      tags,
      publishDate: post.date,
      authorName,
      imageUrl: meta.ssim_image_url || featuredImageUrl || '',
      originalSlug: post.slug,
    };
  });
};

function BlogContent() {
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get('category');
  const filterTag = searchParams.get('tag');
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // We fetch all posts at once and handle pagination on the client
  const {
    data: allPosts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  // Client-side pagination logic
  const filteredPosts = useMemo(() => {
    if (!allPosts) return [];
    return allPosts.filter(post => {
      if (filterCategory && !post.categories.includes(filterCategory)) return false;
      if (filterTag && !post.tags.includes(filterTag)) return false;
      return true;
    });
  }, [allPosts, filterCategory, filterTag]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, filterTag]);

  const totalPosts = filteredPosts?.length || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const currentPosts = filteredPosts?.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage(old => Math.max(old - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(old => old + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const delta = 1;
    let pages = [];

    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      pages.push(i);
    }

    if (pages[0] > 1) {
      if (pages[0] > 2) pages.unshift('...');
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < totalPages) {
      if (pages[pages.length - 1] < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  // Generate Article schemas for current posts
  const articleSchemas = useMemo(() => {
    if (!currentPosts || currentPosts.length === 0) return null;
    
    return currentPosts.map((post) => ({
      headline: post.title,
      image: post.imageUrl || post.image || "https://www.ssim.ac.in/ssimlogo.webp",
      author: {
        "@type": "Organization",
        name: post.authorName || "Siva Sivani Institute of Management",
      },
      publisher: {
        "@type": "Organization",
        name: "Siva Sivani Institute of Management",
        logo: {
          "@type": "ImageObject",
          url: "https://www.ssim.ac.in/ssimlogo.webp",
        },
      },
      datePublished: post.publishDate,
    }));
  }, [currentPosts]);

  return (
    <>
      {/* <SEO
        title="Blog"
        description="Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog. Stay informed on industry trends, management topics, and campus news."
        keywords="SSIM blog, management articles, business insights, student articles, faculty blogs"
        canonicalUrl="https://ssim.ac.in/blog"
      /> */}
      {/* Article Schemas for each blog post */}
      {articleSchemas && articleSchemas.map((schema, index) => (
        <ArticleSchema key={`article-schema-${index}`} {...schema} />
      ))}
      <section
        id="blog-section"
        className="py-20 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-mainBlue inline-block">
              {filterCategory ? `Category: ${filterCategory}` : filterTag ? `Tag: ${filterTag}` : 'Our recent blogs'}
            </h2>
            <div className="w-20 h-1 bg-mainBlue mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              {filterCategory || filterTag ? `Showing all articles related to ${filterCategory || filterTag}` : 'Discover insights and knowledge from our expert contributors on topics that matter to you.'}
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mainBlue mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="grid gap-12">
                {currentPosts?.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div
                        className={`flex flex-col ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Image container - Fixed the overflow issue */}
                        <div className="md:w-1/2 relative overflow-hidden">
                          <div className=" md:aspect-video md:h-full">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.imageAlt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        {/* Content container */}
                        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                          <h3 
                            className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-mainBlue transition-colors duration-300 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />

                          <p 
                            className="text-muted-foreground mb-6 leading-relaxed line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.description }}
                          />

                          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            {/* <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div> */}
                          </div>

                          {/* <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10 border-2 border-indigo-100">
                                <AvatarImage
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                />
                                <AvatarFallback className="bg-indigo-100 text-indigo-800">
                                  {post.author.initials}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{post.author.name}</span>
                            </div>
                          </div> */}

                          <Link
                            href={`/blog/${post.id}`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              behavior: "smooth";
                            }}
                            className="mt-auto"
                          >
                            <Button
                              className="bg-red-600 hover:bg-red-500 text-white px-6 transition-all duration-300 overflow-hidden group-hover:pl-7 group-hover:pr-9"
                              aria-label={`Read more about ${post.title}`}
                            >
                              <span>Read More</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Show loading overlay when fetching next page */}
              {/* isFetching and isLoading are removed as they are no longer relevant */}

              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      variant="outline"
                      className="h-8 w-8 p-0 sm:h-10 sm:w-10"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>

                    <div className="flex flex-wrap justify-center gap-2">
                      {getPageNumbers().map((page, index) => (
                        <div key={index}>
                          <Button
                            onClick={() => handlePageClick(page)}
                            variant={currentPage === page ? "default" : "outline"}
                            className={`h-8 w-8 sm:h-10 sm:w-10 ${
                              currentPage === page
                                ? "bg-mainBlue text-white"
                                : "hover:bg-mainBlue/80"
                            }`}
                          >
                            {page}
                          </Button>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      variant="outline"
                      className="h-8 w-8 p-0 sm:h-10 sm:w-10"
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground sm:hidden">
                    Page {currentPage} of {totalPages}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}


export default function BlogSection() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mainBlue"></div></div>}>
      <BlogContent />
    </Suspense>
  );
}
