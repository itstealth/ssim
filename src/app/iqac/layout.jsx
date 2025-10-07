export const metadata = {
  title: "IQAC",
  description: "IQAC",
  keywords: [
    "IQAC",
    "IQAC 2024",
    "IQAC 2023",
    "IQAC 2022",
    "IQAC 2021",
    "IQAC 2020",
    "IQAC 2019",
    "IQAC 2018",
    "IQAC 2017",
  ],
  authors: [{ name: "Siva Sivani Institute of Management" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/iqac",
  },
  openGraph: {
    title: "IQAC",
    description: "IQAC",
    images: [{ url: "/iqac/iqac-banner.jpg" }],
  },
};

export default function IQACLayout({ children }) {
  return <>{children}</>;
}
