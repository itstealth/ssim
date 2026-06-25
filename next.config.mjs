/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // Disable automatic trailing-slash 308 redirect so WordPress REST API calls
  // like POST /wp-json/wp/v2/posts/ aren't intercepted before the proxy rewrite.
  // Trailing-slash normalization for regular pages is handled in middleware.js.
  skipTrailingSlashRedirect: true,

  outputFileTracingIncludes: {
    "/*": [
      "node_modules/@next/env/**",
      "node_modules/@swc/helpers/**",
      "node_modules/styled-jsx/**",
    ],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.ggpht.com", pathname: "/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "img.freepik.com", pathname: "/**" },
      { protocol: "https", hostname: "ssim.ac.in", pathname: "/**" },
      { protocol: "https", hostname: "www.ssim.ac.in", pathname: "/**" },
      { protocol: "https", hostname: "www.searchurcollege.com", pathname: "/**" },
      { protocol: "https", hostname: "ssimblogstorage.blob.core.windows.net", pathname: "/**" },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp", "image/avif"],
  },

  async rewrites() {
    const WP = "https://ssim-blog-b9egbrcnfccjbzee.centralindia-01.azurewebsites.net";
    return {
      // beforeFiles: run BEFORE static/prerendered pages so WP proxy is never cached as 404
      beforeFiles: [
        { source: "/wp-json/:path*", destination: `${WP}/wp-json/:path*` },
        { source: "/wp-admin/:path*", destination: `${WP}/wp-admin/:path*` },
        { source: "/wp-login.php", destination: `${WP}/wp-login.php` },
        { source: "/wp-content/:path*", destination: `${WP}/wp-content/:path*` },
        { source: "/wp-includes/:path*", destination: `${WP}/wp-includes/:path*` },
      ],
      afterFiles: [
        { source: "/pdfs/:path*", destination: "https://raw.githack.com/Stealth-Rishabh/ssim-assets/main/:path*" },
      ],
    };
  },

  async redirects() {
    return [
      // =====================================================================
      // PLACEMENT REDIRECTS
      // =====================================================================
      {
        source: "/student-wise-placementreport-2022-23",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/pgdm-placement-reports",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/team-placements",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/student-wise-placement-report-2018-19",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/studentwise-placementreport-2016-17",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/placement-statistics",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/student-wise-placement-report-2018-19-1",
        destination: "/placement/records",
        permanent: true,
      },

      // =====================================================================
      // BOARD & GOVERNANCE
      // =====================================================================
      {
        source: "/board-of-governors",
        destination: "/about/board-of-governors",
        permanent: true,
      },
      {
        source: "/board-of-studies",
        destination: "/about/board-of-studies",
        permanent: true,
      },
      {
        source: "/rankings-awards",
        destination: "/about/accreditations-rankings",
        permanent: true,
      },
      {
        source: "/grievance-redressal-cell",
        destination: "/about/board-of-governors",
        permanent: true,
      },

      // =====================================================================
      // LEADERSHIP MESSAGES
      // =====================================================================
      {
        source: "/founders-message",
        destination: "/about/leadership",
        permanent: true,
      },
      {
        source: "/directors-message",
        destination: "/about/board-of-governors",
        permanent: true,
      },
      {
        source: "/presidents-message",
        destination: "/about/board-of-governors",
        permanent: true,
      },

      // =====================================================================
      // FACULTY REDIRECTS
      // =====================================================================
      {
        source: "/program-wise-faculty",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/full-time-faculty",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/core-faculty",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/dr-v-g-chari",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/lohithkumar-b",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/sri-arjit-santikary",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/sri-t-thirumal-reddy",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/dr-m-anil-ramesh",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/dr-s-v-ramana-rao",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/chandra-sekhar-s-f",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/pardha-saradhi-m",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/sindhuja-guduru",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/subba-rama-sarma-k",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/harish-k",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/pushpa-machani",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/mohit-w-nigam",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/chaithanya-muppavarapu",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/rahul-jain",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/sri-a-muralidhar-prasad",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/smt-v-jayalakshmi",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/dr-k-sasi-kumar",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/ramana-rao-s-v",
        destination: "/faculty/areas",
        permanent: true,
      },
      {
        source: "/delivery",
        destination: "/faculty/areas",
        permanent: true,
      },

      // =====================================================================
      // ADMISSIONS
      // =====================================================================
      {
        source: "/pgdm-admission-procedure",
        destination: "/admissions/pgdm-bifs",
        permanent: true,
      },
      {
        source: "/pgdm-gd-pi-dates",
        destination: "/programs/pgdm-bifs",
        permanent: true,
      },
      {
        source: "/admission-team",
        destination: "/admissions/pgdm-triple-specialisation",
        permanent: true,
      },
      {
        source: "/admission-team-1",
        destination: "/admissions/fpm-efpm",
        permanent: true,
      },
      {
        source: "/admissions-ba",
        destination: "/admissions/pgdm-ba",
        permanent: true,
      },
      {
        source: "/fpm-admission",
        destination: "/admissions/fpm-efpm",
        permanent: true,
      },
      {
        source: "/fpm-admission-procedure",
        destination: "/admissions/fpm-efpm",
        permanent: true,
      },

      // =====================================================================
      // PROGRAMS
      // =====================================================================
      {
        source: "/pgdm",
        destination: "/programs/pgdm-ba",
        permanent: true,
      },
      {
        source: "/pgdm-triple-specialization",
        destination: "/admissions/pgdm-triple-specialisation",
        permanent: true,
      },
      {
        source: "/efpm-specialization",
        destination: "/programs/fpm-efpm",
        permanent: true,
      },
      {
        source: "/fpm-efpm",
        destination: "/programs/fpm-efpm",
        permanent: true,
      },
      {
        source: "/program-structure-ba",
        destination: "/programs/pgdm-ba",
        permanent: true,
      },

      // =====================================================================
      // STUDENTS LIFE
      // =====================================================================
      {
        source: "/students-life/news-announcements",
        destination: "/students-life/life-at-ssim",
        permanent: true,
      },
      {
        source: "/students-life-news-announcements",
        destination: "/students-life/life-at-ssim",
        permanent: true,
      },
      {
        source: "/campus-life",
        destination: "/students-life/life-at-ssim",
        permanent: true,
      },
      {
        source: "/student-achievement",
        destination: "/students-life/life-at-ssim",
        permanent: true,
      },

      // =====================================================================
      // OTHER PAGES -> HOMEPAGE
      // =====================================================================
      {
        source: "/academic",
        destination: "/",
        permanent: true,
      },
      {
        source: "/iqac-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/industry-lecture-series",
        destination: "/",
        permanent: true,
      },
      {
        source: "/recruitment-process",
        destination: "/",
        permanent: true,
      },
      {
        source: "/past-recuiters",
        destination: "/",
        permanent: true,
      },
      {
        source: "/working-papers-2018-19",
        destination: "/",
        permanent: true,
      },
      {
        source: "/international-conference",
        destination: "/",
        permanent: true,
      },
      {
        source: "/centre-for-international-studies",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/events",
        destination: "/",
        permanent: true,
      },
      {
        source: "/samaroh2011",
        destination: "/",
        permanent: true,
      },
      {
        source: "/samaroh-2021",
        destination: "/",
        permanent: true,
      },
      {
        source: "/samaroh-2022",
        destination: "/",
        permanent: true,
      },
      {
        source: "/26samanvay",
        destination: "/",
        permanent: true,
      },
      {
        source: "/20thsamanvay",
        destination: "/",
        permanent: true,
      },
      {
        source: "/milestones",
        destination: "/",
        permanent: true,
      },
      {
        source: "/naac-2021",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aqar-and-mom-naac",
        destination: "/",
        permanent: true,
      },
      {
        source: "/merit-scholarship",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admission",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bipul-kumar",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bipul-kumar-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/adjunct-faculty",
        destination: "/",
        permanent: true,
      },
      {
        source: "/administrative-profiles",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faculty-research-2015-16",
        destination: "/",
        permanent: true,
      },
      {
        source: "/student-feedback",
        destination: "/",
        permanent: true,
      },
      {
        source: "/grievance",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nba",
        destination: "/",
        permanent: true,
      },

      // =====================================================================
      // WORDPRESS/JOOMLA INDEX
      // =====================================================================
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/icm",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sps-high-school",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pgdm-marketing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pgdm-hr",
        destination: "/",
        permanent: true,
      },

      // =====================================================================
      // SEO ARTICLE URLS -> HOMEPAGE (thin content)
      // =====================================================================
      {
        source: "/top-10-pgdm-colleges-in-hyderabad",
        destination: "/",
        permanent: true,
      },
      {
        source: "/top-10-mba-colleges-in-hyderabad",
        destination: "/",
        permanent: true,
      },
      {
        source: "/top-mba-colleges-in-hyderabad-with-placement",
        destination: "/placement/records",
        permanent: true,
      },
      {
        source: "/list-of-top-b-schools-in-hyderabad-for-mba",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pgdm-colleges-in-hyderabad-india",
        destination: "/",
        permanent: true,
      },
      {
        source: "/top-pgdm-colleges-in-hyderabad-for-a-bright-future",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-colleges-offering-pgdm-in-hr-telangana",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elevate-your-career-with-these-pgdm-programs-in-business-analytics-in-telangana",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-future-of-mba-pgdm-in-finance-and-your-gateway-to-success",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pgdm-bifs-post-graduate-diploma-in-management-banking-insurance-and-financial-services-in-hyderabad-india",
        destination: "/",
        permanent: true,
      },

      // =====================================================================
      // MBA/COLLEGE LIST PAGES -> HOMEPAGE
      // =====================================================================
      {
        source: "/mba-institutes-india",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mba-colleges-hyderabad",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mba-college-hyderabad",
        destination: "/",
        permanent: true,
      },
      {
        source: "/management-colleges-hyderabad",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-mba-colleges-south-india",
        destination: "/",
        permanent: true,
      },

      // =====================================================================
      // BLOG ARTICLE URLS -> HOMEPAGE (old thin content)
      // =====================================================================
      {
        source: "/tiptips-for-smart-manager",
        destination: "/",
        permanent: true,
      },
      {
        source: "/important-skills-will-get-along-mba-degree",
        destination: "/",
        permanent: true,
      },
      {
        source: "/least-1-hour-thinking-time",
        destination: "/",
        permanent: true,
      },
      {
        source: "/need-study-top-b-schools-successful",
        destination: "/",
        permanent: true,
      },
      {
        source: "/improve-soft-skills",
        destination: "/",
        permanent: true,
      },
      {
        source: "/importance-business-administration",
        destination: "/",
        permanent: true,
      },
      {
        source: "/important-techniques-mba-freshers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/siva-sivani-degree-college",
        destination: "/",
        permanent: true,
      },

      // =====================================================================
      // JOOMLA SITE URLS -> HOMEPAGE
      // =====================================================================
      {
        source: "/site/about-us/vice-president-speaks",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/about-us/our-institute",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/publications/261-sugyan",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/publications/261-sugyan-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/placements/class-of-year",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/life-ssim/snatak/406",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site/academics/program-a-pedagogy",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
