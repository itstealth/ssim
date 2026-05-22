export const metadata = {
  title: "Life at SSIM Hyderabad | Campus Culture, Events & Student Activities",
  description: "Life at SSIM goes beyond textbooks – explore cultural fests, leadership talks, outbound training, clubs & community initiatives that build future-ready managers.",
  keywords: "SSIM campus life, student life, campus culture, SSIM experience",
  openGraph: {
    title: "Life at SSIM Hyderabad | Campus Culture, Events & Student Activities",
    description: "Life at SSIM goes beyond textbooks – explore cultural fests, leadership talks, outbound training, clubs & community initiatives that build future-ready managers.",
    url: "https://ssim.ac.in/students-life/life-at-ssim",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "Life at SSIM",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life at SSIM Hyderabad | Campus Culture, Events & Student Activities",
    description: "Life at SSIM goes beyond textbooks – explore cultural fests, leadership talks, outbound training, clubs & community initiatives that build future-ready managers.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/students-life/life-at-ssim",
  },
};

export default function LifeAtSSIMLayout({ children }) {
  return children;
}
