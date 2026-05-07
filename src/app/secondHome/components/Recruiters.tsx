"use client";
import React from 'react';
import { secondHomeTheme } from '../theme'

const recruiters = [
  { name: 'KPMG', logo: '/placement-logos/kpmg.png' },
  { name: 'Deloitte', logo: '/placement-logos/deloitte.png' },
  { name: 'Asian Paints', logo: '/placement-logos/asian-paints.png' },
  { name: 'ITC', logo: '/placement-logos/itc.png' },
  { name: 'Aditya Birla', logo: '/placement-logos/aditya-birla.png' },
  { name: 'Oxane', logo: '/placement-logos/oxane.png' },
  { name: 'Nestle', logo: '/placement-logos/nestle.png' },
  { name: 'Godrej', logo: '/placement-logos/godrej-jersey.png' },
  { name: 'Lloyds', logo: '/placement-logos/lloyds.webp' },
  { name: 'Sneha', logo: '/placement-logos/sneha.png' },
  { name: 'Praval', logo: '/placement-logos/PRAVAL.webp' },
  { name: 'Berkadia', logo: '/placement-logos/berkadia.png' },
]

export default function Recruiters() {
  return (
    <section className={`px-4 lg:px-[60px] pt-[64px] pb-[20px] ${secondHomeTheme.shellMuted}`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <span className={secondHomeTheme.eyebrowSoft}>
            Our Partners
          </span>
          <h2 className={secondHomeTheme.title} style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Our Phenomenal Recruiters
          </h2>
          <p className={`${secondHomeTheme.lead} max-w-[620px] mx-auto`}>
            Top MNCs and industry leaders who consistently recruit from SSIM.
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-[26px] shadow-[0_16px_40px_rgba(16,34,105,0.06)]">
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <img src={r.logo} alt={r.name} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
