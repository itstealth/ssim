/**
 * URL Redirect Map for WordPress to Next.js Migration
 * Use this file to manage all 301 redirects from old WordPress URLs to new Next.js URLs
 *
 * Structure: { oldPathname: newPathname }
 * - oldPathname: The path from the old WordPress URL (no domain, no protocol)
 * - newPathname: The target Next.js URL path
 *
 * Special values:
 * - "/need-page" (string): Indicates a new page needs to be created (returns 404 with message)
 * - "/faculty-areas": Redirect to /faculty/areas (faculty profile page)
 * - "/homepage": Redirect to homepage
 */

// ============================================================================
// EXACT PATH REDIRECTS (Highest priority - checked first)
// ============================================================================

const exactRedirects = {
  // Board & Governance
  "board-of-governers": "/about/board-of-governors",
  "board-of-studies": "/about/board-of-studies",

  // Leadership & About
  "about-us": "/need-page",
  "founder": "/about/leadership",
  "founders-message": "/about/leadership",
  "directors-message": "/about/board-of-governors",
  "presidents-message": "/about/board-of-governors",

  // Rankings & Accreditations
  "rankings-awards": "/about/accreditations-rankings",

  // Placements
  "placement": "/placement/records",
  "placements": "/placement/records",
  "team-placements": "/placement/records",
  "pgdm-placement-reports": "/placement/records",
  "student-wise-placementreport-2022-23": "/placement/records",
  "student-wise-placement-report-2018-19": "/placement/records",
  "student-wise-placement-report-2018-19-1": "/placement/records",
  "studentwise-placementreport-2016-17": "/placement/records",
  "placement-statistics": "/placement/records",

  // Admission Pages
  "pgdm-admission-procedure": "/admissions/pgdm-bifs",
  "pgdm-gd-pi-dates": "/programs/pgdm-bifs",
  "admission-team": "/admissions/pgdm-triple-specialisation",
  "admission-team-1": "/admissions/fpm-efpm",
  "admission": "/homepage",
  "merit-scholarship": "/homepage",
  "fpm-admission": "/admissions/fpm-efpm",
  "fpm-admission-procedure": "/admissions/fpm-efpm",

  // Programs
  "pgdm": "/programs/pgdm-ba",
  "pgdm-bifs-post-graduate-diploma-in-management-banking-insurance-and-financial-services-in-hyderabad-india": "/homepage",
  "pgdm-triple-specialization": "/admissions/pgdm-triple-specialisation",
  "admissions-ba": "/admissions/pgdm-ba",
  "efpm-specialization": "/programs/fpm-efpm",
  "fpm-efpm": "/programs/fpm-efpm",
  "program-structure-ba": "/programs/pgdm-ba",

  // Faculty
  "program-wise-faculty": "/faculty/areas",
  "full-time-faculty": "/faculty/areas",
  "core-faculty": "/faculty/areas",
  "adjunct-faculty": "/homepage",
  "faculty-research-2015-16": "/homepage",

  // Students Life
  "students-life/news-announcements": "/students-life/life-at-ssim",
  "students-life-news-announcements": "/students-life/life-at-ssim",
  "campus-life": "/students-life/life-at-ssim",
  "student-achievement": "/students-life/life-at-ssim",
  "student-feedback": "/homepage",
  "transport-facility": "/need-page",

  // Grievance
  "grievance-redressal-cell": "/about/board-of-governors",
  "grievance": "/homepage",

  // Academic
  "iqac": "/iqac",
  "iqac-1": "/homepage",
  "aqar-and-mom-naac": "/homepage",
  "naac-2021": "/homepage",
  "academic": "/homepage",
  "international-conference": "/homepage",

  // International Relations
  "centre-for-international-studies": "/homepage",

  // Programs & Fees
  "program-fee": "/need-page",

  // Search
  "search": "/homepage",

  // Working Papers
  "working-papers-2018-19": "/homepage",

  // Faculty Profiles (exact matches)
  "ramana-rao-s-v": "/faculty/areas",
  "chandra-sekhar-s-f": "/faculty/areas",
  "lohithkumar-b": "/faculty/areas",
  "sri-arjit-santikary": "/faculty/areas",
  "sri-t-thirumal-reddy": "/faculty/areas",
  "dr-m-anil-ramesh": "/faculty/areas",
  "dr-v-g-chari": "/faculty/areas",
  "dr-pavan-patel": "/faculty/areas",
  "dr-s-v-ramana-rao": "/faculty/areas",
  "dr-s-v": "/faculty/areas",
  "pardha-saradhi-m": "/faculty/areas",
  "sindhuja-guduru": "/faculty/areas",
  "subba-rama-sarma-k": "/faculty/areas",
  "harish-k": "/faculty/areas",
  "pushpa-machani": "/faculty/areas",
  "mohit-w-nigam": "/faculty/areas",
  "chaithanya-muppavarapu": "/faculty/areas",
  "rahul-jain": "/faculty/areas",
  "bipul-kumar": "/homepage",
  "sri-a-muralidhar-prasad": "/faculty/areas",
  "smt-v-jayalakshmi": "/faculty/areas",
  "dr-k-sasi-kumar": "/faculty/areas",

  // Delivery
  "delivery": "/faculty/areas",

  // Events
  "samaroh2011": "/homepage",
  "samaroh-2021": "/homepage",
  "samaroh-2022": "/homepage",
  "26samanvay": "/homepage",
  "20thsamanvay": "/homepage",

  // Other Pages
  "industry-lecture-series": "/homepage",
  "recruitment-process": "/homepage",
  "past-recuiters": "/homepage",
  "milestones": "/homepage",
  "samaroh-2022-1": "/homepage",

  // Blog/News Articles (many are thin content, redirect to homepage)
  "category/events": "/homepage",
  "tiptips-for-smart-manager": "/homepage",
  "important-skills-will-get-along-mba-degree": "/homepage",
  "mba-colleges-hyderabad": "/homepage",
  "mba-college-hyderabad": "/homepage",
  "management-colleges-hyderabad": "/homepage",
  "best-mba-colleges-south-india": "/homepage",
  "site": "/homepage",
  "least-1-hour-thinking-time": "/homepage",
  "need-study-top-b-schools-successful": "/homepage",
  "improve-soft-skills": "/homepage",
  "importance-business-administration": "/homepage",
  "site-1": "/homepage",
  "site-2": "/homepage",
  "siva-sivani-degree-college": "/homepage",
  "mba-institutes-india": "/homepage",
  "important-techniques-mba-freshers": "/homepage",
  "site/about-us/vice-president-speaks": "/homepage",
  "site/about-us/our-institute": "/homepage",
  "site/publications/261-sugyan": "/homepage",
  "site/placements/class-of-year": "/homepage",
  "site/life-ssim/snatak/406": "/homepage",
  "site/academics/program-a-pedagogy": "/homepage",
  "sps-high-school": "/homepage",
  "pgdm-marketing": "/homepage",
  "pgdm-hr": "/homepage",
  "icm": "/homepage",
  "placement": "/placement/records",
  "nba": "/homepage",
  "adminski": "/homepage",
  "admin": "/homepage",

  // Articles/Marketing Pages (redirect to homepage as content is promotional)
  "top-10-pgdm-colleges-in-hyderabad": "/homepage",
  "top-10-mba-colleges-in-hyderabad": "/homepage",
  "top-mba-colleges-in-hyderabad-with-placement": "/placement/records",
  "list-of-top-b-schools-in-hyderabad-for-mba": "/homepage",
  "pgdm-colleges-in-hyderabad-india": "/homepage",
  "top-pgdm-colleges-in-hyderabad-for-a-bright-future": "/homepage",
  "best-colleges-offering-pgdm-in-hr-telangana": "/homepage",
  "elevate-your-career-with-these-pgdm-programs-in-business-analytics-in-telangana": "/homepage",
  "the-future-of-mba-pgdm-in-finance-and-your-gateway-to-success": "/homepage",

  // Index pages
  "index": "/homepage",
  "index-php": "/homepage",
  "index-php-1": "/homepage",

  // Administrative
  "administrative-profiles": "/homepage",
};

