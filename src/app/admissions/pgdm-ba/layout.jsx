export const metadata = {
  title: "PGDM in Business Analytics - SSIM MBA College in Hyderabad",
  description:
    "Join SSIM Hyderabad, one of the top MBA Business Analytics colleges in Hyderabad, offering industry-driven PGDM and MBA programs for future leaders.",
  keywords:
    "SSIM PGDM Business Analytics, business analytics courses, data analytics, SSIM PGDM",
  openGraph: {
    title: "PGDM in Business Analytics - SSIM MBA College in Hyderabad",
    description:
      "Join SSIM Hyderabad, one of the top MBA Business Analytics colleges in Hyderabad, offering industry-driven PGDM and MBA programs for future leaders.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "PGDM in Business Analytics - SSIM MBA College in Hyderabad",
    description:
      "Learn about the PGDM in Business Analytics (BA) at Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/admissions/pgdm-ba",
  },
};

export default function PGDMBALayout({ children }) {
  return children;
}
