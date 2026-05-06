"use client";
import React from 'react';

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
    <section className="bg-white px-4 lg:px-[60px] pt-[60px] pb-[20px]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#521092]/20 text-[#d74dec] text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
            Our Partners
          </span>
          <h2 className="font-playfair text-[#521092] leading-[1.2] mb-4" style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Our Phenomenal Recruiters
          </h2>
          <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
            Top MNCs and industry leaders who consistently recruit from SSIM.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-[26px]">
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
