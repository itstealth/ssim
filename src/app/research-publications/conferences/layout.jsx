export const metadata = {
  title: "International Conference 2027 | SSIM Hyderabad",
  description: "Join the SSIM and AIMS international conference on reimagining business and management in the age of AI, with a focus on innovation, sustainability, and human-centric transformation.",
  keywords: "SSIM international conference 2027, AI in management, research conference, AIMS",
  openGraph: {
    title: "International Conference 2027 | SSIM Hyderabad",
    description: "Join the SSIM and AIMS international conference on reimagining business and management in the age of AI, with a focus on innovation, sustainability, and human-centric transformation.",
    url: "https://ssim.ac.in/research-publications/conferences",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Conferences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Conference 2027 | SSIM Hyderabad",
    description: "Join the SSIM and AIMS international conference on reimagining business and management in the age of AI, with a focus on innovation, sustainability, and human-centric transformation.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/research-publications/conferences",
  },
};

export default function ConferencesLayout({ children }) {
  return children;
}
