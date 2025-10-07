export const metadata = {
  title: "International Relations",
  description:
    "Explore SSIM's international relations, collaborations, and global initiatives. Discover how we provide a global perspective to our students.",
  openGraph: {
    title: "International Relations",
    description:
      "Explore SSIM's international relations, collaborations, and global initiatives. Discover how we provide a global perspective to our students.",
    url: "https://www.ssim.ac.in/international-relations",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Relations",
    description:
      "Explore SSIM's international relations, collaborations, and global initiatives. Discover how we provide a global perspective to our students.",
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
