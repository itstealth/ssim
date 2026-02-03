"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import Image from "next/image";

/**
 * EnquireNowButton Component
 * 
 * Displays a vertical "ENQUIRE NOW" button on the right side of the page
 * with WhatsApp and Phone contact icons below it.
 * Opens a dialog with NoPaperForms widget when clicked.
 */
export default function EnquireNowButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Load the widget script when dialog opens
  useEffect(() => {
    if (isOpen && !widgetLoaded) {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://widgets.nopaperforms.com/emwgts.js"]');
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widgets.nopaperforms.com/emwgts.js";
        document.body.appendChild(script);
      }
      
      setWidgetLoaded(true);
    }
  }, [isOpen, widgetLoaded]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Right Sidebar - Enquire Now Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        {/* ENQUIRE NOW Button - Vertical, Red, Rotated */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-500 text-white font-medium py-6 px-2 sm:py-6 sm:px-3 shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
          aria-label="Enquire Now"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="text-xs sm:text-sm tracking-wider whitespace-nowrap">
            ENQUIRE NOW
          </span>
        </button>
      </div>

      {/* Dialog with NoPaperForms Widget */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="sm:max-w-xs max-w-[95vw] p-0 border-none bg-transparent"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <DialogClose 
              className="absolute right-2 top-2 z-20 rounded-full opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white/90 hover:bg-white p-1.5 shadow-md"
              onClick={handleClose}
              aria-label="Close dialog"
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

            {/* Widget Container */}
            <div className="p-3">
              <div 
                className="npf_wgts" 
                data-height="480px" 
                data-w="0fcfc9608e978750ed1ee48671490e22"
              ></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

