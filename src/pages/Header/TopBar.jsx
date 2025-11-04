"use client";

/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
// import { RiTwitterXLine } from "react-icons/ri";
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
    // Animate icons one by one with a delay
    iconsLoaded.forEach((_, index) => {
      setTimeout(() => {
        setIconsLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150); // 150ms delay between each icon
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
    <div className="hidden px-5 sm:px-8 py-3 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 md:block">
      <div className="flex flex-wrap items-center justify-between mx-auto text-sm">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Follow us</span>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-50 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
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
        {/* <div className="text-gray-600 justify-center items-center bg-slate-50 p-3 gap-2 rounded-full border-none shadow-sm flex max-w-lg">
          <div className="h-2 w-2 bg-pink-900 rounded-full animate-ping"></div>
          <marquee
            className="font-bold text-xs"
            behavior="scroll"
            direction="left"
          >
            S.P. Sampathy’s Siva Sivani Institute of Management cordially
            invites you to the 30th Snatak (Convocation) on Wednesday, 22nd
            October at 11:30 AM — Chief Guest: Prof. T.G. Sitharam, Chairman,
            AICTE | Guest of Honour: Sri Ramakrishna Sataluri, CEO, Shakti
            Energy Solutions Limited (SESL).
          </marquee>
        </div> */}
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600">
          {/* <PulsatingButton
            size="sm"
            className="text-xs bg-black hover:bg-black/80"
            pulseColor="#000"
          >
            International Conference
          </PulsatingButton> */}
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            size="sm"
            rel="noopener noreferrer"
          >
            <Button className="text-xs text-white bg-black hover:bg-black/80">
              Apply Now
            </Button>
          </a>
          {/* <a
            // href="https://payment.atomtech.in/payment/form/pay.action?mId=A95D13C110F64630E963122D5321258A"
            target="_blank"
            size="sm"
            rel="noopener noreferrer"
          >
            <Button
              className="text-xs text-white bg-black hover:bg-black/80"
            >
              Pay Fee
            </Button>
          </a> */}
          {/* <Link href="/blog">
          <PulsatingButton
            size="sm"
            className="text-xs bg-black hover:bg-black/80"
            pulseColor="#000"
          >
           Blogs
          </PulsatingButton>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
