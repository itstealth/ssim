export const metadata = {
    title: "SSIM Hyderabad Success Stories | Alumni & Student Triumphs",
    description:
      "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
    keywords:
      "SSIM alumni, Siva Sivani alumni, alumni network, business school alumni",
    openGraph: {
      title: "SSIM Hyderabad Success Stories | Alumni & Student Triumphs",
      description:
        "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
      url: "https://www.ssim.ac.in/success-stories",
      siteName: "Siva Sivani Institute of Management",
      images: ["/ssimlogo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "SSIM Hyderabad Success Stories | Alumni & Student Triumphs",
      description:
        "Read inspiring success stories from SSIM Hyderabad—alumni achievements, student milestones, and career journeys that exemplify dedication and excellence.",
      images: ["/ssimlogo.webp"],
  },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.ssim.ac.in/success-stories",
    },
  };

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
  
  export default function AlumniLayout({ children }) {
    return children;
  }
  