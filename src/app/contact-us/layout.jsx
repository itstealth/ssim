export const metadata = {
  title: "Contact Us - SSIM",
  description: "Contact us for any questions or inquiries.",
  alternates: {
    canonical: "https://www.ssim.ac.in/contact-us",
  },
  openGraph: {
    title: "Contact Us - SSIM",
    description: "Contact us for any questions or inquiries.",
    url: "https://www.ssim.ac.in/contact-us",
    siteName: "SSIM",
    images: [
      {
        url: "/assets/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - SSIM",
    description: "Contact us for any questions or inquiries.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  category: "education",
  keywords: ["SSIM", "Contact Us", "Contact", "Inquiry", "Information"],
  authors: [{ name: "SSIM", url: "https://www.ssim.ac.in" }],
  creator: "SSIM",
  publisher: "SSIM",
  applicationName: "SSIM",
  generator: "Next.js",
  referrer: "origin",
  formatDetection: {
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/contact-us",
  },
};

export default function ContactUsLayout({ children }) {
  return <>{children}</>;
}
