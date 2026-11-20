"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const POPUP_DISMISSED_KEY = "ssim-vlr-moorthi-welcome-dismissed";

export default function HomepagePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(POPUP_DISMISSED_KEY)) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsOpen(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenChange = (open) => {
    setIsOpen(open);

    if (!open) {
      window.sessionStorage.setItem(POPUP_DISMISSED_KEY, "true");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[min(92vw,34rem,calc(88svh*0.8))] max-w-none overflow-visible border-0 bg-transparent p-0 shadow-none duration-500 [&>button:last-child]:hidden">
        <DialogTitle className="sr-only">
          Welcome Professor VLR Moorthi to the SSIM family
        </DialogTitle>
        <DialogDescription className="sr-only">
          SSIM welcomes Professor VLR Moorthi as a mentor.
        </DialogDescription>

        <div className="relative rounded-[1.65rem] bg-gradient-to-br from-[#f4bc0b] via-[#ffe58b] to-[#d79900] p-[3px] shadow-[0_30px_90px_rgba(0,19,74,0.62)] sm:rounded-[2rem]">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-[#efb308]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#061b65] p-1.5 sm:rounded-[1.82rem]">
            <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#efb308]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <DialogClose
              aria-label="Close popup"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-[#061b65]/80 text-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-[#e9ac00] hover:text-[#061b65] focus:outline-none focus:ring-2 focus:ring-[#f4bc0b] focus:ring-offset-2 focus:ring-offset-[#061b65] sm:right-4 sm:top-4"
            >
              <X className="h-5 w-5" />
            </DialogClose>
            <Image
              src="/vlr-moorthi-welcome.jpeg"
              alt="Welcome Prof. VLR Moorthi to the SSIM family"
              width={1080}
              height={1350}
              sizes="(max-width: 640px) 90vw, 544px"
              loading="eager"
              className="relative block h-auto w-full rounded-[1.15rem] sm:rounded-[1.45rem]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
