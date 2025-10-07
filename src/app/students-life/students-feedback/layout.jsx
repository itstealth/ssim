export const metadata = {
    title: "Student Feedback - SSIM",
    description: "Read student feedback and testimonials at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM student feedback, student testimonials, student reviews, campus feedback",
    openGraph: {
      title: "Student Feedback - SSIM",
      description: "Read student feedback and testimonials at Siva Sivani Institute of Management (SSIM).",
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
      title: "Student Feedback - SSIM",
      description: "Read student feedback and testimonials at Siva Sivani Institute of Management (SSIM).",
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