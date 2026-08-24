"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

export default function HomepagePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[min(90vw,34rem,calc(78vh*0.8))] max-w-none overflow-visible border-0 bg-transparent p-0 shadow-none [&>button:last-child]:hidden">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-[#2a1758] p-1.5 shadow-[0_28px_80px_rgba(28,12,63,0.6)] ring-1 ring-white/20">
          <DialogClose
            aria-label="Close popup"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-[#25134f]/75 text-white shadow-lg backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-[#1b0d3a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
          </DialogClose>
          <Image
            src="/popup-image.jpeg"
            alt="SSIM announcement"
            width={1080}
            height={1350}
            className="block h-auto w-full rounded-[1.3rem]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
