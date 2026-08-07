"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * TopBar — desktop only (hidden md:block in ConditionalLayout).
 *
 * PERFORMANCE NOTE: framer-motion was removed from this component.
 * The staggered icon entrance animation previously required:
 *   1. ~80KB framer-motion runtime in the critical JS bundle
 *   2. A useEffect with 5× staggered setTimeouts that triggered setState
 *      callbacks during the LCP window, causing React to re-render while
 *      the browser was trying to paint the hero image.
 *
 * The identical visual effect is now achieved with a CSS @keyframes animation
 * and animation-delay — zero JavaScript, zero re-renders.
 */
const socialIcons = [
  { Icon: Instagram, url: "https://www.instagram.com/ssim_b_school/?hl=en", label: "Instagram" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/ssim-siva-sivani-institute-of-management/", label: "LinkedIn" },
  { Icon: Youtube, url: "https://www.youtube.com/@sivasivaniinstituteofmanag3545", label: "YouTube" },
  { Icon: Facebook, url: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/", label: "Facebook" },
  { Icon: Twitter, url: "https://x.com/SSIMHyderabad", label: "Twitter" },
];

const TopBar = () => {
  const pathname = usePathname();
  const isPurpleHome = pathname === "/secondHome" || pathname === "/thirdHome";

  return (
    <>
      {/* CSS keyframe for the social icon entrance animation — replaces framer-motion */}
      <style>{`
        @keyframes topbar-icon-in {
          from { transform: translateY(-20px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        .topbar-icon {
          animation: topbar-icon-in 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
        }
      `}</style>

      <div className={`hidden px-5 sm:px-8 py-3 md:block ${isPurpleHome ? 'bg-gradient-to-r from-purple-950 via-purple-900 to-[#2E1065] border-b border-white/10' : 'bg-white-cool'}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
          <div className="flex items-center gap-4">
            <span className={isPurpleHome ? 'text-white/85' : 'text-purple-700'}>Follow us</span>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, url, label }, index) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`topbar-icon rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 ${
                    isPurpleHome
                      ? 'text-white bg-white/10 hover:bg-white/15'
                      : 'text-purple-700 hover:text-purple-200 bg-white/10 hover:bg-white/20'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className={`justify-center items-center p-3 gap-2 rounded-full shadow-sm flex max-w-lg ${isPurpleHome ? 'text-white bg-white/10 border border-white/15' : 'text-purple-700 bg-white/10 border border-white/20'}`}>
            <div className={`h-2 w-2 rounded-full animate-ping ${isPurpleHome ? 'bg-purple-300' : 'bg-purple-400'}`}></div>
            <marquee className="font-bold text-xs" behavior="scroll" direction="left">
              Admissions Open for the academic year 2026-2028. Apply Now!
            </marquee>
          </div>

          <div className={`flex flex-wrap items-center gap-6 ${isPurpleHome ? 'text-white' : 'text-purple-700'}`}>
            <a href="https://apply.ssim.ac.in" target="_blank" rel="noopener noreferrer">
              <Button className={isPurpleHome ? 'text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15' : 'text-xs text-purple-700 bg-white hover:bg-purple-50 border border-purple-200'}>
                Apply for PGDM
              </Button>
            </a>
            <a href="https://apply.ssim.ac.in/fellowship-program-application-form" target="_blank" rel="noopener noreferrer">
              <Button className={isPurpleHome ? 'text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15' : 'text-xs text-purple-700 bg-white hover:bg-purple-50 border border-purple-200'}>
                Apply for FPM
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
