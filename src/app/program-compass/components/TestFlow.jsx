"use client";

import { useState } from "react";
import {
  ITEMS,
  LIKERT,
  SECTION_BREAK_AT,
  DIM_LABEL,
  DIM_DESC,
  AXIS_DESC,
  WS_INTRO,
} from "@/data/programCompassData";
import { secondHomeTheme } from "@/app/secondHome/theme";
import DimensionIcon from "./DimensionIcon";

/**
 * Screen 3 — the assessment itself.
 *
 * One question at a time, with a side panel explaining what the current block
 * measures, and an interstitial between the 12 RIASEC items and the 6
 * work-style items so the change of subject isn't jarring. Picking an option
 * auto-advances after a short beat; Back re-opens the previous answer.
 */
export default function TestFlow({ onComplete, onBack }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [interstitialSeen, setInterstitialSeen] = useState(false);

  const atInterstitial = index === SECTION_BREAK_AT && !interstitialSeen;
  const item = ITEMS[index];
  const progress = Math.round((index / ITEMS.length) * 100);

  function choose(value) {
    const next = { ...answers, [item.id]: value };
    setAnswers(next);
    // Brief pause so the student sees their selection register before moving on.
    setTimeout(() => {
      if (index < ITEMS.length - 1) setIndex(index + 1);
      else onComplete(next);
    }, 190);
  }

  function goBack() {
    if (index > 0) setIndex(index - 1);
    else onBack();
  }

  const panel = atInterstitial
    ? { tag: "Coming up", title: "Working style", body: WS_INTRO, icon: "ws" }
    : item.dim === "ws"
      ? { tag: "What this measures", title: "Working style", body: AXIS_DESC[item.axis], icon: "ws" }
      : { tag: "What this measures", title: DIM_LABEL[item.dim], body: DIM_DESC[item.dim], icon: item.dim };

  return (
    <div className="mx-auto max-w-[940px] px-4 py-10 lg:py-14">
      {/* Progress */}
      <div className="mb-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className={`${secondHomeTheme.accentGradient} h-full rounded-full transition-[width] duration-300 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[280px_1fr]">
        {/* Side panel — what the current block measures */}
        <aside className={`${secondHomeTheme.surface} hidden p-6 md:block`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 text-purple-700">
            <DimensionIcon dim={panel.icon} className="h-6 w-6" />
          </span>
          <p className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.12em] text-purple-700">
            {panel.tag}
          </p>
          <h2 className="font-playfair mt-1 text-[20px] leading-tight text-slate-900">
            {panel.title}
          </h2>
          <p className="mt-3 text-[13.5px] leading-6 text-slate-600">{panel.body}</p>
        </aside>

        {/* Question card, or the mid-test interstitial */}
        <div className={`${secondHomeTheme.surface} p-6 sm:p-8`} key={atInterstitial ? "break" : item.id}>
          {atInterstitial ? (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                <DimensionIcon dim="ws" className="h-7 w-7" />
              </span>
              <h2 className="font-playfair mt-5 text-[26px] text-slate-900">
                Nice work so far.
              </h2>
              <p className={`${secondHomeTheme.lead} mx-auto mt-3 max-w-[400px]`}>
                Just {ITEMS.length - SECTION_BREAK_AT} more — this time about how you
                like to work, not what interests you.
              </p>
              <button
                type="button"
                onClick={() => setInterstitialSeen(true)}
                className={`${secondHomeTheme.accentGradient} mt-6 rounded-[12px] px-8 py-[13px] text-[15px] font-extrabold text-white transition-all hover:-translate-y-[2px]`}
              >
                Continue →
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5 text-purple-700">
                <DimensionIcon dim={item.dim === "ws" ? "ws" : item.dim} className="h-[18px] w-[18px]" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.12em]">
                  {item.dim === "ws" ? "Working style" : DIM_LABEL[item.dim]}
                </span>
              </div>

              <p className="mt-4 text-[12.5px] font-semibold text-slate-400">
                Question {index + 1} of {ITEMS.length}
              </p>

              <h2 className="font-playfair mt-1.5 text-[22px] leading-snug text-slate-900 sm:text-[25px]">
                {item.text}
              </h2>

              <div
                className="mt-6 flex flex-col gap-2.5"
                role="radiogroup"
                aria-label={item.text}
              >
                {LIKERT.map((label, i) => {
                  const value = i + 1;
                  const picked = answers[item.id] === value;
                  return (
                    <button
                      key={label}
                      type="button"
                      role="radio"
                      aria-checked={picked}
                      onClick={() => choose(value)}
                      className={`flex items-center gap-3 rounded-[12px] border px-4 py-3.5 text-left text-[15px] font-medium transition-all ${
                        picked
                          ? "border-purple-600 bg-purple-50 text-purple-900"
                          : "border-slate-200 bg-white text-slate-700 hover:border-purple-300 hover:bg-purple-50/40"
                      }`}
                    >
                      <span
                        className={`flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border-2 transition-colors ${
                          picked ? "border-purple-600" : "border-slate-300"
                        }`}
                      >
                        {picked && <span className="h-2 w-2 rounded-full bg-purple-600" />}
                      </span>
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-full border border-slate-200 px-5 py-2.5 text-[14px] font-bold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  ← Back
                </button>
                <span className="text-[12.5px] text-slate-400">
                  Pick the option that fits best — there is no wrong answer.
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
