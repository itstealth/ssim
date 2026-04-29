import Image from 'next/image'

const testimonials = [
  {
    text: 'SSIM gave me the right blend of theoretical knowledge and practical exposure. The faculty mentorship and industry connect helped me land my dream role at KPMG right after graduation.',
    name: 'Akshita Sharma',
    batch: 'PGDM 2023 · KPMG',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&face',
  },
  {
    text: 'The triple specialisation at SSIM was a game-changer. I explored Marketing, Finance and Operations simultaneously, making me a versatile professional ready for any challenge.',
    name: 'Sarvesh Rathi',
    batch: 'PGDM 2024 · Asian Paints',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80&auto=format&fit=crop&face',
  },
  {
    text: "SSIM's holistic approach — ethics, sustainability and innovation — shaped not just my career but my character. Proud to be an SSIM alumna and now part of the Deloitte family!",
    name: 'Gayatri Reddy',
    batch: 'PGDM 2023 · Deloitte',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80&auto=format&fit=crop&face',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          SSIM Stories
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          What Our Students Say
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Hear from the leaders who transformed their careers at SSIM.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px] mt-[50px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="test-card bg-light rounded-[18px] p-[26px] border border-border transition-all duration-300 hover:shadow-[0_10px_32px_rgba(16,34,105,0.1)] hover:-translate-y-[3px]"
          >
            <div className="text-[#F59E0B] text-[14px] mb-3">★★★★★</div>
            <p className="text-[13.5px] text-dark leading-[1.75] mb-[18px] italic">{t.text}</p>
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={46}
                height={46}
                className="w-[46px] h-[46px] rounded-full object-cover border-2 border-sky flex-shrink-0"
              />
              <div>
                <h5 className="text-[14px] text-navy font-bold">{t.name}</h5>
                <span className="text-[12px] text-gray">{t.batch}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
