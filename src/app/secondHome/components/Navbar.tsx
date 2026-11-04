import Link from 'next/link'
import { navItems } from './navItems'
import { ChevronDown, ChevronRight, Phone } from 'lucide-react'
import MobileNavTrigger from './MobileNavTrigger'


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-[0_2px_20px_rgba(16,34,105,0.08)] px-4 md:px-10 flex items-center justify-between h-[76px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <img
          src="/logo-transparent.png"
          alt="SSIM Logo"
          width="200"
          height="40"
          fetchPriority="high"
          decoding="async"
          className="h-10 w-auto"
        />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden sx:flex gap-1 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.name} className="nav-group relative group">
            {item.dropdown ? (
              <>
                <button className="nav-link-item nav-link-trigger cursor-pointer whitespace-nowrap text-slate-700 hover:text-navy">
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
                          <div
                            className="nav-sub-trigger h-11 px-4 transition-colors text-sm flex items-center justify-between cursor-pointer text-slate-700 hover:bg-slate-50 hover:text-navy"
                          >
                            <span className="whitespace-nowrap">{subItem.name}</span>
                            <ChevronRight size={12} />
                          </div>
                          <div
                            className={`submenu-flyout absolute hidden group-hover/sub:block top-0 bg-white border border-slate-200 shadow-[0_8px_24px_rgba(16,34,105,0.14)] rounded-lg py-2 min-w-[240px] z-[60] ${item.name === "Student's Life" ? 'right-full' : 'left-full'
                              }`}
                          >
                            {subItem.subDropdown.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.path}
                                className="block px-4 py-2.5 transition-colors text-sm text-slate-700 hover:bg-slate-50 hover:text-navy"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </>
                      ) : (
                        <a
                          href={subItem.path}
                          className="block px-4 py-2.5 transition-colors text-sm text-slate-700 hover:bg-slate-50 hover:text-navy"
                        >
                          {subItem.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.path} className="nav-link-item text-slate-700 hover:text-navy">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+919391114948"
          rel="noreferrer"
          className="hidden md:block border-none px-5 py-2.5 rounded-lg font-bold text-[13px] no-underline transition-all whitespace-nowrap bg-navy text-white hover:bg-navy-light hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(16,34,105,0.18)]"
        >
          <Phone className="w-4 h-4 inline mr-1" />
          Call Us
        </a>

        {/* Mobile Menu */}
        <MobileNavTrigger />
      </div>
    </nav>
  )
}
