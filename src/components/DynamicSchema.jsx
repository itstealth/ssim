"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbListSchema, ArticleSchema, FAQPageSchema } from "@/components/Schema";

// Route configuration for breadcrumbs (matching ConditionalBanner)
// This should be kept in sync with ConditionalBanner.jsx
const routeConfig = {
  "/about/vision-mission": {
    title: "Vision & Mission",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision-mission", isActive: true },
    ],
  },
  "/about/leadership": {
    title: "Leadership",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/leadership", isActive: true },
    ],
  },
  "/about/board-of-governors": {
    title: "Board of Governors",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Board of Governors", href: "/about/board-of-governors", isActive: true },
    ],
  },
  "/about/board-of-studies": {
    title: "Board of Studies",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Board of Studies", href: "/about/board-of-studies", isActive: true },
    ],
  },
  "/about/academic-advisory-board": {
    title: "Academic Advisory Board",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Academic Advisory Board", href: "/about/academic-advisory-board", isActive: true },
    ],
  },
  "/about/accreditations-rankings": {
    title: "Accreditations & Rankings",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Accreditations & Rankings", href: "/about/accreditations-rankings", isActive: true },
    ],
  },
  "/programs/fpm-efpm": {
    title: "FPM/EFPM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "FPM/EFPM", href: "/programs/fpm-efpm", isActive: true },
    ],
  },
  "/programs/fpm": {
    title: "FPM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "FPM/EFPM", href: "/programs/fpm", isActive: true },
    ],
  },
  "/programs/efpm": {
    title: "EFPM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "EFPM", href: "/programs/efpm", isActive: true },
    ],
  },
  "/programs/pgdm-ba": {
    title: "PGDM BA",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM BA", href: "/programs/pgdm-ba", isActive: true },
    ],
  },
  "/programs/pgdm-bifs": {
    title: "PGDM BIFS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM BIFS", href: "/programs/pgdm-bifs", isActive: true },
    ],
  },
  "/programs/pgdm-triple-specialisation": {
    title: "PGDM Triple Specialisation",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM Triple Specialisation", href: "/programs/pgdm-triple-specialisation", isActive: true },
    ],
  },
  "/faculty/areas": {
    title: "Faculty Areas",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Faculty", href: "/faculty" },
      { label: "Faculty Areas", href: "/faculty/areas", isActive: true },
    ],
  },
  "/placement": {
    title: "Placement",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement", isActive: true },
    ],
  },
  "/placement/internships": {
    title: "Internships",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Internships", href: "/placement/internships", isActive: true },
    ],
  },
  "/placement/team": {
    title: "Placement Team",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Placement Team", href: "/placement/team", isActive: true },
    ],
  },
  "/placement/guest-lectures": {
    title: "Guest Lectures",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Guest Lectures", href: "/placement/guest-lectures", isActive: true },
    ],
  },
  "/placement/records": {
    title: "Placement Records",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Placement Records", href: "/placement/records", isActive: true },
    ],
  },
  "/students-life": {
    title: "Student Life",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life", isActive: true },
    ],
  },
  "/students-life/students-feedback": {
    title: "Student Feedback",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Student Feedback", href: "/students-life/students-feedback", isActive: true },
    ],
  },
  "/students-life/life-at-ssim": {
    title: "Life at SSIM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Life at SSIM", href: "/students-life/life-at-ssim", isActive: true },
    ],
  },
  "/students-life/students-achievements": {
    title: "Student Achievements",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Student Achievements", href: "/students-life/students-achievements", isActive: true },
    ],
  },
  "/students-life/news": {
    title: "News & Announcements",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "News & Announcements", href: "/students-life/news", isActive: true },
    ],
  },
  "/blog": {
    title: "Blog",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog", isActive: true },
    ],
  },
  "/alumni": {
    title: "Alumni",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Alumni", href: "/alumni", isActive: true },
    ],
  },
  "/international-relations": {
    title: "International Relations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "International Relations", href: "/international-relations", isActive: true },
    ],
  },
  "/accreditations": {
    title: "Accreditations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Accreditations", href: "/accreditations", isActive: true },
    ],
  },
  "/contact-us": {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact-us", isActive: true },
    ],
  },
  "/iqac": {
    title: "IQAC",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "IQAC", href: "/iqac", isActive: true },
    ],
  },
  "/internal-complaints": {
    title: "Internal Complaints",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Internal Complaints", href: "/internal-complaints", isActive: true },
    ],
  },
  "/grievance-redressal-mechanism": {
    title: "Grievance Redressal Mechanism",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grievance Redressal Mechanism", href: "/grievance-redressal-mechanism", isActive: true },
    ],
  },
};

