"use client";
import { useState } from "react";
import { secondHomeTheme } from "../theme";

const faqs = [
  {
    q: "Is SSIM Hyderabad AICTE approved?",
    a: "Yes, SSIM (Siva Sivani Institute of Management), Hyderabad is approved by AICTE (All India Council for Technical Education). It is one of the leading AICTE-approved private B-schools in Hyderabad, offering a 2-year full-time PGDM program that meets the highest standards of management education in India.",
    icon: "✅",
    tag: "Accreditation",
  },
  {
    q: "What specializations are offered in PGDM at SSIM?",
    a: (
      <div className="space-y-3">
        <p className="text-slate-600 text-[14px] leading-relaxed">
          SSIM Hyderabad offers a range of industry-relevant PGDM specializations to match diverse career goals:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Marketing Management",
            "Finance Management",
            "Human Resource Management",
            "Operations Management",
            "Business Analytics",
            "International Business",
          ].map((spec) => (
            <li
              key={spec}
              className="flex items-center gap-2 text-[13.5px] text-slate-700"
            >
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-700 to-[#1B50EC] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                ✓
              </span>
              {spec}
            </li>
          ))}
        </ul>
        <p className="text-slate-500 text-[13px] leading-relaxed">
          Each specialization is designed with industry inputs, live projects, and expert faculty to ensure students are job-ready from day one.
        </p>
      </div>
    ),
    icon: "🎓",
    tag: "Specializations",
  },
  {
    q: "What is the average placement package at SSIM Hyderabad?",
    a: (
      <div className="space-y-3">
        <p className="text-slate-600 text-[14px] leading-relaxed">
          SSIM Hyderabad&apos;s 2025 placement season recorded outstanding results:
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Average Package", value: "₹7.25 LPA" },
            { label: "Highest Package", value: "₹12.7 LPA" },
            { label: "Placement Rate", value: "98.74%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-50 border border-purple-100 p-3 text-center"
            >
              <p className="text-[18px] font-bold text-[#1B50EC] leading-tight">
                {stat.value}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-[13px] leading-relaxed">
          Recruiters like Deloitte, KPMG, Asian Paints, ITC, and Cognizant actively hire from SSIM campus, offering roles across marketing, finance, business analytics, and operations.
        </p>
      </div>
    ),
    icon: "💼",
    tag: "Placements",
  },
  {
    q: "What is the admission process for PGDM 2026 at SSIM Hyderabad?",
    a: (
      <div className="space-y-3">
        <p className="text-slate-600 text-[14px] leading-relaxed">
          Applying to SSIM Hyderabad is a simple and fully online process:
        </p>
        <ol className="space-y-2">
          {[
            {
              step: "Apply Online",
              desc: "Register on the official portal at apply.ssim.ac.in",
            },
            {
              step: "Submit Details",
              desc: "Fill academic details & upload entrance scores (CAT / MAT / XAT / CMAT / ATMA)",
            },
            {
              step: "Application Fee",
              desc: "Pay a one-time non-refundable registration fee of ₹750",
            },
            {
              step: "SOP & Video Introduction",
              desc: "Submit a Statement of Purpose and a short self-introduction video",
            },
            {
              step: "Personal Interview",
              desc: "Shortlisted candidates will be invited for a Personal Interview (PI)",
            },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-[#1B50EC] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <span className="text-[13.5px] font-semibold text-slate-800">
                  {item.step}
                </span>{" "}
                <span className="text-[13px] text-slate-500">— {item.desc}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-[13px] text-purple-700 font-semibold">
          🚀 Admissions for the 2026 batch are open. Apply early to secure your seat.
        </p>
      </div>
    ),
    icon: "📋",
    tag: "Admissions",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className={`px-4 lg:px-[60px] py-[48px] lg:py-[80px] ${secondHomeTheme.shellMuted}`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span className={secondHomeTheme.eyebrow}>FAQ</span>
        <h2
          className={`${secondHomeTheme.title} mt-4 mb-4`}
          style={{ fontSize: "clamp(26px,3.5vw,42px)" }}
        >
          Frequently Asked Questions
        </h2>
        <p className={`${secondHomeTheme.lead} max-w-[540px] mx-auto`}>
          Everything you need to know about SSIM&apos;s PGDM program — from
          accreditation to admissions.
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
        {/* Left: tag list / quick nav */}
        <div className="hidden lg:flex flex-col gap-3 lg:sticky lg:top-24">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`group flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                openIndex === i
                  ? "border-purple-300 bg-gradient-to-r from-purple-50 to-purple-50 shadow-[0_8px_24px_rgba(107,33,168,0.12)]"
                  : "border-slate-200 bg-white hover:border-purple-200 hover:bg-purple-50/40"
              }`}
            >
              <span className="text-2xl">{faq.icon}</span>
              <div className="flex-1 min-w-0">
                <span
                  className={`block text-[11px] font-semibold uppercase tracking-widest mb-0.5 ${
                    openIndex === i ? "text-purple-700" : "text-slate-400"
                  }`}
                >
                  {faq.tag}
                </span>
                <span
                  className={`block text-[13px] font-semibold leading-snug line-clamp-2 ${
                    openIndex === i ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {faq.q}
                </span>
              </div>
              <span
                className={`text-lg transition-transform duration-300 ${
                  openIndex === i ? "rotate-90 text-purple-700" : "text-slate-300"
                }`}
              >
                ›
              </span>
            </button>
          ))}
        </div>

        {/* Right: accordion cards */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-purple-200 shadow-[0_12px_36px_rgba(107,33,168,0.10)]"
                  : "border-slate-200 bg-white hover:border-purple-100 hover:shadow-[0_6px_20px_rgba(16,34,105,0.06)]"
              }`}
            >
              {/* Question row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-center gap-4 px-5 py-5 text-left transition-colors duration-200 ${
                  openIndex === i
                    ? "bg-gradient-to-r from-purple-50 to-purple-50"
                    : "bg-white"
                }`}
              >
                {/* Icon bubble */}
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gradient-to-br from-purple-700 to-[#1B50EC] shadow-[0_8px_20px_rgba(107,33,168,0.25)]"
                      : "bg-slate-100"
                  }`}
                >
                  {faq.icon}
                </span>

                <div className="flex-1 min-w-0">
                  {/* Mobile tag */}
                  <span className="lg:hidden inline-block text-[10px] font-semibold uppercase tracking-widest text-purple-600 mb-1">
                    {faq.tag}
                  </span>
                  <p
                    className={`text-[14.5px] font-semibold leading-snug ${
                      openIndex === i ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {faq.q}
                  </p>
                </div>

                {/* Chevron */}
                <span
                  className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "border-purple-300 bg-purple-100 rotate-180"
                      : "border-slate-200 bg-white rotate-0"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${
                      openIndex === i ? "text-purple-700" : "text-slate-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-white">
                  {typeof faq.a === "string" ? (
                    <p className="text-slate-600 text-[14px] leading-relaxed">
                      {faq.a}
                    </p>
                  ) : (
                    faq.a
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* CTA strip */}
          <div className="rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-[15px]">
                Still have questions?
              </p>
              <p className="text-purple-200 text-[13px]">
                Our admissions team is happy to help you.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 rounded-full bg-white text-purple-700 font-semibold text-[13px] px-6 py-2.5 hover:bg-purple-50 transition-colors duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
