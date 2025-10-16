export const metadata = {
    title: "Student Feedback - SSIM Hyderabad | Share Your Insights",
    description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
    keywords: "SSIM student feedback, student testimonials, student reviews, campus feedback",
    openGraph: {
      title: "Student Feedback - SSIM Hyderabad | Share Your Insights",
      description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
      url: "https://www.ssim.ac.in/students-life/students-feedback",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM Student Feedback",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Student Feedback - SSIM Hyderabad | Share Your Insights",
      description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/students-life/students-feedback",
  },
};

export default function StudentsFeedbackLayout({ children }) {
  return children;
} 