export const metadata = {
  title: "Vision & Mission | SSIM – Premier Management Institute in Hyderabad",
  description: "Explore SSIM Hyderabad's Vision & Mission — nurturing responsible management graduates through ethics-based education, innovation, and research-driven learning.",
  keywords: "SSIM vision, SSIM mission, business school goals, management institute values",
  openGraph: {
    title: "Vision & Mission | SSIM – Premier Management Institute in Hyderabad",
    description: "Explore SSIM Hyderabad's Vision & Mission — nurturing responsible management graduates through ethics-based education, innovation, and research-driven learning.",
    url: "https://www.ssim.ac.in/about/vision-mission",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Vision and Mission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision & Mission | SSIM – Premier Management Institute in Hyderabad",
    description: "Explore SSIM Hyderabad's Vision & Mission — nurturing responsible management graduates through ethics-based education, innovation, and research-driven learning.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/about/vision-mission",
  },
};

export default function VisionMissionLayout({ children }) {
  return children;
}
