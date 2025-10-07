export const metadata = {
    title: "Internal Complaints Committee - SSIM",
    description: "Learn about the Internal Complaints Committee at Siva Sivani Institute of Management (SSIM). Get information on the committee's establishment, responsibilities, and how to submit complaints.",
    alternates: {
        canonical: "https://www.ssim.ac.in/internal-complaints",
    },
    openGraph: {
        title: "Internal Complaints Committee - SSIM",
        description: "Learn about the Internal Complaints Committee at Siva Sivani Institute of Management (SSIM). Get information on the committee's establishment, responsibilities, and how to submit complaints.",
        url: "https://www.ssim.ac.in/internal-complaints",
        siteName: "SSIM",
        images: [
            { url: "/internal-complaints/internal-complaints-banner.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Internal Complaints Committee - SSIM",
        description: "Learn about the Internal Complaints Committee at Siva Sivani Institute of Management (SSIM). Get information on the committee's establishment, responsibilities, and how to submit complaints.",
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