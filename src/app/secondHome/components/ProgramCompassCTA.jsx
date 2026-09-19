import Link from "next/link";
import { secondHomeTheme } from "../theme";

/**
 * ProgramCompassCTA — homepage entry point for the Program Compass assessment.
 *
 * Sits directly after the Programs section: a visitor has just read the six
 * specializations, so "not sure which one is yours?" is the natural next beat.
 * Server-rendered — it is a static panel with one link, no client JS needed.
 */

const STEPS = [
  { value: "18", label: "Questions" },
  { value: "5", label: "Minutes" },
  { value: "6", label: "Specializations matched" },
];

export default function ProgramCompassCTA() {
  return (
    <section className="px-4 py-[60px] lg:px-[60px]">
      <div
        className={`${secondHomeTheme.accentGradient} relative overflow-hidden rounded-[24px] px-6 py-12 sm:px-10 lg:px-14`}
      >
        {/* Soft radial highlights — purely decorative */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
        />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-[6px] text-[12px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
              Free career assessment
            </span>

            <h2
              className="font-playfair mt-4 leading-[1.14] text-white"
              style={{ fontSize: "clamp(26px,3.5vw,42px)" }}
            >
              Not sure which specialization is yours?
            </h2>

            <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/85">
              Program Compass is a short, research-backed assessment built on the
              RIASEC interest model. Answer 18 quick questions about what interests
              you and how you like to work — and see which of SSIM&apos;s six PGDM
              specializations actually fit your profile, and why.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/program-compass"
                className="rounded-[12px] bg-white px-8 py-[14px] text-[15px] font-extrabold text-purple-700 transition-transform hover:-translate-y-[2px]"
              >
                Take the assessment — free
              </Link>
              <span className="text-[13px] text-white/70">
                No cost · Instant result
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {STEPS.map((step) => (
              <div
                key={step.label}
                className="rounded-[16px] border border-white/15 bg-white/10 p-4 text-center backdrop-blur"
              >
                <div className="font-playfair text-[32px] font-bold leading-none text-white lg:text-[38px]">
                  {step.value}
                </div>
                <p className="mt-2 text-[11.5px] leading-4 text-white/75">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
