export async function generateMetadata({ params }) {
  const { blogId } = params;

  try {
    // Fetch blog post data
    const response = await fetch(
      `https://ssim.ac.in/wp-json/wp/v2/posts?slug=${blogId}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return {
        title: "Blog Post Not Found - SSIM",
        description: "The requested blog post could not be found.",
        alternates: {
          canonical: `https://www.ssim.ac.in/blog/${blogId}`,
        },
      };
    }

    const posts = await response.json();

    if (!posts || posts.length === 0) {
      return {
        title: "Blog Post Not Found - SSIM",
        description: "The requested blog post could not be found.",
        alternates: {
          canonical: `https://www.ssim.ac.in/blog/${blogId}`,
        },
      };
    }

    const post = posts[0];

    // Extract clean text from HTML content
    const cleanDescription = post.yoast_head_json.description;

    // Get categories
    const categories =
      post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];

    // Get featured image
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    // Get author info
    const author = post._embedded?.author?.[0];
    const authorName = author?.name || "SSIM";

    // Calculate read time
    const wordCount = post.content.rendered.split(" ").length;
    const readTime = Math.ceil(wordCount / 200);

    const title = post.title.rendered;
    const description =
      cleanDescription.length > 160
        ? cleanDescription.substring(0, 157) + "..."
        : cleanDescription;

    return {
      title: `${title}`,
      description: description,
      keywords: categories.join(", "),
      authors: [{ name: authorName }],
      openGraph: {
        title: title,
        description: description,
        url: `https://www.ssim.ac.in/blog/${blogId}`,
        siteName: "Siva Sivani Institute of Management",
        images: featuredImage
          ? [
              {
                url: featuredImage,
                width: 1200,
                height: 630,
                alt: title,
              },
            ]
          : [
              {
                url: "/ssimlogo.webp",
                width: 1200,
                height: 630,
                alt: "SSIM Blog",
              },
            ],
        locale: "en_US",
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [authorName],
        tags: categories,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: featuredImage ? [featuredImage] : ["/ssimlogo.webp"],
        creator: "@ssim_official",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: `https://www.ssim.ac.in/blog/${blogId}`,
      },
      other: {
        "article:published_time": post.date,
        "article:modified_time": post.modified,
        "article:author": authorName,
        "article:section": categories[0] || "General",
        "article:tag": categories.join(", "),
        "twitter:label1": "Reading time",
        "twitter:data1": `${readTime} min read`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for blog post:", error);

    return {
      title: "Blog Post - SSIM",
      description:
        "Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog.",
      alternates: {
        canonical: `https://www.ssim.ac.in/blog/${blogId}`,
      },
    };
  }
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
