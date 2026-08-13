export const metadata = {
  title: "Conferences at SSIM | Knowledge & Innovation Hub",
  description: "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
  keywords: "SSIM conferences, academic conferences, management conferences, research events",
  openGraph: {
    title: "Conferences at SSIM | Knowledge & Innovation Hub",
    description: "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
    url: "https://www.ssim.ac.in/research/conferences",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Conferences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences at SSIM",
    description: "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/research/conferences",
  },
};

export default function ConferencesLayout({ children }) {
  return children;
}
