export const metadata = {
  title: "Board of Governors | Leadership & Governance – SSIM Hyderabad",
  description: "Meet the Board of Governors at SSIM Hyderabad – a team of eminent academics and industry experts guiding the institute's vision, strategy, and academic excellence.",
  keywords: "SSIM board of governors, governance, PGDM college Hyderabad, management institute leadership",
  openGraph: {
    title: "Board of Governors | Leadership & Governance – SSIM Hyderabad",
    description: "Meet the Board of Governors at SSIM Hyderabad – a team of eminent academics and industry experts guiding the institute's vision, strategy, and academic excellence.",
    url: "https://www.ssim.ac.in/about/board-of-governors",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Board of Governors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Governors | Leadership & Governance – SSIM Hyderabad",
    description: "Meet the Board of Governors at SSIM Hyderabad – a team of eminent academics and industry experts guiding the institute's vision, strategy, and academic excellence.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/about/board-of-governors",
  },
};

export default function BoardOfGovernorsLayout({ children }) {
  return children;
}
