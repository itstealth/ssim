export const metadata = {
  title: "News & Announcements - SSIM Hyderabad | Latest Updates",
  description:
    "Stay updated with the latest news, events, and announcements from SSIM Hyderabad, keeping you informed about campus activities and initiatives.",
  keywords: "SSIM news, announcements, campus updates, SSIM events",
  openGraph: {
    title: "News & Announcements - SSIM Hyderabad | Latest Updates",
    description:
      "Stay updated with the latest news, events, and announcements from SSIM Hyderabad, keeping you informed about campus activities and initiatives.",
    url: "https://ssim.ac.in/students-life/news",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent.png",
        width: 400,
        height: 89,
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
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/students-life/news",
  },
};

export default function NewsLayout({ children }) {
  return children;
}
