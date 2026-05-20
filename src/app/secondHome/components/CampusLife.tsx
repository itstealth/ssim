import Image from 'next/image'
import Link from 'next/link'
import { secondHomeTheme } from '../theme'

const gallery = [
  { src: '/campus.webp', caption: 'Main Campus · Kompally, Hyderabad', tall: true },
  { src: '/campus-celebration.webp', caption: 'Campus Celebration' },
  { src: '/student-participation.webp', caption: 'Student Participation' },
  { src: '/cultural-showcase.webp', caption: 'Cultural Showcase' },
  { src: '/memorable-moment.webp', caption: 'Memorable Moments' },
]

export default function CampusLife() {
  return (
    <section className={`px-4 lg:px-[60px] py-[64px] ${secondHomeTheme.shellMuted}`}>
      <div className="text-center">
        <span className={secondHomeTheme.eyebrowSoft}>
          Campus Life
        </span>
        <h2 className={secondHomeTheme.title} style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Experience Life at SSIM
        </h2>
        <p className={`${secondHomeTheme.lead} max-w-[620px] mx-auto`}>
          A vibrant, state-of-the-art campus that fosters learning, innovation, leadership, and lifelong friendships.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {gallery.map((item, i) => (
          <Link
            href="/students-life/life-at-ssim"
            key={i}
            className={`relative overflow-hidden rounded-[14px] group block ${
              i === 0
                ? 'col-span-2 row-span-2 h-[280px] md:h-[476px]'
                : 'col-span-1 h-[150px] md:h-[230px]'
            }`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101a3a]/28 via-transparent to-transparent" />
            <div
              className="absolute bottom-0 left-0 right-0 text-white px-[14px] pt-8 pb-[10px] text-[11px] md:text-[13px] font-semibold leading-tight"
              style={{ background: 'linear-gradient(transparent, rgba(16,26,58,.95))' }}
            >
              {item.caption}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
