"use client"

import { usePathname } from "next/navigation"
import TopBar from "@/pages/Header/TopBar"
import BannerNav from "@/pages/Header/BannerNav"
import Footer from "@/pages/Footer/Footer"
import ConditionalBanner from "@/components/ConditionalBanner"
import { DockButtons } from "@/components/DockButtons"
import EnquireNowButton from "@/components/EnquireNowButton"
import Image from "next/image"

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const hideLayoutElements = pathname === "/thank-you" || pathname === "/pgdm-admissions"

  return (
    <>
      {!hideLayoutElements && (
        <header>
          <TopBar />
          <BannerNav />
        </header>
      )}
      {!hideLayoutElements && <ConditionalBanner />}
      <main>{children}</main>
      {!hideLayoutElements && <Footer />}
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
    </>
  )
}