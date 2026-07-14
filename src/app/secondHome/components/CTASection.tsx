import { secondHomeTheme } from '../theme'

export default function CTASection() {
  return (
    <section 
      className={`px-4 lg:px-[60px] py-[68px] text-center ${secondHomeTheme.shellMuted}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-slate-900 mb-2" style={{fontSize:'clamp(28px,4vw,48px)'}}>
          Your Transformative Journey Starts Here
        </h2>
        <p className="text-slate-600 text-[16px] mb-6">
          Join 6,500+ alumni and become part of SSIM&apos;s legacy of excellence. Admissions open for 2026–2028 batch.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mt-4">
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] text-white px-9 py-[14px] rounded-[12px] font-extrabold text-[15px] no-underline transition-all hover:-translate-y-[2px] shadow-[0_10px_28px_rgba(16,34,105,0.16)] hover:shadow-[0_14px_34px_rgba(16,34,105,0.22)]"
          >
            Apply Now — 2026 Batch
          </a>
          <a
            href="/SSIM-Brochure-2026.pdf"
            download="SSIM-Brochure-2026.pdf"
            className="bg-white/70 text-purple-700 px-9 py-[14px] rounded-[12px] font-bold text-[15px] no-underline border border-purple-700/15 backdrop-blur transition-all hover:bg-white hover:border-purple-700/25"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}
