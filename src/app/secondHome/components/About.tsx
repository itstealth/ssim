// Server Component — no "use client" needed.
// The only interactive piece (scroll-to-top on click) is isolated in
// ScrollToTopLink so this component ships zero client JS.
import { secondHomeTheme } from '../theme'
import ScrollToTopLink from '@/components/ScrollToTopLink'

const AboutSSIM = "/Home/campus-image.webp"

const stats = [
  { icon: '📅', value: '34+', label: 'Years of Excellence', desc: 'Academic excellence since 1992' },
  { icon: '🤝', value: '350+', label: 'Corporate', desc: 'Partners' },
  { icon: '🎓', value: '6,500+', label: 'Alumni', desc: 'Network' },
  { icon: '💰', value: 'Up to ₹1L', label: 'Merit', desc: 'Scholarship' },
  { icon: '🧠', value: '50+', label: 'New-Age', desc: 'Specialisations' },
  { icon: '📚', value: '9', label: 'Value Added', desc: 'Certification Programs' },
]

export default function About() {
  return (
    <section id="about" className={`px-4 lg:px-[60px] py-[64px] ${secondHomeTheme.shell}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Image */}
        <div className="lg:sticky lg:top-20 hidden lg:block h-fit">
          <div className="overflow-hidden shadow-[0_20px_50px_rgba(16,34,105,0.12)] rounded-[24px] border border-white/60">
            <div className="relative aspect-[4/3]">
              <img
                alt="SSIM Campus Life"
                src={AboutSSIM}
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#101a3a]/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur flex items-center gap-2 shadow-lg">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-4">
          <div className="space-y-3">
            <span className={secondHomeTheme.eyebrow}>
              About SSIM
            </span>
            <h1 className={secondHomeTheme.title} style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
              Top Management Institute in Hyderabad
            </h1>
            <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-[#1B50EC]" />
          </div>

          <div className="text-slate-600 text-[16px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              <li>A premier institution with over three decades of excellence in management education</li>
              <li>Renowned for its strong ethical foundation</li>
              <li>
                Delivers industry-relevant learning that blends academic and corporate insights
                <ul className="list-[circle] pl-6 mt-2 space-y-1.5 text-[15px] text-slate-500">
                  <li>Innovative curriculum</li>
                  <li>Experienced faculty</li>
                  <li>Rich corporate mentoring</li>
                  <li>Practical, on-field applicability</li>
                  <li>Blended learning platforms</li>
                  <li>Latest technological integration</li>
                </ul>
              </li>
              <li>
                Focus on Holistic Development of Individual Personality with emphasis on:
                <ul className="list-[circle] pl-6 mt-2 space-y-1.5 text-[15px] text-slate-500">
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
            <p className="font-bold text-purple-700 mt-6 text-[16px]">
              SSIM continues to shape future-ready leaders year-on-year.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-[18px] bg-white shadow-[0_12px_28px_rgba(16,34,105,0.06)] hover:shadow-[0_18px_40px_rgba(16,34,105,0.1)] transition-all border border-slate-100 ${secondHomeTheme.surfaceLift}`}
              >
                <div className="flex flex-col space-y-2">
                  <div className="text-2xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-700">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-900">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button — uses ScrollToTopLink (client) to keep this component server-side */}
          <ScrollToTopLink href="/about/vision-mission">
            <div className="inline-flex items-center gap-0 mt-6">
              <div className={`h-11 flex items-center px-8 text-white transition-colors rounded-l-[10px] ${secondHomeTheme.accentGradient}`}>
                Learn More About SSIM
              </div>
              <div className={`h-11 flex items-center px-4 text-white rounded-r-[10px] ${secondHomeTheme.accentGradient}`}>
                →
              </div>
            </div>
          </ScrollToTopLink>

          {/* Mobile Image */}
          <div className="lg:hidden overflow-hidden shadow-2xl rounded-none mt-8">
            <div className="relative w-full aspect-[4/3]">
              <img
                src={AboutSSIM}
                alt="SSIM Campus Life"
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-[#101a3a]/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur flex items-center gap-2 shadow-lg">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
