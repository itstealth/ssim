"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/pages/Header/Header";
import HeroSlider from "@/pages/Home/HeroSlider";
import AboutSection from "@/pages/Home/AboutSection";
import AcademicPrograms from "@/pages/Home/AcademicPrograms";
import SsimStories from "@/pages/Home/SsimStories";
import LatestBlogsAndEvents from "@/pages/Home/LatestBlogs&Events";
import AlumniSection from "@/pages/Home/AlumniSection";
import PlacementIndustry from "@/pages/Home/Placement&Industry";
import Footer from "@/pages/Footer/Footer";
import HeroSection from "@/components/HeroSection";

import { OrganizationSchema } from "@/components/Schema";

import Image from "next/image";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";

const sectionVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const mobileSectionVariants = {
  hidden: { scale: 1, opacity: 1 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isMobile = useIsMobile();
  const variants = isMobile ? mobileSectionVariants : sectionVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  // Auto scroll to top when component mounts (handles both link navigation and browser back button)
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Scroll to top immediately when component mounts
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);

    // Also handle browser navigation events (back/forward buttons)
    const handleNavigation = () => {
      setTimeout(() => {
        scrollToTop();
      }, 100);
    };

    // Listen for browser navigation events
    window.addEventListener("popstate", handleNavigation);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  // Show popup after 6 seconds
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 6000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  const GuidingAlumni = () => {
    const isMobile = useIsMobile();
    return (
      <div className="bg-[#002f87] pb-12 sm:pb-20 mb-12 sm:mb-0">
        <iframe
          src="https://wg.univariety.com/widget/9f39eae8-443b-49a2-a528-588148a356e8"
          title="Guiding Alumni"
          width="100%"
          height={isMobile ? "651px" : "567px"}
          loading="lazy"
          description="Siva Sivani Institute of Management Notable Alumni"
          style={{ border: "none", verticalAlign: "top" }}
        ></iframe>
        <div className="flex justify-center gap-4 md:gap-24">
          <Link
            href="/alumni-guidance"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white text-lg font-bold">
              Alumni Guidance
            </span>
            <Button className="bg-[#D8BB35] text-white hover:bg-[#D8BB35]/80 rounded-full px-10">
              Know More
            </Button>
          </Link>
          <div className="w-[1.5px] h-20 bg-[#3864CC]"></div>
          <Link
            href="/success-stories"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white text-lg font-bold">
              Success Stories
            </span>
            <Button className="bg-[#D8BB35] text-white hover:bg-[#D8BB35]/80 rounded-full px-10">
              Know More
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <OrganizationSchema />
      {/* <HeroSlider /> */}
      <HeroSection />
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <GuidingAlumni />
      </SectionWrapper>
      <SectionWrapper>
        <AcademicPrograms />
      </SectionWrapper>
      <SectionWrapper>
        <SsimStories />
      </SectionWrapper>
      {/* <SectionWrapper>
        <LatestBlogsAndEvents />
      </SectionWrapper> */}
      <SectionWrapper>
        <AlumniSection />
      </SectionWrapper>
      <SectionWrapper>
        <PlacementIndustry />
      </SectionWrapper>

      {/* Samanvay Event Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-3xl border-none bg-transparent p-0">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <DialogClose className="absolute right-2 top-2 z-10 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white/80 hover:bg-white p-1">
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </DialogClose>
            <div className="w-full">
              <Image
                src="/Samanvay Poster - Revised.webp"
                alt="Samanvay Event Poster"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="p-4 bg-white flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                asChild
                className="bg-[#dc2626] text-white hover:bg-[#dc2626]/80 rounded-full px-8 py-2 w-full sm:w-auto"
              >
                <a
                  href="https://forms.gle/dbocQiVVYczk479Q6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#002f87] text-white hover:bg-[#002f87]/80 rounded-full px-8 py-2 w-full sm:w-auto"
              >
                <a
                  href="/pdfs/iqac/27th_Samanvay_Events.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Event Details
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
