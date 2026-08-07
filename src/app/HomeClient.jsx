"use client";
/**
 * HomeClient — Client Component wrapper for all below-fold sections that:
 *   1. Require browser APIs (useState, useEffect, useRef, event listeners)
 *   2. Import framer-motion (motion, useInView, AnimatePresence)
 *   3. Import heavy carousel libraries (embla-carousel)
 *
 * WHY THIS EXISTS:
 * `ssr: false` is only valid inside Client Components in Next.js App Router.
 * By grouping all below-fold client sections here, we can exclude their JS
 * bundles from the initial server render payload entirely.
 * The hero image (rendered above this component in page.jsx) is painted by
 * the browser before any of this JavaScript is downloaded or executed.
 *
 * WHAT THIS DOES TO LCP:
 * The combined JS of these sections (framer-motion, embla-carousel, Radix UI
 * accordion, etc.) previously ran during the LCP window because they were
 * either SSR'd or in the critical bundle. Now they load asynchronously after
 * the first paint.
 */
import dynamic from "next/dynamic";

const SectionLoader = ({ height = "min-h-[200px]" }) => (
  <div className={`w-full ${height}`} />
);

// Timeline: framer-motion (motion + useInView)
const Timeline = dynamic(() => import("./secondHome/components/Timeline"), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
  ssr: false,
});

// Placements: useState + image carousel
const Placements = dynamic(() => import("./secondHome/components/Placements"), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
  ssr: false,
});

// WhySSIM: useEffect + useRef for intersection animations
const WhySSIM = dynamic(() => import("./secondHome/components/WhySSIM"), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
  ssr: false,
});

// Faculty: useRef + useEffect + heavy data processing
const Faculty = dynamic(() => import("./secondHome/components/Faculty"), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
  ssr: false,
});

// Research: useEffect for API data fetching
const Research = dynamic(() => import("./secondHome/components/Research"), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
  ssr: false,
});

// SSIMStories: WordPullUp → framer-motion + Radix Dialog
const SSIMStories = dynamic(() => import("./secondHome/components/SSIMStories"), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
  ssr: false,
});

// PlacementStories: embla-carousel + complex state
const PlacementStories = dynamic(() => import("@/sections/Home/PlacementStories"), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
  ssr: false,
});

// IndustryExperts: heavy image grid with lazy loading
const IndustryExperts = dynamic(() => import("./secondHome/components/IndustryExperts"), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
  ssr: false,
});

// AlumniSection: embla-carousel autoplay
const AlumniSection = dynamic(() => import("@/sections/Home/AlumniSection"), {
  loading: () => <SectionLoader height="min-h-[350px]" />,
  ssr: false,
});

// HomeFAQ: useState-based accordion
const HomeFAQ = dynamic(() => import("./secondHome/components/HomeFAQ"), {
  loading: () => <SectionLoader height="min-h-[300px]" />,
  ssr: false,
});

export default function HomeClient() {
  return (
    <>
      <Timeline />
      <Placements />
      <WhySSIM />
      <Faculty />
      <Research />
      <SSIMStories />
      <PlacementStories />
      <IndustryExperts />
      <AlumniSection />
      <HomeFAQ />
    </>
  );
}
