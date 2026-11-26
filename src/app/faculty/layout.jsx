export const metadata = {
  title: "Faculty Expertise - SSIM Hyderabad | Academic Excellence",
  description: "Discover SSIM Hyderabad's faculty expertise across diverse management domains, blending academic knowledge with real-world industry experience.",
  keywords: "SSIM faculty, management faculty, business school professors, academic expertise",
  openGraph: {
    title: "Faculty Expertise - SSIM Hyderabad | Academic Excellence",
    description: "Discover SSIM Hyderabad's faculty expertise across diverse management domains, blending academic knowledge with real-world industry experience.",
    url: "https://www.ssim.ac.in/faculty/areas",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent-35-years.png",
        width: 400,
        height: 89,
        alt: "SSIM Faculty Expertise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty Expertise - SSIM Hyderabad",
    description: "Discover SSIM Hyderabad's faculty expertise across diverse management domains, blending academic knowledge with real-world industry experience.",
    images: ["/logo-transparent-35-years.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/faculty/areas",
  },
};

export default function FacultyAreasLayout({ children }) {
  return children;
}
