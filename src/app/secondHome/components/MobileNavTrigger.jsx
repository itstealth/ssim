'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

const MobileNavMenu = dynamic(() => import('./MobileNavMenu'), { ssr: false })

export default function MobileNavTrigger() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()
  const isSecondHome = pathname === '/secondHome'
  const isThirdHome = pathname === '/thirdHome'
  const linkColor = isSecondHome
    ? 'text-slate-700 hover:text-purple-700'
    : isThirdHome
      ? 'text-slate-700 hover:text-purple-600'
      : 'text-slate-700 hover:text-navy'

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={() => {
          setLoaded(true)
          setOpen(true)
        }}
        className="sx:hidden flex items-center"
      >
        <Menu className={`w-6 h-6 ${isSecondHome || isThirdHome ? 'text-purple-700' : 'text-navy'}`} />
      </button>
      {loaded && (
        <MobileNavMenu
          open={open}
          onOpenChange={setOpen}
          linkColor={linkColor}
          isSecondHome={isSecondHome}
          isThirdHome={isThirdHome}
        />
      )}
    </>
  )
}
