export const metadata = {
  title: "Faculty Areas of Expertise",
  description:
    "Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more.",
  keywords:
    "SSIM faculty, faculty expertise, business school professors, academic areas",
  openGraph: {
    title: "Faculty Areas of Expertise",
    description:
      "Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more.",
    url: "https://www.ssim.ac.in/faculty/areas",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Areas of Expertise",
    description:
      "Explore the diverse areas of expertise of our distinguished faculty at Siva Sivani Institute of Management (SSIM). Meet our experts in Finance, HR, Marketing, and more.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/faculty/areas",
  },
};

export default function AreasLayout({ children }) {
  return children;
}   