"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const eras = [
  {
    year: "1992",
    label: "The Beginning",
    icon: "🏛️",
    events: ["Establishment of SSIM, Hyderabad", "Launch of flagship PGDM (40 students)"],
  },
  {
    year: "Mid-1990s",
    label: "Early Growth",
    icon: "📐",
    events: ["Multiple PGDM specialisations introduced", "Campus expansion — hostels, blocks, library"],
  },
  {
    year: "2007",
    label: "Specialisation Era",
    icon: "🏦",
    events: ["Launch of PGDM Banking, Insurance & Financial Services"],
  },
  {
    year: "2010–2014",
    label: "Infrastructure",
    icon: "🏗️",
    events: ["Academic & residential expansion", "Enhanced corporate relations for placements"],
  },
  {
    year: "2015–2018",
    label: "Accreditation",
    icon: "🎓",
    events: ["NAAC Accreditation for PGDM", "PGDM curriculum revision", "Digital tools & e-learning integration"],
  },
  {
    year: "2020–2022",
    label: "Alumni Milestone",
    icon: "🌐",
    events: ["5000+ alumni milestone", "Domain-based specialisations: Marketing | HR | Finance | Analytics", "Stronger industry collaborations"],
  },
  {
    year: "2023–2025",
    label: "Future-Ready",
    icon: "🚀",
    events: ["Curriculum modernisation: Analytics, FinTech, Digital", "Near full placements for major batches", "Triple Specialisation: Major • Minor • Sectoral"],
  },
];

