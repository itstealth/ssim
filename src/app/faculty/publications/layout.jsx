export const metadata = {
  title: "Faculty Publications",
  description:
    "Explore the latest research and publications from our faculty at Siva Sivani Institute of Management (SSIM). Discover their contributions to the field of management education.",
  keywords:
    "SSIM faculty publications, research papers, academic research, business school publications",
  openGraph: {
    title: "Faculty Publications",
    description:
      "Explore the latest research and publications from our faculty at Siva Sivani Institute of Management (SSIM). Discover their contributions to the field of management education.",
    url: "https://www.ssim.ac.in/faculty/publications",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Publications",
    description:
      "Explore the latest research and publications from our faculty at Siva Sivani Institute of Management (SSIM). Discover their contributions to the field of management education.",
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
