export const metadata = {
    title: "Placement Team - SSIM",
    description: "Meet the placement team at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM placement team, career services, placement officers",
    openGraph: {
      title: "Placement Team - SSIM",
      description: "Meet the placement team at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/placement/team",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM Placement Team",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Placement Team - SSIM",
      description: "Meet the placement team at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/placement/team",
  },
};

export default function TeamLayout({ children }) {
  return children;
} 