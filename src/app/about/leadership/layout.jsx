export const metadata = {
  title: "Leadership - SSIM Hyderabad | Top MBA College in Hyderabad",
  description:
    "Discover the leadership team at SSIM Hyderabad — visionary academicians and industry experts guiding one of the best MBA colleges in Hyderabad.",
  keywords:
    "SSIM leadership, business school leaders, management team, academic leadership",
  openGraph: {
    title: "Leadership - SSIM Hyderabad | Top MBA College in Hyderabad",
    description:
      "Discover the leadership team at SSIM Hyderabad — visionary academicians and industry experts guiding one of the best MBA colleges in Hyderabad.",
    url: "https://www.ssim.ac.in/about/leadership",
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
    title: "Leadership - SSIM Hyderabad | Top MBA College in Hyderabad",
    description:
      "Meet the leadership team at Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/about/leadership",
  },
};

export default function LeadershipLayout({ children }) {
  return children;
}
