import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy text-[rgba(213,231,255,0.75)] px-4 lg:px-[60px] pt-[60px] pb-[30px]">
      <div
        className="mb-11"
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '44px' }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo ssim.png"
              alt="SSIM Logo"
              width={48}
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="font-playfair text-xl text-white font-bold">SSIM</span>
          </div>
          <p className="text-[13px] leading-[1.75] mb-4">
            Siva Sivani Institute of Management — over three decades shaping ethical, innovative, and industry-ready business leaders in Hyderabad, Telangana.
          </p>
          <Image
            src="/banner2.jpg"
            alt="SSIM campus event"
            width={600}
            height={110}
            className="w-full h-[110px] object-cover rounded-[10px] mb-[14px] opacity-65"
          />
          {[
            { icon: 'pin', text: 'NH 44, Kompally, Secunderabad, Telangana – 500100' },
            { icon: 'phone', text: '040-2716 5451 / 53 / 54 · +91 93911 14948' },
            { icon: 'mail', text: 'admissions@ssim.ac.in' },
          ].map((c) => (
            <div key={c.text} className="flex gap-[10px] items-start mb-[10px] text-[13px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-[2px] flex-shrink-0">
                {c.icon === 'pin' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                {c.icon === 'phone' && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.15.97.39 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.27 1.86.44 2.81.7A2 2 0 0122 14.92v2z"/>}
                {c.icon === 'mail' && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
              </svg>
              {c.text}
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="list-none">
            {['About SSIM','Vision & Mission','Accreditations','Faculty','Infrastructure','Research','Media & Press'].map(l => (
              <li key={l} className="mb-[10px]">
                <a href="#" className="text-[rgba(213,231,255,0.75)] no-underline text-[13px] transition-colors hover:text-sky">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="footer-heading">Programs</h4>
          <ul className="list-none">
            {['PGDM (Triple Spec.)','PGDM – BIFS','PGDM – BA','FPM / EFPM','Value Add Certifications','Executive Programs'].map(l => (
              <li key={l} className="mb-[10px]">
                <a href="#" className="text-[rgba(213,231,255,0.75)] no-underline text-[13px] transition-colors hover:text-sky">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div>
          <h4 className="footer-heading">Students</h4>
          <ul className="list-none">
            {['Admissions 2026','Scholarships','Placements','Student Life','Alumni Network','SSIM Stories','Contact Us'].map(l => (
              <li key={l} className="mb-[10px]">
                <a href="#" className="text-[rgba(213,231,255,0.75)] no-underline text-[13px] transition-colors hover:text-sky">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="footer-heading">Policy</h4>
          <ul className="list-none">
            {[
              { name: 'Employee Handbook', url: '/Employee_Hand_Book.pdf' },
              { name: 'Student Handbook', url: '/Student_Hand_Book_Batch_2025_27.pdf' },
              { name: 'HR & Faculty Development Policies', url: '/hr&facultyDevelopmentPolicies.pdf' },
            ].map(p => (
              <li key={p.name} className="mb-[10px]">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[rgba(213,231,255,0.75)] no-underline text-[13px] transition-colors hover:text-sky">{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(213,231,255,0.12)] pt-[22px] flex justify-between items-center flex-wrap gap-3 text-[12.5px]">
        <span>© 2025 Siva Sivani Institute of Management. All rights reserved.</span>
        <div className="flex gap-5 flex-wrap">
          {['Privacy Policy','Terms of Use','Sitemap','AICTE Approval'].map(l => (
            <a key={l} href="#" className="text-sky no-underline">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
