export const metadata = {
  title: "PGDM Business Analytics Admission 2026 | Fees & Admission Process – SSIM",
  description: "PGDM Business Analytics Admission 2026 Hyderabad open at SSIM. Explore fees, admission process, eligibility & placements for Business Analytics course.",
  keywords: "PGDM Business Analytics, PGDM BA, data analytics courses, business intelligence, SSIM PGDM",
  openGraph: {
    title: "PGDM Business Analytics Admission 2026 | Fees & Admission Process – SSIM",
    description: "PGDM Business Analytics Admission 2026 Hyderabad open at SSIM. Explore fees, admission process, eligibility & placements for Business Analytics course.",
    url: "https://www.ssim.ac.in/admissions/pgdm-ba",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM PGDM Business Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGDM Business Analytics Admission 2026 | Fees & Admission Process – SSIM",
    description: "PGDM Business Analytics Admission 2026 Hyderabad open at SSIM. Explore fees, admission process, eligibility & placements for Business Analytics course.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/admissions/pgdm-ba",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "PGDM - Business Analytics (PGDM-BA)",
  description:
    "2-year full-time AICTE-approved Post Graduate Diploma in Management in Business Analytics at Siva Sivani Institute of Management (SSIM) Hyderabad. The program equips students with advanced analytics, machine learning, and data-driven decision-making skills.",
  url: "https://ssim.ac.in/admissions/pgdm-ba",
  provider: {
    "@type": "Organization",
    name: "Siva Sivani Institute of Management (SSIM)",
    sameAs: "https://ssim.ac.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH44, Ruby Block, Kompally",
      addressLocality: "Secunderabad",
      addressRegion: "Telangana",
      postalCode: "500100",
      addressCountry: "IN",
    },
  },
  courseMode: "Full-time On-campus",
  educationalCredentialAwarded:
    "Post Graduate Diploma in Management - Business Analytics",
  numberOfCredits: 120,
  timeToComplete: "P2Y",
  inLanguage: "en",
  teaches: [
    "Python for Analytics",
    "Business Intelligence with Tableau and SQL",
    "Financial Analytics",
    "Marketing Analytics",
    "HR Analytics",
    "Machine Learning",
    "Design Thinking and Innovation",
    "Multivariate Data Analysis",
  ],
  offers: {
    "@type": "Offer",
    price: "840000",
    priceCurrency: "INR",
    description: "Total program fee for Batch 2026-28",
    validFrom: "2026-01-01",
    validThrough: "2028-12-31",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Full-time",
    startDate: "2026-07-01",
    endDate: "2028-06-30",
    offers: {
      "@type": "Offer",
      price: "840000",
      priceCurrency: "INR",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the eligibility criteria for PGDM-BA admission at SSIM Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Candidates must hold a recognized Bachelor's Degree (any discipline) from a UGC-recognized university with minimum 50% aggregate marks and a valid score from CAT, XAT, GMAT, CMAT, MAT, ATMA, or TS ICET. Final-year graduation students may apply provisionally. Work experience is not mandatory — fresh graduates with an aptitude for analytics are encouraged to apply.",
      },
    },
    {
      "@type": "Question",
      name: "Which entrance exams are accepted for PGDM-BA admission at SSIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SSIM accepts scores from CAT, XAT, GMAT, CMAT, MAT, ATMA, and TS ICET for PGDM-BA admissions. Candidates with a valid score from any one of these exams are eligible to apply, allowing students from diverse academic and regional backgrounds to gain access to the program.",
      },
    },
    {
      "@type": "Question",
      name: "Is work experience required to apply for PGDM-BA at SSIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Work experience is not mandatory for the PGDM-BA program at SSIM. The program welcomes fresh graduates with strong analytical aptitude alongside working professionals looking to upskill into analytics leadership roles.",
      },
    },
    {
      "@type": "Question",
      name: "What is the selection process for PGDM-BA at SSIM Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The selection process evaluates candidates on Aptitude Test Score (CAT/XAT/MAT/CMAT/ATMA/GMAT/State Exam), Academic Records (Class X, XII and Graduation), Work Experience and Certifications (not mandatory), and a Selection Round comprising SOP, Video Introduction, and Personal Interview.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total fee for PGDM-BA at SSIM Hyderabad for Batch 2026-28?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total program fee for PGDM-BA Batch 2026-28 is ₹8,40,000 (Eight Lakhs Forty Thousand only) for the complete two-year duration, payable in installments as per the fee schedule communicated by the admissions department.",
      },
    },
    {
      "@type": "Question",
      name: "What specialisations and electives are offered in PGDM-BA at SSIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PGDM-BA at SSIM covers Python for Analytics, Business Intelligence with Tableau and SQL, Financial Analytics, Marketing Analytics, HR Analytics, Machine Learning, Design Thinking and Innovation, and Multivariate Data Analysis.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration and credits for PGDM-BA at SSIM Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PGDM-BA at SSIM is a 2-year full-time on-campus program with 120 credits, designed to build comprehensive business analytics and data science capabilities.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ssim.ac.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Admissions",
      item: "https://ssim.ac.in/admissions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PGDM-BA Admissions",
      item: "https://ssim.ac.in/admissions/pgdm-ba",
    },
  ],
};

export default function PGDMBALayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
