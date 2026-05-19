"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { secondHomeTheme } from '../theme'

const accreds = [
  { badge: 'AICTE', label: 'AICTE Approved', img: '/about/aicte.png' },
  { badge: 'NAAC', label: 'NAAC Accredited', img: '/about/naac.png' },
  { badge: 'NBA', label: 'NBA for PGDM', img: '/about/NBA-logo.png' },
  { badge: 'SAQS', label: 'SAQS Accredited', img: '/about/SAQS-Accredited-Logo.jpg' },
  { badge: 'AACSB', label: 'AACSB Member', img: '/about/AACSB.jpeg' },
  { badge: 'AIU', label: 'AIU Member', img: '/about/aiu-header.png' },
  { badge: 'III', label: 'III Accredited', img: '/about/III.png' },
]

export default function AccredBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      // Only run auto-scroll if it's horizontally scrollable (mobile)
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        
        // If we reached the end, scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll forward by roughly one item's width (half the container since it's a 2-item slider)
          scrollContainer.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-[18px] ${secondHomeTheme.shellMuted}`}>
      <div 
        ref={scrollRef}
        className="flex items-center lg:justify-center gap-4 lg:gap-9 px-4 lg:px-[60px] flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scroll-pl-4 lg:scroll-pl-[60px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {accreds.map((a) => (
          <div 
            key={a.label} 
            className="flex items-center gap-[10px] font-bold text-[12px] md:text-[13px] text-slate-700 shrink-0 snap-start w-[calc(50vw-24px)] md:w-[calc(33vw-24px)] lg:w-auto p-2 lg:p-0 bg-white/75 lg:bg-transparent rounded-xl lg:rounded-none border border-white/60 lg:border-transparent shadow-[0_10px_24px_rgba(16,34,105,0.04)]"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-[8px] lg:rounded-[10px] bg-white lg:bg-purple-50 grid place-items-center overflow-hidden shrink-0 shadow-sm lg:shadow-none">
              <Image src={a.img} alt={a.badge} width={36} height={36} className="w-7 h-7 lg:w-9 lg:h-9 object-contain" />
            </div>
            <span className="whitespace-normal leading-[1.2]">{a.label}</span>
          </div>
        ))}
        {/* Dummy element for end-of-scroll padding on mobile */}
        <div className="w-1 lg:hidden shrink-0" />
      </div>
    </div>
  )
}
