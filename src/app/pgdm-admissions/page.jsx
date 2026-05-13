"use client";

import React, { useState, useEffect } from 'react';
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function PgdmAdmissions() {
  const [openFaq, setOpenFaq] = useState(1);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (!widgetLoaded) {
      const existingScript = document.querySelector('script[src="https://widgets.nopaperforms.com/emwgts.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widgets.nopaperforms.com/emwgts.js";
        document.body.appendChild(script);
      }
      setWidgetLoaded(true);
    }
  }, [widgetLoaded]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 55);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-900 pb-16 md:pb-0 font-body">
      {/* Google Tag Manager (Raw) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LJR499N');`,
        }}
      />
      {/* End Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-TQZNQ47" />
      <GoogleAnalytics gaId="G-G3TY673HQG" />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5LJR499N"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <title>PGDM Admissions 2026–2028 | SSIM Hyderabad | Top B-School in Telangana</title>
      <meta name="description" content="Apply for PGDM 2026-2028 at SSIM Hyderabad. NBA Accredited, AICTE Approved. Ranked 2nd in Telangana & 21st among Private B-Schools in India. 100% Placement Support." />
      <style dangerouslySetInnerHTML={{ __html: `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
  body { font-family:'DM Sans',sans-serif; overflow-x:hidden; }
  .font-display { font-family:'Playfair Display',serif; }
  .faq-body { max-height:0; overflow:hidden; transition:max-height .35s ease, padding .3s; }
  .faq-item.open .faq-body { max-height:420px; padding-bottom:1.1rem; }
  .faq-item.open .faq-icon { background:#0F2557; color:#fff; transform:rotate(45deg); }
  .faq-icon { transition:background .2s, transform .3s; }
  @keyframes pulse-cta {
    0%,100%{ box-shadow:0 0 0 0 rgba(192,57,43,.45); }
    50%{ box-shadow:0 0 0 8px rgba(192,57,43,0); }
  }
  .cta-pulse { animation:pulse-cta 2.5s infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  .dot-live { animation:blink 1.4s infinite; }
  .reveal { opacity:0; transform:translateY(22px); transition:opacity .55s ease, transform .55s ease; }
  .reveal.visible { opacity:1; transform:none; }
  .scholar-accent { position:relative; }
  .scholar-accent::before {
    content:''; position:absolute; top:0; left:0; width:4px; height:100%;
    background:#C9971A; border-radius:12px 0 0 12px;
  }
  @keyframes pulse-wa {
    0%,100%{ box-shadow:0 0 0 0 rgba(34,197,94,.65); }
    50%{ box-shadow:0 0 0 10px rgba(34,197,94,0); }
  }
  .wa-anime { animation: pulse-wa 2.5s infinite ease-in-out; }
  @keyframes pulse-ph {
    0%,100%{ box-shadow:0 0 0 0 rgba(37,99,235,.65); }
    50%{ box-shadow:0 0 0 10px rgba(37,99,235,0); }
  }
  .ph-anime { animation: pulse-ph 2.5s infinite ease-in-out; }
` }} />
      

{/*  
<div className="hidden bg-navy text-white text-xs px-4 py-2 md:flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
  <div className="flex flex-wrap gap-x-4 gap-y-0.5 justify-center sm:justify-start items-center">
    <span>📍 NH 44, Kompally, Secunderabad, Hyderabad</span>
    <span className="hidden sm:inline">📞 <a href="tel:+919391114948" className="text-gold-light font-semibold">+91 93911 14948</a></span>
    <span className="hidden lg:inline">✉️ <a href="mailto:admissions@ssim.ac.in" className="text-gold-light">admissions@ssim.ac.in</a></span>
  </div>
  <div className="text-center sm:text-right">🎓 <strong className="text-gold-light">Admissions Open 2026–2028</strong> · Apply Now!</div>
</div>  */}

