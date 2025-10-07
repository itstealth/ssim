"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WordPullUp from "@/components/ui/word-pull-up";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import Image from "next/image";

const slides = [
  {
    videoId: "https://www.youtube.com/watch?v=huRs1xw8Cfc",
    alt: "Akshita",
    thumbnail: `https://img.youtube.com/vi/huRs1xw8Cfc/maxresdefault.jpg`,
  },
  {
    videoId: "https://www.youtube.com/watch?v=3zQr7bXzYek",
    alt: "Sarvesh Rathi",
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
    alt: "Gayatri Reddy",
    thumbnail: `https://img.youtube.com/vi/tbfW_5bGKm4/maxresdefault.jpg`,
  },
];

// Add a helper function to extract video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

function SsimStories() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    timerRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);

    const onInteract = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    api.on("pointerDown", onInteract);
    api.on("touchStart", onInteract);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      api.off("pointerDown", onInteract);
      api.off("touchStart", onInteract);
    };
  }, [api]);

  // Modify the video click handler
  const handleVideoClick = (videoUrl) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      setSelectedVideoId(videoId);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="w-full bg-mainBlue flex flex-col items-center justify-center p-4 pb-10 sm:p-8 sm:pb-14">
        <WordPullUp
          words="SSIM Stories"
          className="tracking-tigh sm:text-left mt-8 md:mb-6 text-white text-3xl md:text-4xl font-bold text-center mb-8 sm:!mb-12"
        />
        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {slides.map((slide, index) => (
              <>
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 md:basis-4/5 lg:basis-3/4"
                >
                  <div
                    className={`relative transition-all duration-500 ease-in-out ${
                      current === index
                        ? "scale-100 z-20"
                        : `scale-90 opacity-40 z-10 ${
                            index === hoveredIndex ? "opacity-60" : ""
                          }`
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                      <Image
                        alt={slide.alt}
                        src={slide.thumbnail}
                        unoptimized={true}
                        fill
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white">
                      <h2 className="text-xl sm:text-2xl font-bold truncate">
                        {slide.alt}
                      </h2>
                    </div>
                    <div
                      className="absolute cursor-pointer inset-0 w-full h-full flex items-center justify-center"
                      onClick={() => handleVideoClick(slide.videoId)}
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                        </div>
                        <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
                        <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden w-8 h-8 bg-red-600 border-none hover:bg-red-500 hover:text-white/90 text-white sm:flex items-center justify-center -left-4 sm:-left-12" />
          <CarouselNext className="hidden w-8 h-8 bg-red-600 border-none hover:bg-red-500 hover:text-white/90 text-white sm:flex items-center justify-center -right-4 sm:-right-12" />
        </Carousel>
        <div className="mt-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-6"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Replace the custom modal with Dialog component */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl border-none bg-transparent p-0">
          <DialogClose className="absolute -top-10 right-0 text-white hover:text-gray-300 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            Close
          </DialogClose>
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SsimStories;
