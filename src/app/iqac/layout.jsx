export const metadata = {
  title: "IQAC - SSIM  | PGDM College Hyderabad",
  description: "Learn about SSIM Hyderabad's IQAC, promoting quality in PGDM education, institutional best practices, and continuous academic improvement.",
  keywords: "SSIM IQAC, quality assurance, academic quality, institutional improvement",
  openGraph: {
    title: "IQAC - SSIM  | PGDM College Hyderabad",
    description: "Learn about SSIM Hyderabad's IQAC, promoting quality in PGDM education, institutional best practices, and continuous academic improvement.",
    url: "https://ssim.ac.in/iqac",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent.png",
        width: 400,
        height: 89,
        alt: "SSIM IQAC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQAC - SSIM",
    description: "Learn about SSIM Hyderabad's IQAC, promoting quality in PGDM education, institutional best practices, and continuous academic improvement.",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/iqac",
  },
};

export default function IQACLayout({ children }) {
  return children;
}
