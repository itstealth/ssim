export const metadata = {
    title: "FPM/EFPM - SSIM",
    description:
      "Learn about the FPM/EFPM program at Siva Sivani Institute of Management (SSIM). Discover our commitment to shaping future business leaders.",
    keywords:
      "SSIM FPM/EFPM, business school goals, management institute values",
    openGraph: {
      title: "FPM/EFPM - SSIM",
      description:
        "Learn about the FPM/EFPM program at Siva Sivani Institute of Management (SSIM). Discover our commitment to shaping future business leaders.",
      url: "https://www.ssim.ac.in/admissions/fpm-efpm",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM FPM/EFPM",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "FPM/EFPM - SSIM",
      description:
        "Learn about the FPM/EFPM program at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.ssim.ac.in/admissions/fpm-efpm",
    },
  };
  
  export default function FPM_EFPMLayout({ children }) {
    return children;
  }
  