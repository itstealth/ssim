export const metadata = {
  title: "Alumni Guidance - SSIM Hyderabad | Connect & Mentor",
  description: "Join SSIM Hyderabad's alumni guidance program. Mentor students, share career insights, and stay connected through networking and learning opportunities.",
  keywords: "alumni guidance, mentorship, career guidance, SSIM alumni network",
  openGraph: {
    title: "Alumni Guidance - SSIM Hyderabad | Connect & Mentor",
    description: "Join SSIM Hyderabad's alumni guidance program. Mentor students, share career insights, and stay connected through networking and learning opportunities.",
    url: "https://www.ssim.ac.in/alumni-guidance",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Alumni Guidance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni Guidance - SSIM Hyderabad",
    description: "Join SSIM Hyderabad's alumni guidance program. Mentor students, share career insights, and stay connected through networking and learning opportunities.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/alumni-guidance",
  },
};

export default function AlumniGuidanceLayout({ children }) {
  return children;
}
