export const metadata = {   
    title: "Case Research Center",
    description:
      "Discover the Case Research Center at Siva Sivani Institute of Management (SSIM). We are dedicated to advancing management education through case studies and research.",
    keywords:
      "SSIM case research center, business school research, management case studies, academic research",
    openGraph: {
      title: "Case Research Center",
      description:
        "Discover the Case Research Center at Siva Sivani Institute of Management (SSIM). We are dedicated to advancing management education through case studies and research.",
      url: "https://www.ssim.ac.in/research/case-research-center",
      siteName: "Siva Sivani Institute of Management",  
      images: ["/ssimlogo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Case Research Center",
      description:
        "Discover the Case Research Center at Siva Sivani Institute of Management (SSIM). We are dedicated to advancing management education through case studies and research.",
      images: ["/ssimlogo.webp"],
    },
    robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: "https://www.ssim.ac.in/research/case-research-center",
      },
  };

  export default function CaseResearchCenterLayout({ children }) {
    return children;
  }