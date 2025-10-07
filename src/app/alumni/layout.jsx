export const metadata = {
  title: "Our Alumni",
  description:
    "Connect with the accomplished alumni of Siva Sivani Institute of Management. Discover their achievements and see where a PGDM from SSIM can take you.",
  keywords:
    "SSIM alumni, Siva Sivani alumni, alumni network, business school alumni",
  openGraph: {
    title: "Our Alumni",
    description:
      "Connect with the accomplished alumni of Siva Sivani Institute of Management. Discover their achievements and see where a PGDM from SSIM can take you.",
    url: "https://www.ssim.ac.in/alumni",
    siteName: "Siva Sivani Institute of Management",
    images: ["/ssimlogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Alumni",
    description:
      "Connect with the accomplished alumni of Siva Sivani Institute of Management. Discover their achievements and see where a PGDM from SSIM can take you.",
    images: ["/ssimlogo.webp"],
},
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/alumni",
  },
};

export default function AlumniLayout({ children }) {
  return children;
}
