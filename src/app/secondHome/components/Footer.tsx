'use client'

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react'
import Link from 'next/link'

const logo = '/logo ssim.png'

const footerSections = [
  {
    label: 'Useful Links',
    items: [
      { name: 'About Us', path: '/about/vision-mission' },
      { name: 'Rankings & Accreditations', path: '/about/accreditations-rankings' },
      { name: 'Events', path: '/students-life/life-at-ssim' },
      { name: 'Media', path: '/students-life/news' },
      { name: 'Blog', path: '/blog' },
      { name: 'IQAC', path: '/iqac' },
      { name: 'Careers', path: '/careers' },
      { name: 'AICTE Approvals', path: '/pdfs/footer/AICTE_Approval_1992_2026_All_Years.pdf', external: true },
    ],
  },
  {
    label: 'Programs Offered',
    items: [
      { name: 'PGDM', path: '/programs/pgdm-triple-specialisation' },
      { name: 'PGDM - BIFS', path: '/programs/pgdm-bifs' },
      { name: 'PGDM - BA', path: '/programs/pgdm-ba' },
      { name: 'FPM', path: '/programs/fpm-efpm' },
      { name: 'EFPM', path: '/programs/fpm-efpm' },
    ],
  },
  {
    label: 'Committees & Policies',
    items: [
      { name: 'Grievance Redressal Mechanism', path: '/grievance-redressal-mechanism' },
      { name: 'Internal Complaints Committee', path: '/internal-complaints' },
      { name: 'Employee Handbook', path: '/pdfs/footer/Employee_Hand_Book.pdf', external: true },
      { name: 'Student Handbook', path: '/pdfs/footer/Student_Hand_Book_Batch_2025_27.pdf', external: true },
      { name: 'HR & Faculty Development Policies', path: '/pdfs/footer/hr&facultyDevelopmentPolicies.pdf', external: true },
    ],
  },
  {
    label: 'S P Sampathys Siva Sivani Educational Society',
    items: [
      { name: 'Siva Sivani Institute of Management', path: '/' },
      { name: 'Siva Sivani Degree College', path: 'https://ssdc.ac.in', external: true },
      { name: 'Siva Sivani Degree College Hyderabad', path: 'https://ssdchyderabad.in', external: true },
      { name: 'Siva Sivani Junior College', path: 'https://ssjc.ac.in', external: true },
      { name: 'Siva Sivani High School', path: 'https://www.spsschool.ac.in', external: true },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, bgColor: 'bg-blue-600', label: 'Facebook', href: 'https://www.facebook.com/SivaSivaniInstituteofManagementHyderabad/' },
  { icon: Instagram, bgColor: 'bg-pink-600', label: 'Instagram', href: 'https://www.instagram.com/ssim_b_school/?hl=en' },
  { icon: Twitter, bgColor: 'bg-sky-500', label: 'Twitter', href: 'https://x.com/SSIMHyderabad' },
  { icon: Linkedin, bgColor: 'bg-blue-700', label: 'LinkedIn', href: 'https://www.linkedin.com/school/siva-sivani-institute-of-management/' },
  { icon: Youtube, bgColor: 'bg-red-600', label: 'YouTube', href: 'https://www.youtube.com/@sivasivaniinstituteofmanag3545' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Social Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group" onClick={scrollToTop}>
                <img
                  src={logo || '/placeholder.svg'}
                  alt="SSIM Logo"
                  className="h-14 sm:h-[72px] cursor-pointer w-auto transition-transform group-hover:scale-105"
                />
              </Link>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className={`rounded-full transition-all hover:scale-110 text-white ${social.bgColor} hover:opacity-90 w-10 h-10 flex items-center justify-center`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </button>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-black font-medium mb-3">24/7 Women Helpline Number</p>
              <a href="tel:+919133305062" className="inline-flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-full hover:bg-blue/80 transition-colors font-medium">
                <Phone className="h-4 w-4" />
                91333 05062
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3 className="text-lg font-semibold text-blue tracking-wide">{section.label}</h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.external || (item.path && item.path.startsWith('http')) ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue hover:text-red transition-colors duration-200 inline-flex items-center gap-1"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={scrollToTop}
                          className="text-blue hover:text-red transition-colors duration-200 inline-flex items-center gap-1"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue flex-shrink-0" />
              <span className="text-blue text-sm">NH 44, Kompally, Secunderabad, Telangana – 500100</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue flex-shrink-0" />
              <span className="text-blue text-sm">040-2716 5451 / 53 / 54 · +91 93911 14948</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue flex-shrink-0" />
              <a href="mailto:admissions@ssim.ac.in" className="text-blue text-sm hover:text-red transition-colors">admissions@ssim.ac.in</a>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-blue/20" />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base text-blue">
          <p>Copyright SSIM {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}