/**
 * DynamicSchema component that automatically adds appropriate schemas based on page type
 * 
 * Usage examples:
 * 
 * 1. Automatic detection (default):
 *    <DynamicSchema /> // Automatically detects breadcrumbs for pages with routeConfig
 * 
 * 2. Breadcrumb schema:
 *    <DynamicSchema type="breadcrumb" breadcrumbs={[
 *      { name: "Home", item: "https://www.ssim.ac.in/" },
 *      { name: "About", item: "https://www.ssim.ac.in/about" }
 *    ]} />
 * 
 * 3. Article schema (for blog pages):
 *    <DynamicSchema type="article" article={{
 *      headline: "Article Title",
 *      image: "https://www.ssim.ac.in/image.jpg",
 *      author: { "@type": "Organization", name: "SSIM" },
 *      publisher: { "@type": "Organization", name: "SSIM", logo: { "@type": "ImageObject", url: "..." } },
 *      datePublished: "2024-01-01"
 *    }} />
 * 
 * 4. FAQ schema:
 *    <DynamicSchema type="faq" faq={[
 *      { name: "Question 1?", text: "Answer 1" },
 *      { name: "Question 2?", text: "Answer 2" }
 *    ]} />
 * 
 * @param {Object} props
 * @param {string} props.type - Schema type: 'breadcrumb', 'article', 'faq', or 'auto'
 * @param {Array} props.breadcrumbs - Custom breadcrumbs array (optional)
 * @param {Object} props.article - Article schema data (optional)
 * @param {Array} props.faq - FAQ data array (optional)
 */
export default function DynamicSchema({
  type = "auto",
  breadcrumbs,
  article,
  faq,
}) {
  const pathname = usePathname();
  const baseUrl = "https://www.ssim.ac.in";

  // Auto-detect schema type if not specified
  if (type === "auto") {
    // Check if it's a blog page
    if (pathname?.startsWith("/blog/") && pathname !== "/blog") {
      type = "article";
    }
    // Check if it's an FAQ page (you can add FAQ page detection logic here)
    else if (pathname?.includes("faq") || faq) {
      type = "faq";
    }
    // Check if page has breadcrumbs
    else if (routeConfig[pathname] || breadcrumbs) {
      type = "breadcrumb";
    }
  }

  // Generate breadcrumb schema
  if (type === "breadcrumb") {
    let breadcrumbData = breadcrumbs;

    // If no custom breadcrumbs provided, try to get from routeConfig
    if (!breadcrumbData && routeConfig[pathname]) {
      breadcrumbData = routeConfig[pathname].breadcrumbs;
    }

    if (breadcrumbData && breadcrumbData.length > 0) {
      const itemListElement = breadcrumbData.map((crumb) => ({
        name: crumb.label || crumb.name,
        item: `${baseUrl}${crumb.href || crumb.url || ""}`,
      }));

      return <BreadcrumbListSchema itemListElement={itemListElement} />;
    }
  }

  // Generate article schema
  if (type === "article" && article) {
    return <ArticleSchema {...article} />;
  }

  // Generate FAQ schema
  if (type === "faq" && faq) {
    return <FAQPageSchema mainEntity={faq} />;
  }

  // Auto-detect: Generate breadcrumb schema for pages with routeConfig (but not blog detail pages)
  if (type === "auto" && routeConfig[pathname] && !pathname?.startsWith("/blog/")) {
    const breadcrumbData = routeConfig[pathname].breadcrumbs;
    if (breadcrumbData && breadcrumbData.length > 0) {
      const itemListElement = breadcrumbData.map((crumb) => ({
        name: crumb.label || crumb.name,
        item: `${baseUrl}${crumb.href || crumb.url || ""}`,
      }));

      return <BreadcrumbListSchema itemListElement={itemListElement} />;
    }
  }

  return null;
}

