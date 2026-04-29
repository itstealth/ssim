import Image from 'next/image'

const reasons = [
  { icon: '🤝', title: 'Industry-Integrated Learning', desc: 'Live projects, corporate mentorships, industry visits, and guest lectures from top business leaders.' },
  { icon: '🏆', title: 'Award-Winning Faculty', desc: 'Expert faculty with deep academic credentials and extensive corporate experience.' },
  { icon: '🌍', title: 'Global Network', desc: 'International collaborations, exchange programs, and alumni spanning 50+ countries.' },
  { icon: '💡', title: 'Innovation & Entrepreneurship', desc: 'Incubation center, startup mentorship, and innovation labs fostering an entrepreneurial mindset.' },
  { icon: '🎗', title: 'Holistic Development', desc: 'Focus on ethics, sustainability, creativity, and critical decision-making abilities.' },
  { icon: '📍', title: 'Prime Location', desc: 'Kompally, Hyderabad — near India\'s pharma, IT, and BFSI capital and top employers.' },
]

export default function WhySSIM() {
  return (
    <section id="why" className="bg-white px-[60px] py-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-0">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80&auto=format&fit=crop"
            alt="Why SSIM"
            width={800}
            height={480}
            className="w-full h-[480px] object-cover rounded-[20px]"
          />
        </div>
        <div>
          <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
            Why Choose SSIM
          </span>
          <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
            Your Gateway to Leadership Excellence
          </h2>
          <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mb-[26px]">
            Six compelling reasons why SSIM is the right choice for your management journey.
          </p>
          <div className="grid grid-cols-2 gap-[18px]">
            {reasons.map((r) => (
              <div key={r.title} className="why-card bg-light rounded-[14px] p-[22px_20px] border border-border">
                <div className="w-[46px] h-[46px] bg-sky rounded-xl grid place-items-center text-[22px] mb-3">{r.icon}</div>
                <h3 className="text-[14px] font-bold text-navy mb-[6px]">{r.title}</h3>
                <p className="text-[13px] text-gray leading-[1.65]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
