import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&auto=format&fit=crop"
        alt="Graduation"
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(220,38,38,.93), rgba(185,28,28,.88))' }}
      />
      <div className="relative z-[2] px-[60px] py-[80px] text-center">
        <h2 className="font-playfair text-white mb-4" style={{fontSize:'clamp(28px,4vw,48px)'}}>
          Your Transformative Journey Starts Here
        </h2>
        <p className="text-[rgba(255,255,255,0.88)] text-[16px] mb-9">
          Join 30,000+ alumni and become part of SSIM&apos;s legacy of excellence. Admissions open for 2026–2028 batch.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-red px-9 py-[14px] rounded-[10px] font-extrabold text-[15px] no-underline transition-all hover:-translate-y-[2px] shadow-[0_6px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.28)]"
          >
            Apply Now — 2026 Batch
          </a>
          <a
            href="#"
            className="bg-transparent text-white px-9 py-[14px] rounded-[10px] font-bold text-[15px] no-underline border-2 border-[rgba(255,255,255,0.6)] transition-all hover:bg-[rgba(255,255,255,0.15)]"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}
