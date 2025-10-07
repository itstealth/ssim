"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { ArrowRight } from "lucide-react";
// import { BookCheck } from "lucide-react";
// import { BookUser } from "lucide-react";
// import { ChevronDown, X } from "lucide-react";
// import {
// Drawer,
// DrawerClose,
// DrawerContent,
// DrawerDescription,
// DrawerFooter,
// DrawerHeader,
// DrawerTitle,
// DrawerTrigger,
// } from "@/components/ui/drawer";
// import { ScrollArea } from "@/components/ui/scroll-area";
import InternationalEvents from "@/app/international-relations/InternationalEvents";
const DamanJohar = "/international-relations/Daman-Johar.jpg";
//import SEO from "@/components/Seo";

// Add this at the top of the file, after the imports
const scrollbarStyles = `
  /* For Webkit browsers like Chrome/Safari/Edge */
  .scrollbar-thin::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: rgba(79, 70, 229, 0.2);
    border-radius: 20px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: rgba(79, 70, 229, 0.4);
  }
  /* For Firefox */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: rgba(79, 70, 229, 0.2) transparent;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const constraintsRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Damandeep Johar",
      experience: "12 Years",
      image: DamanJohar,
      area: "International Relations",
      phone: "+91-9030397737",
      email: "damanjohar@ssim.ac.in",
      biography: `She has completed her post graduate diploma in business administration (PGDBA) from Siva Sivani Institute of Management, with specialization in HR and Marketing. She comes with over 14 years of experience, both in industry and academics. She has completed a course in Human Resources Management from XLRI, Jamshedpur and SHRM, India. 

She is currently pursuing her Ph.D. Ms Daman is also an established trainer and facilitator with expertise in Communication skills, Soft skills and Behavioral skills. She works across industries and educational institutions running short and long term training workshops and programs. She is passionate about transforming young minds and making them industry ready through her training skills. In her capacity as Chairperson Admissions and Promotions, she aims to recruit students from all across India, to have a culturally diverse pool of students.

She believes that by recruiting students from diverse backgrounds it helps students in developing their creative thinking skills, knowledge on interacting with culturally different back grounds, work in global society, promotes self-awareness, promotes understanding patience's and cooperation, promotes civic engagement and responsibility. She previously worked in the Indian School of Business (ISB) as an HR Manager.

Teaching
Business Communications
Human Resources`,
      course: "PGDM",
    },
  ];

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsDrawerOpen(false);
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const scroller = document.getElementById("testimonialScroller");
    if (scroller) {
      const thumbnails = Array.from(scroller.children);
      if (thumbnails.length > 0 && thumbnails[activeIndex]) {
        const thumbnail = thumbnails[activeIndex];
        const scrollerRect = scroller.getBoundingClientRect();
        const thumbnailRect = thumbnail.getBoundingClientRect();

        // Calculate the center position
        const centerPosition =
          thumbnail.offsetLeft -
          scrollerRect.width / 2 +
          thumbnailRect.width / 2;

        // Scroll to center the active thumbnail
        scroller.scrollTo({
          left: centerPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  // Close drawer when changing testimonials
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [activeIndex]);

  // Add validation for activeIndex
  useEffect(() => {
    if (activeIndex >= testimonials.length) {
      setActiveIndex(0);
    }
  }, [testimonials.length]);

  // Function to check if biography is longer than 3 lines (approximate)
  const isBiographyLong = (text) => {
    return text.length > 180; // Approximate character count for 3 lines
  };

  const currentBiography = testimonials[activeIndex]?.biography || "";
  const showReadMoreButton = isBiographyLong(currentBiography);

  return (
    <>
      {/* <SEO
        title="International Relations"
        description="Explore SSIM's international relations, collaborations, and global initiatives. Discover how we provide a global perspective to our students."
        keywords="SSIM international relations, global collaboration, international business school, student exchange programs"
        canonicalUrl="https://www.ssim.ac.in/international-relations"
      /> */}
      {testimonials.length === 0 ? (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                No testimonials available
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <style>{scrollbarStyles}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-gray-100 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="relative">
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight"
              >
                International Relations
              </motion.h2>
            </div>
          </div>
          <InternationalEvents />
        </section>
      )}
    </>
  );
}
