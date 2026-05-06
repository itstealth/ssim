"use client";

/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const [iconsLoaded, setIconsLoaded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    iconsLoaded.forEach((_, index) => {
      setTimeout(() => {
        setIconsLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
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
    <div className="hidden px-5 sm:px-8 py-3 bg-gradient-to-r from-[#521092] via-[#d74dec] to-[#521092] md:block">
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        <div className="flex items-center gap-4">
          <span className="text-white">Follow us</span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#d74dec] bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
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
        <div className="text-white justify-center items-center bg-white/10 p-3 gap-2 rounded-full border border-white/20 shadow-sm flex max-w-lg">
          <div className="h-2 w-2 bg-[#d74dec] rounded-full animate-ping"></div>
          <marquee
            className="font-bold text-xs"
            behavior="scroll"
            direction="left"
          >
            Admissions Open for the academic year 2026-2028. Apply Now!
          </marquee>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-white">
          <a
            href="https://apply.ssim.ac.in/fellowship-program-application-form"
            target="_blank"
            size="sm"
            rel="noopener noreferrer"
          >
            <Button className="text-xs text-[#521092] bg-white hover:bg-white/80">
              Apply Now for FPM/EFPM
            </Button>
          </a>
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            size="sm"
            rel="noopener noreferrer"
          >
            <Button className="text-xs text-[#521092] bg-white hover:bg-white/80">
              Apply for PGDM
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;