import Image from 'next/image'

const placementCards = [
  { icon: '💰', num: '₹30L+', title: 'Highest Package', desc: 'Exceptional CTC by top-performing graduates' },
  { icon: '🏢', num: '500+', title: 'Companies Visit SSIM', desc: 'MNCs, Big 4, FMCG, BFSI & consulting firms' },
  { icon: '📈', num: '95%+', title: 'Placement Rate', desc: 'Consistently high placement outcomes' },
  { icon: '🌐', num: '50+', title: 'Countries', desc: 'Alumni working across the globe in top roles' },
]

const recruiters = ['KPMG','Deloitte','Asian Paints','ITC','Aditya Birla Group','Oxane Partners','Lloyds Banking','EY','Amazon','Wipro','HDFC Bank','Axis Bank','Kotak Mahindra']

export default function Placements() {
  return (
    <section id="placements" className="bg-light px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
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
              <div className="w-[52px] h-[52px] rounded-xl bg-sky grid place-items-center text-2xl flex-shrink-0">
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
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop"
            alt="SSIM Placement Drive"
            width={800}
            height={320}
            className="w-full h-[320px] object-cover rounded-[18px]"
          />
          <div className="flex gap-[10px]">
            {[
              'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80&auto=format&fit=crop',
            ].map((src, i) => (
              <Image key={i} src={src} alt="placement" width={400} height={90} className="flex-1 h-[90px] object-cover rounded-[10px]" />
            ))}
          </div>
        </div>
      </div>

      {/* Recruiter Strip */}
      <div className="mt-11 p-[26px] bg-white rounded-2xl border border-border overflow-hidden">
        <h4 className="text-center text-navy text-[15px] font-bold mb-[22px]">Our Phenomenal Recruiters</h4>
        <div className="overflow-hidden">
          <div className="recruiter-scroll">
            {[...recruiters, ...recruiters].map((r, i) => (
              <div key={i} className="bg-light border border-border rounded-lg px-5 py-[9px] font-extrabold text-[13px] text-navy whitespace-nowrap flex-shrink-0">
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
