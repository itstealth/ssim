"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { secondHomeTheme } from '../theme'

const faculty = [
  {
    img: "/about/director.jpeg",
    name: "Dr. S.V. Ramana Rao",
    area: "Finance",
    exp: "32 Years · Ph.D / MBA",
  },
  {
    img: "/about/BoardOfGoverners/NRKS.jpeg",
    name: "Dr. NRKS Chakravarthy",
    area: "Decision Science and Information System",
    exp: "29 Years · MBA",
  },
  {
    img: "/faculty&research/faculty/DR-PAVAN.jpg",
    name: "Dr. Pavan Patel",
    area: "HR & Strategy",
    exp: "32 Years · Ph.D, MIRPM",
  },
  {
    img: "/faculty&research/faculty/SF-Chandra.webp",
    name: "Dr. S.F. Chandra Sekhar",
    area: "HR & Strategy",
    exp: "37 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Dr-Harish.webp",
    name: "Dr. K.S. Harish",
    area: "Data Science",
    exp: "32 Years · Ph.D, M.Sc.",
  },
  {
    img: "/faculty&research/faculty/SREEHARI.webp",
    name: "Mr. Karanam Sreehari",
    area: "Data Science",
    exp: "35 Years · MCA, M.Tech, M.Sc.",
  },
  {
    img: "/faculty&research/faculty/ANNAPURNA.webp",
    name: "Dr. Annapurna Valluripally",
    area: "Finance",
    exp: "28 Years · Ph.D, MBA, M.Com",
  },
  {
    img: "/faculty&research/faculty/dr-jayalakshmi.webp",
    name: "Dr. Jayalakshmi Valluri",
    area: "Finance",
    exp: "29 Years · Ph.D, M.Com",
  },
  {
    img: "/faculty&research/faculty/THIRUMALREDDY.jpg",
    name: "Dr. T. Thirumal Reddy",
    area: "Marketing",
    exp: "22 Years · Ph.D, PGDBA",
  },
  {
    img: "/faculty&research/faculty/rahul.webp",
    name: "Mr. Rahul Jain",
    area: "HR & Strategy",
    exp: "22 Years · PGDBA",
  },
  {
    img: "/faculty&research/faculty/daman.webp",
    name: "Ms. Damandeep Johar",
    area: "HR & Strategy",
    exp: "17 Years · PGDBA, (Ph.D)",
  },
  {
    img: "/faculty&research/faculty/gracemani.webp",
    name: "Dr. Grace Mani K.",
    area: "Marketing",
    exp: "26 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Subhash-Tej.webp",
    name: "Mr. Subash Tej Tumu",
    area: "Data Science",
    exp: "22 Years · MCA, MBA",
  },
  {
    img: "/faculty&research/faculty/kiranmayi.webp",
    name: "Ms. Kiranmayi Patel",
    area: "Data Science",
    exp: "12 Years · MBA",
  },
  {
    img: "/faculty&research/faculty/balanji.webp",
    name: "Dr. Balanji Reddy Mora",
    area: "Finance",
    exp: "16 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/DINESH.webp",
    name: "Dr. Avudaiappan Dinesh",
    area: "HR & Strategy",
    exp: "6 Years · Ph.D, MA, M.Phil",
  },
  {
    img: "/faculty&research/faculty/PUSHPA.webp",
    name: "Dr. Pushpa Machani",
    area: "HR & Strategy",
    exp: "17 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/chaithanya.webp",
    name: "Mr. M. Chaithanya",
    area: "Marketing",
    exp: "21 Years · PGDBA",
  },
  {
    img: "/faculty&research/faculty/subba.webp",
    name: "Dr. K. Subba Rama Sarma",
    area: "Data Science",
    exp: "23 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Smarpitaroy.jpg",
    name: "Ms. Samarpita Roy",
    area: "HR & Strategy",
    exp: "15 Years · MBA",
  },
  {
    img: "/faculty&research/faculty/Shubhra-Johri.webp",
    name: "Dr. Shubhra Johri",
    area: "Finance",
    exp: "20 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Gowri-Kusuma.jpg",
    name: "Dr. Pinjarla Gowri Kusuma",
    area: "HR & Strategy",
    exp: "18 Years · Ph.D",
  },
  {
    img: "/faculty&research/faculty/Shambhavi.webp",
    name: "Dr. Shambhavi Tamrakar",
    area: "Marketing",
    exp: "14 Years · Ph.D, MBA, MA",
  },
  {
    img: "/faculty&research/faculty/Bipul-Kumar.jpg",
    name: "Dr. Bipul Kumar",
    area: "Marketing",
    exp: "6 Years · Ph.D, MBA, UGC-NET",
  },
  {
    img: "/faculty&research/faculty/Mr-Madhava-Murthy.webp",
    name: "Mr. T. Madhav Murthy",
    area: "Finance",
    exp: "23 Years · MBA",
  },
  {
    img: "/faculty&research/faculty/Dr-Rajyalakshmi.webp",
    name: "Dr. N.C. Rajyalakshmi",
    area: "Finance",
    exp: "30 Years · Ph.D",
  },
  {
    img: "/faculty&research/faculty/J-Kameswari.jpg",
    name: "Dr. Jada Kameshwari",
    area: "Data Science",
    exp: "19 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Kiran-Kumar.jpg",
    name: "Dr. K. Kiran Kumar",
    area: "Data Science",
    exp: "16 Years · Ph.D, MBA",
  },
  {
    img: "/faculty&research/faculty/Murali-Krishna.jpg",
    name: "Mr. G. Murali Krishna Patnaik",
    area: "HR & Strategy",
    exp: "19 Years · M.Sc.",
  },
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
      className={`px-4 py-[64px] sm:px-6 lg:px-4 lg:px-[60px] ${secondHomeTheme.shell}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className={secondHomeTheme.eyebrow}>
            Our Faculty
          </span>
          <h2 className={`mb-4 ${secondHomeTheme.title}`} style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Learn from the Best
          </h2>
          <p className={`${secondHomeTheme.lead} mx-auto max-w-[620px]`}>
            Our distinguished faculty bring decades of academic and industry experience to shape tomorrow&apos;s leaders.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCards('left')}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-purple-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-400"
            aria-label="Scroll faculty left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCards('right')}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-purple-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-400"
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
                  className={`overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(16,34,105,0.08)] transition-transform duration-300 hover:-translate-y-1 w-[280px] sm:w-full ${secondHomeTheme.surfaceLift}`}
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
                    <h3 className="mb-1 text-[14px] font-bold text-slate-900 leading-tight">{f.name}</h3>
                    <div className="mb-1 text-[11.5px] font-semibold text-purple-700 leading-tight">{f.area}</div>
                    <div className="text-[11px] text-slate-500">{f.exp}</div>
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
