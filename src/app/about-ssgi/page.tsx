/**
 * About Siva Sivani Group of Institutions (SSGI) — v2
 * ------------------------------------------------------
 * Built against the project's real tailwind.config.js — navy / purple-400 /
 * purple-600 / mist, Playfair Display (font-display) + DM Sans (font-body).
 *
 * WHY IMAGES WEREN'T SHOWING (v1):
 * They were hotlinked directly from ssim.ac.in's Next.js image-optimizer
 * endpoint. That endpoint (and/or the CDN in front of it) commonly blocks
 * requests whose Referer isn't the site itself — so a browser rendering
 * this page on a *different* domain gets a 403 and the <img> breaks. Fix:
 * download the images once into your own /public folder (script provided:
 * scripts/fetch-about-ssgi-images.mjs) and serve them from your own
 * domain. This component now points at local paths
 * (/images/about-ssgi/*.jpg) and every image has a graceful fallback — if
 * a file is missing it degrades to a themed icon panel instead of a
 * broken-image icon, so the page never looks broken while you're getting
 * the assets in place.
 *
 * WHAT CHANGED VISUALLY (v1 -> v2):
 * v1 leaned on one repeated pattern (rounded-2xl card, icon-in-circle,
 * plain section stacking) which is exactly what read as "basic." This
 * pass pushes the signature motif further and varies the structure:
 *  - Diploma-style corner brackets ("Corners") replace plain borders on
 *    every card — a real callback to a seal/certificate, not decoration.
 *  - Ghost numerals sit behind each timeline entry for typographic depth.
 *  - A scrolling fact ticker (using the project's own animate-ticker
 *    keyframe) sits right under the hero, echoing the recruiter-logo
 *    marquee pattern the real SSIM site already uses.
 *  - Section backgrounds alternate with an actual diagonal-cut divider
 *    (not just a flat color change) so the page has real rhythm.
 *  - A subtle dot-grid texture sits behind dark sections for depth.
 *  - Institution cards are numbered I–V (a real 5-item founding roster,
 *    so ordinal numbering is earned content here, not decoration).
 *
 * Drop in as e.g. src/sections/AboutSSGI.tsx (Vite/React, not Next.js).
 * Requires: framer-motion, lucide-react (already used elsewhere in the app).
 * Run `node scripts/fetch-about-ssgi-images.mjs` once to populate images.
 */
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Landmark,
  BookOpenCheck,
  Users,
  Award,
  Building2,
  Laptop,
  Quote,
  ShieldCheck,
  Handshake,
  Compass,
  Brain,
  HeartHandshake,
  Sprout,
  School,
  Microscope,
  Library,
  Trophy,
  Globe2,
  Briefcase,
  Lightbulb,
  Rocket,
  ClipboardCheck,
  MapPin,
  ChevronRight,
} from "lucide-react";

/* Local images from /public — each key matched to what it visually represents */
const IMG = {
  heroCampus:     "/Hero/Hero.webp",                    // Full campus aerial — hero background
  campusWide:     "/campus.webp",                        // Wide campus view — collage primary tile
  education:      "/Hero/Education.webp",                // Classroom / academic setting
  auditorium:     "/Hero/Auditorium.webp",               // Auditorium — vision section
  events:         "/Hero/Events.webp",                   // Cultural events / campus fest
  labs:           "/Hero/Labs.webp",                     // Labs — tech & innovation
  sports:         "/Hero/Sports.webp",                   // Sports grounds
  placements:     "/Hero/Placements.webp",               // Placement drives / convocation
  moments:        "/memorable-moment.webp",              // Campus life / memorable moments
  cultural:       "/cultural-showcase.webp",             // Cultural showcase
  celebration:    "/campus-celebration.webp",            // Campus celebration
  convocation:    "/SSIM-30th-Convocation-invitation.jpg", // 30th convocation photo
  aboutSsim:      "/about_ssim/aboutssim.webp",          // SSIM about page photo
  samaroh:        "/samaroh-2026.webp",                  // Samaroh 2026 event
};

/* ---------------------------------------------------------------------- */
/*  Motion presets                                                         */
/* ---------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const reveal = { initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, margin: "-80px" } };

/* ---------------------------------------------------------------------- */
/*  Image with graceful fallback (guards against missing local assets)    */
/* ---------------------------------------------------------------------- */

