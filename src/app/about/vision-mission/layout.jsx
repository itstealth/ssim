export const metadata = {
  title: "Vision And Mission - SSIM Hyderabad",
  description:
    "Explore SSIM Hyderabad’s vision and mission, driving excellence in PGDM education with innovative, industry-relevant learning in Telangana.",
  keywords:
    "SSIM vision, SSIM mission, business school goals, management institute values",
  openGraph: {
    title: "Vision And Mission - SSIM Hyderabad",
    description:
      "Explore SSIM Hyderabad’s vision and mission, driving excellence in PGDM education with innovative, industry-relevant learning in Telangana.",
    url: "https://www.ssim.ac.in/about/vision-mission",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Vision & Mission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision And Mission - SSIM Hyderabad",
    description:
      "Learn about the vision, mission, and goals of Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/about/vision-mission",
  },
};

export default function VisionMissionLayout({ children }) {
  return children;
}
