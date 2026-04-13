/**
 * COMPLETE REDIRECT REGISTRY
 * Generated from the SEO team's Excel sheet
 *
 * Format: { oldPath: newPath }
 * oldPath: The path from the old WordPress URL (without domain)
 * newPath: The target URL (can be full URL or path)
 *
 * Categories:
 * 1. EXACT_REDIRECTS - Direct 1:1 mappings
 * 2. FACULTY_REDIRECTS - All faculty profile redirects
 * 3. PDF_FILE_REDIRECTS - Old PDF files that no longer exist
 * 4. GARBAGE_REDIRECTS - Spam/bot URLs redirecting to homepage
 * 5. PAGES_NEEDING_CREATION - URLs that need new pages
 */

// ============================================================================
// EXACT REDIRECTS - From Excel Sheet
// ============================================================================

export const EXACT_REDIRECTS = {
  // ---------------------------------------------------------------------------
  // Placements (all placement report URLs -> /placement/records)
  // ---------------------------------------------------------------------------
  "student-wise-placementreport-2022-23": "/placement/records",
  "pgdm-placement-reports": "/placement/records",
  "pgdm-admission-procedure": "/admissions/pgdm-bifs",
  "team-placements": "/placement/records",
  "student-wise-placement-report-2018-19": "/placement/records",
  "studentwise-placementreport-2016-17": "/placement/records",
  "placement-statistics": "/placement/records",

  // ---------------------------------------------------------------------------
  // Leadership / About (board members, founders, directors)
  // ---------------------------------------------------------------------------
  "board-of-governors": "/about/board-of-governors",
  "board-of-studies": "/about/board-of-studies",
  "founder": "/about/leadership",
  "founders-message": "/about/leadership",
  "directors-message": "/about/board-of-governors",
  "presidents-message": "/about/board-of-governors",

  // ---------------------------------------------------------------------------
  // Rankings / Accreditations
  // ---------------------------------------------------------------------------
  "rankings-awards": "/about/accreditations-rankings",
  "grievance-redressal-cell": "/about/board-of-governors",
  "naac-2021": "/homepage",

  // ---------------------------------------------------------------------------
  // Faculty URLs (many old WP faculty profile pages -> /faculty/areas)
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
  "dr-pavan-patel": "/faculty/areas",
  "ramana-rao-s-v": "/faculty/areas",
  "bipul-kumar": "/homepage", // Redirect to homepage (no faculty profile)
  "delivery": "/faculty/areas",

  // ---------------------------------------------------------------------------
  // Admissions URLs
  // ---------------------------------------------------------------------------
  "admission-team": "/admissions/pgdm-triple-specialisation",
  "admission-team-1": "/admissions/fpm-efpm",
  "pgdm-gd-pi-dates": "/programs/pgdm-bifs",
  "admissions-ba": "/admissions/pgdm-ba",
  "merit-scholarship": "/homepage",
  "fpm-admission": "/admissions/fpm-efpm",
  "fpm-admission-procedure": "/admissions/fpm-efpm",

  // ---------------------------------------------------------------------------
  // Programs
  // ---------------------------------------------------------------------------
  "pgdm": "/programs/pgdm-ba",
  "pgdm-triple-specialization": "/admissions/pgdm-triple-specialisation",
  "admission": "/homepage",
  "efpm-specialization": "/programs/fpm-efpm",
  "fpm-efpm": "/programs/fpm-efpm",
  "program-structure-ba": "/programs/pgdm-ba",

  // ---------------------------------------------------------------------------
  // Students Life / Campus
  // ---------------------------------------------------------------------------
  "students-life/news-announcements": "/students-life/life-at-ssim",
  "students-life-news-announcements": "/students-life/life-at-ssim",
  "campus-life": "/students-life/life-at-ssim",
  "student-achievement": "/students-life/life-at-ssim",
  "student-feedback": "/homepage",

  // ---------------------------------------------------------------------------
  // Other Pages
  // ---------------------------------------------------------------------------
  "iqac": "/iqac",
  "academic": "/homepage",
  "industry-lecture-series": "/homepage",
  "recruitment-process": "/homepage",
  "past-recuiters": "/homepage",
  "working-papers-2018-19": "/homepage",
  "international-conference": "/homepage",
  "centre-for-international-studies": "/homepage",
  "category/events": "/homepage",
  "samaroh2011": "/homepage",
  "samaroh-2021": "/homepage",
  "samaroh-2022": "/homepage",
  "26samanvay": "/homepage",
  "20thsamanvay": "/homepage",
  "milestones": "/homepage",
  "nba": "/homepage",
  "aqar-and-mom-naac": "/homepage",
  "transport-facility": "/need-page", // Needs new page
  "program-fee": "/need-page", // Needs new page
  "about-us": "/need-page", // Needs new page
  "adjunct-faculty": "/homepage",
  "administrative-profiles": "/homepage",
  "faculty-research-2015-16": "/homepage",

  // ---------------------------------------------------------------------------
  // WordPress/Joomla index pages
  // ---------------------------------------------------------------------------
  "index": "/homepage",
  "index-php": "/homepage",
  "index-php-1": "/homepage",
  "site": "/homepage",
  "site-1": "/homepage",
  "site-2": "/homepage",
  "icm": "/homepage",
  "sps-high-school": "/homepage",
  "pgdm-marketing": "/homepage",
  "pgdm-hr": "/homepage",
  "mba-institutes-india": "/homepage",
  "mba-colleges-hyderabad": "/homepage",
  "mba-college-hyderabad": "/homepage",
  "management-colleges-hyderabad": "/homepage",
  "best-mba-colleges-south-india": "/homepage",
  "site/about-us/vice-president-speaks": "/homepage",
  "site/about-us/our-institute": "/homepage",
  "site/publications/261-sugyan": "/homepage",
  "site/placements/class-of-year": "/homepage",
  "site/life-ssim/snatak/406": "/homepage",
  "site/academics/program-a-pedagogy": "/homepage",
  "site/publications/261-sugyan-1": "/homepage",
  "siva-sivani-degree-college": "/homepage",
  "tiptips-for-smart-manager": "/homepage",
  "least-1-hour-thinking-time": "/homepage",
  "need-study-top-b-schools-successful": "/homepage",
  "improve-soft-skills": "/homepage",
  "important-skills-will-get-along-mba-degree": "/homepage",
  "importance-business-administration": "/homepage",
  "important-techniques-mba-freshers": "/homepage",

  // ---------------------------------------------------------------------------
  // Marketing/SEO article URLs (thin content, redirect to homepage)
  // ---------------------------------------------------------------------------
  "top-10-pgdm-colleges-in-hyderabad": "/homepage",
  "top-10-mba-colleges-in-hyderabad": "/homepage",
  "top-mba-colleges-in-hyderabad-with-placement": "/placement/records",
  "list-of-top-b-schools-in-hyderabad-for-mba": "/homepage",
  "pgdm-colleges-in-hyderabad-india": "/homepage",
  "top-pgdm-colleges-in-hyderabad-for-a-bright-future": "/homepage",
  "best-colleges-offering-pgdm-in-hr-telangana": "/homepage",
  "elevate-your-career-with-these-pgdm-programs-in-business-analytics-in-telangana": "/homepage",
  "the-future-of-mba-pgdm-in-finance-and-your-gateway-to-success": "/homepage",
  "pgdm-bifs-post-graduate-diploma-in-management-banking-insurance-and-financial-services-in-hyderabad-india": "/homepage",

  // ---------------------------------------------------------------------------
  // Search URLs
  // ---------------------------------------------------------------------------
  "search": "/homepage",
};

