export const metadata = {
  title: "Board of Studies - SSIM",
  description:
    "Meet the Board of Studies at Siva Sivani Institute of Management (SSIM). Our board ensures the curriculum is relevant, rigorous, and industry-aligned.",
  keywords:
    "SSIM board of studies, academic curriculum, course development, business school academics",
  openGraph: {
    title: "Board of Studies - SSIM",
    description:
      "Meet the Board of Studies at Siva Sivani Institute of Management (SSIM). Our board ensures the curriculum is relevant, rigorous, and industry-aligned.",
    url: "https://www.ssim.ac.in/about/board-of-studies",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Board of Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Studies - SSIM",
    description:
      "Meet the Board of Studies at Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/about/board-of-studies",
  },
};

export default function BoardOfStudiesLayout({ children }) {
  return children;
}
