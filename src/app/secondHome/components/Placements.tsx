import Image from 'next/image'
import Link from 'next/link'

const placementCards = [
  { icon: '💰', num: '₹30L+', title: 'Highest Package', desc: 'Exceptional CTC by top-performing graduates' },
  { icon: '🏢', num: '350+', title: 'Companies Visit SSIM', desc: 'MNCs, Big 4, FMCG, BFSI & consulting firms' },
  { icon: '📈', num: '95%+', title: 'Placement Rate', desc: 'Consistently high placement outcomes' },
  { icon: '🌐', num: '500+', title: 'Alumni Network', desc: 'Working across the globe in top roles' },
]

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

export default function Placements() {
  return (
    <section id="placements" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Placement Excellence
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Phenomenal Placement Record
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Our students secure roles at India&apos;s most prestigious companies, transforming their careers from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mt-[50px]">
        {/* Stats list */}
        <div className="flex flex-col gap-[14px]">
          {placementCards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-[14px] px-6 py-5 border border-border flex items-center gap-[18px] transition-all duration-300 hover:border-blue hover:shadow-[0_8px_28px_rgba(27,80,236,0.1)] hover:translate-x-1"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-sky/20 grid place-items-center text-2xl flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <div className="font-playfair text-[28px] font-extrabold text-navy leading-none">{c.num}</div>
                <h4 className="text-[13px] font-bold text-dark mt-[2px]">{c.title}</h4>
                <p className="text-[12px] text-gray mt-[2px]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image column */}
        <div className="w-full max-w-[560px] lg:sticky lg:top-20">
          <div className="grid gap-3">
            <div className="relative overflow-hidden rounded-[18px] shadow-[0_10px_30px_rgba(11,31,59,0.08)] aspect-[16/10]">
              <Image
                src="/Home/Placements.webp"
                alt="SSIM Placement Drive"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['/Home/Education.webp', '/Home/Events.webp', '/Home/Sports.webp'].map((src, i) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-[12px] aspect-[4/3] shadow-[0_8px_24px_rgba(11,31,59,0.06)]"
                >
                  <Image
                    src={src}
                    alt={`Placement gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 33vw, 180px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Strip */}
      <div className="mt-11 p-[26px] bg-white rounded-2xl border border-border overflow-hidden">
        <h4 className="text-center text-navy text-[15px] font-bold mb-[22px]">Our Phenomenal Recruiters</h4>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...recruiters, ...recruiters].map((r, i) => (
              <div key={i} className="flex-shrink-0">
                <img src={r.logo} alt={r.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
