export const metadata = {
  title: "Student Feedback - SSIM Hyderabad | Share Your Insights",
  description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
  keywords: "SSIM student feedback, student reviews, campus feedback, SSIM suggestions",
  openGraph: {
    title: "Student Feedback - SSIM Hyderabad | Share Your Insights",
    description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
    url: "https://ssim.ac.in/students-life/students-feedback",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent-35-years.png",
        width: 400,
        height: 89,
        alt: "SSIM Student Feedback",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Feedback - SSIM Hyderabad",
    description: "Provide your feedback at SSIM Hyderabad. Help the institute improve academic quality, campus facilities, and overall student experience effectively.",
    images: ["/logo-transparent-35-years.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/students-life/students-feedback",
  },
};

export default function StudentsFeedbackLayout({ children }) {
  return children;
}
