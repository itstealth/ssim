import Image from 'next/image'

const gallery = [
  { src: '/Home/Events.webp', caption: 'Main Campus · Kompally, Hyderabad', tall: true },
  { src: '/Home/Education.webp', caption: 'Smart Classrooms' },
  { src: '/Home/Sports.webp', caption: 'Sports & Recreation' },
  { src: '/Home/Labs.webp', caption: 'Digital Library' },
  { src: '/Home/Auditorium.webp', caption: 'Cultural Events & Fests' },
]

export default function CampusLife() {
  return (
    <section className="bg-navy px-[60px] py-[80px]">
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
        className="mt-11"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '230px 230px',
          gap: '14px',
        }}
      >
        {gallery.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-[14px] group"
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
          </div>
        ))}
      </div>
    </section>
  )
}