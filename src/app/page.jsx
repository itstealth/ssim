/**
 * page.jsx — Server Component (homepage root)
 *
 * RENDERING STRATEGY:
 * Above-fold sections (HeroSection, Recruiters, About, Programs, CampusLife,
 * Scholarship, StatsBanner) are rendered as Server Components or with ssr:true.
 * Their HTML arrives in the initial response so the browser can paint them
 * immediately without waiting for any JavaScript to load.
 *
 * Below-fold client-only sections (framer-motion animations, carousels, etc.)
 * are isolated in <HomeClient> which uses ssr:false dynamic imports.
 * This means their JavaScript bundles are NOT in the initial payload — they
 * download and execute only after the hero image has already been painted.
 *
 * NOTE: `ssr: false` is only valid inside Client Components (Next.js App Router
 * restriction). That is why those sections live in HomeClient.jsx.
 */
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
// import HomepagePopup from "@/components/HomepagePopup";
import HomeClient from "./HomeClient";

const SectionLoader = ({ height = "min-h-[200px]" }) => (
  <div className={`w-full ${height}`} />
);

// Keep the sections directly under the hero in server-rendered HTML.
const Recruiters = dynamic(() => import("./secondHome/components/Recruiters"), {
  loading: () => <SectionLoader height="min-h-[120px]" />,
});

const About = dynamic(() => import("./secondHome/components/About"), {
  loading: () => <SectionLoader height="min-h-[400px]" />,
});

export default function SecondHome() {
  return (
    <>
      {/* <HomepagePopup /> */}
      {/* LCP element — rendered directly, no dynamic wrapper, no SSR delay */}
      <HeroSection />

      {/* Above-fold server sections — HTML in initial response */}
      <Recruiters />
      <About />

      {/* Below-fold client-only sections — loaded after hero paints.
          All ssr:false dynamic imports are inside HomeClient (a Client Component)
          because ssr:false is not allowed in Server Components. */}
      <HomeClient />

    </>
  );
}
