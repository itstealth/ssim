import { NextResponse } from "next/server";

// ============================================================================
// EXCLUDED PATHS - These never get redirected
// ============================================================================
const EXCLUDED_PATHS = [
  "/_next",
  "/api",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json",
  "/ssimlogo.webp",
  "/ssim-favicon.png",
  "/public",
  "/Employee_Hand_Book.pdf",
  "/Student_Hand_Book_Batch_2025_27.pdf",
  "/hr&facultyDevelopmentPolicies.pdf",
];

// ============================================================================
// VALID PATHS - Known good Next.js routes, NEVER intercepted by middleware
// ============================================================================
const VALID_PATHS = [
  "/",
  "/about/leadership",
  "/about/vision-mission",
  "/about/board-of-governors",
  "/about/board-of-studies",
  "/about/academic-advisory-board",
  "/about/accreditations-rankings",
  "/programs/pgdm-ba",
  "/programs/pgdm-bifs",
  "/programs/pgdm-triple-specialisation",
  "/programs/fpm-efpm",
  "/programs/fpm",
  "/programs/efpm",
  "/admissions/pgdm-ba",
  "/admissions/pgdm-bifs",
  "/admissions/pgdm-triple-specialisation",
  "/admissions/fpm-efpm",
  "/alumni",
  "/alumni-guidance",
  "/success-stories",
  "/faculty/areas",
  "/faculty/publications",
  "/research/case-research-center",
  "/international-relations",
  "/placement/records",
  "/placement/team",
  "/placement/internships",
  "/placement/guest-lectures",
  "/students-life/news",
  "/students-life/students-achievements",
  "/students-life/life-at-ssim",
  "/virtual-tour",
  "/contact-us",
  "/iqac",
  "/blog",
  "/thank-you",
  "/pgdm-admissions",
  "/internal-complaints",
  "/grievance-redressal-mechanism",
];

// ============================================================================
// LEGACY WORDPRESS/JOOMLA PATH PREFIXES
// These indicate the URL is from the old WordPress/Joomla site
// ============================================================================
const LEGACY_PATH_INDICATORS = [
  "wp-content",
  "wp-includes",
  "wp-admin",
  "index.php",
  "?option=com_", // Joomla query strings
  "feed/",
  "search/",
  "page/",
  "category/",
  "tag/",
  "author/",
  "attachments/",
];

// ============================================================================
// SPAM/BOT URL PATTERNS - Random-looking URLs that should go to homepage
// ============================================================================
const SPAM_URL_PATTERNS = [
  /^[a-z]{5,7}\/[a-z0-9]{6,12}\.html$/i, // e.g., kiqaq/a2140724.html
  /^[a-z]{5,7}\/[a-z0-9]{6,12}$/i, // e.g., fkepf/n1093795
  /^kiqaq\//i,
  /^\?utm_/, // UTM parameters
];

