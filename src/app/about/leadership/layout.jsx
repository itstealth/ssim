export const metadata = {
  title: "Leadership - SSIM",
  description:
    "Meet the leadership team at Siva Sivani Institute of Management (SSIM). Our leaders are dedicated to fostering an environment of academic excellence and innovation.",
  keywords:
    "SSIM leadership, business school leaders, management team, academic leadership",
  openGraph: {
    title: "Leadership - SSIM",
    description:
      "Meet the leadership team at Siva Sivani Institute of Management (SSIM). Our leaders are dedicated to fostering an environment of academic excellence and innovation.",
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
    title: "Leadership - SSIM",
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
