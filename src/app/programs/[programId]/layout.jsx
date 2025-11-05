// Import the program data from your page component
const programData = {
  fpm: {
    name: "FPM",
    title: "FPM Programs – SSIM Hyderabad | Call 9391114948",
    description:
      "Join SSIM Hyderabad’s FPM programs for advanced research in management. Call 9391114948 to learn about admissions, curriculum, and research opportunities.",
    keyInfo: {
      duration: "3 years",
      credits: "45",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM)",
    },
  },
  efpm: {
    name: "EFPM",
    title: "EFPM Programs – SSIM Hyderabad | Call 9391114948",
    description:
      "Join SSIM Hyderabad’s EFPM programs for advanced research in management. Call 9391114948 to learn about admissions, curriculum, and research opportunities.",
    keyInfo: {
      duration: "3 years",
      credits: "36",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Executive Fellow Program in Management (EFPM)",
    },
  },
  "pgdm-ba": {
    name: "PGDM BA",
    title: "PGDM in Business Analytics - SSIM | Top PGDM College Hyderabad",
    description:
      "Join SSIM Hyderabad for PGDM in Business Analytics, one of the leading PGDM colleges in Hyderabad offering industry-focused management education.",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Business Analytics",
    },
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    title: "PGDM BIFS – SSIM Hyderabad | Call 9391114948",
    description:
      "SSIM offers PGDM-BIFS, a specialized program to master Banking, Insurance, and Financial Services, preparing students for BFSI careers.",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree:
        "Post Graduate Diploma in Management - Banking, Insurance and Financial Services",
    },
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    title: "PGDM Triple Specialisation – SSIM Hyderabad | 3-in-1 Skill Set",
    description:
      "Explore the PGDM Triple Specialisation at SSIM: two-year on-campus program with Major, Minor & Sector choices, 120 credits, strong industry alignment.",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "180",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management",
    },
  },
};

// URL mapping for program IDs
const urlToProgramId = {
  fpm: "fpm",
  efpm: "efpm",
  "pgdm-ba": "pgdm-ba",
  "pgdm-bifs": "pgdm-bifs",
  "pgdm-triple-specialisation": "pgdm-triple-specialisation",
};

export async function generateMetadata({ params }) {
  const { programId } = params;

  // Map URL segment to program ID
  const actualProgramId = urlToProgramId[programId];
  const program = programData[actualProgramId];

  if (!program) {
    return {
      title: "Program Not Found - SSIM",
      description: "The requested program could not be found.",
    };
  }

  const title = program.title || `${program.name} - SSIM`;
  const description =
    program.description ||
    `Explore the ${program.name} program at Siva Sivani Institute of Management (SSIM). Duration: ${program.keyInfo.duration}, Credits: ${program.keyInfo.credits}, Location: ${program.keyInfo.location}.`;
  const keywords = `SSIM ${program.name}, ${program.name} program, ${program.name} curriculum, ${program.name} admissions, ${program.keyInfo.degree}`;
  const canonicalUrl = `https://www.ssim.ac.in/programs/${programId}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: `${program.name} - SSIM`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ProgramsLayout({ children }) {
  return children;
}