{/*  STICKY NAV  */}
<nav className="bg-white border-b-2 border-gold sticky top-0 z-50 shadow-md px-3 md:px-10 py-2 md:py-3">
  {/*  Mobile: Logo + Logos row  */}
  <div className="flex md:hidden items-center justify-between gap-1 overflow-x-auto pb-1">
    <img src="/pgdm-admissions-images/logo ssim.png" alt="SSIM Hyderabad" className="h-9 w-auto shrink-0"/>
    <div className="flex items-center gap-1">
      <img src="/pgdm-admissions-images/aicte.webp" alt="AICTE" className="h-6 w-auto" title="AICTE Approved"/>
      <img src="/pgdm-admissions-images/nba.webp" alt="NBA" className="h-6 w-auto" title="NBA Accredited"/>
      <img src="/pgdm-admissions-images/NAAC_LOGO.png" alt="NAAC" className="h-6 w-auto" title="NAAC Certified"/>
      <img src="/pgdm-admissions-images/aacsb.webp" alt="AACSB" className="h-6 w-auto" title="AACSB Member"/>
      <img src="/pgdm-admissions-images/membership.webp" alt="Membership" className="h-6 w-auto"/>
    </div>
  </div>
  {/*  Desktop: Full header  */}
  <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-3">
    {/*  Logo & Institute Name  */}
    <div className="flex items-center gap-3 lg:gap-4">
      <img src="/pgdm-admissions-images/logo ssim.png" alt="SSIM Hyderabad" className="h-10 lg:h-12 w-auto"/>
     
    </div>
    {/*  Accredited Logos  */}
    <div className="hidden lg:flex items-center gap-3 justify-end">
      <img src="/pgdm-admissions-images/aicte.webp" alt="AICTE" className="h-14 w-auto" title="AICTE Approved"/>
      <img src="/pgdm-admissions-images/nba.webp" alt="NBA" className="h-14 w-auto" title="NBA Accredited"/>
      <img src="/pgdm-admissions-images/NAAC_LOGO.png" alt="NAAC" className="h-14 w-auto" title="NAAC Certified"/>
      <img src="/pgdm-admissions-images/aacsb.webp" alt="AACSB" className="h-14 w-auto" title="AACSB Member"/>
      <img src="/pgdm-admissions-images/membership.webp" alt="Membership" className="h-14 w-auto"/>
    </div>
    {/*  Desktop Nav Actions  */}
    <div className="hidden lg:flex items-center gap-3">
     
      <a href="#lead-form" className="cta-pulse bg-ssred text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-ssred-dark transition-colors whitespace-nowrap">Apply for PGDM →</a>
    </div>
  </div>
  {/*  Tablet: Logo row without full text  */}
  <div className="hidden md:flex lg:hidden items-center justify-between gap-2 mt-2">
    <div className="flex items-center gap-2">
      <img src="/pgdm-admissions-images/logo ssim.png" alt="SSIM Hyderabad" className="h-9 w-auto"/>
      
    </div>
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <img src="/pgdm-admissions-images/aicte.webp" alt="AICTE" className="h-8 w-auto" title="AICTE Approved"/>
      <img src="/pgdm-admissions-images/nba.webp" alt="NBA" className="h-8 w-auto" title="NBA Accredited"/>
      <img src="/pgdm-admissions-images/NAAC_LOGO.png" alt="NAAC" className="h-8 w-auto" title="NAAC Certified"/>
      <img src="/pgdm-admissions-images/aacsb.webp" alt="AACSB" className="h-8 w-auto" title="AACSB Member"/>
      <img src="/pgdm-admissions-images/membership.webp" alt="Membership" className="h-8 w-auto"/>

    </div>
  </div>
</nav>

{/*  HERO  */}
<section className="bg-gradient-to-br from-navy via-navy-light to-[#263F8A] relative overflow-hidden">
  <div className="absolute -top-20 -right-20 w-72 md:w-96 h-72 md:h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gold/[.06] blur-3xl pointer-events-none"></div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px]">
    {/*  Hero Left  */}
    <div className="px-5 pt-10 pb-8 md:px-12 md:py-16 flex flex-col justify-center relative z-10">
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
        {/*  Launch Your<br/>Management Career at <br/>   */}
        
        <em className="not-italic text-gold-light">Best MBA/PGDM College in Hyderabad</em>
      </h1>
      <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl bg-gold-light font-bold px-5 py-2.5 rounded-lg md:mb-5 w-fit shadow-lg transform -skew-x-3"><span className="block transform skew-x-3">Admissions Now Open | Batch 2026–2028</span></h2>
      <p className="hidden md:block text-white/80 text-sm md:text-base leading-relaxed mb-7 max-w-xl">
        AICTE Approved · NBA Accredited · NAAC Certified<br/>
        Ranked <strong className="text-gold-light">2nd in Telangana</strong> &amp; 21st in India among Private B-Schools
      </p>
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 gap-4 mb-7">
        <div><span className="font-display text-2xl md:text-3xl font-black text-gold-light block">35+</span><span className="text-white/60 text-[10px] uppercase tracking-wide mt-0.5 block">Years of Excellence</span></div>
        <div><span className="font-display text-2xl md:text-3xl font-black text-gold-light block">350+</span><span className="text-white/60 text-[10px] uppercase tracking-wide mt-0.5 block">Corporate Partners</span></div>
        <div><span className="font-display text-2xl md:text-3xl font-black text-gold-light block">6.5K+</span><span className="text-white/60 text-[10px] uppercase tracking-wide mt-0.5 block">Global Alumni</span></div>
        <div><span className="font-display text-2xl md:text-3xl font-black text-gold-light block">₹12.7LPA</span><span className="text-white/60 text-[10px] uppercase tracking-wide mt-0.5 block">Top CTC Offered</span></div>
      </div>
       <div className="hidden md:flex flex-wrap gap-2">
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">✅ AICTE Approved</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">🏆 NBA Accredited</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">📊 NAAC Certified</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">🏛️ AIU Member</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">🎖️ SAQS Certified</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">🌐 AACSB Member</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">⭐ A+++ Business India 2024</span>
        <span className="bg-white/10 border border-white/20 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">🥈 #2 Telangana – Outlook 2025</span>
      </div>
  
    </div>

    {/*  Hero Right — Lead Form  */}
    <div id="lead-form" className="bg-white flex items-center justify-center px-5 py-8 md:px-8 relative z-10">
      <div className="w-full max-w-sm">
        <div className="relative bg-white rounded-xl shadow-2xl p-3 border border-gray-100">
          <div className="npf_wgts" data-height="480px" data-w="0fcfc9608e978750ed1ee48671490e22"></div>
        </div>
      </div>
    </div>
  </div>
  {/*  Mobile Only: Data after form  */}
  <div className="md:hidden bg-navy px-4 py-6">
    <p className="text-white/80 text-sm leading-relaxed mb-4">
      AICTE Approved · NBA Accredited · NAAC Certified<br/>
      Ranked <strong className="text-gold-light">2nd in Telangana</strong> &amp; 21st in India among Private B-Schools
    </p>
    <div className="grid grid-cols-2 gap-3 mb-5">
      <div><span className="font-display text-xl font-black text-gold-light block">35+</span><span className="text-white/60 text-[9px] uppercase tracking-wide mt-0.5 block">Years of Excellence</span></div>
      <div><span className="font-display text-xl font-black text-gold-light block">350+</span><span className="text-white/60 text-[9px] uppercase tracking-wide mt-0.5 block">Corporate Partners</span></div>
      <div><span className="font-display text-xl font-black text-gold-light block">6.5K+</span><span className="text-white/60 text-[9px] uppercase tracking-wide mt-0.5 block">Global Alumni</span></div>
      <div><span className="font-display text-xl font-black text-gold-light block">₹12.7L</span><span className="text-white/60 text-[9px] uppercase tracking-wide mt-0.5 block">Top CTC Offered</span></div>
    </div>
    {/*  <div className="flex flex-wrap gap-2">
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">AICTE Approved</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">NBA Accredited</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">NAAC Certified</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">AIU Member</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">SAQS Certified</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">AACSB Member</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">A+++ Business India 2024</span>
      <span className="bg-white/10 border border-white/20 text-white/85 text-[10px] font-medium px-2.5 py-1 rounded-full">#2 Telangana – Outlook 2025</span>
    </div>  */}
  </div>
