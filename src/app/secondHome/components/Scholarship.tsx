import Image from 'next/image'
import { secondHomeTheme } from '../theme'

export default function Scholarship() {
  return (
    <section id="admissions" className="px-4 lg:px-[60px] py-[60px]">
      <div className="text-center">
        <span className={secondHomeTheme.eyebrow}>
          Merit Scholarships
        </span>
        <h2 className={secondHomeTheme.title} style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Earn Up to <span className="text-purple-700">₹1 Lakh</span> Merit Scholarship
        </h2>
        <p className={`${secondHomeTheme.lead} max-w-[620px] mx-auto`}>
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
          <div className="absolute -bottom-[18px] -right-[18px] bg-gradient-to-br from-purple-700 to-[#1B50EC] text-white rounded-2xl p-[20px_24px] text-center shadow-[0_10px_30px_rgba(27,80,236,0.32)]">
            <div className="font-playfair text-[40px] font-extrabold leading-none">₹1L</div>
            <p className="text-[12px] mt-1 text-white/80">Max Scholarship<br />on Offer</p>
          </div>
        </div>

        {/* Cards Column */}
        <div className="flex flex-col gap-[18px]">
          {/* Merit Table */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-[22px] py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC]">
              <h3 className="text-white text-[15px] font-bold">PGDM Merit Scholarship</h3>
              <span className="bg-white/15 text-white px-3 py-[3px] rounded-full text-[11px] font-bold uppercase backdrop-blur">2026–28</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-purple-50 text-slate-700 text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">CAT / XAT / GMAT Percentile</th>
                  <th className="bg-purple-50 text-slate-700 text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Scholarship</th>
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
                  <tr key={cat} className="hover:[&>td]:bg-purple-50/80">
                    <td className="px-5 py-[10px] text-[13px] text-dark border-b border-border">{cat}</td>
                    <td className="px-5 py-[10px] text-[13px] text-purple-400 font-bold border-b border-border">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Special Category Table */}
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-[22px] py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC]">
              <h3 className="text-white text-[15px] font-bold">Special Category Scholarships</h3>
              <span className="bg-white/15 text-white px-3 py-[3px] rounded-full text-[11px] font-bold uppercase backdrop-blur">Available</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-purple-50 text-slate-700 text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Category</th>
                  <th className="bg-purple-50 text-slate-700 text-[11px] font-bold uppercase px-5 py-[9px] text-left tracking-[0.4px]">Scholarship</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['🎖 Defence / Ex-Servicemen Ward', '₹1,00,000'],
                  ['🎓 Class X, XII & Graduation (90%+)', '₹45,000'],
                  ['🎓 Class X, XII & Graduation (80–89%)', '₹35k – ₹40k'],
                  ['👨‍👩‍👧 SSIM Alumni (Additional)', 'Up to ₹40,000'],
                ].map(([cat, amt]) => (
                  <tr key={cat} className="hover:[&>td]:bg-purple-50/80">
                    <td className="px-5 py-[10px] text-[13px] text-dark border-b border-border">{cat}</td>
                    <td className="px-5 py-[10px] text-[13px] text-purple-400 font-bold border-b border-border">{amt}</td>
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
