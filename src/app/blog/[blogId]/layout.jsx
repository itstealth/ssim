export async function generateMetadata({ params }) {
  // Await params in Next.js 15+
  const { blogId } = await Promise.resolve(params);

  try {
    // Build the API URL dynamically for both dev and production
    let apiUrl;
    let detectionMethod = 'unknown';
    
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      // Method 1: Use the environment variable if set (PREFERRED)
      apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${blogId}`;
      detectionMethod = 'NEXT_PUBLIC_BASE_URL';
    } else if (process.env.NEXT_PUBLIC_SITE_URL) {
      // Method 2: Fallback to SITE_URL
      apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${blogId}`;
      detectionMethod = 'NEXT_PUBLIC_SITE_URL';
    } else {
      // Method 3: Try to detect from Azure/hosting environment
      // Check various Azure environment variables
      const azureWebsiteName = process.env.WEBSITE_HOSTNAME || process.env.APPSETTING_WEBSITE_HOSTNAME;
      const vercelUrl = process.env.VERCEL_URL;
      
      if (azureWebsiteName) {
        // Azure App Service detected
        apiUrl = `https://${azureWebsiteName}/api/blogs/${blogId}`;
        detectionMethod = 'Azure WEBSITE_HOSTNAME';
      } else if (vercelUrl) {
        // Vercel detected
        apiUrl = `https://${vercelUrl}/api/blogs/${blogId}`;
        detectionMethod = 'Vercel URL';
      } else if (process.env.NODE_ENV === 'production') {
        // Production but no host detected - try relative URL as last resort
        // This will work if the API is on the same domain
        apiUrl = `/api/blogs/${blogId}`;
        detectionMethod = 'relative URL (same-domain fallback)';
        console.warn('[SEO Warning] No base URL configured, using relative URL. Set NEXT_PUBLIC_BASE_URL!');
      } else {
        // Development fallback
        apiUrl = `http://localhost:3000/api/blogs/${blogId}`;
        detectionMethod = 'localhost (development)';
      }
    }

    console.log('[SEO Debug] Fetching metadata from:', apiUrl);
    console.log('[SEO Debug] Detection method:', detectionMethod);
    console.log('[SEO Debug] Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'NOT SET',
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
      WEBSITE_HOSTNAME: process.env.WEBSITE_HOSTNAME || 'NOT SET',
      VERCEL_URL: process.env.VERCEL_URL || 'NOT SET',
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
    
    // Determine the base site URL for canonical and OG URLs
    let siteUrl;
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      siteUrl = process.env.NEXT_PUBLIC_BASE_URL;
    } else if (process.env.NEXT_PUBLIC_SITE_URL) {
      siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    } else if (process.env.WEBSITE_HOSTNAME) {
      siteUrl = `https://${process.env.WEBSITE_HOSTNAME}`;
    } else if (process.env.VERCEL_URL) {
      siteUrl = `https://${process.env.VERCEL_URL}`;
    } else {
      // Last resort - use a placeholder (should be replaced with actual domain)
      siteUrl = 'https://ssim.ac.in'; // Replace with your actual production domain
      console.warn('[SEO Warning] Using hardcoded domain. Please set NEXT_PUBLIC_BASE_URL!');
    }
    
    const canonicalUrl = post.canonicalUrl || `${siteUrl}/blog/${blogId}`;
    
    console.log('[SEO Debug] Site URL detected as:', siteUrl);
    console.log('[SEO Debug] Canonical URL:', canonicalUrl);

    // Check if this is the blocked blog post (id: 22)
    const isBlockedPost = post.id === 22 || post.id === '22' || post.slug === 'cat-2025-results-out-your-complete-guide-to-next-steps';

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
      robots: isBlockedPost ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
          noarchive: true,
          nosnippet: true,
        },
      } : {
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
