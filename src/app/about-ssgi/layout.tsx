import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About SSGI | Siva Sivani Group of Institutions";
const description =
  "Discover Siva Sivani Group of Institutions (SSGI), established in 1961, its educational legacy, institutions, vision, values and commitment to quality education.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://ssim.ac.in/about-ssgi",
    siteName: "Siva Sivani Group of Institutions",
    images: ["/ssimlogo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ssimlogo.webp"],
  },
};

export default function AboutSSGILayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
