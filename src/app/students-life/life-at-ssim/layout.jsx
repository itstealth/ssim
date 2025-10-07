export const metadata = {
    title: "Life at SSIM - SSIM",
    description: "Explore campus life and activities at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM campus life, student activities, campus culture, student clubs, events",
    openGraph: {
      title: "Life at SSIM - SSIM",
      description: "Explore campus life and activities at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/students-life/life-at-ssim",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "Life at SSIM",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Life at SSIM - SSIM",
      description: "Explore campus life and activities at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/students-life/life-at-ssim",
  },
};

export default function LifeAtSSIMLayout({ children }) {
  return children;
} 