export const metadata = {
    title: "News & Announcements - SSIM",
    description: "Stay updated with latest news and announcements at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM news, announcements, campus updates, student news, institute updates",
    openGraph: {
      title: "News & Announcements - SSIM",
      description: "Stay updated with latest news and announcements at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/students-life/news-announcements",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM News & Announcements",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "News & Announcements - SSIM",
      description: "Stay updated with latest news and announcements at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/students-life/news-announcements",
  },
};

export default function NewsAnnouncementsLayout({ children }) {
  return children;
} 