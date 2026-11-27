"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroSlides = [
  {
    src: "/home-banners/slider-1-lossless.webp?v=2",
    alt: "Welcome Prof. YLR Moorthi, Mentor, to the SSIM family",
  },
  {
    src: "/home-banners/slider-2-lossless.webp",
    alt: "SSIM CAT merit scholarship of up to four lakh rupees for candidates scoring 80 percentile or above",
  },
  {
    src: "/home-banners/slider-3-lossless.webp",
    alt: "Every SSIM student receives an Apple MacBook as a learning tool; admissions open for 2027",
  },
  {
    src: "/home-banners/slider-4-placement-trinamix.webp",
    alt: "Placed before placement season starts: M Satish Kumar, PGDM-BA 2025-27 batch, placed at Trinamix as Associate Business Analyst with the highest package of 16 lakh",
  },
];

const HeroSection = ({ className = "" }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mountedSlides, setMountedSlides] = useState(() => new Set([0]));

  const mountSlide = (slideIndex) => {
    setMountedSlides((currentSlides) => {
      if (currentSlides.has(slideIndex)) return currentSlides;

      const nextSlides = new Set(currentSlides);
      nextSlides.add(slideIndex);
      return nextSlides;
    });
  };

  const handleSlideReady = (slideIndex) => {
    mountSlide((slideIndex + 1) % heroSlides.length);
  };

  const showSlide = (slideIndex) => {
    mountSlide(slideIndex);
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#2c0649] ${className}`}
      aria-roledescription="carousel"
      aria-label="SSIM homepage highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative aspect-[1920/901] w-full">
        {heroSlides.map((slide, index) => mountedSlides.has(index) && (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeSlide ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ""}
              fill
              priority={index === 0}
              unoptimized
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              sizes="100vw"
              className="object-contain"
              onLoad={() => handleSlideReady(index)}
              onError={() => handleSlideReady(index)}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm sm:bottom-4">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Show slide ${index + 1} of ${heroSlides.length}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={`h-2.5 rounded-full border border-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4bc0b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c0649] sm:h-3 ${
              index === activeSlide ? "w-7 bg-[#f4bc0b]" : "w-2.5 bg-white/75 hover:bg-white sm:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
