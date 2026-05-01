import Image from 'next/image'
import Link from 'next/link'

const gallery = [
  { src: '/studentslife/life-at-ssim/samaroh-2026/1.webp', caption: 'Main Campus · Kompally, Hyderabad', tall: true },
  { src: '/studentslife/life-at-ssim/samaroh-2026/2.webp', caption: 'Campus Celebration' },
  { src: '/studentslife/life-at-ssim/samaroh-2026/3.webp', caption: 'Student Participation' },
  { src: '/studentslife/life-at-ssim/samaroh-2026/4.webp', caption: 'Cultural Showcase' },
  { src: '/studentslife/life-at-ssim/samaroh-2026/5.webp', caption: 'Memorable Moments' },
]

export default function CampusLife() {
  return (
    <section className="bg-navy px-[60px] py-[60px]">
      <div className="text-center">
        <span className="inline-block bg-[rgba(213,231,255,0.15)] text-sky text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Campus Life
        </span>
        <h2 className="font-playfair text-white leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Experience Life at SSIM
        </h2>
        <p className="text-[15px] text-[rgba(213,231,255,0.75)] leading-[1.75] max-w-[620px] mx-auto">
          A vibrant, state-of-the-art campus that fosters learning, innovation, leadership, and lifelong friendships.
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        className="mt-6"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '230px 230px',
          gap: '14px',
        }}
      >
        {gallery.map((item, i) => (
          <Link
            href="/students-life/life-at-ssim"
            key={i}
            className="relative overflow-hidden rounded-[14px] group block"
            style={item.tall ? { gridRow: '1 / 3' } : {}}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="object-cover w-full h-full transition-transform duration-[400ms] group-hover:scale-[1.05]"
            />
            <div
              className="absolute bottom-0 left-0 right-0 text-white px-[14px] pt-5 pb-[10px] text-[12px] font-semibold"
              style={{ background: 'linear-gradient(transparent, rgba(16,34,105,.85))' }}
            >
              {item.caption}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
