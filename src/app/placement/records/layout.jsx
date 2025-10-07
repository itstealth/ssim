export const metadata = {
    title: "Placement Records - SSIM",
    description: "View placement records and statistics at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM placement records, placement statistics, career outcomes, employment data",
    openGraph: {
      title: "Placement Records - SSIM",
      description: "View placement records and statistics at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/placement/records",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM Placement Records",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Placement Records - SSIM",
      description: "View placement records and statistics at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/placement/records",
  },
};

export default function RecordsLayout({ children }) {
  return children;
} 