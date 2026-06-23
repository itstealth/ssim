const WP_BACKEND = 'https://ssim-blog-b9egbrcnfccjbzee.centralindia-01.azurewebsites.net';

export async function generateMetadata({ params }) {
  const { blogId } = await Promise.resolve(params);

  try {
    const response = await fetch(
      `${WP_BACKEND}/wp-json/wp/v2/posts?slug=${encodeURIComponent(blogId)}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return { title: "Blog Post Not Found - SSIM", description: "The requested blog post could not be found." };
    }

    const posts = await response.json();
    if (!posts.length) {
      return { title: "Blog Post Not Found - SSIM", description: "The requested blog post could not be found." };
    }

    const post = posts[0];
    const meta = post.meta || {};

    const title = meta.ssim_meta_title || post.title?.rendered || '';
    const description = meta.ssim_meta_description
      || (post.content?.rendered || '').replace(/<[^>]*>/g, '').substring(0, 157) + '...';
    const featuredImage = meta.ssim_image_url || meta.ssim_og_image_url || '';
    const authorName = meta.ssim_author_name || 'SSIM';
    const canonicalUrl = meta.ssim_canonical_url || `https://ssim.ac.in/blog/${blogId}`;

    return {
      title: `${title} | SSIM Blog`,
      description,
      keywords: meta.ssim_keywords || '',
      authors: [{ name: authorName }],
      openGraph: {
        title: meta.ssim_og_title || title,
        description: meta.ssim_og_description || description,
        url: canonicalUrl,
        siteName: 'Siva Sivani Institute of Management',
        images: featuredImage ? [{ url: featuredImage, width: 1200, height: 630, alt: meta.ssim_image_alt || title }] : [],
        locale: 'en_US',
        type: 'article',
        publishedTime: post.date,
        authors: [authorName],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.ssim_og_title || title,
        description: meta.ssim_og_description || description,
        images: featuredImage ? [featuredImage] : [],
        creator: '@SSIM',
      },
      alternates: { canonical: canonicalUrl },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post - SSIM',
      description: 'Read articles and insights from the Siva Sivani Institute of Management (SSIM) blog.',
    };
  }
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
