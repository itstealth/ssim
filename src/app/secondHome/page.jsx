import TopBar from '@/pages/Header/TopBar'
import BannerNav from '@/pages/Header/BannerNav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AccredBar from './components/AccredBar'
import About from './components/About'
import Programs from './components/Programs'
import CampusLife from './components/CampusLife'
import Scholarship from './components/Scholarship'
import StatsBanner from './components/StatsBanner'
import Placements from './components/Placements'
import WhySSIM from './components/WhySSIM'
import Faculty from './components/Faculty'
import SSIMStories from './components/SSIMStories'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function SecondHome() {
  return (
    <>
      <TopBar />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <BannerNav />
      </div>
      <Hero />
      <AccredBar />
      <About />
      <Programs />
      <CampusLife />
      <Scholarship />
      <StatsBanner />
      <Placements />
      <WhySSIM />
      <Faculty />
      <SSIMStories />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}
