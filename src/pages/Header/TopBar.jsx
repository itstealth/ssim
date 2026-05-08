"use client";

/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const pathname = usePathname();
  const isPurpleHome = pathname === "/secondHome" || pathname === "/thirdHome";
  const [iconsLoaded, setIconsLoaded] = useState([false, false, false, false, false]);

  useEffect(() => {
    iconsLoaded.forEach((_, index) => {
      setTimeout(() => {
        setIconsLoaded((prev) => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
      }, index * 150);
    });
  }, []);

  const socialIcons = [
    {
      icon: <Instagram className="w-4 h-4" />,
      url: "https://www.instagram.com/ssim_b_school/?hl=en",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      url: "https://www.linkedin.com/school/siva-sivani-institute-of-management/",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      url: "https://www.youtube.com/@sivasivaniinstituteofmanag3545",
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      url: "https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      url: "https://x.com/SSIMHyderabad",
    },
  ];

  return (
    <div
      className={`hidden px-5 sm:px-8 py-3 md:block ${
        isPurpleHome
          ? "bg-gradient-to-r from-purple-950 via-purple-900 to-[#2E1065] border-b border-white/10"
          : "bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        <div className="flex items-center gap-4">
          <span className={isPurpleHome ? "text-white/85" : "text-gray-600"}>
            Follow us
          </span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 ${
                  isPurpleHome
                    ? "text-white bg-white/10 hover:bg-white/15 border border-white/15"
                    : "text-gray-100 hover:text-gray-50 bg-gray-800 hover:bg-gray-700"
                }`}
                initial={{ y: -50, opacity: 0 }}
                animate={
                  iconsLoaded[index]
                    ? { y: 0, opacity: 1 }
                    : { y: -50, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div
          className={`justify-center items-center p-3 gap-2 rounded-full shadow-sm flex max-w-lg ${
            isPurpleHome
              ? "text-white bg-white/10 border border-white/15 backdrop-blur-md"
              : "text-gray-600 bg-slate-50 border-none"
          }`}
        >
          <div
            className={`h-2 w-2 rounded-full animate-ping ${
              isPurpleHome ? "bg-purple-300" : "bg-pink-900"
            }`}
          />
          <marquee
            className="font-bold text-xs"
            behavior="scroll"
            direction="left"
          >
            Admissions Open for the academic year 2026-2028. Apply Now!
          </marquee>
        </div>
        <div
          className={`flex flex-wrap items-center gap-6 ${
            isPurpleHome ? "text-white" : "text-gray-600"
          }`}
        >
          <a
            href="https://apply.ssim.ac.in/fellowship-program-application-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={
                isPurpleHome
                  ? "text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15"
                  : "text-xs text-white bg-black hover:bg-black/80"
              }
            >
              Apply Now for FPM/EFPM
            </Button>
          </a>
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={
                isPurpleHome
                  ? "text-xs text-white bg-white/10 hover:bg-white/15 border border-white/15"
                  : "text-xs text-white bg-black hover:bg-black/80"
              }
            >
              Apply for PGDM
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