</section>

{/*  ACCREDITATION STRIP  */}
{/*  <div className="hidden bg-gold-pale border-b border-gray-200 px-4 py-3 md:flex flex-wrap items-center justify-center gap-2">
  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-1 hidden sm:inline">Accreditations</span>
  <span className="bg-navy text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">AICTE Approved</span>
  <span className="bg-gold text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">NBA Accredited</span>
  <span className="bg-navy text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">NAAC Certified</span>
  <span className="bg-navy text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">AIU Member</span>
  <span className="bg-navy text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">SAQS Certified</span>
  <span className="bg-gold text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">AACSB Member</span>
  <span className="bg-navy text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">A+++ Business India 2024</span>
  <span className="bg-gold text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">#2 Telangana – Outlook 2025</span>
</div>  */}

{/*  WHY SSIM  */}
<section className="py-12 md:py-16 px-4 md:px-10">
  <div className="max-w-6xl mx-auto">
    <div className="mb-8 md:mb-10 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Why Choose SSIM</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy mb-3">Everything You Need to Build a Winning Career</h2>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">SSIM combines 35+ years of management expertise with industry-aligned curriculum, stellar faculty, and a powerful alumni network.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🏆</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Top Ranked B-School</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Ranked 21st among Private B-Schools in India (Outlook 2025) and 2nd in Telangana. Recognised as A+++ by Business India 2024.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">📚</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">NBA Accredited PGDM</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">2-year PGDM is NBA Accredited with curriculum co-designed with industry leaders, ensuring market-relevant learning.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🎯</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Triple Specialisation</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Gain expertise across three management domains simultaneously — giving you an unmatched competitive edge in placements.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🤝</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">350+ Corporate Partners</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Deep industry connections providing internships, live projects, and final placement opportunities with top companies.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🌍</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Global Alumni Network</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">6.5K+ alumni at Fortune 350 companies, startups, and MNCs worldwide. Your network starts at SSIM.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">💡</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Experiential Learning</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Live business simulations, case studies, industry visits, and leadership conclaves from Day 1.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🎓</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Experienced Faculty</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Highly qualified academicians and senior industry practitioners bringing real-world insights into every session.</p>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">💰</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">Merit Scholarships</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed pb-3">Generous merit-based scholarships to support deserving students — up to 100% fee waiver for top performers.</p>
        <span className="absolute bottom-3 right-3 text-[10px] font-medium text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded leading-none whitespace-nowrap">*T&amp;C apply</span>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-xl mb-4">🏛️</div>
        <h3 className="text-sm md:text-base font-bold text-navy mb-2">AACSB &amp; SAQS Member</h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Elite recognitions held by fewer than 5% of B-Schools worldwide — a testament to SSIM's global standards.</p>
      </div>
    </div>
  </div>
</section>

