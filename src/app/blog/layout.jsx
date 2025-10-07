export const metadata = {
    title: "Blog - SSIM",
    description: "Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog. Stay informed on industry trends, management topics, and campus news.",
    alternates: {
        canonical: "https://www.ssim.ac.in/blog",
    },
    openGraph: {
        title: "Blog - SSIM",
        description: "Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog. Stay informed on industry trends, management topics, and campus news.",
        url: "https://www.ssim.ac.in/blog",
        siteName: "SSIM",
        images: [
            { url: "/blog/blog-banner.jpg" },
        ],
    },
    alternates: {
        canonical: "https://www.ssim.ac.in/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - SSIM",
        description: "Read the latest articles and insights from the Siva Sivani Institute of Management (SSIM) blog. Stay informed on industry trends, management topics, and campus news.",
        images: ["/blog/blog-banner.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.png",
    },
    manifest: "/manifest.json",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
    category: "education",
    creator: "Siva Sivani Institute of Management",
    publisher: "Siva Sivani Institute of Management",
    author: "Siva Sivani Institute of Management",
    copyright: "Siva Sivani Institute of Management",
    language: "en-US",
    type: "website",
    url: "https://www.ssim.ac.in/blog",
    siteName: "SSIM",
    image: "/blog/blog-banner.jpg",
    locale: "en_US",
    robots: {
        index: true,
        follow: true,
    },
    keywords: ["SSIM blog", "management articles", "business insights", "student articles", "faculty blogs"],
    category: "education",
    creator: "Siva Sivani Institute of Management",
    publisher: "Siva Sivani Institute of Management",
    author: "Siva Sivani Institute of Management",
    copyright: "Siva Sivani Institute of Management",
    language: "en-US",
    type: "website",
    url: "https://www.ssim.ac.in/blog",
    siteName: "SSIM",
    image: "/blog/blog-banner.jpg",
    locale: "en_US",
    robots: {
        index: true,
        follow: true,
    },
};

export default function BlogLayout({ children }) {
    return <>{children}</>;
}   