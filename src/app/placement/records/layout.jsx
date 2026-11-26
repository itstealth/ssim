export const metadata = {
  title: "SSIM Hyderabad Career Success Stories | Placement Records",
  description: "Explore SSIM Hyderabad's placement records showcasing student achievements, top recruiters, and career success across diverse industries and sectors.",
  keywords: "SSIM placements, placement records, career success, top recruiters, SSIM jobs",
  openGraph: {
    title: "SSIM Hyderabad Career Success Stories | Placement Records",
    description: "Explore SSIM Hyderabad's placement records showcasing student achievements, top recruiters, and career success across diverse industries and sectors.",
    url: "https://ssim.ac.in/placement/records",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent.png",
        width: 400,
        height: 89,
        alt: "SSIM Placement Records",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad Career Success Stories",
    description: "Explore SSIM Hyderabad's placement records showcasing student achievements, top recruiters, and career success across diverse industries and sectors.",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/placement/records",
  },
};

export default function PlacementRecordsLayout({ children }) {
  return children;
}
