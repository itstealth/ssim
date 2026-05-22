export const metadata = {
  title: "Faculty Publications - SSIM Hyderabad | Research Insights",
  description: "Explore SSIM Hyderabad's faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
  keywords: "SSIM research, faculty publications, academic research, management research papers",
  openGraph: {
    title: "Faculty Publications - SSIM Hyderabad | Research Insights",
    description: "Explore SSIM Hyderabad's faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
    url: "https://ssim.ac.in/faculty/publications",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Faculty Publications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Publications - SSIM Hyderabad",
    description: "Explore SSIM Hyderabad's faculty publications showcasing impactful research, thought leadership, and academic contributions across management disciplines.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/faculty/publications",
  },
};

export default function FacultyPublicationsLayout({ children }) {
  return children;
}
