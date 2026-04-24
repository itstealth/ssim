export const metadata = {
    title: "Internal Complaints Committee (ICC) | SSIM Hyderabad",
    description: "SSIM's Internal Complaints Committee (ICC) ensures a safe campus under the Sexual Harassment at Workplace Act. Submit grievances via email or post. We're here to help.",
    alternates: {
        canonical: "https://www.ssim.ac.in/internal-complaints",
    },
    openGraph: {
        title: "Internal Complaints Committee (ICC) | SSIM Hyderabad",
        description: "SSIM's Internal Complaints Committee (ICC) ensures a safe campus under the Sexual Harassment at Workplace Act. Submit grievances via email or post. We're here to help.",
        url: "https://www.ssim.ac.in/internal-complaints",
        siteName: "SSIM",
        images: [
            { url: "/internal-complaints/internal-complaints-banner.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Internal Complaints Committee (ICC) | SSIM Hyderabad",
        description: "SSIM's Internal Complaints Committee (ICC) ensures a safe campus under the Sexual Harassment at Workplace Act. Submit grievances via email or post. We're here to help.",
        images: [
            { url: "/internal-complaints/internal-complaints-banner.jpg" },
        ],
    },
    keywords: ["SSIM internal complaints", "complaints committee", "sexual harassment", "workplace environment", "SSIM committee"],
    authors: [{ name: "Siva Sivani Institute of Management" }],
    robots: {
        index: true,
        follow: true,
    },
};

export default function InternalComplaintsLayout({ children }) {
    return <>{children}</>;
}       