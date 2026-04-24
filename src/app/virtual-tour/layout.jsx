export const metadata = {
  title: "Virtual Campus Tour | Explore SSIM Hyderabad in 360°",
  description: "Explore SSIM Hyderabad's world-class campus in 360°. Tour 17 locations across 4 categories – academics, admin, facilities & residences. Visit virtually today!",
  keywords: "SSIM virtual tour, 360 degree campus tour, SSIM Hyderabad campus, virtual campus visit",
  openGraph: {
    title: "Virtual Campus Tour | Explore SSIM Hyderabad in 360°",
    description: "Explore SSIM Hyderabad's world-class campus in 360°. Tour 17 locations across 4 categories – academics, admin, facilities & residences. Visit virtually today!",
    url: "https://www.ssim.ac.in/virtual-tour",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Virtual Campus Tour",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Campus Tour | Explore SSIM Hyderabad in 360°",
    description: "Explore SSIM Hyderabad's world-class campus in 360°. Tour 17 locations across 4 categories – academics, admin, facilities & residences. Visit virtually today!",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/virtual-tour",
  },
};

export default function VirtualTourLayout({ children }) {
  return children;
}
