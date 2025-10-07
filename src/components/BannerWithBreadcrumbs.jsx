/* eslint-disable react/prop-types */
"use client";
import { useState, useRef, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ChevronDown } from "lucide-react";
const AboutBanner = "/breadcrumb.png";

const BannerWithBreadcrumbs = ({ 
  title, 
  bannerImage = AboutBanner, 
  breadcrumbs = [],
  dropdownLinks = [],
  showDropdown: showDropdownProp = false 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div
      className="relative w-full h-[35vh] sm:h-[50vh] flex items-center justify-center shadow-lg"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold z-20 text-center animate-fadeInUp text-white">
        {title}
      </h1>

      {/* Breadcrumb Wrapper */}
      <div
        className="absolute w-full sm:w-auto hidden sm:block z-20 -bottom-5 left-1/2 transform -translate-x-1/2 backdrop-blur-sm rounded-full shadow-lg border border-red-600 bg-red-600"
        style={{
          padding: "0.5rem 1rem",
        }}
      >
        <Breadcrumb>
          <BreadcrumbList className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-base font-medium text-white relative">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbItem>
                  {crumb.isDropdown ? (
                    <div className="relative">
                      <div
                        className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors whitespace-nowrap"
                        onClick={handleDropdownToggle}
                      >
                        {crumb.label}
                        {showDropdownProp && <ChevronDown className="w-4 h-4" />}
                      </div>
                      {showDropdown && dropdownLinks.length > 0 && (
                        <div
                          ref={dropdownRef}
                          className="absolute left-0 mt-2 bg-white text-gray-800 rounded shadow-lg z-[9999]"
                          style={{
                            top: "100%",
                            marginTop: "0.5rem",
                            position: "fixed",
                          }}
                        >
                          <ul className="py-2 w-48">
                            {dropdownLinks.map((link) => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                                  onClick={() => setShowDropdown(false)}
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : crumb.isActive ? (
                    <BreadcrumbPage className="font-bold text-white whitespace-nowrap">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : crumb.href ? (
                    <BreadcrumbLink
                      href={crumb.href}
                      className="hover:text-gray-300 transition-colors whitespace-nowrap"
                    >
                      {crumb.label}
                    </BreadcrumbLink>
                  ) : (
                    <span className="text-white whitespace-nowrap">
                      {crumb.label}
                    </span>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="text-white" />
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BannerWithBreadcrumbs;
