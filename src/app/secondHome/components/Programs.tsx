import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    title: 'PGDM',
    sub: 'Triple Specialisation · 2 Years · NBA Accredited',
    highlight: true,
    img: '/Home/Education.webp',
    link: '/programs/pgdm-triple-specialisation',
  },
  {
    title: 'PGDM – BIFS',
    sub: 'Banking, Insurance & Financial Services',
    img: '/Home/Labs.webp',
    link: '/programs/pgdm-bifs',
  },
  {
    title: 'PGDM – BA',
    sub: 'Business Analytics · Data-Driven Leadership',
    img: '/Home/Placements.webp',
    link: '/programs/pgdm-ba',
  },
  {
    title: 'FPM / EFPM',
    sub: 'Fellow Program In Management',
    img: '/Home/Auditorium.webp',
    link: '/programs/fpm-efpm',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Academic Programs
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          World-Class Management Programs
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          We train our students to master both the technical & management aspects of the business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] mt-[50px]">
        {programs.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(16,34,105,0.07)] border border-border hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(16,34,105,0.14)] group"
          >
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full transition-transform duration-[400ms] group-hover:scale-[1.07]"
              />
            </div>
            <div className="p-[16px_18px]">
              <h3 className="text-navy text-[16px] font-bold mb-[2px]">{p.title}</h3>
              <span className="text-gray text-[11px]">{p.sub}</span>
              <Link href={p.link} className="text-blue font-bold text-[13px] no-underline inline-flex items-center gap-[5px] transition-[gap] hover:gap-[10px] mt-[14px]">
                Know More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}