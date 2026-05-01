"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const faculty = [
  { img: '/faculty&research/faculty/Dr-Rajyalakshmi.webp', name: 'Dr. Rajyalakshmi', role: 'Professor – Marketing', exp: '25+ Years · PhD' },
  { img: '/faculty&research/faculty/Dr-Harish.webp', name: 'Dr. Harish', role: 'Professor – Finance', exp: '20+ Years · PhD' },
  { img: '/faculty&research/faculty/DR-PAVAN.webp', name: 'Dr. Pavan', role: 'Professor – Operations', exp: '18+ Years · PhD' },
  { img: '/faculty&research/faculty/Dr-Ramana-Rao.webp', name: 'Dr. Ramana Rao', role: 'Professor – HR & OB', exp: '22+ Years · PhD' },
  { img: '/faculty&research/faculty/ANNAPURNA.webp', name: 'Dr. Annapurna', role: 'Professor – Finance', exp: '28+ Years · PhD' },
  { img: '/faculty&research/faculty/dr-jayalakshmi.webp', name: 'Dr. Jayalakshmi', role: 'Professor – Finance', exp: '29+ Years · PhD' },
  { img: '/faculty&research/faculty/rahul.webp', name: 'Mr. Rahul Jain', role: 'HR & Strategy', exp: '22+ Years · PGDBA' },
  { img: '/faculty&research/faculty/daman.webp', name: 'Ms. Damandeep', role: 'HR & Strategy', exp: '17+ Years · PGDBA' },
  { img: '/faculty&research/faculty/gracemani.webp', name: 'Dr. Grace Mani', role: 'Professor – Marketing', exp: '26+ Years · PhD' },
  { img: '/faculty&research/faculty/Subhash-Tej.webp', name: 'Mr. Subash Tej', role: 'Data Science', exp: '22+ Years · MCA, MBA' },
  { img: '/faculty&research/faculty/kiranmayi.webp', name: 'Ms. Kiranmayi', role: 'Data Science', exp: '12+ Years · MBA' },
  { img: '/faculty&research/faculty/Smarpitaroy.webp', name: 'Ms. Samarpita', role: 'HR & Strategy', exp: '15+ Years · MBA' },
]

export default function Faculty() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const isScrollingRef = useRef(false)

  const scrollByCards = useCallback((direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track || isScrollingRef.current) return
    
    // Get the exact width of one card + the gap (16px)
    const cardWidth = track.firstElementChild?.clientWidth || 240
    const amount = cardWidth + 16
    const scrollAmount = direction === 'left' ? -amount : amount

    const newScrollLeft = track.scrollLeft + scrollAmount
    const maxScroll = track.scrollWidth - track.clientWidth

    isScrollingRef.current = true

    if (newScrollLeft >= maxScroll) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (newScrollLeft <= 0) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    setTimeout(() => {
      isScrollingRef.current = false
    }, 500)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      scrollByCards('right')
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, scrollByCards])

  return (
    <section
      id="faculty"
      className="bg-light px-4 py-[60px] sm:px-6 lg:px-4 lg:px-[60px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-sky px-4 py-[5px] text-[12px] font-bold uppercase tracking-[0.8px] text-blue mb-[14px]">
            Our Faculty
          </span>
          <h2 className="mb-4 font-playfair leading-[1.2] text-navy" style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Learn from the Best
          </h2>
          <p className="mx-auto max-w-[620px] text-[15px] leading-[1.75] text-gray">
            Our distinguished faculty bring decades of academic and industry experience to shape tomorrow&apos;s leaders.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCards('left')}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-navy shadow-sm transition-transform hover:-translate-y-0.5 hover:border-blue hover:text-blue"
            aria-label="Scroll faculty left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCards('right')}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-navy shadow-sm transition-transform hover:-translate-y-0.5 hover:border-blue hover:text-blue"
            aria-label="Scroll faculty right"
          >
            →
          </button>
        </div>

        <div className="relative mt-3">
          <div
            ref={trackRef}
            className="hide-scrollbar flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {faculty.map((f) => (
              <div 
                key={f.name} 
                className="snap-center sm:snap-start flex-shrink-0 flex justify-center sm:block w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)] max-w-[400px]"
              >
                <article
                  className="overflow-hidden rounded-[18px] border border-border bg-white shadow-[0_10px_30px_rgba(16,34,105,0.08)] transition-transform duration-300 hover:-translate-y-1 w-[280px] sm:w-full"
                >
                  <div className="relative aspect-[3/4] bg-gradient-to-b from-[#edf4ff] to-white overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      style={{ objectPosition: 'center 16%' }}
                      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 28vw, 240px"
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-[14px] font-bold text-navy leading-tight">{f.name}</h3>
                    <div className="mb-1 text-[11.5px] font-semibold text-blue leading-tight">{f.role}</div>
                    <div className="text-[11px] text-gray">{f.exp}</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
