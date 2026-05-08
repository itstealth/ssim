import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'
import TopBar from './TopBar'
import { secondHomeTheme } from '../theme'

export default function Header() {
  return (
    <header className="font-sans sticky top-0 z-[1000]">
      <TopBar />
      <div className="bg-white/95 backdrop-blur-md py-2 px-4 text-sm block shadow-[0_2px_20px_rgba(16,34,105,0.08)] border-b border-slate-100">
        <div className="mx-auto flex justify-between sm:items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src="/SSIM_Logo.png"
                alt="SSIM Logo"
                className="h-20 sm:h-[100px] object-contain object-center"
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
                <MapPin size={16} className="text-purple-700 mr-1" />
                <span className="text-slate-600">NH 44, Kompally,Secunderabad, Telangana - 500100.</span>
              </a>
              <a href="mailto:info@ssim.ac.in" className="flex items-center">
                <Mail size={16} className="text-purple-700 mr-1" />
                <span className="text-slate-600">admissions@ssim.ac.in</span>
              </a>
              <div className="flex flex-row gap-2">
                <a href="tel:+91-040-27165451" className="flex items-center">
                  <Phone size={16} className="text-purple-700 mr-1" />
                  <span className="text-slate-600">040-2716 5451/53/54</span>
                </a>
                <a href="tel:+919391114948" className="flex items-center">
                  <Phone size={16} className="text-purple-700 mr-1" />
                  <span className="text-slate-600">+91 9391114948</span>
                </a>
              </div>
            </div>
            <a
              href="tel:+919391114948"
              rel="noreferrer"
              className={`hidden md:block ${secondHomeTheme.accentGradient} text-white border-none px-5 py-2.5 rounded-lg font-bold text-[13px] no-underline transition-all hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(107,33,168,0.18)] whitespace-nowrap`}
            >
              <Phone size={14} className="inline mr-1" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
