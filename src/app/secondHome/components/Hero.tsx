"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { secondHomeTheme } from '../theme'

const imgSlider = [
  {
    image: "/Home/Events.webp",
    tagline: "Shaping Bright Futures Together",
    highlight: "World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
  },
  {
    image: "/Home/Education.webp",
    tagline: "Celebrate Every Special Moment",
    highlight: "Cultural festivals, workshops, and leadership opportunities.",
  },
  {
    image: "/Home/Sports.webp",
    tagline: "Fuel Your Passion Daily",
    highlight: "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
  },
  {
    image: "/Home/Labs.webp",
    tagline: "Innovate, Learn, Discover Together",
    highlight: "Cutting-edge labs for practical learning, research, and discovery.",
  },
  {
    image: "/Home/Auditorium.webp",
    tagline: "Inspire, Engage, Create Together",
    highlight: "Modern auditorium for events, seminars, and cultural programs.",
  },
  {
    image: "/Home/Placements.webp",
    tagline: "Launch Your Career Successfully",
    highlight: "Strong industry connections and 100% placement assistance.",
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentSlide = imgSlider[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imgSlider.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {imgSlider.map((slide, idx) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.tagline}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101a3a]/88 via-purple-700/78 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(11,18,44,0.1),rgba(11,18,44,0.18))] lg:hidden" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 lg:px-[60px] relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[60%] xl:w-[55%] text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-[18px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.5px] text-purple-100 backdrop-blur-md mb-6">
              AICTE Approved · 32+ Years of Excellence
            </div>

            <h1 className="font-playfair leading-[1.15] mb-[16px] text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[64px] font-bold text-white drop-shadow-lg">
              {currentSlide.tagline.split(' ').map((word, i) => (
                i === 1 ? <span key={i} className="text-purple-300">{word} </span> : word + ' '
              ))}
            </h1>
            
            <p className="text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.88)] mb-8 leading-[1.6] max-w-[540px] drop-shadow-md">
              {currentSlide.highlight}
            </p>
            
            <div className="flex gap-4 flex-wrap mb-12">
              <Link
                href="https://apply.ssim.ac.in"
                target="_blank"
                rel="noreferrer"
                className={`${secondHomeTheme.accentGradient} text-white px-8 py-[14px] rounded-[12px] font-bold text-[15px] no-underline transition-all hover:-translate-y-[2px] shadow-[0_10px_30px_rgba(16,34,105,0.18)]`}
              >
                Apply for 2026–28 →
              </Link>
              <Link
                href="#programs"
                className="bg-white/8 text-white px-8 py-[14px] rounded-[12px] font-semibold text-[15px] no-underline border border-white/25 backdrop-blur-md transition-all hover:bg-white/14 hover:border-white/45"
              >
                Explore Programs
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {[
                { num: '32', sup: '+', label: 'Years of Excellence' },
                { num: '30K', sup: '+', label: 'Alumni Network' },
                { num: '300', sup: '+', label: 'Corporate Partners' },
                { num: '₹30L', sup: '+', label: 'Top Placement' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-playfair text-[32px] font-extrabold text-white leading-none">
                    {s.num}<span className="text-[#FFD37A] text-[20px]">{s.sup}</span>
                  </div>
                  <p className="text-[11px] text-[rgba(255,255,255,0.7)] mt-[3px] uppercase tracking-[0.5px]">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 mt-12">
              {imgSlider.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-10 bg-[#FFD37A]' : 'w-2 bg-white/40 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Float Cards */}
          <div className="hidden xl:flex flex-col gap-4 shrink-0 mt-8 lg:mt-0">
            {[
              { label: 'Ranking 2025', val: '#2', sub: 'B-School in Telangana', red: true },
              { label: 'Recognition', val: 'A+++', sub: 'Business India 2024', red: false },
              { label: 'National Rank', val: '#21', sub: 'Private B-Schools India', red: false },
            ].map((card) => (
              <div
                key={card.label}
                className={`backdrop-blur-[14px] border rounded-2xl px-[22px] py-[18px] text-white min-w-[220px] transition-transform hover:-translate-y-1 hover:shadow-xl ${
                  card.red
                    ? 'bg-[#101a3a]/55 border-white/15 shadow-[0_8px_32px_rgba(16,34,105,0.22)]'
                    : 'bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
                }`}
              >
                <div className="text-[11px] text-[#FFD37A] font-semibold uppercase tracking-[0.6px] mb-1">{card.label}</div>
                <div className="font-playfair text-[32px] font-bold leading-none">{card.val}</div>
                <div className="text-[13px] text-white/80 mt-[4px]">{card.sub}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
