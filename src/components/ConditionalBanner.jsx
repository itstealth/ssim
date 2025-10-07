"use client";
import { usePathname } from "next/navigation";
import BannerWithBreadcrumbs from "./BannerWithBreadcrumbs";

// Route configuration for breadcrumbs
const routeConfig = {
//   "/about": {
//     title: "About SSIM",
//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "About", href: "/about", isActive: true }
//     ]
//   },
  "/about/vision-mission": {
    title: "Vision & Mission",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision-mission", isActive: true }
    ]
  },
  "/about/leadership": {
    title: "Leadership",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/leadership", isActive: true }
    ]
  },
  "/about/board-of-governors": {
    title: "Board of Governors",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Board of Governors", href: "/about/board-of-governors", isActive: true }
    ]
  },
  "/about/board-of-studies": {
    title: "Board of Studies",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Board of Studies", href: "/about/board-of-studies", isActive: true }
    ]
  },
  "/about/academic-advisory-board": {
    title: "Academic Advisory Board",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Academic Advisory Board", href: "/about/academic-advisory-board", isActive: true }
    ]
  },
  "/about/accreditations-rankings": {
    title: "Accreditations & Rankings",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Accreditations & Rankings", href: "/about/accreditations-rankings", isActive: true }
    ]
  },
//   "/programs": {
//     title: "Programs",
//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "Programs", href: "/programs", isActive: true }
//     ]
//   },
  "/programs/fpm-efpm": {
    title: "FPM/EFPM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "FPM/EFPM", href: "/programs/fpm-efpm", isActive: true }
    ]
  },
  "/programs/pgdm-ba": {
    title: "PGDM BA",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM BA", href: "/programs/pgdm-ba", isActive: true }
    ]
  },
  "/programs/pgdm-bifs": {
    title: "PGDM BIFS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM BIFS", href: "/programs/pgdm-bifs", isActive: true }
    ]
  },
  "/programs/pgdm-triple-specialisation": {
    title: "PGDM Triple Specialisation",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "PGDM Triple Specialisation", href: "/programs/pgdm-triple-specialisation", isActive: true }
    ]
  },
//   "/admissions": {
//     title: "Admissions",
//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "Admissions", href: "/admissions", isActive: true }
//     ]
//   },
//   "/faculty": {
//     title: "Faculty",
//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "Faculty", href: "/faculty", isActive: true }
//     ]
//   },
  "/faculty/areas": {
    title: "Faculty Areas",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Faculty", href: "/faculty" },
      { label: "Faculty Areas", href: "/faculty/areas", isActive: true }
    ]
  },
  "/placement": {
    title: "Placement",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement", isActive: true }
    ]
  },
  "/placement/internships": {
    title: "Internships",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Internships", href: "/placement/internships", isActive: true }
    ]
  },
  "/placement/team": {
    title: "Placement Team",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Placement Team", href: "/placement/team", isActive: true }
    ]
  },
  "/placement/guest-lectures": {
    title: "Guest Lectures",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Guest Lectures", href: "/placement/guest-lectures", isActive: true }
    ]
  },
  "/placement/records": {
    title: "Placement Records",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Placement", href: "/placement" },
      { label: "Placement Records", href: "/placement/records", isActive: true }
    ]
  },
  "/students-life": {
    title: "Student Life",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life", isActive: true }
    ]
  },
  "/students-life/students-feedback": {
    title: "Student Feedback",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Student Feedback", href: "/students-life/students-feedback", isActive: true }
    ]
  },
  "/students-life/life-at-ssim": {
    title: "Life at SSIM",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Life at SSIM", href: "/students-life/life-at-ssim", isActive: true }
    ]
  },
  "/students-life/students-achievements": {
    title: "Student Achievements",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "Student Achievements", href: "/students-life/students-achievements", isActive: true }
    ]
  },
  "/students-life/news-announcements": {
    title: "News & Announcements",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Life", href: "/students-life" },
      { label: "News & Announcements", href: "/students-life/news-announcements", isActive: true }
    ]
  },
  "/blog": {
    title: "Blog",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog", isActive: true }
    ]
  },
  "/alumni": {
    title: "Alumni",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Alumni", href: "/alumni", isActive: true }
    ]
  },
//   "/research": {
//     title: "Research",
//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "Research", href: "/research", isActive: true }
//     ]
//   },
  "/international-relations": {
    title: "International Relations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "International Relations", href: "/international-relations", isActive: true }
    ]
  },
  "/accreditations": {
    title: "Accreditations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Accreditations", href: "/accreditations", isActive: true }
    ]
  },
  "/contact-us": {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact-us", isActive: true }
    ]
  },
  "/iqac": {
    title: "IQAC",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "IQAC", href: "/iqac", isActive: true }
    ]
  },
  "/internal-complaints": {
    title: "Internal Complaints",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Internal Complaints", href: "/internal-complaints", isActive: true }
    ]
  },
  "/grievance-redressal-mechanism": {
    title: "Grievance Redressal Mechanism",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Grievance Redressal Mechanism", href: "/grievance-redressal-mechanism", isActive: true }
    ]
  }
};

export default function ConditionalBanner() {
  const pathname = usePathname();
  
  // Don't show banner on homepage
  if (pathname === "/") {
    return null;
  }

  // Get route configuration
  const routeInfo = routeConfig[pathname];
  
  // If route doesn't exist in config, it's a 404 page - don't show banner
  if (!routeInfo) {
    return null;
  }

  // Modify breadcrumbs to remove links except for Home
  const modifiedBreadcrumbs = routeInfo.breadcrumbs.map((crumb, index) => ({
    ...crumb,
    href: index === 0 ? crumb.href : undefined // Only keep href for Home
  }));

  return (
    <BannerWithBreadcrumbs
      title={routeInfo.title}
      bannerImage="/breadcrumb.png"
      breadcrumbs={modifiedBreadcrumbs}
    />
  );
} 