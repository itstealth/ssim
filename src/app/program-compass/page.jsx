/**
 * page.jsx — Program Compass (Server Component).
 *
 * Holds the metadata and structured data; the interactive assessment itself is
 * a Client Component loaded below. The header, footer and floating CTAs come
 * from ConditionalLayout, so nothing needs to be repeated here.
 */
import ProgramCompassClient from "./ProgramCompassClient";

const PAGE_URL = "https://ssim.ac.in/program-compass";

export const metadata = {
  title: "Program Compass — Free PGDM Career Assessment | SSIM Hyderabad",
  description:
    "Take SSIM's free 5-minute Program Compass assessment. Based on the RIASEC interest model, it matches your interests and working style to the PGDM specialization that fits you best.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Program Compass — Free PGDM Career Assessment | SSIM Hyderabad",
    description:
      "18 questions, 5 minutes. Discover which of SSIM's six PGDM specializations matches your interests and working style.",
    url: PAGE_URL,
    siteName: "SSIM Hyderabad",
    images: ["/ssimlogo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Compass — Free PGDM Career Assessment | SSIM Hyderabad",
    description:
      "18 questions, 5 minutes. Discover which of SSIM's six PGDM specializations matches your interests and working style.",
    images: ["/ssimlogo.webp"],
  },
  robots: { index: true, follow: true },
  keywords: [
    "PGDM career assessment",
    "RIASEC test",
    "which PGDM specialization",
    "career aptitude test Hyderabad",
    "SSIM Program Compass",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Program Compass — Free PGDM Career Assessment",
      description:
        "A free 5-minute RIASEC-based assessment that matches a student's interests and working style to one of SSIM's six PGDM specializations.",
      isPartOf: { "@id": "https://ssim.ac.in/#website" },
      publisher: { "@id": "https://ssim.ac.in/#organization" },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ssim.ac.in" },
        { "@type": "ListItem", position: 2, name: "Program Compass", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Program Compass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Program Compass is a free career assessment from Siva Sivani Institute of Management. It uses the RIASEC interest model to match your interests and preferred working style to the PGDM specialization that suits you best.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the assessment take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About five minutes. There are 18 questions — 12 about what interests you and 6 about how you prefer to work.",
          },
        },
        {
          "@type": "Question",
          name: "Which specializations can I be matched to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business Analytics, Marketing, Human Resource Management, Operations Management, Banking and Insurance, and Finance.",
          },
        },
        {
          "@type": "Question",
          name: "Is Program Compass free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The assessment is completely free and your result is shown instantly on screen when you finish.",
          },
        },
      ],
    },
  ],
};

export default function ProgramCompassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="home-shell">
        <ProgramCompassClient />
      </div>
    </>
  );
}
