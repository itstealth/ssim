import HeroSection from '@/components/HeroSection'
import AccredBar from './components/AccredBar'
import About from './components/About'
import Programs from './components/Programs'
import CampusLife from './components/CampusLife'
import Scholarship from './components/Scholarship'
import StatsBanner from './components/StatsBanner'
import Placements from './components/Placements'
import Recruiters from './components/Recruiters'
import WhySSIM from './components/WhySSIM'
import Faculty from './components/Faculty'
import SSIMStories from './components/SSIMStories'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
// import Footer from './components/Footer'

export default function SecondHome() {
  return (
    <>
      <HeroSection />
      <AccredBar />
      <About />
      <Programs />
      <CampusLife />
      <Scholarship />
      <StatsBanner />
      <Placements />
      <Recruiters />
      <WhySSIM />
      <Faculty />
      <SSIMStories />
      {/* <Testimonials /> */}
      <CTASection />
      {/* <Footer /> */}
    </>
  )
}