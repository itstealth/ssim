"use client";

import { PROGRAMS } from "@/data/programCompassData";
import { secondHomeTheme } from "@/app/secondHome/theme";
import DimensionIcon from "./DimensionIcon";

/** Strongest RIASEC dimension for a program — picks the preview card's icon. */
function leadDimension(program) {
  return Object.keys(program.riasec).reduce((a, b) =>
    program.riasec[b] > program.riasec[a] ? b : a
  );
}

export default function Landing({ onStart, sourceCollege }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
      <div className="text-center">
        {sourceCollege ? (
          <span className={`${secondHomeTheme.eyebrowSoft} mb-4`}>
            Shared with you by {sourceCollege}
          </span>
        ) : (
          <span className={`${secondHomeTheme.eyebrow} mb-4`}>
            Free career assessment
          </span>
        )}

        <h1
          className={`${secondHomeTheme.title} mt-4`}
          style={{ fontSize: "clamp(30px,4.5vw,52px)" }}
        >
          Find the PGDM specialization
          <br className="hidden sm:block" /> that actually fits you
        </h1>

        <p className={`${secondHomeTheme.lead} mx-auto mt-5 max-w-[640px]`}>
          Program Compass is a short, research-backed assessment built on the RIASEC
          interest model. Answer 18 quick questions about what interests you and how
          you like to work, and we&apos;ll show you which of SSIM&apos;s six PGDM
          specializations match your profile — and why.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStart}
            className={`${secondHomeTheme.accentGradient} rounded-[12px] px-9 py-[14px] text-[15px] font-extrabold text-white shadow-[0_10px_28px_rgba(16,34,105,0.16)] transition-all hover:-translate-y-[2px] hover:shadow-[0_14px_34px_rgba(16,34,105,0.22)]`}
          >
            Start the assessment — it&apos;s free
          </button>
        </div>

        <p className="mt-4 text-[13px] text-slate-500">
          Takes about 5 minutes · 18 questions · Your result is shown instantly
        </p>
      </div>

      {/* How it works */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {[
          {
            step: "01",
            title: "Tell us about you",
            body: "A few details so a counsellor can follow up with your result if you'd like them to.",
          },
          {
            step: "02",
            title: "Answer 18 questions",
            body: "12 on what genuinely interests you, 6 on how you prefer to work. There are no wrong answers.",
          },
          {
            step: "03",
            title: "See your matches",
            body: "Your RIASEC profile, plus the three SSIM specializations that fit it best, ranked with a match score.",
          },
        ].map((item) => (
          <div key={item.step} className={`${secondHomeTheme.surface} p-6`}>
            <span className="font-playfair text-[28px] font-bold text-purple-700">
              {item.step}
            </span>
            <h3 className="mt-2 text-[17px] font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-6 text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Specializations covered — read straight off PROGRAMS so this grid can
          never drift out of sync with the scoring model. */}
      <div className="mt-16">
        <div className="text-center">
          <span className={secondHomeTheme.eyebrow}>What you&apos;ll be matched against</span>
          <h2
            className={`${secondHomeTheme.title} mt-3`}
            style={{ fontSize: "clamp(24px,3.2vw,38px)" }}
          >
            Six PGDM specializations
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className={`${secondHomeTheme.surface} ${secondHomeTheme.surfaceLift} flex gap-4 p-6`}
            >
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-purple-50 text-purple-700">
                <DimensionIcon dim={leadDimension(program)} />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-slate-900">{program.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-slate-600">
                  {program.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <button
          type="button"
          onClick={onStart}
          className={`${secondHomeTheme.accentGradient} rounded-[12px] px-9 py-[14px] text-[15px] font-extrabold text-white shadow-[0_10px_28px_rgba(16,34,105,0.16)] transition-all hover:-translate-y-[2px]`}
        >
          Take the assessment
        </button>
      </div>
    </div>
  );
}
