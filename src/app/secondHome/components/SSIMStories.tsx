"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

import WordPullUp from "@/components/ui/word-pull-up";
import { secondHomeTheme } from '../theme'

const slides = [
  {
    videoId: "https://www.youtube.com/watch?v=huRs1xw8Cfc",
    alt: "Akshita - PGDM 2023 · KPMG",
    thumbnail: `https://img.youtube.com/vi/huRs1xw8Cfc/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=3zQr7bXzYek",
    alt: "Sarvesh Rathi - PGDM 2024 · Asian Paints",
    thumbnail: `https://img.youtube.com/vi/3zQr7bXzYek/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=waiRCPTGtro",
    alt: "Shubham Singh",
    thumbnail: `https://img.youtube.com/vi/waiRCPTGtro/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=SGFAi8MpnS4",
    alt: "Ayesha Begum",
    thumbnail: `https://img.youtube.com/vi/SGFAi8MpnS4/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=39XOoUacs9Q",
    alt: "Ann Jacob",
    thumbnail: `https://img.youtube.com/vi/39XOoUacs9Q/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=tbfW_5bGKm4",
    alt: "Gayatri Reddy - PGDM 2023 · Deloitte",
    thumbnail: `https://img.youtube.com/vi/tbfW_5bGKm4/maxresdefault.jpg`,
  },
];

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function SSIMStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleVideoClick = (videoUrl) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      setSelectedVideoId(videoId);
      setIsModalOpen(true);
    }
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full px-4 lg:px-[60px] py-[64px] ${secondHomeTheme.shellMuted}`}>
      <div className="text-center mb-6 flex flex-col items-center">
        <span className={secondHomeTheme.eyebrowSoft}>
          SSIM Stories
        </span>
        <WordPullUp
          words="Hear from Our Alumni"
          tag="h2"
          className="font-playfair text-slate-900 leading-[1.2] mb-4 text-center"
          style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
        />
      </div>

      <div 
        ref={scrollRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-[22px] overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer shrink-0 snap-center w-[85vw] md:w-auto"
            onClick={() => handleVideoClick(slide.videoId)}
          >
            <Image
              src={slide.thumbnail}
              alt={slide.alt}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-[#1B50EC] rounded-full flex items-center justify-center hover:opacity-95 transition-colors shadow-[0_12px_28px_rgba(107,33,168,0.22)]">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-semibold">{slide.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl border-none bg-transparent p-0">
          <DialogClose className="absolute -top-10 right-0 text-white hover:text-gray-300 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            Close
          </DialogClose>
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
