"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const programs = [
  {
    title: 'PGDM',
    sub: 'Triple Specialisation · 35 Years Legacy · Global Immersion',
    highlight: true,
    img: '/programs/pgdm_general.png',
    link: '/programs/pgdm-triple-specialisation',
  },
  {
    title: 'PGDM – BIFS',
    sub: 'Banking, Insurance & Financial Services · 19 Years Legacy',
    img: '/programs/pgdm_bifs.png',
    link: '/programs/pgdm-bifs',
  },
  {
    title: 'PGDM – BA',
    sub: 'Business Analytics · 5 Years Legacy · IBM Collaboration',
    img: '/programs/pgdm_ba.png',
    link: '/programs/pgdm-ba',
  },
  {
    title: 'FPM / EFPM',
    sub: 'Fellow / Executive Fellow Program in Management',
    img: '/programs/fpm_program.png',
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
    <section id="programs" className="bg-white px-4 lg:px-[60px] py-[60px]">
      <div className="text-center">
        <span className="inline-block bg-[#521092]/20 text-[#d74dec] text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Academic Programs
        </span>
        <h2 className="font-playfair text-[#521092] leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          World-Class Management Programs
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
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
            className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(16,34,105,0.07)] border border-border hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(16,34,105,0.14)] group block no-underline shrink-0 snap-center w-[85vw] sm:w-auto"
          >
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full transition-transform duration-[400ms] group-hover:scale-[1.07]"
              />
            </div>
            <div className="p-[16px_18px]">
              <h3 className="text-[#521092] text-[16px] font-bold mb-[2px]">{p.title}</h3>
              <div className="text-gray text-[11px] block">{p.sub}</div>
              <div className="text-[#d74dec] font-bold text-[13px] inline-flex items-center gap-[5px] transition-[gap] group-hover:gap-[10px] mt-[14px]">
                Know More →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
