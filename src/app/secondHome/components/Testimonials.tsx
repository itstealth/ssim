"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aditya Datta",
    role: "Executive Director",
    company: "JPMC",
    text: "The SSIM experience gave me the confidence to lead with clarity, think strategically, and build strong teams around me.",
    rating: 5,
    avatar: "/testimonial_images/test0.png",
  },
  {
    name: "Akshata Dani",
    role: "Technical Writer Specialist",
    company: "GOC",
    text: "The learning environment here helped me sharpen my communication and approach every challenge with structure.",
    rating: 4,
    avatar: "/testimonial_images/test1.png",
  },
  {
    name: "Itha Lakshmipathi",
    role: "AVP & Global Head - HR",
    company: "Prodapt",
    text: "What I carry from SSIM is a practical mindset, strong values, and the ability to adapt quickly in the real world.",
    rating: 5,
    avatar: "/testimonial_images/test2.png",
  },
  {
    name: "Jaideep Avasarala",
    role: "Talent Acquisition Leader",
    company: "Microsoft",
    text: "The mentoring culture and peer learning at SSIM helped me build the discipline to keep growing in my career.",
    rating: 5,
    avatar: "/testimonial_images/test3.png",
  },
  {
    name: "Niraj Kumar Rana",
    role: "EVP & Head of Sales",
    company: "Naukri",
    text: "SSIM pushed me to think beyond the classroom and prepare for leadership in a dynamic business environment.",
    rating: 5,
    avatar: "/testimonial_images/test4.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        const next = prev + newDirection;
        if (next < 0) return testimonials.length - 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    },
    []
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => navigate(1), 5000);
    return () => clearInterval(interval);
  }, [isPaused, navigate]);

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-[#002f87]/10 px-4 py-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#002f87]">
            Alumni Testimonials
          </span>
          <h2 className="mt-4 font-playfair text-[clamp(2rem,4vw,3.6rem)] leading-tight text-[#101a3a]">
            What Our Alumni Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
            Hear from our alumni about their transformative journey at SSIM
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div className="relative flex items-center justify-center min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center px-4"
                >
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 max-w-2xl w-full">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote>
                          <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic">
                            &ldquo;{testimonials[currentIndex].text}&rdquo;
                          </p>
                        </blockquote>

                        {/* Author */}
                        <div className="mt-6">
                          <p className="text-lg font-semibold text-[#101a3a]">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full border border-slate-200 bg-white text-[#101a3a] shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-10 bg-[#002f87]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-full bg-[#d92b2b] text-white shadow-sm hover:bg-[#bf2020] transition-all hover:-translate-y-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  index === currentIndex ? "border-[#002f87] ring-2 ring-[#002f87]/20" : "border-transparent hover:border-slate-300"
                }`}
              >
                <div className="relative w-16 h-16">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}