"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RESEARCH_TABS, RESEARCH_TAB_KEYS } from "@/data/researchTabs";

/**
 * /research - the full Research listings.
 *
 * Each tab's dataset is fetched only when that tab is first opened, and then
 * cached for the rest of the visit. Fetching all six up front would pull a few
 * hundred rows the visitor may never look at.
 *
 * The active tab is mirrored into ?tab= so the Home page previews can deep-link
 * straight to a category and the URL stays shareable.
 */

function ResearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requested = searchParams.get("tab");
  const initial = RESEARCH_TAB_KEYS.includes(requested) ? requested : RESEARCH_TABS[0].key;

  const [active, setActive] = useState(initial);
  const [cache, setCache] = useState({});
  const [status, setStatus] = useState({});
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");

  const tab = RESEARCH_TABS.find((t) => t.key === active) ?? RESEARCH_TABS[0];

  // Follow browser back/forward between tabs.
  useEffect(() => {
    if (RESEARCH_TAB_KEYS.includes(requested) && requested !== active) {
      setActive(requested);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requested]);

  // Fetch the active tab's data once.
  useEffect(() => {
    if (!tab.endpoint || cache[tab.key] || status[tab.key] === "loading") return;
    let cancelled = false;
    setStatus((s) => ({ ...s, [tab.key]: "loading" }));
    fetch(tab.endpoint)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((rows) => {
        if (cancelled) return;
        setCache((c) => ({ ...c, [tab.key]: Array.isArray(rows) ? rows : [] }));
        setStatus((s) => ({ ...s, [tab.key]: "done" }));
      })
      .catch(() => {
        if (!cancelled) setStatus((s) => ({ ...s, [tab.key]: "error" }));
      });
    return () => { cancelled = true; };
  }, [tab, cache, status]);

  function selectTab(key) {
    setActive(key);
    setQuery("");
    setYear("All");
    router.replace(`/research?tab=${key}`, { scroll: false });
  }

  const rows = cache[tab.key] || [];

  const years = useMemo(() => {
    if (!tab.yearField) return [];
    const set = new Set(rows.map((r) => r[tab.yearField]).filter(Boolean));
    return ["All", ...Array.from(set).sort().reverse()];
  }, [rows, tab.yearField]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (tab.yearField && year !== "All" && String(r[tab.yearField]) !== String(year)) return false;
      if (!q) return true;
      return (tab.searchFields || []).some((f) =>
        String(r[f] ?? "").toLowerCase().includes(q)
      );
    });
  }, [rows, query, year, tab]);

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-purple-50/60 to-white px-4 py-14 sm:px-6 lg:px-[60px]">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center rounded-full border border-purple-700/10 bg-purple-700/5 px-4 py-[6px] text-[12px] font-semibold uppercase tracking-[0.14em] text-purple-800">
            Research at SSIM
          </span>
          <h1 className="mt-4 font-playfair leading-[1.12] text-slate-900" style={{ fontSize: "clamp(28px,4vw,44px)" }}>
            Research &amp; Publications
          </h1>
          <p className="mx-auto mt-3 max-w-[700px] text-[15px] leading-7 text-slate-600">
            Peer-reviewed papers, conference presentations, patents, awards and books
            from the SSIM faculty.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-[60px]">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Research categories">
          {RESEARCH_TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectTab(t.key)}
                className={[
                  "rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200",
                  isActive
                    ? "border-purple-700 bg-purple-700 text-white shadow-[0_10px_25px_rgba(88,28,135,0.25)]"
                    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-800",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">{tab.blurb}</p>

        {tab.external ? (
          <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-purple-100 bg-purple-50/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[22px] font-bold text-slate-900">{tab.external.title}</h2>
              <p className="mt-1 text-[15px] text-slate-600">{tab.external.subtitle}</p>
              <p className="mt-2 text-[12.5px] font-semibold uppercase tracking-wide text-purple-800">
                ISSN {tab.external.issn}
              </p>
            </div>
            <a
              href={tab.external.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-[#1B50EC] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Visit Sugyaan &rarr;
            </a>
          </div>
        ) : (
          <>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${tab.label.toLowerCase()}...`}
                className="w-full rounded-full border border-slate-200 px-5 py-2.5 text-[14px] outline-none transition-colors focus:border-purple-400 sm:max-w-[380px]"
              />
              {years.length > 1 && (
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="rounded-full border border-slate-200 px-5 py-2.5 text-[14px] outline-none focus:border-purple-400"
                  aria-label="Filter by year"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>{y === "All" ? "All years" : y}</option>
                  ))}
                </select>
              )}
              <span className="text-[13px] text-slate-500">
                {status[tab.key] === "done" && `${filtered.length} of ${rows.length} records`}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border-b border-slate-200 px-4 py-3 text-[12.5px] font-semibold uppercase tracking-wide text-slate-600">#</th>
                      {tab.columns.map((c) => (
                        <th
                          key={c.field}
                          className={`border-b border-slate-200 px-4 py-3 text-[12.5px] font-semibold uppercase tracking-wide text-slate-600 ${c.wide ? "min-w-[320px]" : ""}`}
                        >
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {status[tab.key] === "loading" && (
                      <tr>
                        <td colSpan={tab.columns.length + 1} className="px-4 py-10 text-center text-[14px] text-slate-500">
                          Loading {tab.label.toLowerCase()}...
                        </td>
                      </tr>
                    )}
                    {status[tab.key] === "error" && (
                      <tr>
                        <td colSpan={tab.columns.length + 1} className="px-4 py-10 text-center text-[14px] text-red-600">
                          Could not load {tab.label.toLowerCase()}. Please try again later.
                        </td>
                      </tr>
                    )}
                    {status[tab.key] === "done" && filtered.length === 0 && (
                      <tr>
                        <td colSpan={tab.columns.length + 1} className="px-4 py-10 text-center text-[14px] text-slate-500">
                          No records match your search.
                        </td>
                      </tr>
                    )}
                    {filtered.map((r, i) => (
                      <tr key={r.id ?? i} className="align-top odd:bg-white even:bg-slate-50/50 hover:bg-purple-50/40">
                        <td className="border-b border-slate-100 px-4 py-3 text-[13px] text-slate-400">{i + 1}</td>
                        {tab.columns.map((c) => (
                          <td
                            key={c.field}
                            className={`border-b border-slate-100 px-4 py-3 text-[13.5px] leading-relaxed ${
                              c.wide ? "font-medium text-slate-900" : "text-slate-600"
                            }`}
                          >
                            {r[c.field] || <span className="text-slate-300">&mdash;</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default function ResearchPage() {
  // useSearchParams needs a Suspense boundary during prerender.
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ResearchContent />
    </Suspense>
  );
}
