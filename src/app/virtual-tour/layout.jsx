export const metadata = {
  title: "Virtual Campus Tour | Explore SSIM Hyderabad in 360°",
  description: "Explore SSIM Hyderabad's world-class campus in 360°. Tour 17 locations across 4 categories – academics, admin, facilities & residences. Visit virtually today!",
  keywords: "SSIM virtual tour, 360 degree campus tour, SSIM Hyderabad campus, virtual campus visit",
  openGraph: {
    title: "Virtual Campus Tour | Explore SSIM Hyderabad in 360°",
    description: "Explore SSIM Hyderabad's world-class campus in 360°. Tour 17 locations across 4 categories – academics, admin, facilities & residences. Visit virtually today!",
    url: "https://ssim.ac.in/virtual-tour",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent-35-years.png",
        width: 400,
        height: 89,
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
    images: ["/logo-transparent-35-years.png"],
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
