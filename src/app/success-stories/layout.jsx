export const metadata = {
  title: "SSIM Hyderabad Success Stories | Alumni & Student Triumphs",
  description: "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
  keywords: "SSIM success stories, alumni achievements, student success, career journeys",
  openGraph: {
    title: "SSIM Hyderabad Success Stories | Alumni & Student Triumphs",
    description: "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
    url: "https://ssim.ac.in/success-stories",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Success Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Hyderabad Success Stories",
    description: "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/success-stories",
  },
};

export default function SuccessStoriesLayout({ children }) {
  return children;
}
