export const metadata = {
    title: "Internships - SSIM",
    description: "Explore internship opportunities and programs at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM internships, internship opportunities, summer internships, corporate internships",
    openGraph: {
      title: "Internships - SSIM",
      description: "Explore internship opportunities and programs at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/placement/internships",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM Internships",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Internships - SSIM",
      description: "Explore internship opportunities and programs at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/placement/internships",
  },
};

export default function InternshipsLayout({ children }) {
  return children;
} 