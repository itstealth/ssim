export const metadata = {
  title: "Faculty Publications - SSIM Hyderabad | Research Insights",
  description:
    "Explore SSIM Hyderabad’s faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
  keywords:
    "SSIM Faculty Publications - SSIM Hyderabad | Research Insights, research papers, academic research, business school publications",
  openGraph: {
    title: "Faculty Publications - SSIM Hyderabad | Research Insights",
    description:
      "Explore SSIM Hyderabad’s faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
    url: "https://www.ssim.ac.in/faculty/publications",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Publications - SSIM Hyderabad | Research Insights",
    description:
      "Explore SSIM Hyderabad’s faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/faculty/publications",
  },
};

export default function PublicationsLayout({ children }) {
  return children;
}
