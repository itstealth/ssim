export async function generateMetadata({ params }) {
  const { programId } = await params;
  
  const metadataMap = {
    "fpm-efpm": {
      title: "FPM/EFPM Programs – SSIM Hyderabad | Call 9391114948",
      description: "Explore our AICTE approved Fellow Program in Management and understand the eligibility for FPM in management to pursue advanced research careers.",
    },
    "pgdm-ba": {
      title: "PGDM Business Analytics course in Hyderabad  - SSIM",
      description: "Explore the PGDM BA programme Hyderabad and learn PGDM Business Analytics fees in Hyderabad along with eligibility criteria for admission.",
    },
    "pgdm-bifs": {
      title: "PGDM BIFS Program - SSIM Hyderabad | Call 9391114948",
      description: "Explore PGDM BIFS fees and placements Hyderabad to understand career prospects and program value for aspiring BFSI professionals.",
    },
    "pgdm-triple-specialisation": {
      title: "PGDM Triple Specialisation Hyderabad – SSIM | 3-in-1 Skill Set",
      description: "Explore the PGDM with Triple Specialisation at SSIM: two-year on-campus program with Major, Minor & Sector choices, 120 credits, strong industry alignment.",
    },
    "fpm": {
      title: "FPM/EFPM Programs – SSIM Hyderabad | Call 9391114948",
      description: "Explore our AICTE approved Fellow Program in Management and understand the eligibility for FPM in management to pursue advanced research careers.",
    },
    "efpm": {
      title: "FPM/EFPM Programs – SSIM Hyderabad | Call 9391114948",
      description: "Explore our AICTE approved Fellow Program in Management and understand the eligibility for FPM in management to pursue advanced research careers.",
    },
  };

  const metadata = metadataMap[programId] || {
    title: "Programs - SSIM Hyderabad",
    description: "Explore SSIM Hyderabad's management programs designed to shape future business leaders.",
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: "SSIM programs, PGDM programs, management courses, SSIM Hyderabad",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://www.ssim.ac.in/programs/${programId}`,
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.ssim.ac.in/programs/${programId}`,
    },
  };
}

export default function ProgramLayout({ children }) {
  return children;
}