{/*  RANKINGS  */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-mist">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 md:mb-10 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Rankings &amp; Recognition</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy mb-3">Recognised by India's Most Trusted B-School Rankings</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="reveal bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="font-display text-3xl md:text-5xl font-black text-navy mb-1">2<sup className="text-base md:text-xl">nd</sup></div>
        <h4 className="text-xs md:text-sm font-bold text-navy mb-1">Top B-School</h4>
        <p className="text-[10px] md:text-xs text-gray-400 mb-2">in Telangana</p>
        <span className="inline-block bg-gold text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">Outlook 2025</span>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="font-display text-3xl md:text-5xl font-black text-navy mb-1">21<sup className="text-base md:text-xl">st</sup></div>
        <h4 className="text-xs md:text-sm font-bold text-navy mb-1">Private B-School</h4>
        <p className="text-[10px] md:text-xs text-gray-400 mb-2">Pan India Ranking</p>
        <span className="inline-block bg-gold text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">Outlook 2025</span>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="font-display text-3xl md:text-5xl font-black text-navy mb-1">A<sup className="text-base md:text-xl">+++</sup></div>
        <h4 className="text-xs md:text-sm font-bold text-navy mb-1">B-School Grade</h4>
        <p className="text-[10px] md:text-xs text-gray-400 mb-2">Premium Category</p>
        <span className="inline-block bg-gold text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">Business India 2024</span>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="font-display text-3xl md:text-5xl font-black text-navy mb-1">2<sup className="text-base md:text-xl">nd</sup></div>
        <h4 className="text-xs md:text-sm font-bold text-navy mb-1">Best B-School</h4>
        <p className="text-[10px] md:text-xs text-gray-400 mb-2">South India Region</p>
        <span className="inline-block bg-gold text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">CSR &amp; GHRDC 2025</span>
      </div>
    </div>
  </div>
</section>

{/*  PROGRAM DETAILS  */}
<section className="py-12 md:py-16 px-4 md:px-10">
  <div className="max-w-6xl mx-auto">
    <div className="mb-8 md:mb-10 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Program Overview</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy mb-3">PGDM <span className="text-3xl md:text-5xl">2</span> Year Full-Time Program</h2>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">Designed to create future-ready leaders with cross-functional expertise and industry exposure.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
      <ul className="divide-y divide-gray-100 reveal">
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">⏱️</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Program Duration</strong><span className="text-xs md:text-sm text-gray-500">2 Years (4 Semesters) – Full Time Residential</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">📋</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Eligibility</strong><span className="text-xs md:text-sm text-gray-500">Graduation (any stream) with min. 50% marks. Final year students may apply.</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">📝</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Entrance Tests Accepted</strong><span className="text-xs md:text-sm text-gray-500">CAT / MAT / XAT / CMAT / ATMA / GMAT / SSIM Scholarship Test</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">🏅</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Accreditation</strong><span className="text-xs md:text-sm text-gray-500">AICTE Approved · NBA Accredited · NAAC Certified · AIU Member</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">📅</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Batch Year</strong><span className="text-xs md:text-sm text-gray-500">2026–2028 Batch — Admissions Currently Open</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">🌐</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Campus Location</strong><span className="text-xs md:text-sm text-gray-500">NH 44, Kompally, Secunderabad, Hyderabad – 500100</span></div></li>
        <li className="flex gap-3 md:gap-4 py-4 items-start"><div className="w-9 h-9 md:w-10 md:h-10 bg-gold-pale rounded-lg flex items-center justify-center text-lg md:text-xl shrink-0">💳</div><div><strong className="block text-xs md:text-sm font-bold text-navy mb-0.5">Scholarship Available</strong><span className="text-xs md:text-sm text-gray-500">Merit-based scholarships up to 100% fee waiver for eligible students</span></div></li>
      </ul>
      <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 md:p-7 text-white reveal">
        <h3 className="font-display text-lg md:text-xl font-extrabold text-gold-light mb-4">✨ PGDM Program Highlights</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Triple Specialisation</strong> — Gain expertise in 3 domains simultaneously.</p></div>
          <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Cross-functional Skills</strong> — Communication, Decision Making, Leadership &amp; Teamwork.</p></div>
          <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Industry Interface</strong> — Regular guest lectures, conclaves, and live projects.</p></div>
          <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Summer Internship</strong> — 8-week mandatory internship with top-tier companies.</p></div>
          <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Value-Added Certifications</strong> — Industry-recognised certs bundled with PGDM.</p></div>
          {/* <div className="flex items-start gap-3"><div className="w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">✓</div><p className="text-xs md:text-sm text-white/85 leading-relaxed"><strong className="text-white">Dedicated Placement Cell</strong> — 365-day support with mock interviews, GDs &amp; workshops.</p></div> */}
        </div>
        <a href="#lead-form" className="inline-block mt-5 bg-ssred hover:bg-ssred-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">Download Brochure &amp; Apply →</a>
      </div>
    </div>
  </div>
</section>

{/*  SPECIALISATIONS  */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-navy">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-light mb-2">Specialisations</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-3">Choose Your Path to Leadership</h2>
      <p className="text-white/65 text-sm max-w-xl mx-auto">SSIM's PGDM lets you pick three specialisations and become a versatile management professional.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
      <div className="reveal bg-white/[.06] border border-white/15 rounded-xl p-5 text-center hover:bg-white/10 hover:-translate-y-1 transition-all">
        <span className="text-3xl md:text-4xl block mb-3">📈</span>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-2">PGDM BIFS</h3>
        <p className="text-xs text-white/60 leading-relaxed">Banking, Insurance &amp; Financial Services</p>
      </div>
      <div className="reveal bg-white/[.06] border border-white/15 rounded-xl p-5 text-center hover:bg-white/10 hover:-translate-y-1 transition-all">
        <span className="text-3xl md:text-4xl block mb-3">🎯</span>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-2">PGDM TPS</h3>
        <p className="text-xs text-white/60 leading-relaxed">Triple Professional Specialisation</p>
      </div>
      <div className="reveal bg-white/[.06] border border-white/15 rounded-xl p-5 text-center hover:bg-white/10 hover:-translate-y-1 transition-all">
        <span className="text-3xl md:text-4xl block mb-3">📊</span>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-2">PGDM BA</h3>
        <p className="text-xs text-white/60 leading-relaxed">Business Analytics</p>
      </div>
    </div>
  </div>
</section>

{/*  PLACEMENTS  */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-[#091D47]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-light mb-2">Placements</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-3">Your Dream Company is Waiting</h2>
      <p className="text-white/60 text-sm max-w-xl mx-auto">Our graduates are placed at Fortune 350+ companies and leading Indian enterprises across sectors.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-7">
      <div className="reveal bg-white/[.07] border border-white/10 rounded-xl p-4 md:p-5 text-center"><span className="font-display text-3xl md:text-4xl font-black text-gold-light block mb-1">100%</span><span className="text-xs text-white/65 font-medium">Placement Assistance</span></div>
      <div className="reveal bg-white/[.07] border border-white/10 rounded-xl p-4 md:p-5 text-center"><span className="font-display text-3xl md:text-4xl font-black text-gold-light block mb-1">350+</span><span className="text-xs text-white/65 font-medium">Recruiting Companies</span></div>
      <div className="reveal bg-white/[.07] border border-white/10 rounded-xl p-4 md:p-5 text-center"><span className="font-display text-3xl md:text-4xl font-black text-gold-light block mb-1">6.5K+</span><span className="text-xs text-white/65 font-medium">Successful Alumni</span></div>
      <div className="reveal bg-white/[.07] border border-white/10 rounded-xl p-4 md:p-5 text-center"><span className="font-display text-3xl md:text-4xl font-black text-gold-light block mb-1">₹12.7LPA</span><span className="text-xs text-white/65 font-medium">Top CTC Offered</span></div>
    </div>
    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 text-center mb-4">Our Top Recruiters</p>
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/deloitte.png" alt="Deloitte" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/kpmg.png" alt="KPMG" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/asian-paints.png" alt="Asian Paints" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/itc.png" alt="ITC" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/aditya-birla.png" alt="Aditya Birla Group" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/lloyds.webp" alt="Lloyds Banking" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/oxane.png" alt="Oxane Partners" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/hdfc-logo.webp" alt="HDFC Bank" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/infosys.webp" alt="Infosys BPM" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/Amazon.webp" alt="Amazon" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/EY.webp" alt="EY" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/wipro.webp" alt="Wipro" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] hover:-translate-y-1 transition-transform shadow-md">
        <img src="/pgdm-admissions-images/logos/Reliance.webp" alt="Reliance" className="max-h-full max-w-full object-contain"/>
      </div>
      <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl flex items-center justify-center h-16 md:h-20 w-[45%] sm:w-[30%] lg:w-[18%] text-white text-sm md:text-base font-bold whitespace-nowrap shadow-md">
        + Many More
      </div>
    </div>
  </div>
</section>

{/*  TESTIMONIALS Section */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-mist">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Student Stories</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy">Hear From Our PGDM Graduates</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 relative">
        <span className="absolute top-3 right-4 font-display text-5xl text-gold/20 leading-none">"</span>
        <div className="text-gold text-xs mb-3">★★★★★</div>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">"The Triple Specialisation PGDM at SSIM was a game-changer. The industry exposure and live projects gave me confidence to crack my dream placement at Deloitte."</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-navy rounded-full flex items-center justify-center text-white font-bold shrink-0">K</div>
          <div><strong className="block text-xs md:text-sm font-bold text-navy">Khoosbu Gosai</strong><span className="text-[10px] text-gray-400">PGDM 2022–24</span><span className="block text-[10px] text-gold font-semibold">📍 Placed at Deloitte</span></div>
        </div>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 relative">
        <span className="absolute top-3 right-4 font-display text-5xl text-gold/20 leading-none">"</span>
        <div className="text-gold text-xs mb-3">★★★★★</div>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">"From day one, SSIM's faculty pushed us to think like future managers. The campus culture, mentorship, and placement support made the 2 years truly transformative."</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">M</div>
          <div><strong className="block text-xs md:text-sm font-bold text-navy">Mainak Shyam</strong><span className="text-[10px] text-gray-400">PGDM 2022–24</span><span className="block text-[10px] text-gold font-semibold">📍 Placed at Aditya Birla Group</span></div>
        </div>
      </div>
      <div className="reveal bg-white border border-gray-200 rounded-xl p-5 relative">
        <span className="absolute top-3 right-4 font-display text-5xl text-gold/20 leading-none">"</span>
        <div className="text-gold text-xs mb-3">★★★★★</div>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">"SSIM's focus on real-world problems through case studies and simulations prepared me thoroughly. I joined KPMG directly from campus and haven't looked back!"</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold shrink-0">N</div>
          <div><strong className="block text-xs md:text-sm font-bold text-navy">Nomula Sameeksha</strong><span className="text-[10px] text-gray-400">PGDM 2022–24</span><span className="block text-[10px] text-gold font-semibold">📍 Placed at KPMG</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  SCHOLARSHIPS  */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="mb-8 reveal">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Financial Support</p>
      <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy mb-3">Scholarship Opportunities at SSIM Hyderabad</h2>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">SSIM believes talent should never be held back by finances. We offer generous merit-based and category-specific scholarships.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="reveal">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">At SSIM, we are committed to making quality management education accessible to every deserving student. Our scholarship programs reward academic merit, entrance exam performance, and social diversity.</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">Scholarships are awarded at the time of admission and deducted directly from the program fee. Apply early to maximise your scholarship eligibility.</p>
        <div className="flex items-start gap-3 bg-gold-pale border border-gold/30 border-l-4 border-l-gold rounded-lg p-4 mb-5">
          <span className="text-2xl md:text-3xl">🎓</span>
          <div>
            <strong className="block text-navy text-sm font-bold mb-1">Apply Early — Scholarship Seats are Limited</strong>
            <span className="text-xs md:text-sm text-gray-500">Contact our admissions team to know your scholarship eligibility before applying.</span>
          </div>
        </div>
        <a href="#lead-form" className="inline-block bg-ssred hover:bg-ssred-dark text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors">Check Your Scholarship →</a>
      </div>
      <div className="space-y-3 reveal">
        <div className="scholar-accent bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="min-w-[58px] h-14 bg-navy rounded-xl flex flex-col items-center justify-center shrink-0"><span className="text-gold-light font-display font-black text-[10px] leading-none">UP TO</span><span className="text-gold-light font-display font-black text-xl leading-none">100%</span><span className="text-gold-light/70 text-[8px] font-semibold">FEE WAIVER</span></div>
          <div><h4 className="text-xs md:text-sm font-bold text-navy mb-1">Director's Merit Scholarship</h4><p className="text-xs text-gray-500 leading-relaxed">Awarded to top-ranking CAT/XAT scorers. Covers up to 100% of tuition fees.</p><span className="inline-flex items-center mt-2 bg-gold/10 border border-gold/25 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">🏆 Highest Academic Merit</span></div>
        </div>
        <div className="scholar-accent bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="min-w-[58px] h-14 bg-navy rounded-xl flex flex-col items-center justify-center shrink-0"><span className="text-gold-light font-display font-black text-xl leading-none">50%</span><span className="text-gold-light/70 text-[8px] font-semibold">FEE WAIVER</span></div>
          <div><h4 className="text-xs md:text-sm font-bold text-navy mb-1">CAT / MAT / XAT Score Scholarship</h4><p className="text-xs text-gray-500 leading-relaxed">Students with CAT 70%ile+ are eligible. Higher the score, higher the scholarship.</p><span className="inline-flex items-center mt-2 bg-gold/10 border border-gold/25 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">📊 Entrance Exam Based</span></div>
        </div>
        <div className="scholar-accent bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="min-w-[58px] h-14 bg-navy rounded-xl flex flex-col items-center justify-center shrink-0"><span className="text-gold-light font-display font-black text-[10px] leading-none">UP TO</span><span className="text-gold-light font-display font-black text-xl leading-none">40%</span><span className="text-gold-light/70 text-[8px] font-semibold">FEE WAIVER</span></div>
          <div><h4 className="text-xs md:text-sm font-bold text-navy mb-1">Academic Excellence Scholarship</h4><p className="text-xs text-gray-500 leading-relaxed">For graduates with 75%+ marks in undergraduate degree.</p><span className="inline-flex items-center mt-2 bg-gold/10 border border-gold/25 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">📚 Graduation Score Based</span></div>
        </div>
        <div className="scholar-accent bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="min-w-[58px] h-14 bg-navy rounded-xl flex flex-col items-center justify-center shrink-0"><span className="text-gold-light font-display font-black text-[10px] leading-none">UP TO</span><span className="text-gold-light font-display font-black text-xl leading-none">30%</span><span className="text-gold-light/70 text-[8px] font-semibold">FEE WAIVER</span></div>
          <div><h4 className="text-xs md:text-sm font-bold text-navy mb-1">Women Empowerment Scholarship</h4><p className="text-xs text-gray-500 leading-relaxed">Special scholarship for female candidates promoting gender diversity in management.</p><span className="inline-flex items-center mt-2 bg-gold/10 border border-gold/25 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">👩 Diversity &amp; Inclusion</span></div>
        </div>
        <div className="scholar-accent bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="min-w-[58px] h-14 bg-navy rounded-xl flex flex-col items-center justify-center shrink-0"><span className="text-gold-light font-display font-black text-[10px] leading-none">UP TO</span><span className="text-gold-light font-display font-black text-xl leading-none">25%</span><span className="text-gold-light/70 text-[8px] font-semibold">FEE WAIVER</span></div>
          <div><h4 className="text-xs md:text-sm font-bold text-navy mb-1">Defence / Govt Employee Ward Scholarship</h4><p className="text-xs text-gray-500 leading-relaxed">Special concession for children of defence personnel and government employees.</p><span className="inline-flex items-center mt-2 bg-gold/10 border border-gold/25 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">🇮🇳 Service Category</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  FAQ  */}
<section className="py-12 md:py-16 px-4 md:px-10 bg-mist">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
      {/*  Sidebar  */}
      <div className="lg:sticky lg:top-24 reveal">
        <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Got Questions?</p>
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-navy mb-3">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">Everything you need to know about the PGDM program at SSIM. Can't find your answer? Talk to our team directly.</p>
        <div className="bg-navy rounded-xl p-5">
          <h4 className="text-gold-light font-bold text-sm mb-2">📞 Still Have Questions?</h4>
          <p className="text-white/65 text-xs leading-relaxed mb-4">Our counsellors are available Mon–Sat, 9 AM – 6 PM.</p>
          <a href="tel:+919391114948" className="block bg-ssred hover:bg-ssred-dark text-white text-center text-sm font-bold py-2.5 rounded-lg transition-colors mb-2">Call +91 93911 14948</a>
        </div>
      </div>
      {/*  FAQ list  */}
      <div className="space-y-3 reveal">

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 1 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 1 ? 0 : 1)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">1</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">What is the eligibility criteria to apply for PGDM at SSIM?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-navy text-white rounded-full flex items-center justify-center text-xl font-light shrink-0 rotate-45">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Candidates must have completed a Bachelor's degree (any discipline) with minimum <strong>50% aggregate marks</strong> (45% for SC/ST). Final year students awaiting results may apply provisionally. Engineering, Commerce, Arts, Science — all streams are eligible.</p>
          </div>
        </div>

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 2 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 2 ? 0 : 2)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">2</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">Which entrance exams are accepted for PGDM admission?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <ul className="text-xs md:text-sm text-gray-500 leading-relaxed list-disc ml-4 space-y-1">
              <li><strong>CAT</strong> – Common Admission Test (IIM)</li>
              <li><strong>MAT</strong> – Management Aptitude Test (AIMA)</li>
              <li><strong>XAT</strong> – Xavier Aptitude Test (XLRI)</li>
              <li><strong>CMAT</strong> – Common Management Admission Test (NTA)</li>
              <li><strong>ATMA</strong> – AIMS Test for Management Admissions</li>
              <li><strong>GMAT</strong> – Graduate Management Admission Test</li>
              <li><strong>SSIM Scholarship Test</strong> – SSIM's own entrance &amp; scholarship test</li>
            </ul>
          </div>
        </div>

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 3 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 3 ? 0 : 3)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">3</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">What is the duration and structure of the PGDM program?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">The PGDM is a <strong>2-year full-time residential program</strong> across <strong>4 semesters</strong>. Year 1 builds a management foundation; Year 2 focuses on specialisations with an 8-week Summer Internship. The unique Triple Specialisation lets you pick three management domains simultaneously.</p>
          </div>
        </div>

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 4 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 4 ? 0 : 4)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">4</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">How does the Triple Specialisation model work?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Unlike most B-Schools with a single specialisation, SSIM lets you <strong>pursue three simultaneously</strong> — e.g., Finance + Marketing + Analytics. Students choose their triple combination in Semester 1 from Finance, Marketing, HR, Operations, Analytics, International Business, and more. This versatility makes SSIM graduates highly sought-after by top recruiters.</p>
          </div>
        </div>

        {/*  <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 5 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 5 ? 0 : 5)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">5</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">What scholarships are available and how do I apply?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <ul className="text-xs md:text-sm text-gray-500 list-disc ml-4 space-y-1 mb-2">
              <li><strong>Director's Merit</strong> — Up to 100% for top CAT/XAT scorers</li>
              <li><strong>Entrance Exam Scholarship</strong> — Based on CAT/MAT/XAT percentile (up to 50%)</li>
              <li><strong>Academic Excellence</strong> — 75%+ graduation (up to 40%)</li>
              <li><strong>Women Empowerment</strong> — Up to 30% for female candidates</li>
              <li><strong>Defence/Govt Ward</strong> — Up to 25% concession</li>
            </ul>
            <p className="text-xs md:text-sm text-gray-500">Scholarships are assessed at admission and deducted from the fee. Call <a href="tel:+919391114948" className="text-navy font-semibold">+91 93911 14948</a> to check eligibility.</p>
          </div>
        </div>  */}

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 6 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 6 ? 0 : 6)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">5</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">What is the placement track record of SSIM PGDM graduates?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">SSIM has <strong>100% placement assistance</strong> with 350+ recruiting companies including Deloitte, KPMG, Asian Paints, ITC, Aditya Birla Group, HDFC Bank, Amazon, EY, Wipro, and Reliance. Top CTC has reached <strong>₹12.7 LPA+</strong>. Year-round placement support via mock interviews, GDs, workshops, and alumni mentoring.</p>
          </div>
        </div>

        <div className={`faq-item bg-white border-[1.5px] rounded-xl overflow-hidden ${openFaq === 7 ? "open border-navy" : "border-gray-200"}`} onClick={() => setOpenFaq(openFaq === 7 ? 0 : 7)}>
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4 cursor-pointer select-none">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 bg-gold-pale border border-gold/30 rounded-full flex items-center justify-center text-xs font-bold text-gold shrink-0">6</div>
              <span className="text-xs md:text-sm font-bold text-navy leading-snug">What is the admission process for the 2026–2028 batch?</span>
            </div>
            <div className="faq-icon w-7 h-7 bg-mist text-navy rounded-full flex items-center justify-center text-xl font-light shrink-0">+</div>
          </div>
          <div className="faq-body px-4 md:px-5">
            <ul className="text-xs md:text-sm text-gray-500 list-disc ml-4 space-y-1 mb-2">
              <li><strong>Step 1:</strong> Submit online application at <a href="#lead-form" className="text-navy font-semibold">apply.ssim.ac.in</a></li>
              <li><strong>Step 2:</strong> Shortlisting based on entrance score + academic profile</li>
              <li><strong>Step 3:</strong> Group Discussion (GD) &amp; Personal Interview (PI)</li>
              <li><strong>Step 4:</strong> Merit list &amp; offer letter issued</li>
              <li><strong>Step 5:</strong> Fee payment &amp; seat confirmation</li>
            </ul>
            <p className="text-xs md:text-sm text-gray-500"><strong>Admissions for 2026–2028 are currently open.</strong> Rolling admissions in progress — early applicants get priority. Apply now to secure your seat and scholarship.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/*  FINAL CTA  */}
