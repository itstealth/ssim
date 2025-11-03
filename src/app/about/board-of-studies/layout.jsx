export const metadata = {
  title: "Board of Studies - SSIM | Leading PGDM College in Hyderabad",
  description:
    "Explore the Board of Studies at SSIM Hyderabad, a top PGDM college in Hyderabad, driving academic excellence and industry-relevant curriculum.",
  keywords:
    "SSIM board of studies, academic curriculum, course development, business school academics",
  openGraph: {
    title: "Board of Studies - SSIM | Leading PGDM College in Hyderabad",
    description:
      "Explore the Board of Studies at SSIM Hyderabad, a top PGDM college in Hyderabad, driving academic excellence and industry-relevant curriculum.",
    url: "https://www.ssim.ac.in/about/board-of-studies",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Board of Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Studies - SSIM | Leading PGDM College in Hyderabad",
    description:
      "Explore the Board of Studies at SSIM Hyderabad, a top PGDM college in Hyderabad, driving academic excellence and industry-relevant curriculum.",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/about/board-of-studies",
  },
};

export default function BoardOfStudiesLayout({ children }) {
  return children;
}
