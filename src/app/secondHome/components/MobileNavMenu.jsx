'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { navItems } from './navItems'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

function CollapsibleNavItem({ item, setMobileOpen }) {
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
                  onClick={() => setMobileOpen(false)}
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

export default function MobileNavMenu({
  open,
  onOpenChange,
  linkColor,
  isSecondHome,
  isThirdHome,
}) {
  const titleColor = isSecondHome || isThirdHome ? 'text-purple-700' : 'text-navy'

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-white overflow-auto w-[300px]">
        <SheetHeader className="text-left mb-4">
          <SheetTitle className={`text-2xl font-bold text-left font-playfair ${titleColor}`}>
            SSIM
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4">
          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <CollapsibleNavItem item={item} setMobileOpen={onOpenChange} />
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => onOpenChange(false)}
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
  )
}
