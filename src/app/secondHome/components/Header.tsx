import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import TopBar from './TopBar'

export default function Header() {
  return (
    <header className="font-sans sticky top-0 z-[1000]">
      <TopBar />
      <div className="bg-white py-2 px-4 text-sm block shadow-[0_2px_20px_rgba(82,16,146,0.10)]">
        <div className="mx-auto flex justify-between sm:items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src="/logo ssim.png"
                alt="SSIM Logo"
                className="h-12 sm:h-[72px] object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex text-black justify-end sm:items-center space-x-4">
              <a
                href="https://maps.app.goo.gl/HhbEn3qSWAFCeuKR7"
                target="_blank"
                className="flex items-center"
              >
                <MapPin size={16} className="text-[#521092] mr-1" />
                <span className="text-[#521092]">NH 44, Kompally,Secunderabad, Telangana - 500100.</span>
              </a>
              <a href="mailto:info@ssim.ac.in" className="flex items-center">
                <Mail size={16} className="text-[#521092] mr-1" />
                <span className="text-[#521092]">admissions@ssim.ac.in</span>
              </a>
              <div className="flex flex-row gap-2">
                <a href="tel:+91-040-27165451" className="flex items-center">
                  <Phone size={16} className="text-[#521092] mr-1" />
                  <span className="text-[#521092]">040-2716 5451/53/54</span>
                </a>
                <a href="tel:+919391114948" className="flex items-center">
                  <Phone size={16} className="text-[#521092] mr-1" />
                  <span className="text-[#521092]">+91 9391114948</span>
                </a>
              </div>
            </div>
            <a
              href="https://apply.ssim.ac.in"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block bg-[#521092] text-white border-none px-5 py-2.5 rounded-lg font-bold text-[13px] no-underline transition-all hover:bg-[#d74dec] hover:-translate-y-[1px] whitespace-nowrap"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}