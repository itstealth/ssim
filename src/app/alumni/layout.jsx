export const metadata = {
  title: "SSIM Alumni Network | Leaders, Achievers & Industry Professionals",
  description: "SSIM Hyderabad's alumni are leaders and achievers across industries worldwide. Explore our growing alumni network and reconnect with the SSIM community today.",
  keywords: "SSIM alumni, alumni network, business school graduates, SSIM success stories",
  openGraph: {
    title: "SSIM Alumni Network | Leaders, Achievers & Industry Professionals",
    description: "SSIM Hyderabad's alumni are leaders and achievers across industries worldwide. Explore our growing alumni network and reconnect with the SSIM community today.",
    url: "https://www.ssim.ac.in/alumni",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent.png",
        width: 400,
        height: 89,
        alt: "SSIM Alumni Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSIM Alumni Network | Leaders, Achievers & Industry Professionals",
    description: "SSIM Hyderabad's alumni are leaders and achievers across industries worldwide. Explore our growing alumni network and reconnect with the SSIM community today.",
    images: ["/logo-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/alumni",
  },
};

export default function AlumniLayout({ children }) {
  return children;
}
