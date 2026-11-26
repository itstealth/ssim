export const metadata = {
  title: "SSIM Hyderabad International Relations | Global Partnerships",
  description: "Explore SSIM Hyderabad's international relations initiatives, global collaborations, student exchange programs, and worldwide academic partnerships.",
  keywords: "SSIM international relations, global partnerships, student exchange, international programs",
  openGraph: {
    title: "SSIM Hyderabad International Relations | Global Partnerships",
    description: "Explore SSIM Hyderabad's international relations initiatives, global collaborations, student exchange programs, and worldwide academic partnerships.",
    url: "https://ssim.ac.in/international-relations",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent.png",
        width: 400,
        height: 89,
        alt: "SSIM International Relations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad International Relations",
    description: "Explore SSIM Hyderabad's international relations initiatives, global collaborations, student exchange programs, and worldwide academic partnerships.",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/international-relations",
  },
};

export default function InternationalRelationsLayout({ children }) {
  return children;
}
