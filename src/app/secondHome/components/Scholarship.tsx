import Image from 'next/image'

export default function Scholarship() {
  return (
    <section id="admissions" className="px-[60px] py-[80px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Merit Scholarships
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Earn Up to <span className="text-blue">₹4 Lakh+</span> Merit Scholarship
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Outstanding academic merit is rewarded generously at SSIM. Apply early to avail maximum scholarship benefits on your management journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mt-[50px]">
        {/* Image Column */}
        <div className="relative lg:sticky lg:top-20 h-fit">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop"
            alt="Scholarship"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-[20px] block"
          />
          <div className="absolute -bottom-[18px] -right-[18px] bg-blue text-white rounded-2xl p-[20px_24px] text-center shadow-[0_10px_30px_rgba(27,80,236,0.4)]">
            <div className="font-playfair text-[40px] font-extrabold leading-none">₹4L+</div>
            <p className="text-[12px] mt-1 text-sky">Max Scholarship<br />on Offer</p>
          </div>
        </div>

        {/* Cards Column */}
        <div className="flex flex-col gap-[18px]">
          {/* Merit Table */}
          <div className="bg-light border border-border rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-[22px] py-4" style={{background:'linear-gradient(135deg,#102269,#29355E)'}}>
              <h3 className="text-white text-[15px] font-bold">PGDM Merit Scholarship</h3>
              <span className="bg-red text-white px-3 py-[3px] rounded-full text-[11px] font-bold uppercase">2026–28</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">CAT / XAT / MAT Percentile</th>
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Scholarship</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['90 Percentile & Above', '₹4,00,000'],
                  ['85 – 89.99 Percentile', '₹3,00,000'],
                  ['80 – 84.99 Percentile', '₹2,00,000'],
                  ['75 – 79.99 Percentile', '₹1,00,000'],
                  ['70 – 74.99 Percentile', '₹50,000'],
                ].map(([cat, amt]) => (
                  <tr key={cat} className="hover:[&>td]:bg-sky">
                    <td className="px-5 py-[10px] text-[13px] text-dark border-b border-border">{cat}</td>
                    <td className="px-5 py-[10px] text-[13px] text-blue font-bold border-b border-border">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Special Category Table */}
          <div className="bg-light border border-border rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-[22px] py-4" style={{background:'linear-gradient(135deg,#102269,#29355E)'}}>
              <h3 className="text-white text-[15px] font-bold">Special Category Scholarships</h3>
              <span className="bg-red text-white px-3 py-[3px] rounded-full text-[11px] font-bold uppercase">Available</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Category</th>
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Scholarship</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['🎖 Defence / Ex-Servicemen Ward', '₹1,00,000'],
                  ['🌸 Women Empowerment', '₹75,000'],
                  ['🏅 Sports Excellence', '₹50,000'],
                  ['👨‍👩‍👧 Sibling / Alumni Ward', '₹25,000'],
                  ['🌐 International Students', 'Up to 50%'],
                ].map(([cat, amt]) => (
                  <tr key={cat} className="hover:[&>td]:bg-sky">
                    <td className="px-5 py-[10px] text-[13px] text-dark border-b border-border">{cat}</td>
                    <td className="px-5 py-[10px] text-[13px] text-blue font-bold border-b border-border">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-1">
            <a
              href="https://apply.ssim.ac.in"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red text-white px-10 py-[14px] rounded-[10px] font-bold text-[15px] no-underline transition-all hover:bg-[#b91c1c] hover:-translate-y-[2px] shadow-[0_6px_20px_rgba(220,38,38,0.4)]"
            >
              Claim Your Scholarship →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