<section className="bg-gradient-to-br from-navy to-navy-light py-14 md:py-20 px-5 text-center relative overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-96 md:w-[600px] h-64 md:h-[300px] bg-gold/10 rounded-full blur-3xl"></div>
  </div>
  <div className="max-w-3xl mx-auto relative z-10">
    <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/35 text-gold-light text-xs font-semibold px-4 py-2 rounded-full mb-5">
      <span className="dot-live w-2 h-2 bg-green-400 rounded-full inline-block"></span>
      Admissions Open for Batch 2026–2028
    </div>
    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
      Your Management Journey<br/>Starts at <em className="not-italic text-gold-light">SSIM Hyderabad</em>
    </h2>
    <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">Limited seats available. Apply today and secure your spot in Telangana's #2 B-School.<br className="hidden md:block"/> Get a free counselling session and detailed brochure instantly.</p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href="#lead-form" className="bg-ssred hover:bg-ssred-dark text-white font-bold text-base md:text-lg px-7 py-4 rounded-xl transition-colors">🚀 Apply for PGDM 2026–28</a>
      {/*  <a href="tel:+919391114948" className="border-2 border-white/40 hover:border-white text-white font-semibold text-base md:text-lg px-7 py-4 rounded-xl transition-colors">📞 Talk to Counsellor</a>  */}
    </div>
  </div>
