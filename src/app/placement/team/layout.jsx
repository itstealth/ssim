export const metadata = {
  title: "Placement Team | Corporate Relations & Careers – SSIM Hyderabad",
  description: "Meet SSIM Hyderabad's dedicated placement team with 25+ years of experience in corporate relations. Connecting PGDM graduates with top industry opportunities. Contact us today!",
  keywords: "SSIM placement team, career services, placement support, SSIM careers",
  openGraph: {
    title: "Placement Team | Corporate Relations & Careers – SSIM Hyderabad",
    description: "Meet SSIM Hyderabad's dedicated placement team with 25+ years of experience in corporate relations. Connecting PGDM graduates with top industry opportunities. Contact us today!",
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
    title: "Placement Team | Corporate Relations & Careers – SSIM Hyderabad",
    description: "Meet SSIM Hyderabad's dedicated placement team with 25+ years of experience in corporate relations. Connecting PGDM graduates with top industry opportunities. Contact us today!",
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
