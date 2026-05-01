import Image from 'next/image'

export default function Scholarship() {
  return (
    <section id="admissions" className="px-[60px] py-[60px]">
      <div className="text-center">
        <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px] mb-[14px]">
          Merit Scholarships
        </span>
        <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Earn Up to <span className="text-blue">₹1 Lakh</span> Merit Scholarship
        </h2>
        <p className="text-[15px] text-gray leading-[1.75] max-w-[620px] mx-auto">
          Outstanding academic merit is rewarded generously at SSIM. Apply early to avail maximum scholarship benefits on your management journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-[30px]">
        {/* Image Column */}
        <div className="relative lg:sticky lg:top-20 h-fit">
          <Image
            src="/admissions/ssim-scholarship-hero.png"
            alt="Scholarship Hero"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-[20px] block"
          />
          <div className="absolute -bottom-[18px] -right-[18px] bg-blue text-white rounded-2xl p-[20px_24px] text-center shadow-[0_10px_30px_rgba(27,80,236,0.4)]">
            <div className="font-playfair text-[40px] font-extrabold leading-none">₹1L</div>
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
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">CAT / XAT / GMAT Percentile</th>
                  <th className="bg-sky text-navy text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Scholarship</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['90 Percentile & Above', '₹90,000'],
                  ['85 – 89.99 Percentile', '₹80,000'],
                  ['80 – 84.99 Percentile', '₹70,000'],
                  ['70 – 79.99 Percentile', '₹60,000'],
                  ['60 – 69.99 Percentile', '₹50,000'],
                  ['50 – 59.99 Percentile', '₹40,000'],
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
                  ['🎓 Class X, XII & Graduation (90%+)', '₹45,000'],
                  ['🎓 Class X, XII & Graduation (80–89%)', '₹35k – ₹40k'],
                  ['👨‍👩‍👧 SSIM Alumni (Additional)', 'Up to ₹40,000'],
                ].map(([cat, amt]) => (
                  <tr key={cat} className="hover:[&>td]:bg-sky">
                    <td className="px-5 py-[10px] text-[13px] text-dark border-b border-border">{cat}</td>
                    <td className="px-5 py-[10px] text-[13px] text-blue font-bold border-b border-border">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  )
}
