'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const ConditionalBanner = dynamic(() => import('@/components/ConditionalBanner'))
const DockButtons = dynamic(
  () => import('@/components/DockButtons').then((m) => ({ default: m.DockButtons })),
  { ssr: false }
)
const EnquireNowButton = dynamic(() => import('@/components/EnquireNowButton'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/sections/Footer/Footer'), { ssr: false })
const SecondHomeFooter = dynamic(() => import('@/app/secondHome/components/Footer'), { ssr: false })

const HIDDEN_LAYOUT_PATHS = new Set(['/thank-you', '/pgdm-admissions'])

function ScrollActivatedDock() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const activateAfterScroll = () => {
      if (window.scrollY <= 100) return
      setActive(true)
      window.removeEventListener('scroll', activateAfterScroll)
    }

    activateAfterScroll()
    window.addEventListener('scroll', activateAfterScroll, { passive: true })
    return () => window.removeEventListener('scroll', activateAfterScroll)
  }, [])

  return active ? <DockButtons /> : null
}

export function ConditionalHeader({ children }) {
  const pathname = usePathname()
  if (HIDDEN_LAYOUT_PATHS.has(pathname)) return null

  const homeVariantClass = pathname === '/thirdHome' ? 'third-home' : pathname === '/secondHome' ? 'second-home' : ''

  return (
    <div className={homeVariantClass}>
      {children}
      {pathname !== '/' && <ConditionalBanner />}
    </div>
  )
}

export function ConditionalFooter() {
  const pathname = usePathname()
  const [showFooter, setShowFooter] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    if (HIDDEN_LAYOUT_PATHS.has(pathname) || !footerRef.current || showFooter) return
    if (!('IntersectionObserver' in window)) {
      setShowFooter(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFooter(true)
          observer.disconnect()
        }
      },
      { rootMargin: '1200px 0px' }
    )
    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [pathname, showFooter])

  if (HIDDEN_LAYOUT_PATHS.has(pathname)) return null

  const isAlternateHome = pathname === '/secondHome' || pathname === '/thirdHome'
  const homeVariantClass = pathname === '/thirdHome' ? 'third-home' : pathname === '/secondHome' ? 'second-home' : ''

  return (
    <>
      <div className={homeVariantClass}>
        <div
          ref={footerRef}
          className={`site-footer-deferred${pathname === '/' ? ' home-footer-deferred' : ''}`}
        >
          {showFooter ? (isAlternateHome ? <SecondHomeFooter /> : <Footer />) : null}
        </div>
      </div>
      <ScrollActivatedDock />
      <EnquireNowButton />
      <div className="fixed hidden sm:block bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://wa.me/919391114948"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/30 rounded-full p-2 inline-block"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            width="36"
            height="36"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </>
  )
}