// ============================================================================
// PATTERN-BASED REDIRECTS (Checked second - for dynamic URL patterns)
// ============================================================================

const patternRedirects = [
  // WordPress query string URLs
  {
    pattern: /^index\.php\?option=com_content&task=view&id=(\d+)&Itemid=(\d+)$/,
    destination: "/homepage",
    description: "WordPress legacy query URLs",
  },
  {
    pattern: /^index\.php$/,
    destination: "/homepage",
    description: "WordPress index.php",
  },

  // WP_CONTENT PDFs and files
  {
    pattern: /^wp-content\/uploads.*\.pdf$/,
    destination: "/homepage",
    description: "Old PDF files (no longer exist)",
  },
  {
    pattern: /^wp-content\/uploads.*$/,
    destination: "/homepage",
    description: "Old uploaded content",
  },
  {
    pattern: /^wp-content\/uploads\/(\d+).*$/,
    destination: "/homepage",
    description: "Old uploaded files with year prefix",
  },
  {
    pattern: /^wp-content\/uploads.*$/,
    destination: "/homepage",
    description: "All wp-content uploads",
  },
  {
    pattern: /^wp-content\/.*\.pdf$/,
    destination: "/homepage",
    description: "WP content PDF files",
  },
  {
    pattern: /^wp-content\/.*$/,
    destination: "/homepage",
    description: "All wp-content files",
  },

  // Footer/AICTE PDFs
  {
    pattern: /^footer\/.*\.pdf$/,
    destination: "/homepage",
    description: "Footer PDF files",
  },

  // Assets PDFs
  {
    pattern: /^assets\/images\/pdfs\/.*\.pdf$/,
    destination: "/homepage",
    description: "Asset PDF files",
  },
  {
    pattern: /^assets\/images\/applications\/.*\.pdf$/,
    destination: "/homepage",
    description: "Application PDF files",
  },

  // IQAC PDFs
  {
    pattern: /^iqac\/.*\.pdf$/,
    destination: "/homepage",
    description: "IQAC PDF files",
  },
  {
    pattern: /^iqac\/.*$/,
    destination: "/homepage",
    description: "IQAC files",
  },

  // NAAC documents
  {
    pattern: /^naac-2021\/.*$/,
    destination: "/homepage",
    description: "NAAC 2021 files",
  },

  // Garbage/spam URL patterns (random looking paths with alphanumeric codes)
  {
    pattern: /^[a-z]{5,6}\/[a-z0-9]+$/,
    destination: "/homepage",
    description: "Likely spam/bot URLs",
  },
  {
    pattern: /^[a-z]{5,6}\/[a-z0-9]+\.html$/,
    destination: "/homepage",
    description: "Likely spam/bot HTML URLs",
  },

  // Student placement reports with years
  {
    pattern: /^student-wise-placementreport-(\d{4}-\d{2})\/?$/,
    destination: "/placement/records",
    description: "Student placement reports by year",
  },
  {
    pattern: /^student-wise-placement-report-(\d{4}-\d{2})\/?$/,
    destination: "/placement/records",
    description: "Student placement report variants",
  },
  {
    pattern: /^studentwise-placementreport-(\d{4}-\d{2})\/?$/,
    destination: "/placement/records",
    description: "Studentwise placement reports",
  },

  // Faculty profile URLs (name-based)
  {
    pattern: /^[a-z]+(-[a-z]+)+$/,
    destination: "/faculty/areas",
    description: "Likely faculty profile URLs",
    exclude: ["board-of-governers", "board-of-studies", "about-us"],
  },

  // PDF files in various paths
  {
    pattern: /^.*\.pdf$/,
    destination: "/homepage",
    description: "Any PDF file",
    exclude: [
      "Employee_Hand_Book.pdf",
      "Student_Hand_Book_Batch_2025_27.pdf",
      "hr&facultyDevelopmentPolicies.pdf",
    ],
  },

  // WordPress feed URLs
  {
    pattern: /^feed\/?.*$/,
    destination: "/homepage",
    description: "WordPress RSS feeds",
  },
];

