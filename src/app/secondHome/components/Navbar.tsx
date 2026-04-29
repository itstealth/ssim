'use client'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  {
    label: 'About ▾', href: '#',
    children: [
      { label: 'Vision & Mission', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Infrastructure', href: '#' },
      { label: 'Accreditations', href: '#' },
    ]
  },
  {
    label: 'Programs ▾', href: '#',
    children: [
      { label: 'PGDM (Triple Specialisation)', href: '#' },
      { label: 'PGDM – BIFS', href: '#' },
      { label: 'PGDM – Business Analytics', href: '#' },
      { label: 'FPM / EFPM', href: '#' },
    ]
  },
  { label: 'Admissions', href: '#' },
  { label: 'Placements', href: '#' },
  {
    label: 'Research ▾', href: '#',
    children: [
      { label: 'Faculty Research', href: '#' },
      { label: 'Publications', href: '#' },
      { label: 'Case Studies', href: '#' },
    ]
  },
  { label: 'Alumni', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  const [logoError, setLogoError] = useState(false)

  return (
    <nav className="sticky top-0 z-[1000] bg-white shadow-[0_2px_20px_rgba(16,34,105,0.10)] px-10 flex items-center justify-between h-[76px]">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline">
        {!logoError ? (
          <Image
            src="https://ssim.ac.in/logo%20ssim.png"
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
        <div className="logo-text">
          <strong className="font-playfair text-xl text-navy block leading-tight">SSIM</strong>
          <span className="text-[10px] text-gray">Siva Sivani Institute of Management</span>
        </div>
      </a>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-[2px] list-none">
        {navItems.map((item) => (
          <li key={item.label} className="nav-group">
            <a href={item.href} className="nav-link-item">{item.label}</a>
            {item.children && (
              <div className="dropdown">
                {item.children.map((child) => (
                  <a key={child.label} href={child.href}>{child.label}</a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://apply.ssim.ac.in"
        target="_blank"
        rel="noreferrer"
        className="bg-red text-white border-none px-6 py-[11px] rounded-lg font-bold text-[13px] no-underline transition-all hover:bg-[#b91c1c] hover:-translate-y-[1px] whitespace-nowrap"
      >
        Apply Now →
      </a>
    </nav>
  )
}
