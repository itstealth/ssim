"use client";
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { secondHomeTheme } from '../theme'

const reasons = [
  { icon: '🤝', title: 'Industry-Integrated Learning', desc: 'Live projects, corporate mentorships, industry visits, and guest lectures from top business leaders.' },
  { icon: '🏆', title: 'Award-Winning Faculty', desc: 'Expert faculty with deep academic credentials and extensive corporate experience.' },
  { icon: '🌍', title: 'Global Network', desc: 'International collaborations, exchange programs, and alumni spanning 50+ countries.' },
  { icon: '💡', title: 'Innovation & Entrepreneurship', desc: 'Incubation center, startup mentorship, and innovation labs fostering an entrepreneurial mindset.' },
  { icon: '🎗', title: 'Holistic Development', desc: 'Focus on ethics, sustainability, creativity, and critical decision-making abilities.' },
  { icon: '📍', title: 'Prime Location', desc: 'Kompally, Hyderabad — near India\'s pharma, IT, and BFSI capital and top employers.' },
]

export default function WhySSIM() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      // Only run auto-scroll if it's horizontally scrollable (mobile)
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why" className={`px-4 lg:px-[60px] pt-[72px] pb-[36px] lg:pb-[72px] ${secondHomeTheme.shell}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-0">
        <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-160px)] mb-2 lg:mb-0">
          <img
            src="/about_ssim/aboutssim.webp"
            alt="Why SSIM"
            width={800}
            height={480}
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            decoding="async"
            className="w-full h-[240px] md:h-[360px] lg:h-full object-cover rounded-[24px] border border-white/60 shadow-[0_20px_50px_rgba(16,34,105,0.12)]"
          />
        </div>
        <div>
          <span className={secondHomeTheme.eyebrow}>
            Why Choose SSIM
          </span>
          <h2 className={secondHomeTheme.title} style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
            Your Gateway to Leadership Excellence
          </h2>
          <p className={`${secondHomeTheme.lead} max-w-[620px] mb-[14px]`}>
            Six compelling reasons why SSIM is the right choice for your management journey.
          </p>
          <div 
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 gap-[18px] overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {reasons.map((r) => (
              <div key={r.title} className={`why-card rounded-[18px] p-[22px_20px] border border-slate-200/80 shrink-0 snap-center w-[80vw] sm:w-auto bg-white shadow-[0_12px_28px_rgba(16,34,105,0.05)] ${secondHomeTheme.surfaceLift}`}>
                <div className="w-[46px] h-[46px] bg-gradient-to-br from-purple-700 to-[#1B50EC] rounded-xl grid place-items-center text-[22px] mb-3 shadow-[0_10px_24px_rgba(107,33,168,0.18)]">{r.icon}</div>
                <h3 className="text-[14px] font-bold text-slate-900 mb-[6px]">{r.title}</h3>
                <p className="text-[13px] text-slate-600 leading-[1.65]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
