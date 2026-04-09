export const metadata = {
  title: "Meet the SSIM Placement Team | Call +91-9391114948",
  description: "Connect with the SSIM Hyderabad placement team at +91-9391114948. Learn how they guide students to top internships, industry projects, and career opportunities.",
  keywords: "SSIM placement team, career services, placement support, SSIM careers",
  openGraph: {
    title: "Meet the SSIM Placement Team | Call +91-9391114948",
    description: "Connect with the SSIM Hyderabad placement team at +91-9391114948. Learn how they guide students to top internships, industry projects, and career opportunities.",
    url: "https://www.ssim.ac.in/placement/team",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Placement Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the SSIM Placement Team",
    description: "Connect with the SSIM Hyderabad placement team at +91-9391114948. Learn how they guide students to top internships, industry projects, and career opportunities.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/placement/team",
  },
};

export default function PlacementTeamLayout({ children }) {
  return children;
}
