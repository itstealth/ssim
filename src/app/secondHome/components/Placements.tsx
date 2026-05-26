"use client";

import { useState } from 'react';
import Image from 'next/image'
import { secondHomeTheme } from '../theme'

const students = [
  // { name: 'AMAN KUMAR SINGH', src: '/placement_images/AMAN KUMAR SINGH.webp' },
  // { name: 'AYESHA BEGUM', src: '/placement_images/AYESHA BEGUM.webp' },
  // { name: 'NOMULA SAMEEKSHA', src: '/placement_images/NOMULA SAMEEKSHA.webp' },
  // { name: 'BHUSHI NIKHITHA REDDY', src: '/placement_images/BHUSHI NIKHITHA REDDY.webp' },
  { name: 'Basupally Tharuni Reddy', src: '/Home/basupally.jpeg' },
  { name: 'Devi Srilalitha Shahukaru', src: '/Home/devi.jpeg' },
  { name: 'Purihella Vijay Raghav Swamy', src: '/Home/purihella.jpeg' },
  { name: 'Pygeri Madhusudhan', src: '/Home/pygeri.jpeg' },
  { name: 'Vanama Jyoshitha', src: '/Home/vanama.jpeg' },
]

const placementCards = [
  { icon: '💰', num: '₹12.7L', title: 'Highest Salary', desc: 'Exceptional CTC by top-performing graduates' },
  { icon: '📊', num: '₹7.25L', title: 'Average Salary', desc: 'Consistent average package across all programs' },
  { icon: '📈', num: '98.74%', title: 'Students Placed', desc: 'Outstanding placement rate for eligible students' },
  { icon: '🏢', num: '180+', title: 'Companies Hiring', desc: 'MNCs, Big 4, FMCG, BFSI & consulting firms' },
]

export default function Placements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="placements" className={`px-4 py-[64px] sm:px-6 lg:px-4 lg:px-[60px] ${secondHomeTheme.shell}`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className={secondHomeTheme.eyebrow}>
            Placement Excellence
          </span>
          <h2 className={secondHomeTheme.title} style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Phenomenal Placement Record
          </h2>
          <p className={`${secondHomeTheme.lead} max-w-[620px] mx-auto`}>
            Our students secure roles at India&apos;s most prestigious companies, transforming their careers from day one.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          {/* Stats list */}
          <div className="flex flex-col gap-[14px]">
            {placementCards.map((c) => (
              <div
                key={c.title}
                className={`bg-white rounded-[18px] px-6 py-5 border border-slate-200/80 flex items-center gap-[18px] transition-all duration-300 hover:border-purple-700/20 hover:shadow-[0_16px_40px_rgba(16,34,105,0.08)] hover:translate-x-1 ${secondHomeTheme.surfaceLift}`}
              >
                <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-purple-700/15 to-[#1B50EC]/15 grid place-items-center text-2xl flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-playfair text-[28px] font-extrabold text-slate-900 leading-none">{c.num}</div>
                  <h4 className="text-[13px] font-bold text-slate-900 mt-[2px]">{c.title}</h4>
                  <p className="text-[12px] text-slate-500 mt-[2px]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image column */}
          <div className="w-full lg:sticky lg:top-20 lg:justify-self-end">
            <div className="mx-auto w-full max-w-[360px]">
              <div className="grid gap-3">
                <div
                  className="group relative aspect-[0.92] cursor-pointer overflow-hidden rounded-[18px] shadow-[0_10px_30px_rgba(11,31,59,0.08)]"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % students.length)}
                >
                  <Image
                    key={students[activeIndex].src}
                    src={students[activeIndex].src}
                    alt={students[activeIndex].name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">{students[activeIndex].name}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="bg-white/90 text-purple-700 text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">Click to rotate</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {students.map((student, index) => (
                    <button
                      type="button"
                      key={student.src}
                    onClick={() => setActiveIndex(index)}
                    className={`relative aspect-square overflow-hidden rounded-[12px] shadow-[0_8px_24px_rgba(11,31,59,0.06)] transition-all duration-300 ${
                        index === activeIndex ? 'ring-2 ring-purple-400 scale-95' : 'hover:scale-105'
                      }`}
                      aria-label={`Show placement story for ${student.name}`}
                    >
                      <Image
                        src={student.src}
                        alt={student.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 22vw, 120px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
