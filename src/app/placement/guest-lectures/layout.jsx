export const metadata = {
  title: "Guest Lectures - SSIM Hyderabad | Expert Insights",
  description:
    "Explore SSIM Hyderabad’s guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
  keywords:
    "SSIM guest lectures, industry experts, corporate sessions, business leaders",
  openGraph: {
    title: "Guest Lectures - SSIM Hyderabad | Expert Insights",
    description:
      "Explore SSIM Hyderabad’s guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
    url: "https://www.ssim.ac.in/placement/guest-lectures",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Guest Lectures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Lectures - SSIM Hyderabad | Expert Insights",
    description:
      "Explore SSIM Hyderabad’s guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/placement/guest-lectures",
  },
};

export default function GuestLecturesLayout({ children }) {
  return children;
}
