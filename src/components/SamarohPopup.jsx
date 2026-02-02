"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * SamarohPopup Component
 * 
 * Displays a popup banner with an image and CTA buttons.
 * - Shows automatically after 3 seconds on homepage load
 * - Prevents background scrolling when open
 * - Fully responsive for desktop and mobile
 */
export default function SamarohPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set timeout to show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    // Cleanup: clear timeout if component unmounts before 3 seconds
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    // Open registration form in new tab
    window.open("https://forms.gle/cU9WqQ9NaaErXGyP7", "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="max-w-[90vw] sm:max-w-md p-0 border-none bg-transparent"
        // Prevent background scrolling when dialog is open
        onInteractOutside={(e) => {
          // Allow closing by clicking outside
          e.preventDefault();
        }}
      >
        <div className="relative bg-white rounded-sm overflow-hidden shadow-2xl">
          {/* Close Button - Top Right */}
          <DialogClose 
            className="absolute right-2 top-2 z-20 rounded-full opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white/90 hover:bg-white p-1.5 shadow-md"
            onClick={handleClose}
            aria-label="Close popup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
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

          {/* Image Container - Responsive */}
          <div className="w-full relative">
            <Image
              src="/samaroh-2026.webp"
              alt="Samaroh Event Poster"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
              priority
              quality={90}
            />
          </div>

          {/* CTA Buttons Container - Bottom */}
          <div className="p-4 bg-gray-300 flex flex-col sm:flex-row gap-3 justify-center items-center border-t border-gray-100">
            {/* Register Now Button */}
            <Button
              onClick={handleRegister}
              className="bg-[#dc2626] text-white hover:bg-[#dc2626]/90 rounded-full px-8 py-2.5 w-full sm:w-auto min-w-[160px] transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Register for Samaroh event"
            >
              Register Now
            </Button>

            {/* Close Button */}
            <Button
              onClick={handleClose}
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-2.5 w-full sm:w-auto min-w-[160px] transition-all duration-200"
              aria-label="Close popup"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

