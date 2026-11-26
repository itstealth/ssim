export const metadata = {
  title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
  description:
    "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Call 9391114948!",
  alternates: {
    canonical: "https://ssim.ac.in/pgdm-admissions",
  },
  openGraph: {
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Call 9391114948!",
    url: "https://www.ssim.ac.in",
    siteName: "SSIM Hyderabad",
    images: ["/logo-transparent.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top PGDM B-School in Hyderabad | SSIM Hyderabad",
    description:
      "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad. Call 9391114948!",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/ssim-favicon.png", type: "image/png", sizes: "28x28" }],
    shortcut: "/ssim-favicon.png",
    apple: "/ssim-favicon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://ssim.ac.in"),
  category: "education",
  keywords: ["SSIM Hyderabad", "MBA", "PGDM", "B-School", "Hyderabad"],
  authors: [{ name: "SSIM Hyderabad" }],
  creator: "SSIM Hyderabad",
  publisher: "SSIM Hyderabad",
  applicationName: "SSIM Hyderabad",
  generator: "Next.js",
  referrer: "origin",
  formatDetection: {
    email: false,
    address: false,
  },
};

export default function PgdmAdmissionsLayout({ children }) {
  return children;
}
