"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { secondHomeTheme } from "../theme";

const testimonials = [
  {
    name: "Mounika Reddy Dyapa",
    thumbnail: "/alumni-speak/mounika-reddy-dyapa.png",
    videoUrl: "https://youtu.be/wyKqgW4CoYY?si=IE6vzQChyuX6EuAt",
  },
  {
    name: "Vikranth Jetty",
    thumbnail: "/alumni-speak/vikranth-jetty.png",
    videoUrl: "https://youtu.be/ehbVpbtMD3I?si=NQNXqIdFZXVAlkfU",
  },
  {
    name: "Anchal Srivastava",
    thumbnail: "/alumni-speak/anchal-srivastava.png",
    videoUrl: "https://youtu.be/CfAbVnMSqRg?si=nEUpqe5RWx4pK83E",
  },
  {
    name: "Shaik Rafiya Tanveer",
    thumbnail: "/alumni-speak/shaik-rafiya-tanveer.png",
    videoUrl: "https://youtu.be/yhOSwC7rloM?si=BdEG3oJAgfnS6q5z",
  },
];

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function AlumniSpeak() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleSlideClick = (index, videoUrl) => {
    if (index === selectedIndex) {
      const videoId = getYouTubeVideoId(videoUrl);
      if (videoId) {
        setSelectedVideoId(videoId);
        setIsModalOpen(true);
      }
    } else {
      emblaApi?.scrollTo(index);
    }
  };

  return (
    <div
      className={`w-full px-4 lg:px-[60px] py-[64px] ${secondHomeTheme.shellMuted} overflow-hidden`}
    >
      <div className="text-center mb-10 flex flex-col items-center max-w-2xl mx-auto">
        <span className={secondHomeTheme.eyebrowSoft}>Alumni Speak</span>
        <h2
          className={`${secondHomeTheme.title} mt-4 mb-4 text-center`}
          style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
        >
          SSIM Alumni Speak
        </h2>
        <p className={secondHomeTheme.lead}>
          We are proud of our alumni who continue to stay connected to their
          alma mater. Here are some alumni who have taken time out to reflect
          on their journey at college, sharing memories and moments through
          video.
        </p>
      </div>

      <div className="relative mx-[-1rem] lg:mx-[-60px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonials.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={item.name}
                  className="min-w-0 shrink-0 grow-0 basis-[82%] sm:basis-[62%] lg:basis-[46%] px-2 sm:px-3"
                >
                  <button
                    type="button"
                    onClick={() => handleSlideClick(index, item.videoUrl)}
                    aria-label={`Play ${item.name}'s testimonial`}
                    className={`group relative block w-full aspect-video rounded-2xl overflow-hidden border bg-white transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 border-white shadow-[0_25px_60px_rgba(16,34,105,0.28)] z-10"
                        : "opacity-45 border-slate-200/60 shadow-[0_10px_30px_rgba(16,34,105,0.08)]"
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-700 to-[#1B50EC] rounded-full flex items-center justify-center shadow-[0_12px_28px_rgba(107,33,168,0.35)] transition-transform duration-300 group-hover:scale-110">
                          <span className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent ml-1" />
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="absolute left-[4%] sm:left-[8%] lg:left-[16%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-700 to-[#1B50EC] text-white flex items-center justify-center shadow-[0_10px_24px_rgba(16,34,105,0.3)] hover:scale-105 transition-transform"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="absolute right-[4%] sm:right-[8%] lg:right-[16%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-700 to-[#1B50EC] text-white flex items-center justify-center shadow-[0_10px_24px_rgba(16,34,105,0.3)] hover:scale-105 transition-transform"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl border-none bg-transparent p-0">
          <DialogClose className="absolute -top-10 right-0 text-white hover:text-gray-300 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            Close
          </DialogClose>
          <div className="w-full aspect-video">
            {selectedVideoId && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
