export const metadata = {
  title: "SSIM Hyderabad Case Research Center | Real-World Studies Hub",
  description: "Explore SSIM's Case Research Center — developing case studies, fostering research, and connecting academia with industry through hands-on learning resources.",
  keywords: "case research center, case studies, management case studies, SSIM research",
  openGraph: {
    title: "SSIM Hyderabad Case Research Center | Real-World Studies Hub",
    description: "Explore SSIM's Case Research Center — developing case studies, fostering research, and connecting academia with industry through hands-on learning resources.",
    url: "https://www.ssim.ac.in/research/case-research-center",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Case Research Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad Case Research Center",
    description: "Explore SSIM's Case Research Center — developing case studies, fostering research, and connecting academia with industry through hands-on learning resources.",
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
