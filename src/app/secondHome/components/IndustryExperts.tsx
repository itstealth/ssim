"use client";

import React from "react";
import Image from "next/image";

/**
 * IndustryExperts
 * -----------------
 * A dark-purple "meet the experts" section with two profile cards
 * and a bottom stats strip.
 *
 * Usage:
 *   import IndustryExperts from "@/components/IndustryExperts";
 *   <IndustryExperts />
 *
 * Swap the `image` field in the `experts` array with your own photo paths
 * (e.g. "/experts/chakravarthy.jpg") — place images in your `public/` folder.
 */

const experts = [
  {
    name: "Dr. N.R.K.S. Chakravarthy",
    title: "Deputy Director | SSIM",
    image: "/industry-expert/nrks-chakravarthy.png",
    bio: "Bringing nearly 30 years of distinguished experience in Business Excellence, Leadership Development, Customer Experience, and Organizational Transformation, Dr. N.R.K.S. Chakravarthy combines global corporate leadership with academic excellence to develop future-ready management professionals.",
    sections: [
      {
        heading: "Areas of Expertise",
        icon: "target",
        items: [
          { icon: "chart", text: "Business Excellence & Organizational Transformation" },
          { icon: "coach", text: "Leadership Development & Executive Coaching" },
          { icon: "people", text: "Customer Experience & Digital Transformation" },
          { icon: "project", text: "Project & Program Management" },
          { icon: "gear", text: "Operational Excellence & Six Sigma" },
        ],
      },
    ],
  },
  {
    name: "Dr. Ravi Dasari",
    title: "Professor of Practice | SSIM",
    image: "/industry-expert/ravi-desari.png",
    bio: "Bringing over 30 years of distinguished experience in Human Resources, Leadership Development, and Talent Management, Dr. Ravi Dasari blends industry expertise with academic excellence to prepare future-ready leaders.",
    sections: [
      {
        heading: "Academic Excellence",
        icon: "cap",
        items: [
          { text: "Ph.D. in Human Resource Management" },
          { text: "University Topper" },
          { text: "MBA | Master's in HRM" },
        ],
      },
      {
        heading: "Certified Leadership Expert",
        icon: "medal",
        items: [
          { text: "Marshall Goldsmith Executive Coach" },
          { text: "ICF Certified Coach" },
          { text: "IBM – Generative AI" },
          { text: "Cornell University" },
          { text: "University of Pennsylvania" },
        ],
      },
    ],
  },
];

const stats = [
  { icon: "clock", value: "30+", label: "Years of Experience" },
  { icon: "globe", value: "Global", label: "Corporate Exposure" },
  { icon: "cap", value: "Academic", label: "Excellence" },
  { icon: "book", value: "Industry", label: "Relevant Insights" },
];

/* ---------------- Icons ---------------- */

function Icon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-4 4" />
        </svg>
      );
    case "coach":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 21v-1a7 7 0 0114 0v1" />
          <path d="M19 8l2 2-2 2" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 21v-1a6 6 0 0112 0v1" />
          <path d="M15 21v-.5a5 5 0 016-4.8" />
        </svg>
      );
    case "project":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 10h16M10 4v16" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case "cap":
      return (
        <svg {...common}>
          <path d="M2 9l10-5 10 5-10 5-10-5z" />
          <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
        </svg>
      );
    case "medal":
      return (
        <svg {...common}>
          <circle cx="12" cy="15" r="5" />
          <path d="M8.5 11.5L6 3h3l3 8" />
          <path d="M15.5 11.5L18 3h-3l-3 8" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.5" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 21.5v-17z" />
          <path d="M4 4.5V19" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7-5.4-4.7 7.1-.6L12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------------- Sub-components ---------------- */

function ExpertCard({ expert, reverse = false }: { key?: React.Key; expert: any; reverse?: boolean }) {
  return (
    <div className="relative flex flex-col md:flex-row rounded-2xl border border-white/10 bg-gradient-to-br from-[#241653]/80 to-[#150c33]/80 overflow-hidden">
      {/* Photo */}
      <div
        className={`relative w-full md:w-[42%] shrink-0 aspect-[4/5] md:aspect-auto ${reverse ? "md:order-2" : ""
          }`}
      >
        <div className="relative w-full h-full">
          <img
            src={expert.image}
            alt={expert.name}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#150c33] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#150c33]/10" />
        <span
          className="absolute bottom-4 left-5 font-serif italic text-white/90 text-2xl select-none"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Meet
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
        <div>
          <h3 className="text-white text-2xl md:text-[1.7rem] font-bold leading-tight">
            {expert.name}
          </h3>
          <span className="inline-block mt-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1140] text-xs font-bold tracking-wide px-3 py-1 rounded-sm rounded-r-md">
            {expert.title}
          </span>
        </div>

        <p className="text-white/75 text-sm leading-relaxed">{expert.bio}</p>

        <div className="flex flex-col gap-4">
          {expert.sections.map((section) => (
            <div key={section.heading}>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-400/15 text-amber-400">
                  <Icon name={section.icon} className="w-3.5 h-3.5" />
                </span>
                <h4 className="text-amber-400 text-xs font-bold tracking-wider uppercase">
                  {section.heading}
                </h4>
              </div>
              <ul className="flex flex-col gap-1.5 pl-1">
                {section.items.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-2 text-white/85 text-sm"
                  >
                    {item.icon ? (
                      <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded bg-white/5 text-amber-300 shrink-0">
                        <Icon name={item.icon} className="w-3 h-3" />
                      </span>
                    ) : (
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    )}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, value, label }: { key?: React.Key; icon: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-amber-400 shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div className="leading-tight">
        <div className="text-amber-400 font-bold text-lg">{value}</div>
        <div className="text-white/70 text-sm">{label}</div>
      </div>
    </div>
  );
}

/* ---------------- Main Section ---------------- */

export default function IndustryExperts() {
  return (
    <section className="relative w-full overflow-hidden bg-[#160b3c] py-16 px-4 md:px-10">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full bg-indigo-700/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5 mb-6">
          <Icon name="star" className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-white text-xs font-bold tracking-widest">
            INDUSTRY EXPERTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Learn from Leaders.
          <br />
          Get{" "}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Future-Ready.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-center text-white/70 text-sm md:text-base">
          Our industry experts bring decades of real-world experience, global
          exposure, and academic excellence to shape the leaders of tomorrow.
        </p>

        <div className="mt-4 mb-10 h-1 w-14 rounded-full bg-amber-400" />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {experts.map((expert, i) => (
            <ExpertCard key={expert.name} expert={expert} reverse={i === 1} />
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}