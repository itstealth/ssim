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
 * ConclavePopup Component
 *
 * Displays a popup banner for the Education Conclave event.
 * - Shows immediately on homepage load
 * - Fully responsive for desktop and mobile
 * - Links to Google Form registration page
 */
export default function ConclavePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup immediately on load (slight delay to allow page to render)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    window.open(
      "https://forms.gle/VHykG76Z4pLTKfkc6",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-[90vw] sm:max-w-[420px] p-0 border-none bg-transparent"
        onInteractOutside={(e) => {
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

          {/* Event Image */}
          <div className="w-full relative">
            <Image
              src="/Education-Conclave.jpeg"
              alt="Education Conclave on Empowering Academic Leadership – Pathway to Excellence"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
              priority
              quality={90}
            />
          </div>

          {/* CTA Buttons */}
          <div className="p-4 bg-[#002f87] flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={handleRegister}
              className="bg-[#D8BB35] text-white hover:bg-[#D8BB35]/90 rounded-full px-8 py-2.5 w-full sm:w-auto min-w-[160px] transition-all duration-200 shadow-md hover:shadow-lg font-semibold"
              aria-label="Register for Education Conclave"
            >
              Register Now
            </Button>
            <Button
              onClick={handleClose}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-2.5 w-full sm:w-auto min-w-[160px] transition-all duration-200 bg-transparent"
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
