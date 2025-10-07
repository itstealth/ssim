// Route configuration object for different sections
export const routeConfigs = {
    // About Section Routes
    about: {
      baseTitle: "About",
      // basePath: "/about",
      routes: {
        "directors-message": {
          title: "Director's Message",
          breadcrumbLabel: "Director's Message"
        },
        "vision-mission": {
          title: "Vision & Mission", 
          breadcrumbLabel: "Vision & Mission"
        },
        "values": {
          title: "Our Values",
          breadcrumbLabel: "Our Values" 
        },
        "set-us-apart": {
          title: "What Sets Us Apart",
          breadcrumbLabel: "What Sets Us Apart"
        },
        "academic-advisory-board": {
          title: "Academic Advisory Board",
          breadcrumbLabel: "Academic Advisory Board"
        },
        "leadership": {
          title: "Our Leaders Message",
          breadcrumbLabel: "Leadership"
        },
        "board-of-governors": {
          title: "Board of Governors", 
          breadcrumbLabel: "Board of Governors"
        },
        "board-of-studies": {
          title: "Board of Studies",
          breadcrumbLabel: "Board of Studies"
        },
        "accreditations-rankings": {
          title: "Accreditations & Rankings",
          breadcrumbLabel: "Accreditations & Rankings"
        }
      }
    },
  
    // Placement Section Routes
    placement: {
      baseTitle: "Placements",
      // basePath: "/placement", 
      routes: {
        "records": {
          title: "Placement Records",
          breadcrumbLabel: "Placement Records"
        },
        "team": {
          title: "Placement Team", 
          breadcrumbLabel: "Placement Team"
        },
        "internships": {
          title: "Internships",
          breadcrumbLabel: "Internships"
        },
        "guest-lectures": {
          title: "Guest Lectures",
          breadcrumbLabel: "Guest Lectures"
        }
      }
    },
  
    // Faculty Section Routes  
    faculty: {
      baseTitle: "Faculty & Research",
      // basePath: "/faculty",
      routes: {
        "areas": {
          title: "Areas of Expertise",
          breadcrumbLabel: "Areas of Expertise"
        }
      }
    },
  
    // Research Section Routes
    research: {
      baseTitle: "Research", 
      //  basePath: "/research",
      routes: {
        "case-research-center": {
          title: "Case Research Center",
          breadcrumbLabel: "Case Research Center"
        },
        "conferences": {
          title: "Conferences",
          breadcrumbLabel: "Conferences" 
        }
      }
    },
  
    // Programs Section Routes (example for future use)
    programs: {
      baseTitle: "Academic Programs",
      // basePath: "/programs",
      routes: {
        "pgdm-triple-specialisation": {
          title: "PGDM Triple Specialisation",
          breadcrumbLabel: "PGDM Triple Specialisation"
        },
        "pgdm-bifs": {
          title: "PGDM BIFS",
          breadcrumbLabel: "PGDM BIFS"
        },
        "pgdm-ba": {
          title: "PGDM Business Analytics", 
          breadcrumbLabel: "PGDM Business Analytics"
        },
        "fpm-efpm": {
          title: "FPM / EFPM",
          breadcrumbLabel: "FPM / EFPM"
        }
      }
    },
  
    // Admissions Section Routes (example for future use)
    admissions: {
      baseTitle: "Admissions",
      // basePath: "/admissions",
      routes: {
        "eligibility": {
          title: "Eligibility Criteria",
          breadcrumbLabel: "Eligibility Criteria"
        },
        "process": {
          title: "Application Process",
          breadcrumbLabel: "Application Process"
        },
        "scholarships": {
          title: "Scholarships",
          breadcrumbLabel: "Scholarships"
        },
        "fee-structure": {
          title: "Fee Structure", 
          breadcrumbLabel: "Fee Structure"
        }
      }
    }
  };
  
  // Helper function to get route configuration
  export const getRouteConfig = (section, route) => {
    const sectionConfig = routeConfigs[section];
    if (!sectionConfig) return null;
    
    if (route && sectionConfig.routes[route]) {
      return {
        ...sectionConfig,
        currentRoute: sectionConfig.routes[route]
      };
    }
    
    return sectionConfig;
  };
  
  // Helper function to add new route configuration
  export const addRouteConfig = (section, sectionConfig) => {
    routeConfigs[section] = sectionConfig;
  };
  
  // Helper function to add route to existing section
  export const addRouteToSection = (section, routeKey, routeData) => {
    if (routeConfigs[section]) {
      routeConfigs[section].routes[routeKey] = routeData;
    }
  }; 