// ============================================================================
// REDIRECT MAP - Key: old path (no leading slash), Value: new path
// ============================================================================
const REDIRECT_MAP = {
  // ---------------------------------------------------------------------------
  // PLACEMENTS
  // ---------------------------------------------------------------------------
  "student-wise-placementreport-2022-23": "/placement/records",
  "pgdm-placement-reports": "/placement/records",
  "team-placements": "/placement/records",
  "student-wise-placement-report-2018-19": "/placement/records",
  "student-wise-placement-report-2018-19-1": "/placement/records",
  "studentwise-placementreport-2016-17": "/placement/records",
  "placement-statistics": "/placement/records",

  // ---------------------------------------------------------------------------
  // BOARD & GOVERNANCE
  // ---------------------------------------------------------------------------
  "board-of-governors": "/about/board-of-governors",
  "board-of-studies": "/about/board-of-studies",
  "rankings-awards": "/about/accreditations-rankings",
  "grievance-redressal-cell": "/about/board-of-governors",

  // ---------------------------------------------------------------------------
  // LEADERSHIP
  // ---------------------------------------------------------------------------
  "founders-message": "/about/leadership",
  "directors-message": "/about/board-of-governors",
  "presidents-message": "/about/board-of-governors",

  // ---------------------------------------------------------------------------
  // FACULTY
  // ---------------------------------------------------------------------------
  "program-wise-faculty": "/faculty/areas",
  "full-time-faculty": "/faculty/areas",
  "core-faculty": "/faculty/areas",
  "dr-v-g-chari": "/faculty/areas",
  "lohithkumar-b": "/faculty/areas",
  "sri-arjit-santikary": "/faculty/areas",
  "sri-t-thirumal-reddy": "/faculty/areas",
  "dr-m-anil-ramesh": "/faculty/areas",
  "dr-s-v-ramana-rao": "/faculty/areas",
  "dr-s-v": "/faculty/areas",
  "chandra-sekhar-s-f": "/faculty/areas",
  "pardha-saradhi-m": "/faculty/areas",
  "sindhuja-guduru": "/faculty/areas",
  "subba-rama-sarma-k": "/faculty/areas",
  "harish-k": "/faculty/areas",
  "pushpa-machani": "/faculty/areas",
  "mohit-w-nigam": "/faculty/areas",
  "chaithanya-muppavarapu": "/faculty/areas",
  "rahul-jain": "/faculty/areas",
  "sri-a-muralidhar-prasad": "/faculty/areas",
  "smt-v-jayalakshmi": "/faculty/areas",
  "dr-k-sasi-kumar": "/faculty/areas",
  "ramana-rao-s-v": "/faculty/areas",
  "delivery": "/faculty/areas",
  "dr-pavan-patel": "/faculty/areas",

  // ---------------------------------------------------------------------------
  // ADMISSIONS
  // ---------------------------------------------------------------------------
  "pgdm-admission-procedure": "/admissions/pgdm-bifs",
  "pgdm-gd-pi-dates": "/programs/pgdm-bifs",
  "admission-team": "/admissions/pgdm-triple-specialisation",
  "admission-team-1": "/admissions/fpm-efpm",
  "admissions-ba": "/admissions/pgdm-ba",
  "fpm-admission": "/admissions/fpm-efpm",
  "fpm-admission-procedure": "/admissions/fpm-efpm",

  // ---------------------------------------------------------------------------
  // PROGRAMS
  // ---------------------------------------------------------------------------
  "pgdm": "/programs/pgdm-ba",
  "pgdm-triple-specialization": "/admissions/pgdm-triple-specialisation",
  "efpm-specialization": "/programs/fpm-efpm",
  "fpm-efpm": "/programs/fpm-efpm",
  "program-structure-ba": "/programs/pgdm-ba",

  // ---------------------------------------------------------------------------
  // STUDENTS LIFE
  // ---------------------------------------------------------------------------
  "students-life/news-announcements": "/students-life/life-at-ssim",
  "students-life-news-announcements": "/students-life/life-at-ssim",
  "campus-life": "/students-life/life-at-ssim",
  "student-achievement": "/students-life/life-at-ssim",

  // ---------------------------------------------------------------------------
  // OTHER PAGES -> HOMEPAGE
  // ---------------------------------------------------------------------------
  "academic": "/",
  "iqac-1": "/",
  "industry-lecture-series": "/",
  "recruitment-process": "/",
  "past-recuiters": "/",
  "working-papers-2018-19": "/",
  "international-conference": "/",
  "centre-for-international-studies": "/",
  "category/events": "/",
  "samaroh2011": "/",
  "samaroh-2021": "/",
  "samaroh-2022": "/",
  "26samanvay": "/",
  "20thsamanvay": "/",
  "milestones": "/",
  "naac-2021": "/",
  "aqar-and-mom-naac": "/",
  "merit-scholarship": "/",
  "admission": "/",
  "bipul-kumar": "/",
  "bipul-kumar-1": "/",
  "adjunct-faculty": "/",
  "administrative-profiles": "/",
  "faculty-research-2015-16": "/",
  "student-feedback": "/",
  "grievance": "/",
  "nba": "/",

  // ---------------------------------------------------------------------------
  // WORDPRESS/JOOMLA INDEX
  // ---------------------------------------------------------------------------
  "index": "/",
  "index.php": "/",
  "index.php-1": "/",
  "site": "/",
  "site-1": "/",
  "site-2": "/",
  "icm": "/",
  "sps-high-school": "/",
  "pgdm-marketing": "/",
  "pgdm-hr": "/",

  // ---------------------------------------------------------------------------
  // SEO ARTICLE URLS -> HOMEPAGE
  // ---------------------------------------------------------------------------
  "top-10-pgdm-colleges-in-hyderabad": "/",
  "top-10-mba-colleges-in-hyderabad": "/",
  "top-mba-colleges-in-hyderabad-with-placement": "/placement/records",
  "list-of-top-b-schools-in-hyderabad-for-mba": "/",
  "pgdm-colleges-in-hyderabad-india": "/",
  "top-pgdm-colleges-in-hyderabad-for-a-bright-future": "/",
  "best-colleges-offering-pgdm-in-hr-telangana": "/",
  "elevate-your-career-with-these-pgdm-programs-in-business-analytics-in-telangana": "/",
  "the-future-of-mba-pgdm-in-finance-and-your-gateway-to-success": "/",
  "pgdm-bifs-post-graduate-diploma-in-management-banking-insurance-and-financial-services-in-hyderabad-india": "/",

  // ---------------------------------------------------------------------------
  // MBA/COLLEGE LIST PAGES -> HOMEPAGE
  // ---------------------------------------------------------------------------
  "mba-institutes-india": "/",
  "mba-colleges-hyderabad": "/",
  "mba-college-hyderabad": "/",
  "management-colleges-hyderabad": "/",
  "best-mba-colleges-south-india": "/",

  // ---------------------------------------------------------------------------
  // BLOG ARTICLE URLS -> HOMEPAGE
  // ---------------------------------------------------------------------------
  "tiptips-for-smart-manager": "/",
  "important-skills-will-get-along-mba-degree": "/",
  "least-1-hour-thinking-time": "/",
  "need-study-top-b-schools-successful": "/",
  "improve-soft-skills": "/",
  "importance-business-administration": "/",
  "important-techniques-mba-freshers": "/",
  "siva-sivani-degree-college": "/",

  // ---------------------------------------------------------------------------
  // JOOMLA SITE URLS -> HOMEPAGE
  // ---------------------------------------------------------------------------
  "site/about-us/vice-president-speaks": "/",
  "site/about-us/our-institute": "/",
  "site/publications/261-sugyan": "/",
  "site/publications/261-sugyan-1": "/",
  "site/placements/class-of-year": "/",
  "site/life-ssim/snatak/406": "/",
  "site/academics/program-a-pedagogy": "/",
};

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Normalize URL path - remove protocol, www, trailing slash, query, hash
 */
