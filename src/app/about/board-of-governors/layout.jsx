export const metadata = {
  title: "Board of Governors - SSIM",
  description: "Meet the Board of Governors at Siva Sivani Institute of Management (SSIM). Our board provides strategic direction and governance to ensure academic and operational excellence.",
  keywords: "SSIM board of governors, board of directors, academic governance, business school leadership, SSIM leadership team",
  openGraph: {
    title: "Board of Governors - SSIM",
    description: "Meet the Board of Governors at Siva Sivani Institute of Management (SSIM). Our board provides strategic direction and governance to ensure academic and operational excellence.",
    url: "https://www.ssim.ac.in/about/board-of-governors",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Board of Governors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Governors - SSIM",
    description: "Meet the Board of Governors at Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/about/board-of-governors",
  },
};

export default function BoardOfGovernorsLayout({ children }) {
  return children;
} 