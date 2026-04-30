import Image from 'next/image'
import Link from 'next/link'

const placementCards = [
  { icon: '💰', num: '₹30L+', title: 'Highest Package', desc: 'Exceptional CTC by top-performing graduates' },
  { icon: '🏢', num: '500+', title: 'Companies Visit SSIM', desc: 'MNCs, Big 4, FMCG, BFSI & consulting firms' },
  { icon: '📈', num: '95%+', title: 'Placement Rate', desc: 'Consistently high placement outcomes' },
  { icon: '🌐', num: '50+', title: 'Countries', desc: 'Alumni working across the globe in top roles' },
]

const recruiters = [
  { name: 'KPMG', logo: '/Home/citi-logo.svg' },
  { name: 'Deloitte', logo: '/Home/citi-logo.svg' },
  { name: 'Asian Paints', logo: '/Home/dabur.png' },
  { name: 'ITC', logo: '/Home/dabur.png' },
  { name: 'Aditya Birla Group', logo: '/Home/dabur.png' },
  { name: 'EY', logo: '/Home/citi-logo.svg' },
  { name: 'Amazon', logo: '/Home/microsoft.png' },
  { name: 'Wipro', logo: '/Home/microsoft.png' },
  { name: 'HDFC Bank', logo: '/Home/SBI_Logo.png' },
  { name: 'Axis Bank', logo: '/Home/SBI_Logo.png' },
  { name: 'Kotak Mahindra', logo: '/Home/SBI_Logo.png' },
  { name: 'JPMC', logo: '/Home/jpmc-logo.svg' },
  { name: 'Citi', logo: '/Home/citi-logo.svg' },
  { name: 'Microsoft', logo: '/Home/microsoft.png' },
  { name: 'Cognizant', logo: '/Home/cognizant.svg' },
  { name: 'Dabur', logo: '/Home/dabur.png' },
  { name: 'Naukri', logo: '/Home/naukri.svg' },
  { name: 'Prodapt', logo: '/Home/prodapt.svg' },
  { name: 'Innova', logo: '/Home/innova-logo.svg' },
  { name: 'SBI', logo: '/Home/SBI_Logo.png' },
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
        <div className="flex flex-col gap-3">
          <img
            src="/Home/Placements.webp"
            alt="SSIM Placement Drive"
            className="w-full h-[320px] object-cover rounded-[18px]"
          />
          <div className="flex gap-[10px]">
            {['/Home/Education.webp', '/Home/Events.webp', '/Home/Sports.webp'].map((src, i) => (
              <img key={i} src={src} alt="placement" className="flex-1 h-[90px] object-cover rounded-[10px]" />
            ))}
          </div>
        </div>
      </div>

      {/* Recruiter Strip */}
      <div className="mt-11 p-[26px] bg-white rounded-2xl border border-border overflow-hidden">
        <h4 className="text-center text-navy text-[15px] font-bold mb-[22px]">Our Phenomenal Recruiters</h4>
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {[...recruiters, ...recruiters].map((r, i) => (
              <div
                key={i}
                className="bg-light border border-border rounded-lg px-5 py-[9px] font-extrabold text-[13px] text-navy whitespace-nowrap flex-shrink-0 flex items-center gap-2"
              >
                <img src={r.logo} alt={r.name} className="h-5 w-auto object-contain" />
                {r.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}