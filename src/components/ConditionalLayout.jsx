"use client"

import { usePathname } from "next/navigation"
import TopBar from "@/pages/Header/TopBar"
import Navbar from "@/app/secondHome/components/Navbar"
import Footer from "@/pages/Footer/Footer"
import ConditionalBanner from "@/components/ConditionalBanner"
import { DockButtons } from "@/components/DockButtons"
import EnquireNowButton from "@/components/EnquireNowButton"
import Image from "next/image"
import SecondHomeFooter from "@/app/secondHome/components/Footer"

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const hideLayoutElements = pathname === "/thank-you" || pathname === "/pgdm-admissions"
  const isSecondHome = pathname === "/secondHome"
  const isThirdHome = pathname === "/thirdHome"
  const homeVariantClass = isThirdHome ? "third-home" : isSecondHome ? "second-home" : ""

  return (
    <div className={homeVariantClass}>
      {!hideLayoutElements && (
        <header>
          <div className="hidden md:block"><TopBar /></div>
          <Navbar />
        </header>
      )}
      {!hideLayoutElements && <ConditionalBanner />}
      <main>{children}</main>
      {!hideLayoutElements && (
        isSecondHome || isThirdHome ? <SecondHomeFooter /> : <Footer />
      )}
      {!hideLayoutElements && <DockButtons />}
      {!hideLayoutElements && <EnquireNowButton />}
      {!hideLayoutElements && (
        <div className="fixed hidden sm:block bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <a
            href="https://wa.me/919391114948"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/30 rounded-full p-2 inline-block"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={36}
              height={36}
            />
          </a>
        </div>
      )}
    </div>
  )
}
