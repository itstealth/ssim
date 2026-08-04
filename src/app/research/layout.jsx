export const metadata = {
  title: "Research & Publications - SSIM Hyderabad",
  description:
    "Peer-reviewed papers, conference presentations, patents, faculty awards and books from the faculty of Siva Sivani Institute of Management, Hyderabad.",
  keywords:
    "SSIM research, faculty publications, management research, Scopus ABDC UGC-CARE papers, Sugyaan journal",
  openGraph: {
    title: "Research & Publications - SSIM Hyderabad",
    description:
      "Peer-reviewed papers, conference presentations, patents, faculty awards and books from the SSIM faculty.",
    url: "https://www.ssim.ac.in/research",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Research & Publications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Publications - SSIM Hyderabad",
    description:
      "Peer-reviewed papers, conference presentations, patents, faculty awards and books from the SSIM faculty.",
    images: ["/ssimlogo.webp"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ssim.ac.in/research" },
};

export default function ResearchLayout({ children }) {
  return children;
}
