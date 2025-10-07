export const metadata = {
  title: "Conferences at SSIM",
  description:
    "Stay updated on the latest conferences, seminars, and academic events at Siva Sivani Institute of Management (SSIM). Join us for insightful discussions and networking opportunities.",
  keywords:
    "SSIM conferences, business conferences, academic seminars, management events, research conferences",
  openGraph: {
    title: "Conferences at SSIM",
    description:
      "Stay updated on the latest conferences, seminars, and academic events at Siva Sivani Institute of Management (SSIM). Join us for insightful discussions and networking opportunities.",
    url: "https://www.ssim.ac.in/research/conferences",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conferences at SSIM",
    description:
      "Stay updated on the latest conferences, seminars, and academic events at Siva Sivani Institute of Management (SSIM). Join us for insightful discussions and networking opportunities.",
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