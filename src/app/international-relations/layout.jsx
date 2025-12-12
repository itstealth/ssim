export const metadata = {
  title: "SSIM Hyderabad International Relations | Global Partnerships",
  description: "Explore SSIM Hyderabad's international relations initiatives, global collaborations, student exchange programs, and worldwide academic partnerships.",
  keywords: "SSIM international relations, global partnerships, student exchange, international programs",
  openGraph: {
    title: "SSIM Hyderabad International Relations | Global Partnerships",
    description: "Explore SSIM Hyderabad's international relations initiatives, global collaborations, student exchange programs, and worldwide academic partnerships.",
    url: "https://www.ssim.ac.in/international-relations",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
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
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/international-relations",
  },
};

export default function InternationalRelationsLayout({ children }) {
  return children;
}
