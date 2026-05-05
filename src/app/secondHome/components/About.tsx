"use client";
import Link from 'next/link'

const AboutSSIM = "https://www.searchurcollege.com/exam/admin/search/gallery/college/col_431.jpg"

const stats = [
  { icon: '📅', value: '35', label: 'Years of Excellence', desc: 'Academic excellence since 1992' },
  { icon: '🤝', value: '350+', label: 'Corporate', desc: 'Partners' },
  { icon: '🎓', value: '6,500+', label: 'Alumni', desc: 'Network' },
  { icon: '💰', value: '₹90,000', label: 'Merit', desc: 'Scholarship' },
  { icon: '🧠', value: '50+', label: 'New Age', desc: 'Specializations' },
  { icon: '📚', value: '9', label: 'Value Added', desc: 'Certification Programs' },
]

export default function About() {
  return (
    <section id="about" className="px-4 lg:px-[60px] py-[60px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Image */}
        <div className="lg:sticky lg:top-20 hidden lg:block h-fit">
          <div className="overflow-hidden shadow-2xl rounded-none">
            <div className="relative aspect-[4/3]">
              <img
                alt="SSIM Campus Life"
                src={AboutSSIM}
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute top-4 left-4 bg-red animate-pulse text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur flex items-center gap-2">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-4">
          <div className="space-y-3">
            <span className="inline-block bg-sky text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px]">
              About SSIM
            </span>
            <h2 className="font-playfair text-navy leading-[1.2] mb-4" style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
              Top Management Institute in Hyderabad
            </h2>
            <div className="w-32 h-1.5 bg-red rounded-full" />
          </div>

          <div className="text-gray-600 text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              <li>A Premier Institution with over Three Decades of excellence in management education</li>
              <li>Renowned for its Strong Ethical Foundation</li>
              <li>
                Delivers Industry-Relevant learning that blends academic and corporate insights
                <ul className="list-[circle] pl-6 mt-2 space-y-1.5 text-[15px] text-gray-500">
                  <li>Innovative Curriculum</li>
                  <li>Experienced Faculty</li>
                  <li>Rich Corporate Mentoring</li>
                  <li>Practical On field Applicability</li>
                  <li>Blended Learning Platforms</li>
                  <li>Latest Technological Integration</li>
                </ul>
              </li>
              <li>
                Focus on Holistic Development of Individual Personality with emphasis on:
                <ul className="list-[circle] pl-6 mt-2 space-y-1.5 text-[15px] text-gray-500">
                  <li>Critical Decision-Making</li>
                  <li>Creativity</li>
                  <li>Innovation</li>
                  <li>Sustainability</li>
                  <li>Ethics</li>
                  <li>Managerial Competency Development Components</li>
                </ul>
              </li>
              <li>
                Proud of vibrant, extremely qualified, and talented alumni network spanning across the globe, across industries, across domains, and across profiles.
              </li>
            </ul>
            <p className="font-bold text-navy mt-6 text-[16px]">
              SSIM continues to shape future-ready leaders year-on-year................
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-sm bg-white shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="flex flex-col space-y-2">
                  <div className="text-2xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue">{stat.value}</div>
                  <div className="text-sm font-medium text-navy">{stat.label}</div>
                  <div className="text-xs text-gray">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/about/vision-mission"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="inline-flex items-center gap-0 mt-6">
              <div className="bg-red h-11 flex items-center px-8 text-white hover:bg-red/90 transition-colors rounded-l-[10px]">
                Learn More About SSIM
              </div>
              <div className="bg-navy h-11 flex items-center px-4 text-white rounded-r-[10px]">
                →
              </div>
            </div>
          </Link>

          {/* Mobile Image */}
          <div className="lg:hidden overflow-hidden shadow-2xl rounded-none mt-8">
            <div className="relative w-full aspect-[4/3]">
              <img
                src={AboutSSIM}
                alt="SSIM Campus Life"
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute top-4 left-4 bg-red animate-pulse text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur flex items-center gap-2">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}