// ============================================================================
// PATTERN REDIRECTS (for dynamic matching)
// ============================================================================

export const PATTERN_REDIRECTS = [
  // ---------------------------------------------------------------------------
  // WordPress/Joomla query string URLs
  // ---------------------------------------------------------------------------
  {
    pattern: /^index\.php\?option=com_content&task=view&id=\d+&Itemid=\d+$/,
    destination: "/",
    description: "Joomla article URLs",
  },
  {
    pattern: /^index\.php$/,
    destination: "/",
    description: "WordPress/Joomla index.php",
  },
  {
    pattern: /^index\.php\?option=com_admission.*$/,
    destination: "/",
    description: "Joomla admission URLs",
  },

  // ---------------------------------------------------------------------------
  // Student placement report year patterns
  // ---------------------------------------------------------------------------
  {
    pattern: /^student-wise-placementreport-\d{4}-\d{2}\/?$/,
    destination: "/placement/records",
    description: "Student placement reports (year pattern)",
  },
  {
    pattern: /^student-wise-placement-report-\d{4}-\d{2}\/?$/,
    destination: "/placement/records",
    description: "Student placement report variants",
  },
  {
    pattern: /^studentwise-placementreport-\d{4}-\d{2}\/?$/,
    destination: "/placement/records",
    description: "Studentwise placement reports",
  },

  // ---------------------------------------------------------------------------
  // WP Content PDFs and files (no longer exist -> homepage)
  // ---------------------------------------------------------------------------
  {
    pattern: /^wp-content\/uploads.*\.pdf$/,
    destination: "/",
    description: "Old uploaded PDF files",
  },
  {
    pattern: /^wp-content\/uploads.*$/,
    destination: "/",
    description: "Old uploaded content",
  },
  {
    pattern: /^wp-content\/.*\.pdf$/,
    destination: "/",
    description: "WP content PDF files",
  },
  {
    pattern: /^wp-content\/.*$/,
    destination: "/",
    description: "All wp-content files",
  },
  {
    pattern: /^wp-includes\/.*$/,
    destination: "/",
    description: "WP includes files",
  },

  // ---------------------------------------------------------------------------
  // Footer and asset PDFs
  // ---------------------------------------------------------------------------
  {
    pattern: /^footer\/.*\.pdf$/,
    destination: "/",
    description: "Footer PDF files",
  },
  {
    pattern: /^assets\/images\/pdfs\/.*\.pdf$/,
    destination: "/",
    description: "Asset PDF files",
  },
  {
    pattern: /^assets\/images\/applications\/.*\.pdf$/,
    destination: "/",
    description: "Application PDF files",
  },
  {
    pattern: /^pdfs\/.*\.pdf$/,
    destination: "/",
    description: "PDFs folder files",
  },

  // ---------------------------------------------------------------------------
  // IQAC documents
  // ---------------------------------------------------------------------------
  {
    pattern: /^iqac\/.*\.pdf$/,
    destination: "/",
    description: "IQAC PDF files",
  },
  {
    pattern: /^iqac\/.*$/,
    destination: "/",
    description: "IQAC files",
  },
  {
    pattern: /^iqac\/Mandatory_Disclosures.*\.pdf$/,
    destination: "/",
    description: "IQAC mandatory disclosures",
  },
  {
    pattern: /^iqac\/Accreditations\/.*\.pdf$/,
    destination: "/",
    description: "IQAC accreditation files",
  },
  {
    pattern: /^iqac\/AICTE\/.*\.pdf$/,
    destination: "/",
    description: "IQAC AICTE files",
  },

  // ---------------------------------------------------------------------------
  // NAAC documents
  // ---------------------------------------------------------------------------
  {
    pattern: /^naac-2021\/.*$/,
    destination: "/",
    description: "NAAC 2021 files",
  },
  {
    pattern: /^naac-2021\/Criteria_1\/.*$/,
    destination: "/",
    description: "NAAC criteria files",
  },

  // ---------------------------------------------------------------------------
  // Garbage/spam URLs (random alphanumeric patterns)
  // These look like bot/spam URLs and should go to homepage
  // ---------------------------------------------------------------------------
  {
    pattern: /^[a-z]{5,6}\/[a-z0-9]{6,12}\.html$/,
    destination: "/",
    description: "Spam HTML URLs",
  },
  {
    pattern: /^[a-z]{5,6}\/[a-z0-9]{6,12}$/,
    destination: "/",
    description: "Spam URLs",
  },
  {
    pattern: /kiqaq\/.*\.html$/,
    destination: "/",
    description: "Spam URL pattern 1",
  },
  {
    pattern: /^kiqaq\/.*$/,
    destination: "/",
    description: "Spam URL pattern 2",
  },

  // ---------------------------------------------------------------------------
  // WordPress feeds
  // ---------------------------------------------------------------------------
  {
    pattern: /^feed\/.*$/,
    destination: "/",
    description: "WordPress RSS feeds",
  },

  // ---------------------------------------------------------------------------
  // WordPress search with Kochava tracking
  // ---------------------------------------------------------------------------
  {
    pattern: /^feed\/.*utm_source=.*$/,
    destination: "/",
    description: "Tracked feed URLs",
  },

  // ---------------------------------------------------------------------------
  // Misc WordPress URLs
  // ---------------------------------------------------------------------------
  {
    pattern: /^\?utm_source=.*$/,
    destination: "/",
    description: "UTM source query strings",
  },
  {
    pattern: /^#openModal$/,
    destination: "/",
    description: "Modal hash URLs",
  },
  {
    pattern: /^\$$/,
    destination: "/",
    description: "Dollar sign URL",
  },
  {
    pattern: /^&$/,
    destination: "/",
    description: "Ampersand URL",
  },
  {
    pattern: /^pduhb\/.*$/,
    destination: "/",
    description: "Garbage URL pduhb",
  },

  // ---------------------------------------------------------------------------
  // Faculty profile patterns (name-based URLs that weren't in exact list)
  // ---------------------------------------------------------------------------
  {
    pattern: /^[a-z]+(-[a-z]+){1,4}\/?$/,
    destination: "/faculty/areas",
    description: "Likely faculty profile URLs",
    exclude: [
      "board-of-governers",
      "board-of-studies",
      "about-us",
      "campus-life",
      "past-recuiters",
      "placements",
      "index",
      "site",
    ],
  },

  // ---------------------------------------------------------------------------
  // Any remaining PDF files
  // ---------------------------------------------------------------------------
  {
    pattern: /^.*\.pdf$/,
    destination: "/",
    description: "Any PDF file",
  },
];