</section>

{/*  Footer  */}
<footer className="bg-gray-100 text-black text-xs md:text-sm px-5 md:px-14 py-7">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    {/*  Logo & Institute Info  */}
    <div className="flex items-center gap-3">
      <img src="/pgdm-admissions-images/logo ssim.png" alt="SSIM Hyderabad" className="h-8 w-auto"/>
      <div>

        {/*  <span className="text-black">NH 44, Kompally, Secunderabad, Hyderabad – 500100</span>  */}
      </div>
    </div>
    {/*  Copyright  */}
    <div><span className="text-black text-[12px] block">© 2026 SSIM Hyderabad. All Rights Reserved.</span><a href="https://ssim.ac.in" className="text-yellow-600 text-[12px]">ssim.ac.in</a></div>
  </div>
</footer>

{/*  STICKY MOBILE BOTTOM BAR  */}
<div className="fixed bottom-0 left-0 right-0 bg-navy px-4 py-3 shadow-2xl z-50 md:hidden border-t border-white/10">
  <div className="flex items-center gap-3">
    <a href="tel:+919391114948" className="flex items-center justify-center w-11 h-11 shrink-0 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors ph-anime shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    </a>
    {/* <a href="https://wa.me/919391114948" target="_blank" className="flex items-center justify-center w-11 h-11 shrink-0 bg-green-500 hover:bg-green-600 rounded-full transition-colors wa-anime shadow-lg">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
    </a> */}
    <a href="#lead-form" className="cta-pulse flex-1 text-center bg-ssred hover:bg-ssred-dark text-white font-bold text-sm px-3 py-3 rounded-lg whitespace-nowrap transition-colors overflow-hidden text-ellipsis">Apply Now →</a>
  </div>
</div>

{/*  DESKTOP FLOATING WHATSAPP  */}
{/* <a href="https://api.whatsapp.com/send?phone=919391114948&text=Hi%2C%20I%20am%20interested%20in%20PGDM%20Program" target="_blank" className="fixed right-6 bottom-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all hover:scale-110 wa-anime">
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
</a> */}
{/*  DESKTOP FLOATING PHONE  */}
<a href="tel:+919391114948" className="fixed left-6 bottom-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all hover:scale-110 ph-anime">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
</a>


    </div>
  );
}
