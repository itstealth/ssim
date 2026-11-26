export const metadata = {
  title: "Student Achievements - SSIM Hyderabad | Success Stories",
  description: "Discover the remarkable achievements of SSIM Hyderabad students in academics, competitions, and leadership, showcasing excellence and talent across fields.",
  keywords: "SSIM student achievements, student success, academic excellence, student awards",
  openGraph: {
    title: "Student Achievements - SSIM Hyderabad | Success Stories",
    description: "Discover the remarkable achievements of SSIM Hyderabad students in academics, competitions, and leadership, showcasing excellence and talent across fields.",
    url: "https://ssim.ac.in/students-life/students-achievements",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/logo-transparent-35-years.png",
        width: 400,
        height: 89,
        alt: "SSIM Student Achievements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Achievements - SSIM Hyderabad",
    description: "Discover the remarkable achievements of SSIM Hyderabad students in academics, competitions, and leadership, showcasing excellence and talent across fields.",
    images: ["/logo-transparent-35-years.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ssim.ac.in/students-life/students-achievements",
  },
};

export default function StudentsAchievementsLayout({ children }) {
  return children;
}
