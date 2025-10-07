export const metadata = {
    title: "Student Achievements - SSIM",
    description: "Celebrate student achievements and accomplishments at Siva Sivani Institute of Management (SSIM).",
    keywords: "SSIM student achievements, student awards, accomplishments, student success stories",
    openGraph: {
      title: "Student Achievements - SSIM",
      description: "Celebrate student achievements and accomplishments at Siva Sivani Institute of Management (SSIM).",
      url: "https://www.ssim.ac.in/students-life/students-achievements",
      siteName: "Siva Sivani Institute of Management",
      images: [
        {
          url: "/ssimlogo.webp",
          width: 1200,
          height: 630,
          alt: "SSIM Student Achievements",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Student Achievements - SSIM",
      description: "Celebrate student achievements and accomplishments at Siva Sivani Institute of Management (SSIM).",
      images: ["/ssimlogo.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
    canonical: "https://www.ssim.ac.in/students-life/students-achievements",
  },
};

export default function StudentsAchievementsLayout({ children }) {
  return children;
} 