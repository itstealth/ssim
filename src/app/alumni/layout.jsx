export const metadata = {
  title: "SSIM Hyderabad Alumni Network | Leaders & Achievers",
  description:
    "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
  keywords:
    "SSIM alumni, Siva Sivani alumni, alumni network, business school alumni",
  openGraph: {
    title: "SSIM Hyderabad Alumni Network | Leaders & Achievers",
    description:
      "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
    url: "https://www.ssim.ac.in/alumni",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad Alumni Network | Leaders & Achievers",
    description:
      "Explore the inspiring journeys of SSIM Hyderabad alumni who are making an impact across industries with leadership, innovation, and excellence.",
    images: ["/ssimlogo.webp"],
},
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/alumni",
  },
};

export default function AlumniLayout({ children }) {
  return children;
}
