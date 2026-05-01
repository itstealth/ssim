"use client";
import Image from 'next/image'
import Link from 'next/link'

const AboutSSIM = "/about_ssim/About.webp"

const stats = [
  { icon: '📅', value: '35', label: 'Years of Excellence', desc: 'Academic excellence since 1992' },
  { icon: '🤝', value: '350+', label: 'Corporate', desc: 'Partners' },
  { icon: '🎓', value: '6500+', label: 'Alumni', desc: 'Network' },
  { icon: '💰', value: '₹90000', label: 'Merit', desc: 'Scholarship' },
  { icon: '🧠', value: '50+', label: 'New Age', desc: 'Specializations' },
  { icon: '📚', value: '9', label: 'Value Added', desc: 'Certification Programs' },
]

export default function About() {
  return (
    <section id="about" className="px-[60px] py-[80px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Image */}
        <div className="lg:sticky lg:top-20 hidden lg:block h-fit">
          <div className="overflow-hidden shadow-2xl rounded-none">
            <div className="relative aspect-square">
              <img
                alt="SSIM Campus Life"
                src={AboutSSIM}
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute top-4 left-4 bg-red-600 animate-pulse text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur flex items-center gap-2">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-block bg-sky/20 text-blue text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[0.8px]">
              About SSIM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-red-600">
              Top Management Institute in Hyderabad
            </h1>
            <div className="w-32 h-1.5 bg-red-600/80 rounded-none" />
          </div>

          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed">
              Located in the heart of Hyderabad and Secunderabad, Siva Sivani Institute
              of Management (SSIM) is a <strong>premier institution with over three decades of excellence</strong>{" "}
              in management education. Renowned for its <strong>strong ethical foundation</strong>, this{" "}
              <strong>AICTE accredited, NAAC, NBA for PGDM, AIU, SAQS and AACSB Member institution</strong>{" "}
              delivers industry-relevant learning through an <strong>innovative curriculum and experienced faculty blending academic and corporate insights</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Recognized as an <strong>A<sup>+++</sup> B-School by Business India (2024)</strong>,
              SSIM ranks <strong>21st among private standalone B-Schools in India (Outlook 2025) and 2nd in Telangana</strong>
              (Outlook, CSR, and GHRDC Times 2025). Its <strong>vibrant, extremely qualified, and talented alumni network spans across the globe</strong>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-sm bg-white shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="flex flex-col space-y-2">
                  <div className="text-2xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-mainBlue">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/about/vision-mission"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="inline-flex items-center gap-0 mt-8">
              <div className="bg-red-600 h-11 flex items-center px-8 text-white hover:bg-red-700 transition-colors">
                Learn More About SSIM
              </div>
              <div className="bg-mainBlue h-11 flex items-center px-4 text-white">
                →
              </div>
            </div>
          </Link>

          {/* Mobile Image */}
          <div className="lg:hidden overflow-hidden shadow-2xl rounded-none mt-8">
            <div className="relative w-full aspect-square">
              <Image
                src={AboutSSIM}
                alt="SSIM Campus Life"
                fill
                priority
                className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
              <div className="absolute top-4 left-4 bg-red-600 animate-pulse text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur flex items-center gap-2">
                🎓 Excellence in Education
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}