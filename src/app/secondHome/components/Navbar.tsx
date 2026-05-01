'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    dropdown: [
      { name: 'Academic Advisory Board', path: '/about/academic-advisory-board' },
      { name: 'Accreditations & Rankings', path: '/about/accreditations-rankings' },
      { name: 'Board of Governors', path: '/about/board-of-governors' },
      { name: 'Board of Studies', path: '/about/board-of-studies' },
      { name: 'Message from Leaders', path: '/about/message-from-leaders' },
      { name: 'Vision & Mission', path: '/about/vision-mission' },
      { name: 'International Relations', path: '/international-relations' },
      { name: 'Virtual Tour', path: '/virtual-tour' },
      { name: 'Contact Us', path: '/contact-us' },
    ],
  },
  {
    name: 'Programs',
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
    dropdown: [
      { name: 'FPM/EFPM', path: '/admissions/fpm-efpm' },
      { name: 'PGDM BA', path: '/admissions/pgdm-ba' },
      { name: 'PGDM BIFS', path: '/admissions/pgdm-bifs' },
      { name: 'PGDM Triple Specialisation', path: '/admissions/pgdm-triple-specialisation' },
    ],
  },
  {
    name: 'Alumni',
    dropdown: [
      { name: 'Alumni', path: '/alumni' },
      { name: 'Alumni Guidance', path: '/alumni-guidance' },
      { name: 'Success Stories', path: '/success-stories' },
    ],
  },
  {
    name: 'Faculty & Research',
    dropdown: [
      {
        name: 'Faculty',
        subDropdown: [
          { name: 'Areas', path: '/faculty/areas' },
          { name: 'Faculty Publications', path: '/faculty/publications' },
        ],
      },
      {
        name: 'Research',
        subDropdown: [
          { name: 'Case Research Center', path: '/research/case-research-center' },
        ],
      },
    ],
  },
  {
    name: 'Corporate Connect',
    dropdown: [
      { name: 'Placement', path: '/placement/records' },
      { name: 'Placement Team', path: '/placement/team' },
      { name: 'Internships', path: '/placement/internships' },
      { name: 'Guest lectures', path: '/placement/guest-lectures' },
    ],
  },
  {
    name: "Student's Life",
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
]

const CollapsibleNavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-red-600 transition-colors"
      >
        <span className="font-medium">{item.name}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isOpen && (
        <div className="bg-gray-50">
          {item.dropdown?.map((subItem, subIndex) => (
            <div key={subIndex}>
              {subItem.subDropdown ? (
                <CollapsibleNavItem item={subItem} />
              ) : (
                <Link
                  href={subItem.path}
                  className="block py-2 px-8 text-sm text-gray-600 hover:text-red-600 transition-colors"
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
  const [logoError, setLogoError] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-[0_2px_20px_rgba(16,34,105,0.10)] px-4 md:px-10 flex items-center justify-between h-[76px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        {!logoError ? (
          <Image
            src="/logo ssim.png"
            alt="SSIM Logo"
            width={52}
            height={52}
            className="h-[52px] w-auto object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-[52px] h-[52px] bg-navy rounded-xl grid place-items-center text-white font-playfair text-xl font-extrabold flex-shrink-0">
            S
          </div>
        )}
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden xl:flex gap-1 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.name} className="nav-group relative group">
            {item.dropdown ? (
              <>
                <button className="nav-link-item nav-link-trigger cursor-pointer whitespace-nowrap">
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
                          <Link
                            href={subItem.path || '#'}
                            className="nav-sub-trigger h-11 px-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors text-sm"
                          >
                            <span className="whitespace-nowrap">{subItem.name}</span>
                            <ChevronRight size={12} />
                          </Link>
                          <div
                            className={`submenu-flyout absolute hidden group-hover/sub:block top-0 bg-white border border-gray-200 shadow-[0_8px_24px_rgba(16,34,105,0.14)] rounded-lg py-2 min-w-[240px] z-[60] ${
                              item.name === "Student's Life" ? 'right-full' : 'left-full'
                            }`}
                          >
                            {subItem.subDropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                className="block px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors text-sm"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={subItem.path}
                          className="block px-4 py-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Link href={item.path} className="nav-link-item">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="https://apply.ssim.ac.in"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-red text-white border-none px-5 py-2.5 rounded-lg font-bold text-[13px] no-underline transition-all hover:bg-[#b91c1c] hover:-translate-y-[1px] whitespace-nowrap"
        >
          Apply Now →
        </a>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="xl:hidden flex items-center">
            <Menu className="w-6 h-6 text-navy" />
          </SheetTrigger>
          <SheetContent className="bg-white overflow-auto w-[300px]">
            <SheetHeader className="text-left mb-4">
              <SheetTitle className="text-navy text-2xl font-bold text-left font-playfair">
                SSIM
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4">
              <ul className="space-y-0">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <CollapsibleNavItem item={item} />
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:text-red-600 transition-colors font-medium border-b border-gray-100"
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
