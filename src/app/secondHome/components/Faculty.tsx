"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { secondHomeTheme } from '../theme'

const faculty = [
  {
    img: "/Faculty/1. Ramana Rao.webp",
    name: "Dr. S.V. Ramana Rao",
    area: "Finance",
    exp: "32 Years · Ph.D / MBA",
  },
  {
    img: "/Faculty/9. Mr. N.R.K.S. Chakravarthy.webp",
    name: "Dr. NRKS Chakravarthy",
    area: "Decision Science and Information System",
    exp: "29 Years · MBA",
  },
  {
    img: "/Faculty/3. Dr. Pavan Patel.webp",
    name: "Dr. Pavan Patel",
    area: "HR & Strategy",
    exp: "32 Years · Ph.D, MIRPM",
  },
  {
    img: "/Faculty/2. Dr. S.F. Chandra Sekhar.webp",
    name: "Dr. S.F. Chandra Sekhar",
    area: "HR & Strategy",
    exp: "37 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/4. Dr. K.S. Harish.webp",
    name: "Dr. K.S. Harish",
    area: "Data Science",
    exp: "32 Years · Ph.D, M.Sc.",
  },
  {
    img: "/Faculty/10. Mr. K. Sreehari.webp",
    name: "Mr. Karanam Sreehari",
    area: "Data Science",
    exp: "35 Years · MCA, M.Tech, M.Sc.",
  },
  {
    img: "/Faculty/5. Dr. V. Annapurna.webp",
    name: "Dr. Annapurna Valluripally",
    area: "Finance",
    exp: "28 Years · Ph.D, MBA, M.Com",
  },
  {
    img: "/Faculty/6. Dr. V. Jayalakshmi.webp",
    name: "Dr. Jayalakshmi Valluri",
    area: "Finance",
    exp: "29 Years · Ph.D, M.Com",
  },
  {
    img: "/Faculty/12. Dr. T. Thirumal Reddy.webp",
    name: "Dr. T. Thirumal Reddy",
    area: "Marketing",
    exp: "22 Years · Ph.D, PGDBA",
  },
  {
    img: "/Faculty/15. Mr. Rahul Jain.webp",
    name: "Mr. Rahul Jain",
    area: "HR & Strategy",
    exp: "22 Years · PGDBA",
  },
  {
    img: "/Faculty/16. Mrs. Damandeep Johar.webp",
    name: "Ms. Damandeep Johar",
    area: "HR & Strategy",
    exp: "17 Years · PGDBA, (Ph.D)",
  },
  {
    img: "/Faculty/13. Dr. K. Grace Mani.webp",
    name: "Dr. Grace Mani K.",
    area: "Marketing",
    exp: "26 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/17. Mr. T. Subash Tej.webp",
    name: "Mr. Subhash Tej Tumu",
    area: "Data Science",
    exp: "22 Years · MCA, MBA",
  },
  {
    img: "/Faculty/18. Mrs. Kiranmayi Patel.webp",
    name: "Ms. Kiranmayi Patel",
    area: "Data Science",
    exp: "12 Years · MBA",
  },
  {
    img: "/Faculty/20. Dr. M. Balanji Reddy.webp",
    name: "Dr. Balanji Reddy Mora",
    area: "Finance",
    exp: "16 Years · Ph.D, MBA",
  },
  // {
  //   img: "/Faculty/20. Dr. A. Dinesh.webp",
  //   name: "Dr. Avudaiappan Dinesh",
  //   area: "HR & Strategy",
  //   exp: "6 Years · Ph.D, MA, M.Phil",
  // },
  {
    img: "/Faculty/21. Dr. M. Pushpa.webp",
    name: "Dr. Pushpa Machani",
    area: "HR & Strategy",
    exp: "17 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/22. Mr. M. Chaithanya.webp",
    name: "Mr. M. Chaithanya",
    area: "Marketing",
    exp: "21 Years · PGDBA",
  },
  {
    img: "/Faculty/23. Dr. K. Subba Rama Sarma.webp",
    name: "Dr. K. Subba Rama Sarma",
    area: "Data Science",
    exp: "23 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/24. Mrs. Samarpita Roy.webp",
    name: "Ms. Samarpita Roy",
    area: "HR & Strategy",
    exp: "15 Years · MBA",
  },
  {
    img: "/Faculty/25. Dr. Shubhra Johri.webp",
    name: "Dr. Shubhra Johri",
    area: "Finance",
    exp: "20 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/26. Dr. P. Gowri Kusuma.webp",
    name: "Dr. Pinjarla Gowri Kusuma",
    area: "HR & Strategy",
    exp: "18 Years · Ph.D",
  },
  {
    img: "/Faculty/27. Dr. Shambhavi Tamrakar.webp",
    name: "Dr. Shambhavi Tamrakar",
    area: "Marketing",
    exp: "14 Years · Ph.D, MBA, MA",
  },
  {
    img: "/Faculty/28. Mr. Bipul Kumar.webp",
    name: "Dr. Bipul Kumar",
    area: "Marketing",
    exp: "6 Years · Ph.D, MBA, UGC-NET",
  },
  {
    img: "/Faculty/14. Mr. T. Madhav Murthy.webp",
    name: "Mr. T. Madhav Murthy",
    area: "Finance",
    exp: "23 Years · MBA",
  },
  {
    img: "/Faculty/8. Dr. N.C. Rajyalakshmi.webp",
    name: "Dr. N.C. Rajyalakshmi",
    area: "Finance",
    exp: "30 Years · Ph.D",
  },
  {
    img: "/Faculty/31. Dr. Jada Kameswari.webp",
    name: "Dr. Jada Kameshwari",
    area: "Data Science",
    exp: "19 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/29.  Dr. K. Kiran Kumar.webp",
    name: "Dr. K. Kiran Kumar",
    area: "Data Science",
    exp: "16 Years · Ph.D, MBA",
  },
  {
    img: "/Faculty/30. Mr. G. Murali Krishna Patnaik.webp",
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
