import React from "react";
import { Outlet, useLocation } from "next/navigation";
import BannerWithBreadcrumbs from "@/components/BannerWithBreadcrumbs";
import AboutSidebar from "@/components/AboutSidebar";
import { routeConfigs } from "@/utils/routeConfig";

const Banner = ({
  bannerImage,
  sidebarLinks = [],
  showSidebar = false,
  // Optional override props - if provided, they take precedence over dynamic detection
  customTitle,
  customBreadcrumbs,
  customDropdownLinks,
  showDropdown = false,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which section we're in and the current route
  const getSectionAndRoute = (path) => {
    // Remove leading slash and split path
    const pathSegments = path.replace(/^\//, "").split("/");
    const section = pathSegments[0]; // e.g., 'about', 'placement', etc.
    const route = pathSegments[1]; // e.g., 'directors-message', 'records', etc.

    return { section, route };
  };

  const { section, route } = getSectionAndRoute(currentPath);
  const sectionConfig = routeConfigs[section];

  // Generate dynamic title
  const getDynamicTitle = () => {
    if (customTitle) return customTitle;

    if (sectionConfig && route && sectionConfig.routes[route]) {
      return sectionConfig.routes[route].title;
    }

    // Fallback to base title or section name
    return (
      sectionConfig?.baseTitle ||
      section?.charAt(0).toUpperCase() + section?.slice(1) ||
      "Page"
    );
  };

  // Generate dynamic breadcrumbs
  const getDynamicBreadcrumbs = () => {
    if (customBreadcrumbs && customBreadcrumbs.length > 0) {
      return customBreadcrumbs;
    }

    const breadcrumbs = [{ href: "/", label: "Home", isActive: false }];

    if (sectionConfig) {
      // Add section breadcrumb
      breadcrumbs.push({
        href: sectionConfig.basePath,
        label: sectionConfig.baseTitle,
        isActive: false,
      });

      // Add current route breadcrumb if it exists
      if (route && sectionConfig.routes[route]) {
        breadcrumbs.push({
          label: sectionConfig.routes[route].breadcrumbLabel,
          isActive: true,
        });
      } else {
        // Mark section as active if no specific route
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
    }

    return breadcrumbs;
  };

  // Generate dropdown links for the current section
  const getDynamicDropdownLinks = () => {
    if (customDropdownLinks && customDropdownLinks.length > 0) {
      return customDropdownLinks;
    }

    if (sectionConfig && sectionConfig.routes) {
      return Object.entries(sectionConfig.routes).map(
        ([routeKey, routeData]) => ({
          href: `${sectionConfig.basePath}/${routeKey}`,
          label: routeData.breadcrumbLabel,
        })
      );
    }

    return [];
  };

  const dynamicTitle = getDynamicTitle();
  const dynamicBreadcrumbs = getDynamicBreadcrumbs();
  const dynamicDropdownLinks = getDynamicDropdownLinks();

  // Auto scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPath]);

  return (
    <div>
      {/* Banner with Breadcrumbs */}
      <BannerWithBreadcrumbs
        title={dynamicTitle}
        bannerImage={bannerImage}
        breadcrumbs={dynamicBreadcrumbs}
        dropdownLinks={dynamicDropdownLinks}
        showDropdown={showDropdown}
      />
      <div className="">
        {/* Optional Sidebar */}
        {showSidebar && <AboutSidebar sidebarLinks={sidebarLinks} />}

        {/* Content Area for Subpages */}
        <div className="bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Banner;
