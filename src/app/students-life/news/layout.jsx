export const metadata = {
  title: "News & Announcements - SSIM Hyderabad | Latest Updates",
  description:
    "Stay updated with the latest news, events, and announcements from SSIM Hyderabad, keeping you informed about campus activities and initiatives.",
  keywords: "SSIM news, announcements, campus updates, SSIM events",
  openGraph: {
    title: "News & Announcements - SSIM Hyderabad | Latest Updates",
    description:
      "Stay updated with the latest news, events, and announcements from SSIM Hyderabad, keeping you informed about campus activities and initiatives.",
    url: "https://www.ssim.ac.in/students-life/news",
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
    title: "News & Announcements - SSIM Hyderabad",
    description:
      "Stay updated with the latest news, events, and announcements from SSIM Hyderabad, keeping you informed about campus activities and initiatives.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/students-life/news",
  },
};

export default function NewsLayout({ children }) {
  return children;
}