function normalizePath(input) {
  if (!input) return "";

  let path = input.toLowerCase().trim();

  // Remove protocol and domain
  path = path.replace(/^https?:\/\/[^/]+/, "");

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
 * Check if URL path looks like a legacy WordPress/Joomla URL
 */
function isLegacyUrl(path) {
  const normalized = normalizePath(path);

  // Check for legacy path indicators
  for (const indicator of LEGACY_PATH_INDICATORS) {
    if (normalized.includes(indicator)) {
      return true;
    }
  }

  // Check for spam patterns
  for (const pattern of SPAM_URL_PATTERNS) {
    if (typeof pattern === "string" && normalized.includes(pattern)) {
      return true;
    }
    if (pattern instanceof RegExp && pattern.test(normalized)) {
      return true;
    }
  }

  // Check if it's in our redirect map
  if (REDIRECT_MAP[normalized]) {
    return true;
  }

  // Check for likely faculty profile URLs (name-based)
  if (/^[a-z]+(-[a-z]+){1,4}$/.test(normalized)) {
    // Exclude known non-faculty paths
    const excluded = [
      "board-of-governors",
      "board-of-studies",
      "about-us",
      "about-leadership",
      "about-leadership/",
      "campus-life",
      "past-recuiters",
      "about/leadership",
      "about/leadership/",
    ];
    if (!excluded.includes(normalized)) {
      return true;
    }
  }

  // Check for student placement report patterns
  if (/student-wise-placement|report-\d{4}|placementreport-\d{4}/.test(normalized)) {
    return true;
  }

  return false;
}

/**
 * Get redirect destination for a path
 */
function getRedirectDestination(path) {
  const normalized = normalizePath(path);
  return REDIRECT_MAP[normalized] || null;
}

/**
 * Handle pattern-based redirects for dynamic URL patterns
 */
function handlePatternRedirect(path) {
  const normalized = normalizePath(path);

  // WP content PDF files -> homepage
  if (/^wp-content\/uploads.*\.pdf$/.test(normalized)) return "/";
  if (/^wp-content\/.*\.pdf$/.test(normalized)) return "/";
  if (/^wp-content\/uploads.*$/.test(normalized)) return "/";

  // Footer/AICTE PDFs -> homepage
  if (/^footer\/.*\.pdf$/.test(normalized)) return "/";
  if (/^assets\/images\/pdfs\/.*\.pdf$/.test(normalized)) return "/";
  if (/^assets\/images\/applications\/.*\.pdf$/.test(normalized)) return "/";
  if (/^pdfs\/.*\.pdf$/.test(normalized)) return "/";

  // IQAC files -> homepage
  if (/^iqac\/.*\.pdf$/.test(normalized)) return "/";
  if (/^iqac\/.*$/.test(normalized)) return "/";

  // NAAC files -> homepage
  if (/^naac-2021\/.*$/.test(normalized)) return "/";

  // WordPress/Joomla query URLs -> homepage
  if (/index\.php\?option=com_content&task=view&id=\d+&Itemid=\d+/.test(normalized)) return "/";
  if (/index\.php\?option=com_admission/.test(normalized)) return "/";
  if (/^index\.php$/.test(normalized)) return "/";

  // Student placement reports with year patterns -> /placement/records
  if (/^student-wise-placementreport-\d{4}-\d{2}$/.test(normalized)) return "/placement/records";
  if (/^student-wise-placement-report-\d{4}-\d{2}$/.test(normalized)) return "/placement/records";
  if (/^studentwise-placementreport-\d{4}-\d{2}$/.test(normalized)) return "/placement/records";

  // Spam/bot URLs -> homepage
  if (/^[a-z]{5,7}\/[a-z0-9]{6,12}\.html$/.test(normalized)) return "/";
  if (/^[a-z]{5,7}\/[a-z0-9]{6,12}$/.test(normalized)) return "/";

  // WordPress feeds -> homepage
  if (/^feed\/.*$/.test(normalized)) return "/";

  // Any remaining PDF -> homepage
  const EXCLUDED_PDF_PATHS = [
    "employee_hand_book.pdf",
    "student_hand_book_batch_2025_27.pdf",
    "hr&facultydevelopmentpolicies.pdf",
  ];
  if (/\.pdf$/.test(normalized) && !EXCLUDED_PDF_PATHS.includes(normalized)) return "/";

  // Hash/fragment URLs -> homepage
  if (/^#openModal$/.test(normalized)) return "/";

  // Special character URLs -> homepage
  if (/^\$$/.test(normalized)) return "/";
  if (/^&$/.test(normalized)) return "/";

  return null;
}

// ============================================================================
// MIDDLEWARE HANDLER
// ============================================================================

export function middleware(request) {
  const { pathname, search, hostname } = request.nextUrl;

  // 1. Skip excluded paths
  if (EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 1.5. Skip known valid Next.js routes — never redirect these
  if (VALID_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // 2. Skip Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 3. Check if this looks like a legacy URL
  if (!isLegacyUrl(pathname + search)) {
    return NextResponse.next();
  }

  // 4. Try exact match first
  const exactDestination = getRedirectDestination(pathname + search);
  if (exactDestination) {
    const baseUrl = request.nextUrl.origin;
    const redirectUrl = new URL(exactDestination, baseUrl);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 5. Try pattern-based redirects
  const patternDestination = handlePatternRedirect(pathname + search);
  if (patternDestination) {
    const baseUrl = request.nextUrl.origin;
    const redirectUrl = new URL(patternDestination, baseUrl);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 6. No redirect found - let Next.js handle it (will 404 if not found)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api|robots.txt|sitemap.xml).*)",
  ],
};