function EraCard({ era, index, above }: { era: (typeof eras)[0]; index: number; above: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: above ? -30 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Card */}
      <div
        className={`w-[148px] rounded-xl border border-[rgba(213,231,255,0.13)] bg-[rgba(213,231,255,0.06)] p-3 hover:bg-[rgba(213,231,255,0.11)] hover:border-[#521092]/30 transition-all duration-300 ${
          above ? "mb-4" : "mt-4 order-last"
        }`}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-base">{era.icon}</span>
          <div>
            <div className="text-[#d74dec] font-extrabold text-[12px] leading-tight">{era.year}</div>
            <div className="text-[rgba(213,231,255,0.38)] text-[8.5px] uppercase tracking-widest">{era.label}</div>
          </div>
        </div>
        <div className="h-px bg-[rgba(213,231,255,0.09)] mb-2" />
        <ul className="space-y-1">
          {era.events.map((e, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.2 + j * 0.07 }}
              className="flex items-start gap-1.5 text-[10.5px] text-[rgba(213,231,255,0.68)] leading-[1.45]"
            >
              <span className="mt-[4px] w-[3px] h-[3px] rounded-full bg-[#d74dec] shrink-0" />
              {e}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Stem */}
      <motion.div
        className={`w-[1px] bg-[rgba(147,197,253,0.3)] ${above ? "" : "order-first"}`}
        style={{ height: 28 }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.05, duration: 0.3 }}
      />

      {/* Dot */}
      <motion.div
        className={`relative z-10 ${above ? "" : "order-none"}`}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 16, delay: index * 0.1 + 0.1 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[#d74dec]/20"
          animate={{ scale: [1, 2.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        />
        <div className="w-4 h-4 rounded-full bg-[#d74dec] border-[3px] border-[#521092] shadow-[0_0_12px_3px_rgba(147,197,253,0.35)]" />
      </motion.div>
    </motion.div>
  );
}

export default function Timeline() {
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#521092] relative px-4 lg:px-[60px] py-[80px] overflow-hidden">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[300px] rounded-full opacity-[0.04] blur-[80px] bg-[#d74dec]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.04] blur-[80px] bg-[#d74dec]" />
      </div>

      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
      >
        <span className="inline-block bg-[rgba(213,231,255,0.1)] text-[#d74dec] text-[12px] font-bold px-4 py-[5px] rounded-full uppercase tracking-[1px] mb-4 border border-[rgba(213,231,255,0.12)]">
          Our Journey
        </span>
        <h2
          className="font-playfair text-white leading-[1.2] mb-3"
          style={{ fontSize: "clamp(28px,4vw,48px)" }}
        >
          Siva Sivani Institute of Management — <span className="text-[#d74dec]">Journey</span>
        </h2>
        <p className="text-[rgba(213,231,255,0.5)] text-[15px]">Crafting Careers Since 1992</p>
      </motion.div>

      {/* ── Desktop Horizontal Timeline ── */}
      <div className="hidden lg:block relative z-10" ref={lineRef}>
        {/* Above cards */}
        <div className="flex justify-between px-2 mb-0">
          {eras.map((era, i) =>
            i % 2 === 0 ? (
              <EraCard key={i} era={era} index={i} above={true} />
            ) : (
              // Spacer for below-cards
              <div key={i} className="w-[148px] flex flex-col items-center">
                <div style={{ height: "calc(100% - 44px)" }} />
                <div className="h-7 w-[1px]" />
                <div className="w-4 h-4" />
              </div>
            )
          )}
        </div>

        {/* The line */}
        <div className="relative flex items-center mx-2 -mt-4 -mb-4">
          <motion.div
            className="h-[2px] w-full origin-left rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgba(147,197,253,0.05), rgba(147,197,253,0.5) 15%, rgba(147,197,253,0.5) 85%, rgba(147,197,253,0.05))",
              boxShadow: "0 0 8px 2px rgba(147,197,253,0.12)",
            }}
            initial={{ scaleX: 0 }}
            animate={lineInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          />
          {/* Arrow */}
          <motion.div
            className="absolute right-0 translate-x-2"
            initial={{ opacity: 0 }}
            animate={lineInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            <div
              className="w-0 h-0"
              style={{
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "10px solid rgba(147,197,253,0.5)",
              }}
            />
          </motion.div>
        </div>

        {/* Below cards */}
        <div className="flex justify-between px-2 mt-0">
          {eras.map((era, i) =>
            i % 2 !== 0 ? (
              <EraCard key={i} era={era} index={i} above={false} />
            ) : (
              <div key={i} className="w-[148px]" />
            )
          )}
        </div>
      </div>

      {/* ── Mobile: horizontal scrollable ── */}
      <div className="lg:hidden overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-4 w-max px-2">
          {eras.map((era, i) => (
            <div key={i} className="flex flex-col gap-2 w-[180px] shrink-0">
              {/* Dot + line */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#d74dec] shadow-[0_0_8px_2px_rgba(147,197,253,0.4)] shrink-0" />
                <div className="h-[1px] flex-1 bg-[rgba(147,197,253,0.25)]" />
              </div>
              {/* Card */}
              <div className="rounded-xl border border-[rgba(213,231,255,0.13)] bg-[rgba(213,231,255,0.06)] p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span>{era.icon}</span>
                  <div>
                    <div className="text-[#d74dec] font-extrabold text-[12px]">{era.year}</div>
                    <div className="text-[rgba(213,231,255,0.38)] text-[8px] uppercase tracking-widest">{era.label}</div>
                  </div>
                </div>
                <div className="h-px bg-[rgba(213,231,255,0.09)] mb-1.5" />
                <ul className="space-y-1">
                  {era.events.map((e, j) => (
                    <li key={j} className="flex items-start gap-1 text-[11px] text-[rgba(213,231,255,0.7)] leading-[1.4]">
                      <span className="mt-[4px] w-[3px] h-[3px] rounded-full bg-[#d74dec] shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer badge */}
      <motion.div
        className="flex justify-center mt-14 relative z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="px-7 py-3 rounded-full bg-[rgba(213,231,255,0.08)] border border-[rgba(213,231,255,0.18)] text-[#d74dec] text-[13px] font-semibold tracking-wider">
          🚀 The Journey Continues...
        </div>
      </motion.div>
    </section>
  );
}
