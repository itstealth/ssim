import Image from 'next/image'
import Link from 'next/link'

const imgSlider = [
  {
    image: "/Home/Events.webp",
    tagline: "Shaping Bright Futures Together",
    highlight: "World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
  },
  {
    image: "/Home/Education.webp",
    tagline: "Celebrate Every Special Moment",
    highlight: "Cultural festivals, workshops, and leadership opportunities.",
  },
  {
    image: "/Home/Sports.webp",
    tagline: "Fuel Your Passion Daily",
    highlight: "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
  },
  {
    image: "/Home/Labs.webp",
    tagline: "Innovate, Learn, Discover Together",
    highlight: "Cutting-edge labs for practical learning, research, and discovery.",
  },
  {
    image: "/Home/Auditorium.webp",
    tagline: "Inspire, Engage, Create Together",
    highlight: "Modern auditorium for events, seminars, and cultural programs.",
  },
  {
    image: "/Home/Placements.webp",
    tagline: "Launch Your Career Successfully",
    highlight: "Strong industry connections and 100% placement assistance.",
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgSlider[0].image}
          alt={imgSlider[0].tagline}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-[2] px-[60px] py-[60px] max-w-[640px]">
        <div className="inline-flex items-center gap-2 bg-[rgba(213,231,255,0.15)] border border-[rgba(213,231,255,0.35)] px-[18px] py-[6px] rounded-full text-sky text-[12px] font-semibold tracking-[0.5px] uppercase mb-6">
          AICTE Approved · 32+ Years of Excellence
        </div>
        <h1 className="font-playfair text-white leading-[1.12] mb-[10px]" style={{fontSize:'clamp(36px,5vw,62px)'}}>
          {imgSlider[0].tagline.split(' ').map((word, i) => (
            i === 1 ? <span key={i} className="text-sky">{word} </span> : word + ' '
          ))}
        </h1>
        <p className="text-[16px] text-[rgba(213,231,255,0.88)] mb-8 leading-[1.75] max-w-[500px]">
          {imgSlider[0].highlight}
        </p>
        <div className="flex gap-4 flex-wrap mb-12">
          <Link
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noreferrer"
            className="bg-red text-white px-8 py-[14px] rounded-[10px] font-bold text-[15px] no-underline transition-all hover:bg-[#b91c1c] hover:-translate-y-[2px] shadow-[0_6px_20px_rgba(220,38,38,0.4)]"
          >
            Apply for 2026–28 →
          </Link>
          <Link
            href="#programs"
            className="bg-transparent text-sky px-8 py-[14px] rounded-[10px] font-semibold text-[15px] no-underline border-2 border-[rgba(213,231,255,0.45)] transition-all hover:bg-[rgba(213,231,255,0.1)]"
          >
            Explore Programs
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 flex-wrap">
          {[
            { num: '32', sup: '+', label: 'Years of Excellence' },
            { num: '30K', sup: '+', label: 'Alumni Network' },
            { num: '300', sup: '+', label: 'Corporate Partners' },
            { num: '₹30L', sup: '+', label: 'Top Placement' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-playfair text-[32px] font-extrabold text-white leading-none">
                {s.num}<span className="text-sky text-[20px]">{s.sup}</span>
              </div>
              <p className="text-[11px] text-[rgba(213,231,255,0.7)] mt-[3px] uppercase tracking-[0.5px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Float Cards */}
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 z-[3] hidden xl:flex flex-col gap-4">
        {[
          { label: 'Ranking 2025', val: '#2', sub: 'B-School in Telangana', red: true },
          { label: 'Recognition', val: 'A+++', sub: 'Business India 2024', red: false },
          { label: 'National Rank', val: '#21', sub: 'Private B-Schools India', red: false },
        ].map((card) => (
          <div
            key={card.label}
            className={`backdrop-blur-[14px] border rounded-2xl px-[22px] py-[18px] text-white min-w-[200px] ${
              card.red
                ? 'bg-[rgba(220,38,38,0.35)] border-[rgba(220,38,38,0.4)]'
                : 'bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.2)]'
            }`}
          >
            <div className="text-[11px] text-sky uppercase tracking-[0.6px] mb-1">{card.label}</div>
            <div className="font-playfair text-[28px] font-bold leading-none">{card.val}</div>
            <div className="text-[12px] text-[rgba(213,231,255,0.75)] mt-[2px]">{card.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}