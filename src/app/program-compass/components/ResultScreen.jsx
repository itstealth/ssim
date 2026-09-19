"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DIM_LABEL, DIM_DESC } from "@/data/programCompassData";
import { secondHomeTheme } from "@/app/secondHome/theme";
import DimensionIcon from "./DimensionIcon";
import HexChart from "./HexChart";

/**
 * Screen 5 — the result.
 *
 * `saveState` reflects the API call kicked off by the parent: "saving" while it
 * is in flight, "saved" once outreach has it, "error" if it failed. The result
 * itself is computed client-side and rendered regardless, so a failed save
 * never costs the student their result.
 */
export default function ResultScreen({ profile, firstName, saveState }) {
  const { dimScore, order, code, ranked } = profile;
  const [barsIn, setBarsIn] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);

  // Let the layout settle, then animate the bars out from zero width.
  useEffect(() => {
    const id = requestAnimationFrame(() => setBarsIn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const top3 = ranked.slice(0, 3);

  return (
    <div className="mx-auto max-w-[940px] px-4 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center">
        <span className={secondHomeTheme.eyebrow}>Your result</span>
        <h1
          className={`${secondHomeTheme.title} mt-3`}
          style={{ fontSize: "clamp(26px,3.6vw,40px)" }}
        >
          Here&apos;s what fits you, {firstName || "there"}
        </h1>

        <button
          type="button"
          onClick={() => setLegendOpen((open) => !open)}
          aria-expanded={legendOpen}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-700/15 bg-purple-700/5 px-5 py-2 text-[14px] font-bold text-purple-800 transition-colors hover:bg-purple-700/10"
        >
          Your profile: {code}
          <span className={`text-[11px] transition-transform ${legendOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {legendOpen && (
          <div className={`${secondHomeTheme.surface} mx-auto mt-4 max-w-[460px] p-5 text-left`}>
            {order.map((dim, i) => (
              <div key={dim} className="flex items-center gap-3 py-1.5">
                <DimensionIcon
                  dim={dim}
                  className={`h-[18px] w-[18px] ${i < 2 ? "text-purple-700" : "text-slate-400"}`}
                />
                <span
                  className={`w-[118px] flex-none text-[13.5px] ${
                    i < 2 ? "font-bold text-slate-900" : "text-slate-600"
                  }`}
                >
                  {DIM_LABEL[dim]}
                </span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <span
                    className={`block h-full rounded-full ${i < 2 ? "bg-purple-600" : "bg-slate-300"}`}
                    style={{ width: `${Math.round(dimScore[dim] * 100)}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
        )}

        <SaveStatus state={saveState} />
      </div>

      {/* Profile: radar + bars */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.15fr]">
        <div className={`${secondHomeTheme.surface} p-6`}>
          <h2 className="font-playfair text-[19px] text-slate-900">Your interest profile</h2>
          <p className="mt-1 text-[13px] text-slate-500">
            Six dimensions of the RIASEC model, scored from your answers.
          </p>
          <div className="mt-4">
            <HexChart dimScore={dimScore} />
          </div>
        </div>

        <div className={`${secondHomeTheme.surface} p-6`}>
          <h2 className="font-playfair text-[19px] text-slate-900">Strongest to weakest</h2>
          <div className="mt-5 flex flex-col gap-3.5">
            {order.map((dim) => {
              const pct = Math.round(dimScore[dim] * 100);
              return (
                <div key={dim} className="flex items-center gap-3">
                  <DimensionIcon dim={dim} className="h-[18px] w-[18px] flex-none text-purple-700" />
                  <span className="w-[112px] flex-none text-[13.5px] font-medium text-slate-700">
                    {DIM_LABEL[dim]}
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <span
                      className={`${secondHomeTheme.accentGradient} block h-full rounded-full transition-[width] duration-700 ease-out`}
                      style={{ width: barsIn ? `${pct}%` : "0%" }}
                    />
                  </span>
                  <span className="w-[38px] flex-none text-right text-[13px] font-bold text-slate-900">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top 3 matches */}
      <div className="mt-12">
        <div className="text-center">
          <span className={secondHomeTheme.eyebrow}>Your best matches</span>
          <h2
            className={`${secondHomeTheme.title} mt-3`}
            style={{ fontSize: "clamp(24px,3.2vw,36px)" }}
          >
            Three specializations that fit your profile
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {top3.map((entry, i) => (
            <div
              key={entry.program.id}
              className={`${secondHomeTheme.surface} p-6 sm:p-7 ${
                i === 0 ? "ring-2 ring-purple-600/25" : ""
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {i === 0 && (
                    <span className="rounded-full bg-purple-700 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white">
                      Best match
                    </span>
                  )}
                  <h3 className="font-playfair text-[21px] text-slate-900">
                    {entry.program.name}
                  </h3>
                </div>
                <span className="font-playfair text-[26px] font-bold text-purple-700">
                  {entry.match}%
                </span>
              </div>

              <span className="mt-3 block h-2 overflow-hidden rounded-full bg-slate-200">
                <span
                  className={`${secondHomeTheme.accentGradient} block h-full rounded-full transition-[width] duration-700 ease-out`}
                  style={{
                    width: barsIn ? `${entry.match}%` : "0%",
                    transitionDelay: `${i * 110}ms`,
                  }}
                />
              </span>

              <p className="mt-4 text-[14.5px] font-semibold leading-6 text-slate-800">
                {entry.program.why}
              </p>
              <p className="mt-2.5 text-[14px] leading-7 text-slate-600">
                {entry.program.longWhy}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Understanding your profile — top 3 dimensions explained */}
      <div className="mt-12">
        <h2 className="font-playfair text-center text-[22px] text-slate-900">
          Understanding your profile
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {order.slice(0, 3).map((dim) => (
            <div key={dim} className={`${secondHomeTheme.surface} p-6`}>
              <div className="flex items-center gap-3">
                <DimensionIcon dim={dim} className="h-5 w-5 text-purple-700" />
                <b className="text-[16px] text-slate-900">{DIM_LABEL[dim]}</b>
                <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[12px] font-bold text-purple-700">
                  {Math.round(dimScore[dim] * 100)}%
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-7 text-slate-600">{DIM_DESC[dim]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next step */}
      <div
        className={`${secondHomeTheme.accentGradient} mt-12 rounded-[22px] px-6 py-10 text-center sm:px-10`}
      >
        <h2 className="font-playfair text-[26px] text-white sm:text-[32px]">
          Ready to take the next step?
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-7 text-white/85">
          Your result has been shared with our admissions team. Explore the
          specialization in detail, or start your application for the 2026–28 batch.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noreferrer"
            className="rounded-[12px] bg-white px-8 py-[13px] text-[15px] font-extrabold text-purple-700 transition-transform hover:-translate-y-[2px]"
          >
            Apply Now
          </a>
          <Link
            href="/programs"
            className="rounded-[12px] border border-white/40 px-8 py-[13px] text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Explore PGDM Programs
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-[12.5px] leading-6 text-slate-400">
        Program Compass is a guidance tool based on the RIASEC interest model. Your
        result is a starting point for a conversation with a counsellor, not an
        admission decision or a formal aptitude certification.
      </p>
    </div>
  );
}

function SaveStatus({ state }) {
  const config = {
    saving: { dot: "bg-amber-400", text: "Sending your result to our admissions team…", tone: "text-slate-500" },
    saved: { dot: "bg-emerald-500", text: "Your result has been shared with our admissions team", tone: "text-slate-500" },
    error: {
      dot: "bg-red-500",
      text: "We couldn't reach our server — your result is shown below, but please contact us if you'd like a counsellor to follow up.",
      tone: "text-red-600",
    },
  }[state];

  if (!config) return null;

  return (
    <p className={`mt-4 inline-flex items-center gap-2 text-[13px] ${config.tone}`}>
      <span className={`h-2 w-2 flex-none rounded-full ${config.dot}`} />
      {config.text}
    </p>
  );
}
