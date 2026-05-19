"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { secondHomeTheme } from '../theme'

const programs = [
  {
    title: 'PGDM',
    sub: 'Triple Specialisation · 35 Years Legacy · Global Immersion',
    highlight: true,
    img: '/programs_assets/images/imageOne.jpeg',
    link: '/programs/pgdm-triple-specialisation',
  },
  {
    title: 'PGDM – BIFS',
    sub: 'Banking, Insurance & Financial Services · 19 Years Legacy',
    img: '/programs_assets/images/imageTwo.jpeg',
    link: '/programs/pgdm-bifs',
  },
  {
    title: 'PGDM – BA',
    sub: 'Business Analytics · 5 Years Legacy · IBM Collaboration',
    img: '/programs_assets/images/imageThree.jpeg',
    link: '/programs/pgdm-ba',
  },
  {
    title: 'FPM / EFPM',
    sub: 'Fellow / Executive Fellow Program in Management',
    img: '/programs_assets/images/imageFour.jpeg',
    link: '/programs/fpm-efpm',
  },
]

export default function Programs() {
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
          scrollContainer.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="programs" className={`px-4 lg:px-[60px] py-[64px] ${secondHomeTheme.shellMuted}`}>
      <div className="text-center">
        <span className={secondHomeTheme.eyebrow}>
          Academic Programs
        </span>
        <h2 className={secondHomeTheme.title} style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          World-Class Management Programs
        </h2>
        <p className={`${secondHomeTheme.lead} max-w-[620px] mx-auto`}>
          We train our students to master both the technical & management aspects of the business.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-[22px] mt-[30px] overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {programs.map((p) => (
          <Link
          href={p.link}
          key={p.title}
          className={`rounded-[20px] overflow-hidden bg-white transition-all duration-300 border border-slate-200/80 group block no-underline shrink-0 snap-center w-[85vw] sm:w-auto shadow-[0_12px_30px_rgba(16,34,105,0.06)] ${secondHomeTheme.surfaceLift}`}
        >
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101a3a]/20 via-transparent to-transparent" />
          </div>
          <div className="p-[16px_18px]">
            <div className="inline-flex items-center rounded-full bg-purple-700/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-700 mb-3">
              {p.highlight ? 'Flagship' : 'Program'}
            </div>
            <h3 className="text-slate-900 text-[16px] font-bold mb-[2px]">{p.title}</h3>
            <div className="text-slate-500 text-[11px] block">{p.sub}</div>
            <div className="text-purple-700 font-bold text-[13px] inline-flex items-center gap-[5px] transition-[gap] group-hover:gap-[10px] mt-[14px]">
              Know More →
            </div>
          </div>
        </Link>
      ))}
      </div>
    </section>
  )
}