// ============================================================================
// PAGES THAT NEED TO BE CREATED
// ============================================================================

export const PAGES_NEEDING_CREATION = [
  {
    path: "/about-us",
    note: "Create a new about page with company history, mission, vision",
    priority: "high",
  },
  {
    path: "/transport-facility",
    note: "Create transport/facilities page",
    priority: "medium",
  },
  {
    path: "/program-fee",
    note: "Create comprehensive fee structure page for all programs",
    priority: "high",
  },
];

// ============================================================================
// REDIRECTS FOR NEXT.CONFIG.MJS (Static redirects array)
// ============================================================================

/**
 * This array can be directly pasted into next.config.mjs
 * as the `redirects` function return value
 */
export function getNextConfigRedirects() {
  const redirects = [];

  // Add exact redirects
  for (const [source, dest] of Object.entries(EXACT_REDIRECTS)) {
    if (dest === "/need-page") {
      // Skip - these need new pages
      continue;
    }
    if (dest === "/homepage") {
      redirects.push({
        source: `/:path(${source})`,
        destination: "/",
        permanent: true,
      });
    } else {
      redirects.push({
        source: `/:path(${source})`,
        destination: dest,
        permanent: true,
      });
    }
  }

  return redirects;
}

export default {
  EXACT_REDIRECTS,
  PATTERN_REDIRECTS,
  PAGES_NEEDING_CREATION,
  getNextConfigRedirects,
};