function SmartImage({
  src,
  alt,
  className,
  fallbackIcon: FallbackIcon = Building2,
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: any;
  overlay?: boolean;
}) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-navy-light to-navy-deep`}>
        <FallbackIcon className="h-10 w-10 text-purple-400/30" strokeWidth={1} />
      </div>
    );
  }
  return (
    <div className={`relative ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setBroken(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Corners — diploma / certificate corner brackets, the card-level        */
/*  callback to the seal motif. Wrap any relatively-positioned box.        */
/* ---------------------------------------------------------------------- */

function Corners({ tone = "purple-400" }: { tone?: "purple-400" | "pale" }) {
  const c = tone === "purple-400" ? "border-purple-400/60" : "border-purple-50/40";
  return (
    <>
      <span className={`pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 ${c} rounded-tl-md`} />
      <span className={`pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 ${c} rounded-tr-md`} />
      <span className={`pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 ${c} rounded-bl-md`} />
      <span className={`pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 ${c} rounded-br-md`} />
    </>
  );
}

/* Dot-grid texture for dark sections */
function DotTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: "radial-gradient(circle, #C084FC 1px, transparent 1px)", backgroundSize: "26px 26px" }}
    />
  );
}

/* Diagonal section divider — replaces flat color-to-color seams */
function DiagonalDivider({ fromColor, flip = false }: { fromColor: string; flip?: boolean }) {
  return (
    <div className={`relative h-14 ${flip ? "scale-y-[-1]" : ""}`} style={{ marginBottom: "-1px" }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L1440,40 L1440,56 L0,56 Z" fill={fromColor} />
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  The Seal — signature medallion motif                                   */
/* ---------------------------------------------------------------------- */

function Seal({ size = 56, tone = "purple-400" }: { size?: number; tone?: "purple-400" | "pale" }) {
  const ring = tone === "purple-400" ? "#C084FC" : "#FAF5FF";
  const fill = tone === "purple-400" ? "#4A1D6E" : "#581C87";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
      <circle cx="50" cy="50" r="47" fill={fill} stroke={ring} strokeWidth="2" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={ring} strokeWidth="1" strokeDasharray="2 4" />
      <path d="M50 22 L58 42 L79 42 L62 55 L69 76 L50 63 L31 76 L38 55 L21 42 L42 42 Z" fill={ring} opacity="0.9" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Reusable pieces                                                        */
/* ---------------------------------------------------------------------- */

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] uppercase ${dark ? "text-purple-300" : "text-purple-700"}`}>
      <span className={`h-px w-6 ${dark ? "bg-purple-300/70" : "bg-purple-700/70"}`} />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow, title, accent, sub, dark = false,
}: { eyebrow: string; title: string; accent?: string; sub?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <motion.div variants={fadeUp} {...reveal}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </motion.div>
      <WordPullUp
        tag="h2"
        words={accent ? `${title} ${accent}` : title}
        className={`mt-4 text-left text-[clamp(1.9rem,4vw,3.1rem)] font-medium normal-case leading-[1.08] tracking-normal drop-shadow-none ${dark ? "text-purple-50" : "text-black"}`}
      />
      {sub && (
        <motion.p variants={fadeUp} {...reveal} className={`font-body mt-4 text-[15px] leading-relaxed ${dark ? "text-purple-50/70" : "text-gray"}`}>
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function StatCard({ value, label, icon: Icon, i }: { value: string; label: string; icon: any; i: number }) {
  return (
    <motion.div
      variants={fadeUp} custom={i} {...reveal} whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-xl border border-purple-400/40 bg-navy-deep p-6"
    >
      <Corners />
      <span className="font-display pointer-events-none absolute -bottom-4 -right-2 text-7xl font-bold text-purple-400/[0.08]">
        {value.replace(/[^0-9]/g, "") || "★"}
      </span>
      <Icon className="relative h-6 w-6 text-purple-400" strokeWidth={1.5} />
      <div className="relative mt-5 text-3xl font-semibold text-purple-50">{value}</div>
      <div className="relative mt-1 text-[13px] text-purple-50/80">{label}</div>
    </motion.div>
  );
}

function ValueCard({ icon: Icon, label, i }: { icon: any; label: string; i: number }) {
  return (
    <motion.div
      variants={fadeUp} custom={i} {...reveal}
      className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white/60 px-5 py-4 backdrop-blur-sm transition-colors hover:border-purple-600/30 hover:bg-white"
    >
      <Icon className="h-5 w-5 shrink-0 text-purple-600" strokeWidth={1.5} />
      <span className="text-[14px] font-medium text-navy-deep">{label}</span>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc, i }: { icon: any; title: string; desc: string; i: number }) {
  return (
    <motion.div
      variants={fadeUp} custom={i} {...reveal} whileHover={{ y: -4 }}
      className="relative rounded-xl border border-navy/10 bg-purple-50 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_18px_40px_-20px_rgba(7,19,42,0.35)] hover:border-purple-600/25"
    >
      <Corners tone="purple-400" />
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-deep to-navy-light text-purple-400 ring-1 ring-purple-400/30">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-display mt-4 text-lg font-medium text-black">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-gray">{desc}</p>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */

const timeline = [
  { year: "1961", title: "English Preparatory School established", desc: "A modest beginning in a rented building at Sanathnagar, Hyderabad — the seed of the Group.", icon: Sprout },
  { year: "1960s–70s", title: "Siva Sivani Public School, Kompally", desc: "The preparatory school grows into the renowned Siva Sivani Public School at the heart of Kompally.", icon: School },
  { year: "Onward", title: "Formation of the educational group", desc: "Individual institutions come together as a single, growing educational ecosystem.", icon: Landmark },
  { year: "1992", title: "Siva Sivani Institute of Management founded", desc: "SSIM is established as one of the earliest AICTE-approved standalone PGDM institutions in the region.", icon: Building2 },
  { year: "2002", title: "Paperless classrooms", desc: "SSIM pioneers technology-enabled learning, among the first institutions in India to do so.", icon: Laptop },
  { year: "Today", title: "Nursery to PhD, one campus", desc: "A complete educational journey — school, junior college, degree, PGDM and doctoral study — within a single ecosystem.", icon: GraduationCap },
];

const institutions = [
  { roman: "I", name: "Siva Sivani Institute of Management", short: "SSIM", desc: "One of the earliest AICTE-approved standalone PGDM institutions in the region, established 1992.", since: "1992", link: "https://ssim.ac.in/" },
  { roman: "II", name: "Siva Sivani Degree College (Autonomous)", short: "SSDC · Kompally", desc: "Autonomous undergraduate education at the Kompally campus.", since: "—", link: "https://ssdc.ac.in/" },
  { roman: "III", name: "Siva Sivani Degree College", short: "Hyderabad", desc: "Undergraduate education extending the Group's reach across Hyderabad.", since: "—", link: "https://ssdchyderabad.ac.in/" },
  { roman: "IV", name: "Siva Sivani Junior College", short: "SSJC", desc: "Bridging school and undergraduate education within the same ecosystem.", since: "—", link: "https://www.ssjc.ac.in/" },
  { roman: "V", name: "SPS High School", short: "Siva Sivani Public School", desc: "The evolution of the original English Preparatory School, at the heart of Kompally.", since: "1961", link: "https://www.spsschool.ac.in/" },
];

const journey = [
  { label: "Nursery", icon: Sprout },
  { label: "School", icon: School },
  { label: "Junior College", icon: BookOpenCheck },
  { label: "Degree", icon: Library },
  { label: "PGDM", icon: Briefcase },
  { label: "Doctoral Programs", icon: Microscope },
];

const highlights = [
  { value: "60+", label: "Years of legacy", icon: Award },
  { value: "1961", label: "Founded", icon: Landmark },
  { value: "N–PhD", label: "Nursery to doctoral, one campus", icon: GraduationCap },
  { value: "5", label: "Institutions under one Group", icon: Building2 },
  { value: "1992", label: "SSIM established", icon: Trophy },
  { value: "2002", label: "Paperless classrooms pioneered", icon: Laptop },
  { value: "AICTE", label: "Approved PGDM programs", icon: ShieldCheck },
  { value: "Global", label: "Alumni presence", icon: Globe2 },
];

const whySSGI = [
  { icon: BookOpenCheck, title: "Academic Excellence", desc: "Six decades of consistent, rigorous academic standards across every level of study." },
  { icon: Briefcase, title: "Industry Integration", desc: "Curriculum shaped by real industry relevance, not classroom theory alone." },
  { icon: Users, title: "Experienced Faculty", desc: "Educators invested in the founder's original philosophy of service through teaching." },
  { icon: Building2, title: "Modern Infrastructure", desc: "A single campus built to support learning from the earliest years to doctoral research." },
  { icon: ShieldCheck, title: "Ethical Education", desc: "Discipline and integrity treated as outcomes of education, not just its conditions." },
  { icon: Compass, title: "Leadership Development", desc: "Programs designed to produce responsible leaders, not just qualified graduates." },
  { icon: HeartHandshake, title: "Student-Centric Learning", desc: "An ecosystem built around the student's complete journey, not isolated milestones." },
  { icon: Lightbulb, title: "Innovation Driven", desc: "A history of being early — from paperless classrooms to technology-enabled learning." },
];

const values = [
  { label: "Discipline", icon: ShieldCheck },
  { label: "Innovation", icon: Lightbulb },
  { label: "Leadership", icon: Compass },
  { label: "Teamwork", icon: Handshake },
  { label: "Excellence", icon: Award },
  { label: "Service", icon: HeartHandshake },
];

const philosophy = [
  { label: "Learn to Serve", icon: HeartHandshake },
  { label: "Integrity", icon: ShieldCheck },
  { label: "Leadership", icon: Compass },
  { label: "Knowledge", icon: Brain },
  { label: "Social Responsibility", icon: Globe2 },
  { label: "Holistic Growth", icon: Sprout },
];

const alumniStats = [
  { value: "Thousands", label: "Alumni worldwide" },
  { value: "Multiple", label: "Countries" },
  { value: "Diverse", label: "Industries" },
];

const alumniIndustries = ["Business Leadership", "Government & Public Service", "Academia", "Entrepreneurship", "Technology", "Healthcare"];

const tickerFacts = [
  "EST. 1961", "5 INSTITUTIONS", "NURSERY TO PhD", "AICTE APPROVED", "60+ YEARS LEGACY", "LEARN TO SERVE",
];



/* ---------------------------------------------------------------------- */
/*  Page                                                                   */
/* ---------------------------------------------------------------------- */

export default function AboutSSGIPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="font-body bg-purple-50 text-navy-deep">
      {/* ============================== HERO ============================== */}
      <section ref={heroRef} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep text-purple-50">
        <div className="absolute inset-0">
          <SmartImage src={IMG.heroCampus} alt="SSGI campus" className="h-full w-full opacity-45" overlay={false} fallbackIcon={Building2} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/85 to-navy-deep" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.22),transparent_55%)]" />
          <DotTexture />
          <motion.div style={{ y: heroY }} className="absolute right-[8%] top-[16%] h-40 w-40 animate-float rounded-full border border-purple-400/20" />
          <motion.div style={{ y: heroY }} className="absolute left-[6%] top-[55%] h-24 w-24 rotate-12 border border-purple-50/10" />
        </div>

        {/* announcement ribbon, echoes the real site's top bar */}
        <div className="relative border-b border-purple-400/10 bg-black/20 py-2 text-center backdrop-blur-sm">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-purple-300">
            S. P. SAMPATHY&apos;S SIVA SIVANI EDUCATIONAL SOCIETY &nbsp;·&nbsp; ESTABLISHED 1961
          </span>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-28"
        >
          <div>
            <motion.div variants={fadeUp} {...reveal} className="inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Seal size={22} />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-purple-400">About SSGI</span>
            </motion.div>

            <WordPullUp
              tag="h1"
              words="Siva Sivani Group of Institutions"
              className="mt-8 text-left text-[clamp(2.4rem,6vw,4.6rem)] font-medium normal-case leading-[1.04] tracking-normal drop-shadow-none"
            />

            <motion.p variants={fadeUp} custom={2} {...reveal} className="mt-5 text-[15px] font-semibold tracking-wide text-purple-300">
              Shaping futures since <span className="text-purple-400 font-bold">1961</span>
            </motion.p>

            <motion.p variants={fadeUp} custom={3} {...reveal} className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-purple-50/70">
              For more than six decades, SSGI has built a single, continuous educational ecosystem — from nursery to PhD — guided by one founding belief: education exists to serve. What began as a preparatory school in a rented Sanathnagar building is today a Group of institutions shaping students across business, government, academia and public life.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} {...reveal} className="mt-9 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-700">
                Explore Institutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-purple-50/25 px-6 py-3.5 text-[14px] font-semibold text-purple-50 transition-colors hover:border-purple-400/60 hover:text-purple-300">
                Our Legacy
              </button>
            </motion.div>
          </div>

          {/* collage — curated campus portfolio for the About page */}
          <motion.div variants={fadeUp} custom={2} {...reveal} className="relative h-[440px] lg:h-[540px]">
            {/* Largest tile — campus aerial, establishes place */}
            <div className="absolute left-0 top-0 h-[60%] w-[60%] -rotate-2 rounded-2xl border-2 border-purple-400/40 bg-navy-light p-1.5 shadow-2xl">
              <SmartImage src={IMG.campusWide} alt="SSIM campus" className="h-full w-full rounded-xl" fallbackIcon={Building2} />
            </div>
            {/* Top-right — SSIM's own About photo (official campus shot) */}
            <div className="absolute right-0 top-[4%] h-[42%] w-[44%] rotate-3 rounded-2xl border-2 border-purple-400/50 bg-navy-light p-1.5 shadow-2xl">
              <SmartImage src={IMG.aboutSsim} alt="SSIM Institute" className="h-full w-full rounded-xl" fallbackIcon={GraduationCap} />
            </div>
            {/* Bottom-left — classrooms, academic life */}
            <div className="absolute bottom-[6%] left-[6%] h-[38%] w-[40%] rotate-2 rounded-2xl border-2 border-purple-400/40 bg-navy-light p-1.5 shadow-2xl">
              <SmartImage src={IMG.education} alt="Classrooms" className="h-full w-full rounded-xl" fallbackIcon={Users} />
            </div>
            {/* Bottom-right — memorable campus life moments */}
            <div className="absolute bottom-0 right-[2%] h-[34%] w-[50%] -rotate-1 rounded-2xl border-2 border-purple-400/40 bg-navy-light p-1.5 shadow-2xl">
              <SmartImage src={IMG.moments} alt="Campus Life" className="h-full w-full rounded-xl" fallbackIcon={Award} />
            </div>
            {/* floating seal accent */}
            <div className="absolute -left-4 bottom-[30%] animate-float rounded-full bg-navy-deep p-2 shadow-xl">
              <Seal size={40} />
            </div>
          </motion.div>
        </motion.div>

        {/* fact strip */}
        <div className="relative mt-auto border-t border-purple-400/15 bg-black/30 py-3">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 px-6">
            {tickerFacts.map((f, i) => (
              <span key={i} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-purple-50/70">
                {f}
                {i < tickerFacts.length - 1 && <span className="text-purple-400/40">✦</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TIMELINE ============================ */}
      <section className="relative bg-purple-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Legacy" title="Six decades, one" accent="unbroken story" sub="From a rented preparatory school to a full educational Group — every milestone built on the one before it." />

          <div className="relative mt-20">
            <div className="absolute left-[27px] top-0 hidden h-full w-px bg-gradient-to-b from-purple-400/60 via-purple-600/40 to-purple-400/10 md:block lg:left-1/2" />
            <div className="space-y-14">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year} variants={fadeUp} custom={i} {...reveal}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-start ${i % 2 === 1 ? "lg:flex-row-reverse lg:text-right" : ""}`}
                >
                  <div className="flex items-center gap-4 md:w-14 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-purple-400 bg-navy-deep text-purple-400 shadow-[0_0_0_6px_rgba(250,245,255,1)]">
                      <item.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`relative flex-1 overflow-hidden rounded-xl border border-navy/10 bg-white/70 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-sm transition-shadow hover:shadow-[0_20px_45px_-24px_rgba(7,19,42,0.4)] md:ml-0 ${i % 2 === 1 ? "lg:ml-auto lg:mr-[54%]" : "lg:mr-auto lg:ml-[54%]"} lg:max-w-md`}
                  >
                    <Corners />
                    <span className={`font-display pointer-events-none absolute -top-6 text-6xl font-bold text-navy-deep/[0.05] ${i % 2 === 1 ? "lg:right-2" : "right-2"}`}>
                      {item.year.replace(/\D/g, "").slice(0, 4) || "★"}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-600">{item.year}</span>
                    <h3 className="font-display mt-2 text-xl font-medium text-black">{item.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-gray">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="#4A1D6E" />

      {/* ============================ FOUNDER ============================= */}
      <section className="relative overflow-hidden bg-navy-deep px-6 py-28 text-purple-50 lg:px-10">
        <DotTexture />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow dark>Visionary Founder</Eyebrow>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div variants={fadeUp} {...reveal} className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2.2rem] border border-purple-400/20" />
              <div className="absolute inset-0 rounded-[2rem] border-2 border-purple-400/30 bg-gradient-to-br from-navy-light to-navy-deep" />
              <div className="absolute inset-6 overflow-hidden rounded-[1.5rem] border border-purple-400/20 bg-navy-light/60">
                <SmartImage src="/about_ssim/sampathy.jpg" alt="Late Sri S. P. Sampathy" className="h-full w-full" overlay={false} />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[80%] -translate-x-1/2 rounded-xl border border-purple-400/25 bg-navy-deep px-4 py-3 text-center shadow-xl">
                <p className="font-display text-[15px] font-medium text-purple-50">Late Sri S. P. Sampathy</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">Founder, 1961</p>
              </div>
            </motion.div>

            <div>
              <motion.p variants={fadeUp} custom={1} {...reveal} className="text-[15px] leading-relaxed text-purple-50/70">
                Late Sri S. P. Sampathy built the Group from a single rented classroom into an institution trusted by generations of families. His belief in discipline, teamwork, innovation and excellence still shapes how SSGI teaches today.
              </motion.p>

              <motion.blockquote variants={fadeUp} custom={2} {...reveal} className="relative mt-8 overflow-hidden rounded-xl border border-purple-400/25 bg-white/5 p-8 backdrop-blur-sm">
                <Quote className="pointer-events-none absolute -right-4 -top-6 h-32 w-32 text-purple-400/[0.06]" fill="currentColor" strokeWidth={0} />
                <Quote className="relative h-8 w-8 text-purple-400" fill="currentColor" strokeWidth={0} />
                <p className="font-display relative mt-3 text-[clamp(1.3rem,2.4vw,1.8rem)] italic leading-snug text-purple-50">
                  &ldquo;Nothing is impossible for those who think they can.&rdquo;
                </p>
              </motion.blockquote>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {values.map((v, i) => (
                  <motion.div key={v.label} variants={fadeUp} custom={i} {...reveal} className="flex items-center gap-2 rounded-xl border border-purple-400/20 bg-white/[0.04] px-4 py-3 transition-colors hover:border-purple-400/50">
                    <v.icon className="h-4 w-4 text-purple-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-purple-50/90">{v.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= VISION & PHILOSOPHY ======================= */}
      <section className="bg-mist px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} {...reveal} className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute -inset-4 rounded-full border border-purple-400/15" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-purple-400/30 shadow-2xl">
              <SmartImage src={IMG.auditorium} alt="SSGI Auditorium" className="h-full w-full" fallbackIcon={Compass} overlay={false} />
              <div className="absolute inset-0 bg-navy-deep/25" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-deep/85 shadow-xl backdrop-blur-sm ring-2 ring-purple-400/30">
                <Compass className="h-10 w-10 text-purple-400" strokeWidth={1} />
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading eyebrow="Vision & Philosophy" title="Educated to" accent="serve" sub="'Learn to Serve' is not a tagline — it is the working philosophy that shapes every programme the Group runs, from nursery through doctoral study." />
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {philosophy.map((p, i) => <ValueCard key={p.label} icon={p.icon} label={p.label} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ SSGI TODAY =========================== */}
      <section className="bg-purple-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="SSGI Today" title="Five institutions," accent="one ecosystem" sub="Together, these institutions carry a student from their earliest years to postgraduate management education and doctoral study." />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {institutions.map((inst, i) => (
              <motion.a
                href={inst.link} target="_blank" rel="noopener noreferrer"
                key={inst.name} variants={fadeUp} custom={i} {...reveal} whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white/70 p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all hover:border-purple-600/30 hover:shadow-[0_24px_50px_-28px_rgba(7,19,42,0.4)]"
              >
                <Corners />
                <span className="font-display pointer-events-none absolute -bottom-3 -right-1 text-8xl font-bold text-navy-deep/[0.04]">{inst.roman}</span>
                <div className="relative flex items-start justify-between">
                  <Seal size={44} />
                  <span className="text-[11px] font-semibold text-purple-600">{inst.since}</span>
                </div>
                <h3 className="font-display relative mt-5 text-lg font-medium text-black">{inst.name}</h3>
                <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-600">{inst.short}</p>
                <p className="relative mt-3 flex-1 text-[13.5px] leading-relaxed text-gray">{inst.desc}</p>
                <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-navy-deep transition-colors group-hover:text-purple-600">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= EDUCATION JOURNEY ======================= */}
      <section className="relative overflow-hidden bg-navy-deep px-6 py-28 text-purple-50 lg:px-10">
        <DotTexture />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading dark eyebrow="One Ecosystem" title="A complete educational" accent="journey" sub="A student can move through every stage of their education without ever leaving the ecosystem the Group has built." />

          <div className="mt-16 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {journey.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center gap-3">
                <motion.div variants={fadeUp} custom={i} {...reveal} className="relative flex flex-1 flex-col items-center gap-3 overflow-hidden rounded-xl border border-purple-400/20 bg-white/[0.03] px-5 py-7 text-center transition-colors hover:border-purple-400/50">
                  <Corners tone="pale" />
                  <step.icon className="relative h-6 w-6 text-purple-400" strokeWidth={1.5} />
                  <span className="relative text-[15px] font-bold text-white">{step.label}</span>
                </motion.div>
                {i < journey.length - 1 && <ChevronRight className="hidden h-5 w-5 shrink-0 text-purple-400/50 lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider fromColor="#6B21A8" />

      {/* ========================== KEY HIGHLIGHTS ========================= */}
      <section className="relative overflow-hidden bg-navy px-6 py-24 lg:px-10">
        <DotTexture />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow dark>By the numbers</Eyebrow>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {highlights.map((h, i) => <StatCard key={h.label} value={h.value} label={h.label} icon={h.icon} i={i} />)}
          </div>
        </div>
      </section>

      {/* ============================= WHY SSGI ============================ */}
      <section className="bg-purple-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why SSGI" title="Built for the" accent="whole student" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whySSGI.map((f, i) => <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} i={i} />)}
          </div>
        </div>
      </section>

      {/* ======================== ACADEMIC INNOVATION ====================== */}
      <section className="bg-mist px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Academic Innovation" title="Early by" accent="instinct" sub="SSIM pioneered paperless classrooms in 2002 — one of the first institutions in India to do so — and that instinct to move early continues to shape how the Group teaches." />
          <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { year: "2002", title: "Paperless Classrooms", desc: "Among the first in India to fully embrace technology-enabled learning.", icon: Laptop },
              { year: "Ongoing", title: "Technology-Enabled Learning", desc: "Classrooms designed around tools students will actually use professionally.", icon: Rocket },
              { year: "Ongoing", title: "Industry-Oriented Education", desc: "Curriculum built with the realities of Indian and global industry in view.", icon: Briefcase },
              { year: "Ongoing", title: "Future-Ready Curriculum", desc: "Programmes designed to evolve rather than stay fixed to one era.", icon: Compass },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} {...reveal} whileHover={{ y: -4 }} className="relative flex gap-5 overflow-hidden rounded-xl border border-navy/10 bg-white/70 p-6 transition-shadow hover:shadow-[0_20px_45px_-26px_rgba(7,19,42,0.4)]">
                <Corners />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-deep to-navy-light text-purple-400 ring-1 ring-purple-400/30">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-600">{item.year}</span>
                  <h3 className="font-display mt-1 text-lg font-medium text-black">{item.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-gray">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ ALUMNI IMPACT ======================== */}
      <section className="relative overflow-hidden bg-navy-deep px-6 py-28 text-purple-50 lg:px-10">
        <DotTexture />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading dark eyebrow="Alumni Impact" title="Carrying the Group's name" accent="across the world" sub="Six decades of graduates have gone on to lead in business, government, academia, entrepreneurship, technology, healthcare and public service." />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {alumniStats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i} {...reveal} className="relative overflow-hidden rounded-xl border border-purple-400/20 bg-white/[0.04] p-8 text-center">
                <Corners tone="pale" />
                <div className="font-display text-4xl font-medium text-purple-300">{s.value}</div>
                <div className="mt-2 text-[13px] text-purple-50/60">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {alumniIndustries.map((tag, i) => (
              <motion.span key={tag} variants={fadeUp} custom={i} {...reveal} whileHover={{ scale: 1.04 }} className="rounded-full border border-purple-400/25 bg-white/[0.03] px-4 py-2 text-[13px] text-purple-50/80">
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CAMPUS EXPERIENCE ======================= */}
      <section className="bg-purple-50 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Campus Experience" title="Life across the" accent="ecosystem" sub="Every corner of the campus tells a different part of the SSGI story." />
          <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Campus",       image: IMG.campusWide,   span: "col-span-2 row-span-2" },
              { label: "Education",    image: IMG.education,     span: "" },
              { label: "Labs",         image: IMG.labs,          span: "" },
              { label: "Students",     image: IMG.moments,       span: "" },
              { label: "Sports",       image: IMG.sports,        span: "" },
              { label: "Events",       image: IMG.events,        span: "col-span-2" },
              { label: "Cultural",     image: IMG.cultural,      span: "" },
              { label: "Placements",   image: IMG.placements,    span: "" },
            ].map((g, i) => (
              <motion.div key={g.label} variants={fadeUp} custom={i} {...reveal} whileHover={{ scale: 1.02 }}
                className={`group relative flex items-end overflow-hidden rounded-xl border border-navy/10 ${g.span}`}>
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <SmartImage src={g.image} alt={g.label} className="h-full w-full" fallbackIcon={Building2} />
                </div>
                <span className="relative z-10 p-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{g.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= LEADERSHIP MESSAGE ====================== */}
      <section className="relative overflow-hidden bg-purple-600 px-6 py-28 text-purple-50 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <motion.div variants={fadeUp} {...reveal} className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-purple-50/15 bg-white/[0.06] p-10 text-center backdrop-blur-md sm:p-14">
          <Quote className="pointer-events-none absolute -left-6 -top-8 h-40 w-40 text-white/[0.05]" fill="currentColor" strokeWidth={0} />
          <Quote className="relative mx-auto h-10 w-10 text-purple-300" fill="currentColor" strokeWidth={0} />
          <p className="font-display relative mt-6 text-[clamp(1.4rem,3vw,2.1rem)] italic leading-snug">
            Continuing the founder&apos;s vision, the Group remains committed to education that builds competent professionals, responsible citizens, and future leaders.
          </p>
          <a href="https://ssim.ac.in/about/message-from-leaders" className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-700">
            Meet the Leadership <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ================================ CTA ============================== */}
      <section className="relative overflow-hidden bg-navy-deep px-6 py-20 text-center text-purple-50 lg:px-10">
        <DotTexture />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 rounded-full border border-purple-400/20" />
        <motion.div variants={fadeUp} {...reveal} className="relative mx-auto max-w-3xl">
          <Seal size={48} />
          <h2 className="font-display mx-auto mt-6 max-w-2xl text-[clamp(1.8rem,4.4vw,3rem)] font-medium leading-tight">
            Become part of a legacy that has been inspiring generations since <span className="text-purple-400">1961</span>
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-purple-600 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-700">Explore Institutions</button>
            <button className="rounded-full border border-purple-50/25 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-purple-400/60 hover:text-purple-300">Apply Now</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-purple-50/25 px-6 py-3.5 text-[14px] font-semibold transition-colors hover:border-purple-400/60 hover:text-purple-300">
              <MapPin className="h-4 w-4" /> Visit Campus
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}