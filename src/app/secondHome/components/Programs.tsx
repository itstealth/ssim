import Image from 'next/image'

const programs = [
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop',
    title: 'PGDM',
    sub: 'Triple Specialisation · 2 Years · NBA Accredited',
    desc: 'Our flagship 2-year PGDM equips students with cross-functional skills, leadership, and decision-making competencies to thrive in the VUCA world.',
    highlight: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop',
    title: 'PGDM – BIFS',
    sub: 'Banking, Insurance & Financial Services',
    desc: 'Specialised program for aspiring BFSI professionals with deep industry connect and practical modules tailored for financial services.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
    title: 'PGDM – BA',
    sub: 'Business Analytics · Data-Driven Leadership',
    desc: 'Master analytics, machine learning and BI tools to become a data-driven leader in the age of digital transformation.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
    title: 'FPM / EFPM',
    sub: 'Fellow Program in Management · Doctoral',
    desc: 'Rigorous doctoral-level program for those pursuing academic excellence, management research and thought leadership.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Academic Programs
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          World-Class Management Programs
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Designed to push students beyond boundaries and shape future-ready business leaders for a complex, fast-changing world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] mt-[50px]">
        {programs.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(16,34,105,0.07)] border border-border hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(16,34,105,0.14)] group"
          >
            <div className="relative h-[160px] overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.07]"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-[14px]"
                style={{
                  background: p.highlight
                    ? 'linear-gradient(to bottom, rgba(27,80,236,.25), rgba(27,80,236,.82))'
                    : 'linear-gradient(to bottom, rgba(16,34,105,.25), rgba(16,34,105,.78))',
                }}
              >
                <h3 className="text-white text-[16px] font-bold mb-[2px]">{p.title}</h3>
                <span className="text-sky text-[11px]">{p.sub}</span>
              </div>
            </div>
            <div className="p-[16px_18px]">
              <p className="text-[12.5px] text-gray leading-[1.65] mb-[14px]">{p.desc}</p>
              <a href="#" className="text-blue font-bold text-[13px] no-underline inline-flex items-center gap-[5px] transition-[gap] hover:gap-[10px]">
                Know More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