// ============================================================================
// SPECIAL CASES - Pages that need to be created
// ============================================================================

const pagesNeedingCreation = [
  "/about-us",
  "/transport-facility",
  "/program-fee",
];

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Normalize a URL path for comparison
 * - Removes trailing slash (except for root)
 * - Removes protocol and domain
 * - Lowercases
 */
export function normalizeUrlPath(url) {
  if (!url) return "";

  let path = url.toLowerCase().trim();

  // Remove protocol
  path = path.replace(/^https?:\/\/[^\/]+/, "");

  // Remove trailing slash (keep root as /)
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Remove leading slash for consistent comparison
  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  // Remove query string
  path = path.split("?")[0];

  // Remove hash
  path = path.split("#")[0];

  return path;
}

/**
 * Check if a path needs a new page created
 */
export function needsNewPage(path) {
  const normalized = normalizeUrlPath(path);
  return (
    exactRedirects[normalized] === "/need-page" ||
    pagesNeedingCreation.some((p) => normalizeUrlPath(p) === normalized)
  );
}

/**
 * Get the redirect destination for a given URL
 * Returns { destination: string, type: 'exact' | 'pattern' | 'none', isNewPage: boolean }
 */
export function getRedirect(destination) {
  const normalized = normalizeUrlPath(destination);

  // 1. Check exact matches first
  if (exactRedirects[normalized]) {
    const dest = exactRedirects[normalized];
    return {
      destination: dest === "/need-page" ? null : dest,
      type: "exact",
      isNewPage: dest === "/need-page",
    };
  }

  // 2. Check pattern matches
  for (const rule of patternRedirects) {
    if (rule.pattern.test(normalized)) {
      // Check exclusions
      if (rule.exclude && rule.exclude.includes(normalized)) {
        continue;
      }
      return {
        destination: rule.destination === "/homepage" ? "/" : rule.destination,
        type: "pattern",
        isNewPage: false,
      };
    }
  }

  // 3. No redirect found
  return {
    destination: null,
    type: "none",
    isNewPage: false,
  };
}

/**
 * Check if a URL is a known spam/bot URL pattern
 */
export function isSpamUrl(path) {
  const normalized = normalizeUrlPath(path);

  // Short random-looking paths with numbers
  if (/^[a-z]{4,6}\/[a-z0-9]{6,10}(\.html)?$/.test(normalized)) {
    return true;
  }

  // Query strings with search terms
  if (normalized.includes("search_term_string")) {
    return true;
  }

  return false;
}

// ============================================================================
// STATIC REDIRECTS ARRAY - For next.config.mjs or middleware
// ============================================================================

/**
 * Generate a flat array of [source, destination] pairs
 * This can be used directly in next.config.mjs redirects
 */
export function generateStaticRedirects() {
  const redirects = [];

  for (const [source, dest] of Object.entries(exactRedirects)) {
    if (dest === "/need-page") continue; // Skip pages that need creation
    if (dest === "/homepage") {
      redirects.push({ source: `/${source}`, destination: "/" });
    } else {
      redirects.push({ source: `/${source}`, destination: dest });
    }
  }

  return redirects;
}

export default {
  exactRedirects,
  patternRedirects,
  pagesNeedingCreation,
  normalizeUrlPath,
  getRedirect,
  isSpamUrl,
  generateStaticRedirects,
};
