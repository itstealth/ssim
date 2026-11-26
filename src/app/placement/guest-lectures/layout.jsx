export const metadata = {
  title: "Guest Lectures - SSIM Hyderabad | Expert Insights",
  description: "Explore SSIM Hyderabad's guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
  keywords: "SSIM guest lectures, industry experts, expert talks, management lectures",
  openGraph: {
    title: "Guest Lectures - SSIM Hyderabad | Expert Insights",
    description: "Explore SSIM Hyderabad's guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
    url: "https://ssim.ac.in/placement/guest-lectures",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent-35-years.png",
        width: 400,
        height: 89,
        alt: "SSIM Guest Lectures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Lectures - SSIM Hyderabad",
    description: "Explore SSIM Hyderabad's guest lectures featuring industry leaders and academicians, providing students with practical insights and expert knowledge.",
    images: ["/logo-transparent-35-years.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/placement/guest-lectures",
  },
};

export default function GuestLecturesLayout({ children }) {
  return children;
}
