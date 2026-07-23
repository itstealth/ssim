export const metadata = {
    title: "SSIM Blog | Management Insights, MBA Tips & Industry Trends",
    description: "Explore SSIM's blog for expert insights on management, MBA career tips, business trends & leadership — written by faculty, students, and industry contributors.",
    alternates: {
        canonical: "https://ssim.ac.in/blog",
    },
    openGraph: {
        title: "SSIM Blog | Management Insights, MBA Tips & Industry Trends",
        description: "Explore SSIM's blog for expert insights on management, MBA career tips, business trends & leadership — written by faculty, students, and industry contributors.",
        url: "https://ssim.ac.in/blog",
        siteName: "SSIM",
        images: [
            { url: "/blog/blog-banner.jpg" },
        ],
    },
    alternates: {
        canonical: "https://ssim.ac.in/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "SSIM Blog | Management Insights, MBA Tips & Industry Trends",
        description: "Explore SSIM's blog for expert insights on management, MBA career tips, business trends & leadership — written by faculty, students, and industry contributors.",
        images: ["/blog/blog-banner.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/ssim-favicon.png",
    },
    manifest: "/manifest.json",
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

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function BlogLayout({ children }) {
    return <>{children}</>;
}   