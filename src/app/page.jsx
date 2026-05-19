import HeroSection from '@/components/HeroSection'
import Recruiters from './secondHome/components/Recruiters'
import About from './secondHome/components/About'
import Timeline from './secondHome/components/Timeline'
import Programs from './secondHome/components/Programs'
import CampusLife from './secondHome/components/CampusLife'
import Scholarship from './secondHome/components/Scholarship'
import StatsBanner from './secondHome/components/StatsBanner'
import Placements from './secondHome/components/Placements'
import WhySSIM from './secondHome/components/WhySSIM'
import Faculty from './secondHome/components/Faculty'
import SSIMStories from './secondHome/components/SSIMStories'
import Testimonials from './secondHome/components/Testimonials'
import CTASection from './secondHome/components/CTASection'

export default function SecondHome() {
  return (
    <>
      <HeroSection />
      <Recruiters />
      <About />
      <Timeline />
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
    </>
  )
}