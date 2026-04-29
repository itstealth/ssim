import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Excellence in Education
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Top Management Institute in Hyderabad
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Over three decades of shaping ethical, innovative, and industry-ready business leaders at the heart of India&apos;s pharmaceutical and IT capital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-[50px]">
        {/* Visual Column */}
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&auto=format&fit=crop"
            alt="SSIM Campus"
            width={900}
            height={400}
            className="w-full h-[400px] object-cover rounded-[20px] block"
          />
          <div className="absolute bottom-[116px] left-4 bg-navy text-white px-5 py-[14px] rounded-[14px] font-bold text-[12.5px] shadow-[0_8px_24px_rgba(16,34,105,0.3)]">
            <span className="block text-[20px] font-playfair">A+++</span>
            B-School · Business India 2024
          </div>
          <div className="absolute top-4 right-4 bg-red text-white px-4 py-[10px] rounded-[10px] font-bold text-[12px] text-center shadow-[0_6px_18px_rgba(220,38,38,0.35)]">
            🏆 Ranked #21<br />Private B-Schools India
          </div>
          <div className="flex gap-[10px] mt-3">
            {[
              'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format&fit=crop',
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Campus"
                width={400}
                height={96}
                className="flex-1 h-24 object-cover rounded-[10px]"
              />
            ))}
          </div>
        </div>

        {/* Text Column */}
        <div>
          <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
            About SSIM
          </span>
          <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
            Premier Institution with{' '}
            <em className="text-blue not-italic">Three Decades</em> of Excellence
          </h2>
          <p className="text-[15px] text-gray leading-[1.75] max-w-[620px]">
            Located in the heart of Hyderabad, SSIM is a renowned AICTE accredited, NAAC, NBA, AIU, SAQS and AACSB Member institution. It delivers industry-relevant learning through an innovative curriculum and experienced faculty blending academic and corporate insights. Recognised as an A+++ B-School by Business India (2024), SSIM ranks 21st among private standalone B-Schools in India.
          </p>
          <div className="grid grid-cols-2 gap-[14px] mt-[26px]">
            {[
              { title: '🏅 Industry-Integrated', desc: 'Live projects, internships & corporate mentorship embedded in curriculum' },
              { title: '🌍 Global Outlook', desc: 'International tie-ups, exchange programs & global alumni network' },
              { title: '📚 Expert Faculty', desc: 'Highly qualified faculty with rich academic and corporate experience' },
              { title: '💡 Innovation Hub', desc: 'Entrepreneurship cell, incubation center & research initiatives' },
            ].map((f) => (
              <div key={f.title} className="bg-light p-4 rounded-xl border-l-4 border-blue">
                <h4 className="text-[13px] font-bold text-navy mb-[3px]">{f.title}</h4>
                <p className="text-[12px] text-gray">{f.desc}</p>
              </div>
            ))}
          </div>
          <br />
          <a
            href="#"
            className="inline-block bg-red text-white px-8 py-[14px] rounded-[10px] font-bold text-[15px] no-underline transition-all hover:bg-[#b91c1c] hover:-translate-y-[2px] shadow-[0_6px_20px_rgba(220,38,38,0.4)]"
          >
            Learn More About SSIM →
          </a>
        </div>
      </div>
    </section>
  )
}
