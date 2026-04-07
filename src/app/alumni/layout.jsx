export const metadata = {
  title: "SSIM Hyderabad Alumni Network | Leaders & Achievers",
  description: "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
  keywords: "SSIM alumni, alumni network, business school graduates, SSIM success stories",
  openGraph: {
    title: "SSIM Hyderabad Alumni Network | Leaders & Achievers",
    description: "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
    url: "https://www.ssim.ac.in/alumni",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Alumni Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad Alumni Network",
    description: "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/alumni",
  },
};

export default function AlumniLayout({ children }) {
  return children;
}
