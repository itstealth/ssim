export const metadata = {
  title: "Message from Leaders - SSIM Hyderabad | Top PGDM College in Hyderabad",
  description:
    "Discover the leadership team at SSIM Hyderabad — visionary academicians and industry experts guiding one of the best PGDM colleges in Hyderabad.",
  keywords: "SSIM leadership, business school leaders, management team, academic leadership",
  openGraph: {
    title: "Message from Leaders - SSIM Hyderabad | Top PGDM College in Hyderabad",
    description:
      "Discover the leadership team at SSIM Hyderabad — visionary academicians and industry experts guiding one of the best PGDM colleges in Hyderabad.",
    url: "https://www.ssim.ac.in/about/message-from-leaders",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Leadership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from Leaders - SSIM Hyderabad",
    description:
      "Discover the leadership team at SSIM Hyderabad — visionary academicians and industry experts guiding one of the best PGDM colleges in Hyderabad.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/about/leadership",
  },
};

export default function MessageFromLeadersLayout({ children }) {
  return children;
}
