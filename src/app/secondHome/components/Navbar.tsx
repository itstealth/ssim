'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, Phone } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { secondHomeTheme } from '../theme'

const navItems = [
  {
    name: 'About',
    path: '/about',
    dropdown: [

      { name: 'Accreditations & Rankings', path: '/about/accreditations-rankings' },
      { name: 'Board of Governors', path: '/about/board-of-governors' },
      { name: 'Board of Studies', path: '/about/board-of-studies' },
      { name: 'Message from Leaders', path: '/about/message-from-leaders' },
      { name: 'Vision & Mission', path: '/about/vision-mission' },
      { name: 'International Relations', path: '/international-relations' },
      { name: 'Virtual Tour', path: '/virtual-tour' },
    ],
  },
  {
    name: 'Programs',
    path: '/programs',
    dropdown: [
      {
        name: 'PGDM',
        subDropdown: [
          { name: 'PGDM BA', path: '/programs/pgdm-ba' },
          { name: 'PGDM BIFS', path: '/programs/pgdm-bifs' },
          { name: 'PGDM Triple Specialisation', path: '/programs/pgdm-triple-specialisation' },
        ],
      },
      { name: 'FPM/EFPM', path: '/programs/fpm-efpm' },
    ],
  },
  {
    name: 'Admissions',
    path: '/admissions',
    dropdown: [
      { name: 'PGDM Triple Specialisation', path: '/admissions/pgdm-triple-specialisation' },
      { name: 'PGDM BIFS', path: '/admissions/pgdm-bifs' },
      { name: 'PGDM BA', path: '/admissions/pgdm-ba' },
      { name: 'FPM/EFPM', path: '/admissions/fpm-efpm' },
    ],
  },
  {
    name: 'Alumni',
    path: '/alumni',
    dropdown: [
      { name: 'Alumni', path: '/alumni' },
      { name: 'Alumni Guidance', path: '/alumni-guidance' },
      { name: 'Success Stories', path: '/success-stories' },
    ],
  },
  {
    name: 'Faculty & Research',
    path: '/faculty',
    dropdown: [
      {
        name: 'Faculty',
        subDropdown: [
          { name: 'Areas', path: '/faculty/areas' },
          { name: 'Faculty Publications', path: '/faculty/publications' },
        ],
      },
      // {
      //   name: 'Research',
      //   subDropdown: [
      //     { name: 'Case Research Center', path: '/research/case-research-center' },
      //   ],
      // },
    ],
  },
  {
    name: 'Placements',
    path: '/placement',
    dropdown: [
      { name: 'Placement', path: '/placement/records' },
      { name: 'Placement Team', path: '/placement/team' },
    ],
  },
  {
    name: 'Corporate Connect',
    path: '/placement',
    dropdown: [
      { name: 'Internships', path: '/placement/internships' },
      { name: 'Guest lectures', path: '/placement/guest-lectures' },
    ],
  },
  {
    name: "Student's Life",
    path: '/students-life',
    dropdown: [
      {
        name: 'Buzz About Us',
        subDropdown: [
          { name: 'News', path: '/students-life/news' },
          { name: "Student's Achievements", path: '/students-life/students-achievements' },
        ],
      },
      { name: 'Life at SSIM', path: '/students-life/life-at-ssim' },
    ],
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
]

const CollapsibleNavItem = ({ item, setMobileOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  const children = item.dropdown || item.subDropdown

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 text-slate-700 hover:text-purple-700 transition-colors"
      >
        <span className="font-medium">{item.name}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isOpen && children && (
        <div className="bg-slate-50">
          {children.map((subItem, subIndex) => (
            <div key={subIndex}>
              {subItem.subDropdown ? (
                <CollapsibleNavItem item={subItem} setMobileOpen={setMobileOpen} />
              ) : (
                <Link
                  href={subItem.path}
                  onClick={() => {
                    if (setMobileOpen) setMobileOpen(false);
                  }}
                  className="block py-2 px-8 text-sm text-slate-600 hover:text-purple-700 transition-colors"
                >
                  {subItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isSecondHome = pathname === '/secondHome'
  const isThirdHome = pathname === '/thirdHome'
  const linkColor = isSecondHome
    ? 'text-slate-700 hover:text-purple-700'
    : isThirdHome
      ? 'text-slate-700 hover:text-purple-600'
      : 'text-slate-700 hover:text-navy'
  const dropdownHover = isSecondHome
    ? 'hover:bg-purple-50 hover:text-purple-700'
    : isThirdHome
      ? 'hover:bg-purple-50 hover:text-purple-600'
      : 'hover:bg-slate-50 hover:text-navy'
  const accentButton = isSecondHome
    ? 'bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] text-white hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(107,33,168,0.18)]'
    : isThirdHome
      ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-300 text-white hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(168,85,247,0.18)]'
    : 'bg-navy text-white hover:bg-navy-light hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(16,34,105,0.18)]'

  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-[0_2px_20px_rgba(16,34,105,0.08)] px-4 md:px-10 flex items-center justify-between h-[76px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image
          src="/logo-transparent.png"
          alt="SSIM Logo"
          width={200}
          height={90}
          className="h-16 md:h-[72px] w-auto object-contain object-center"
          style={{ width: 'auto' }}
        />
        <div className={`w-[52px] h-[52px] rounded-xl grid place-items-center text-white font-playfair text-xl font-extrabold flex-shrink-0 ${isSecondHome ? 'bg-gradient-to-br from-purple-700 to-[#1B50EC]' : isThirdHome ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500' : 'bg-navy'}`} style={{ display: 'none' }}>
          S
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden xl:flex gap-1 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.name} className="nav-group relative group">
            {item.dropdown ? (
              <>
                <button className={`nav-link-item nav-link-trigger cursor-pointer whitespace-nowrap ${linkColor}`}>
                  {item.name}
                  <ChevronDown size={14} className="flex-shrink-0" />
                </button>
                <div
                  className="dropdown absolute hidden group-hover:block top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] z-50 overflow-visible"
                >
                  {item.dropdown.map((subItem) => (
                    <div key={subItem.name} className="relative group/sub">
                      {subItem.subDropdown ? (
                        <>
                          <div
                            className={`nav-sub-trigger h-11 px-4 transition-colors text-sm flex items-center justify-between cursor-pointer ${linkColor} ${dropdownHover}`}
                          >
                            <span className="whitespace-nowrap">{subItem.name}</span>
                            <ChevronRight size={12} />
                          </div>
                          <div
                            className={`submenu-flyout absolute hidden group-hover/sub:block top-0 bg-white border border-slate-200 shadow-[0_8px_24px_rgba(16,34,105,0.14)] rounded-lg py-2 min-w-[240px] z-[60] ${
                              item.name === "Student's Life" ? 'right-full' : 'left-full'
                            }`}
                          >
                            {subItem.subDropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                className={`block px-4 py-2.5 transition-colors text-sm ${linkColor} ${dropdownHover}`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={subItem.path}
                          className={`block px-4 py-2.5 transition-colors text-sm ${linkColor} ${dropdownHover}`}
                        >
                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Link href={item.path} className={`nav-link-item ${linkColor}`}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+919391114948"
          rel="noreferrer"
          className={`hidden md:block border-none px-5 py-2.5 rounded-lg font-bold text-[13px] no-underline transition-all whitespace-nowrap ${accentButton}`}
        >
          <Phone className="w-4 h-4 inline mr-1" />
          Call Us
        </a>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="xl:hidden flex items-center">
            <Menu className={`w-6 h-6 ${isSecondHome || isThirdHome ? 'text-purple-700' : 'text-navy'}`} />
          </SheetTrigger>
          <SheetContent className="bg-white overflow-auto w-[300px]">
            <SheetHeader className="text-left mb-4">
              <SheetTitle className={`text-2xl font-bold text-left font-playfair ${isSecondHome || isThirdHome ? 'text-purple-700' : 'text-navy'}`}>
                SSIM
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4">
              <ul className="space-y-0">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <CollapsibleNavItem item={item} setMobileOpen={setMobileOpen} />
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 transition-colors font-medium border-b border-slate-100 ${linkColor}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
