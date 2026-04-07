export const metadata = {
  title: "Board of Governors - SSIM | PGDM in Hyderabad",
  description: "Meet the Board of Governors at SSIM Hyderabad — visionary leaders and experts guiding one of the top PGDM colleges in Hyderabad.",
  keywords: "SSIM board of governors, governance, PGDM college Hyderabad, management institute leadership",
  openGraph: {
    title: "Board of Governors - SSIM | PGDM in Hyderabad",
    description: "Meet the Board of Governors at SSIM Hyderabad — visionary leaders and experts guiding one of the top PGDM colleges in Hyderabad.",
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
    title: "Board of Governors - SSIM",
    description: "Meet the Board of Governors at SSIM Hyderabad — visionary leaders and experts guiding one of the top PGDM colleges in Hyderabad.",
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
