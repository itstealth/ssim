const title = "Faculty Initiatives on Teaching and Learning | SSIM Hyderabad";
const description =
  "SSIM faculty drive a student-centric, outcome-based teaching-learning approach — ICT-enabled classrooms, experiential learning, Mock UN, outbound training, community engagement and NPTEL resources.";
const url = "https://www.ssim.ac.in/faculty-initiatives";
const image = "/faculty-initiatives/ict-classroom-1.webp";

export const metadata = {
    title,
    description,
    alternates: {
        canonical: url,
    },
    openGraph: {
        title,
        description,
        url,
        siteName: "SSIM",
        images: [{ url: image }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [{ url: image }],
    },
    keywords: [
        "SSIM faculty initiatives",
        "teaching and learning SSIM",
        "ICT enabled teaching",
        "experiential learning B-School",
        "NAAC Criterion II",
        "outbound training SSIM",
    ],
    authors: [{ name: "Siva Sivani Institute of Management" }],
    robots: {
        index: true,
        follow: true,
    },
};

export default function FacultyInitiativesLayout({ children }) {
    return <>{children}</>;
}
