export async function generateMetadata({ params }) {
  const { blogId } = params;

  try {
    // Fetch blog post data from our own API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(
      `${baseUrl}/api/blogs/${blogId}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return {
        title: "Blog Post Not Found - SSIM",
        description: "The requested blog post could not be found.",
      };
    }

    const post = await response.json();

    console.log(post);

    const title = post.metaTitle || post.title;
    const description = post.metaDescription || (post.content || '').substring(0, 157) + "...";
    const featuredImage = post.imageUrl;
    const authorName = post.authorName || "SSIM";

    return {
      title: title,
      description: description,
      keywords: post.keywords,
      authors: [{ name: authorName }],
      openGraph: {
        title: post.ogTitle || title,
        description: post.ogDescription || description,
        url: post.canonicalUrl,
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
      },
      twitter: {
        card: "summary_large_image",
        title: post.ogTitle || title,
        description: post.ogDescription || description,
        images: featuredImage ? [featuredImage] : [],
      },
      alternates: {
        canonical: post.canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for blog post:", error);

    return {
      title: "Blog Post - SSIM",
      description: "Read articles and insights from the Siva Sivani Institute of Management (SSIM) blog.",
    };
  }
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
