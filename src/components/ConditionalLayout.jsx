"use client"

import dynamic from 'next/dynamic'
import { usePathname } from "next/navigation"
import TopBar from "@/sections/Header/TopBar"
import Navbar from "@/app/secondHome/components/Navbar"
import Image from "next/image"
import ConditionalBanner from "@/components/ConditionalBanner"

/**
 * PERFORMANCE: DockButtons and EnquireNowButton are fixed-position UI elements
 * that only become relevant after the user scrolls or clicks. They are:
 *  - Not visible in the initial viewport
 *  - Both import framer-motion (via magicui/dock) and Radix Dialog
 *
 * Lazy-loading with ssr:false means:
 *  1. Their JS is split into a separate chunk, NOT in the initial bundle
 *  2. They never block the hero/LCP paint
 *  3. They hydrate asynchronously after the main content is interactive
 */
const DockButtons = dynamic(
  () => import("@/components/DockButtons").then((m) => ({ default: m.DockButtons })),
  { ssr: false }
)

const EnquireNowButton = dynamic(
  () => import("@/components/EnquireNowButton"),
  { ssr: false }
)

/**
 * PERFORMANCE: Footer and SecondHomeFooter are large, below-fold components.
 * Lazy-loading them removes their hydration cost from the critical path.
 * ssr:true keeps them in the server HTML for SEO, but their client JS loads
 * asynchronously after the hero is painted.
 */
const Footer = dynamic(() => import("@/sections/Footer/Footer"))
const SecondHomeFooter = dynamic(() => import("@/app/secondHome/components/Footer"))

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
      {/* DockButtons and EnquireNowButton: lazy-loaded, ssr:false
          Their JS (framer-motion via magicui/dock + Radix Dialog) never
          blocks the initial render. They appear after hydration completes. */}
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
