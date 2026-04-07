export const metadata = {
  title: "PGDM in Business Analytics - SSIM PGDM College in Hyderabad",
  description: "Join SSIM Hyderabad, one of the top PGDM Business Analytics colleges in Hyderabad, offering industry-driven PGDM programs for future leaders.",
  keywords: "PGDM Business Analytics, PGDM BA, data analytics courses, business intelligence, SSIM PGDM",
  openGraph: {
    title: "PGDM in Business Analytics - SSIM PGDM College in Hyderabad",
    description: "Join SSIM Hyderabad, one of the top PGDM Business Analytics colleges in Hyderabad, offering industry-driven PGDM programs for future leaders.",
    url: "https://www.ssim.ac.in/admissions/pgdm-ba",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM PGDM Business Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGDM in Business Analytics - SSIM",
    description: "Join SSIM Hyderabad, one of the top PGDM Business Analytics colleges in Hyderabad, offering industry-driven PGDM programs for future leaders.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/admissions/pgdm-ba",
  },
};

export default function PGDMBALayout({ children }) {
  return children;
}
