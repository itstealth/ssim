export const metadata = {
  title: "Conferences at SSIM | Knowledge & Innovation Hub",
  description:
    "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
  keywords:
    "SSIM conferences, business conferences, academic seminars, management events, research conferences",
  openGraph: {
    title: "Conferences at SSIM | Knowledge & Innovation Hub",
    description:
      "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
    url: "https://www.ssim.ac.in/research/conferences",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences at SSIM | Knowledge & Innovation Hub",
    description:
      "Discover conferences at SSIM Hyderabad, featuring expert talks, research presentations, and interactive sessions fostering innovation and academic excellence.",
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