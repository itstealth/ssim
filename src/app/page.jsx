import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'

const SectionLoader = ({ height = "min-h-[200px]" }) => (
  <div className={`w-full ${height}`} />
);

const Recruiters = dynamic(() => import('./secondHome/components/Recruiters'), {
  loading: () => <SectionLoader height="min-h-[120px]" />,
});

const About = dynamic(() => import('./secondHome/components/About'), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

const Timeline = dynamic(() => import('./secondHome/components/Timeline'), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
});

const Programs = dynamic(() => import('./secondHome/components/Programs'), {
  loading: () => <SectionLoader height="min-h-[500px]" />,
});

const CampusLife = dynamic(() => import('./secondHome/components/CampusLife'), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

const Scholarship = dynamic(() => import('./secondHome/components/Scholarship'), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
});

const StatsBanner = dynamic(() => import('./secondHome/components/StatsBanner'), {
  loading: () => <SectionLoader height="min-h-[150px]" />,
});

const Placements = dynamic(() => import('./secondHome/components/Placements'), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

const WhySSIM = dynamic(() => import('./secondHome/components/WhySSIM'), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
});

const Faculty = dynamic(() => import('./secondHome/components/Faculty'), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

const Research = dynamic(() => import('./secondHome/components/Research'), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

const SSIMStories = dynamic(() => import('./secondHome/components/SSIMStories'), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
});

const PlacementStories = dynamic(() => import('@/sections/Home/PlacementStories'), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
});

const IndustryExperts = dynamic(() => import('./secondHome/components/IndustryExperts'), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
});

const AlumniSection = dynamic(() => import('@/sections/Home/AlumniSection'), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
});

const HomeFAQ = dynamic(() => import('./secondHome/components/HomeFAQ'), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
});

const CTASection = dynamic(() => import('./secondHome/components/CTASection'), {
  loading: () => <SectionLoader height="min-h-[250px]" />,
});

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
      <PlacementStories />
      <WhySSIM />
      <Faculty />
      <Research />
      <SSIMStories />
      <IndustryExperts />
      <AlumniSection />
      <HomeFAQ />
      <CTASection />
    </>
  );
}