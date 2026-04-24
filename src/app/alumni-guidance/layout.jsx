export const metadata = {
  title: "SSIM Alumni Network – Mentorship, Networking & Career Growth",
  description: "Join SSIM's thriving Alumni Community for networking, mentorship, career talks, webinars & exclusive benefits. Connect, give back, and grow with fellow alumni.",
  keywords: "alumni guidance, mentorship, career guidance, SSIM alumni network",
  openGraph: {
    title: "SSIM Alumni Network – Mentorship, Networking & Career Growth",
    description: "Join SSIM's thriving Alumni Community for networking, mentorship, career talks, webinars & exclusive benefits. Connect, give back, and grow with fellow alumni.",
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
    title: "SSIM Alumni Network – Mentorship, Networking & Career Growth",
    description: "Join SSIM's thriving Alumni Community for networking, mentorship, career talks, webinars & exclusive benefits. Connect, give back, and grow with fellow alumni.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/alumni-guidance",
  },
};

export default function AlumniGuidanceLayout({ children }) {
  return children;
}
