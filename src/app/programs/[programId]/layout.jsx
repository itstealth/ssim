export async function generateMetadata({ params }) {
  const { programId } = await params;
  
  const metadataMap = {
    "fpm-efpm": {
      title: "FPM & EFPM Program | Fellow Program in Management | SSIM Hyderabad",
      description: "Pursue SSIM's FPM & EFPM – Fellow Program in Management. 3-year full-time doctoral program with 45 credits & 20 seats. AICTE-approved | Hyderabad. Apply now!",
    },
    "pgdm-ba": {
      title: "PGDM Business Analytics course in Hyderabad  - SSIM",
      description: "Explore the PGDM BA programme Hyderabad and learn PGDM Business Analytics fees in Hyderabad along with eligibility criteria for admission.",
    },
    "pgdm-bifs": {
      title: "PGDM in Banking, Insurance & Financial Services | SSIM Hyderabad",
      description: "Join SSIM's 2-year PGDM BIFS – a full-time program in Banking, Insurance & Financial Services. AICTE-approved | 120 Credits | 60 Seats | Hyderabad. Apply now!",
    },
    "pgdm-triple-specialisation": {
      title: "PGDM Triple Specialisation Hyderabad – SSIM | 3-in-1 Skill Set",
      description: "Explore the PGDM with Triple Specialisation at SSIM: two-year on-campus program with Major, Minor & Sector choices, 120 credits, strong industry alignment.",
    },
    "fpm": {
      title: "FPM & EFPM Program | Fellow Program in Management | SSIM Hyderabad",
      description: "Pursue SSIM's FPM & EFPM – Fellow Program in Management. 3-year full-time doctoral program with 45 credits & 20 seats. AICTE-approved | Hyderabad. Apply now!",
    },
    "efpm": {
      title: "FPM & EFPM Program | Fellow Program in Management | SSIM Hyderabad",
      description: "Pursue SSIM's FPM & EFPM – Fellow Program in Management. 3-year full-time doctoral program with 45 credits & 20 seats. AICTE-approved | Hyderabad. Apply now!",
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
