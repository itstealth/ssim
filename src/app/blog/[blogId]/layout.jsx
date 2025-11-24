export async function generateMetadata({ params }) {
  // Await params in Next.js 15+
  const { blogId } = await Promise.resolve(params);

  try {
    // Build the API URL dynamically for both dev and production
    let apiUrl;
    
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      // Use the environment variable if set
      apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${blogId}`;
    } else if (typeof window !== 'undefined') {
      // Client-side: use current origin (shouldn't happen in generateMetadata, but just in case)
      apiUrl = `${window.location.origin}/api/blogs/${blogId}`;
    } else {
      // Server-side in production: construct from headers or use relative URL
      // For Azure and most hosting, we can use absolute URL construction
      const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
      const host = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || 'localhost:3000';
      apiUrl = `${protocol}://${host}/api/blogs/${blogId}`;
    }

    console.log('[SEO Debug] Fetching metadata from:', apiUrl);
    console.log('[SEO Debug] Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    });

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('[SEO Debug] Response status:', response.status);

    if (!response.ok) {
      console.error('[SEO Error] Failed to fetch blog post:', response.status, response.statusText);
      return {
        title: "Blog Post Not Found - SSIM",
        description: "The requested blog post could not be found.",
      };
    }

    const post = await response.json();
    console.log('[SEO Debug] Post fetched successfully:', {
      id: post.id,
      title: post.title,
      slug: post.slug,
    });

    const title = post.metaTitle || post.title;
    const description = post.metaDescription || (post.content || '').replace(/<[^>]*>/g, '').substring(0, 157) + "...";
    const featuredImage = post.imageUrl;
    const authorName = post.authorName || "SSIM";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'https://ssim.ac.in';
    const canonicalUrl = post.canonicalUrl || `${siteUrl}/blog/${blogId}`;

    return {
      title: `${title} | SSIM Blog`,
      description: description,
      keywords: post.keywords,
      authors: [{ name: authorName }],
      openGraph: {
        title: post.ogTitle || title,
        description: post.ogDescription || description,
        url: canonicalUrl,
        siteName: "Siva Sivani Institute of Management",
        images: featuredImage
          ? [
              {
                url: featuredImage,
                width: 1200,
                height: 630,
                alt: post.imageAlt || title,
              },
            ]
          : [],
        locale: "en_US",
        type: "article",
        publishedTime: post.publishDate,
        authors: [authorName],
      },
      twitter: {
        card: "summary_large_image",
        title: post.ogTitle || title,
        description: post.ogDescription || description,
        images: featuredImage ? [featuredImage] : [],
        creator: "@SSIM",
      },
      alternates: {
        canonical: canonicalUrl,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error("[SEO Error] Error generating metadata for blog post:", error);
    console.error("[SEO Error] Stack trace:", error.stack);

    return {
      title: "Blog Post - SSIM",
      description: "Read articles and insights from the Siva Sivani Institute of Management (SSIM) blog.",
    };
  }
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
