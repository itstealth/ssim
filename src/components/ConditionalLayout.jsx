import TopBar from '@/sections/Header/TopBar'
import Navbar from '@/app/secondHome/components/Navbar'
import { ConditionalFooter, ConditionalHeader } from './ConditionalLayoutChrome'

export default function ConditionalLayout({ children }) {
  const header = (
    <header className="relative z-50">
      <div className="hidden md:block"><TopBar /></div>
      <Navbar />
    </header>
  )

  return (
    <>
      <ConditionalHeader>{header}</ConditionalHeader>
      <main>{children}</main>
      <ConditionalFooter />
    </>
  )
}
