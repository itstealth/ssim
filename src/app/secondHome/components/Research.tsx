"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { secondHomeTheme } from '../theme'
import { RESEARCH_TABS } from '@/data/researchTabs'

type PreviewItem = {
  id: number | string
  title: string | null
  people: string | null
  detail: string | null
  period: string | null
}

type Summary = Record<string, { total: number; items: PreviewItem[] }>

/**
 * Home page Research section - sits directly below Faculty.
 *
 * Shows a preview only: the count and three most recent entries per tab, with a
 * link through to /research for the full lists. The full datasets run to a few
 * hundred rows, which belongs on a dedicated page rather than the home page.
 */
export default function Research() {
  const [active, setActive] = useState(RESEARCH_TABS[0].key)
  const [summary, setSummary] = useState<Summary | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/research/summary')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d) => { if (!cancelled) setSummary(d) })
      .catch(() => { if (!cancelled) setFailed(true) })
    return () => { cancelled = true }
  }, [])

  const tab = RESEARCH_TABS.find((t) => t.key === active) ?? RESEARCH_TABS[0]
  const data = summary && !tab.external ? summary[tab.key] : undefined

  return (
    <section
      id="research"
      className={`px-4 py-[64px] sm:px-6 lg:px-[60px] ${secondHomeTheme.shellMuted}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className={secondHomeTheme.eyebrow}>Our Research</span>
          <h2 className={`mb-4 ${secondHomeTheme.title}`} style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
            Research &amp; Publications
          </h2>
          <p className={`${secondHomeTheme.lead} mx-auto max-w-[620px]`}>
            Our faculty publish, present and patent across management disciplines &mdash;
            advancing both scholarship and practice.
          </p>
        </div>

        {/* 'patents', 'awards', 'books' are hidden on the home page preview – they remain visible on /research */}
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Research categories">
          {RESEARCH_TABS.filter((t) => !['patents', 'awards', 'books'].includes(t.key)).map((t) => {
            const isActive = t.key === active
            const count = summary && !t.external ? summary[t.key]?.total : undefined
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={[
                  'rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200',
                  isActive
                    ? 'border-purple-700 bg-purple-700 text-white shadow-[0_10px_25px_rgba(88,28,135,0.25)]'
                    : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-800',
                ].join(' ')}
              >
                {t.label}
                {typeof count === 'number' && (
                  <span className={isActive ? 'ml-2 text-white/75' : 'ml-2 text-slate-400'}>{count}</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Panel */}
        <div className={`mt-6 p-6 sm:p-8 ${secondHomeTheme.surface}`} role="tabpanel">
          <p className={`${secondHomeTheme.lead} mb-5 max-w-[720px]`}>{tab.blurb}</p>

          {tab.external ? (
            <div className="flex flex-col gap-4 rounded-[18px] border border-purple-100 bg-purple-50/40 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-[19px] font-bold text-slate-900">{tab.external.title}</h3>
                <p className="mt-1 text-[14px] text-slate-600">{tab.external.subtitle}</p>
                <p className="mt-2 text-[12.5px] font-semibold uppercase tracking-wide text-purple-800">
                  ISSN {tab.external.issn}
                </p>
              </div>
              <a
                href={tab.external.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 ${secondHomeTheme.accentGradient}`}
              >
                Visit Sugyaan &rarr;
              </a>
            </div>
          ) : failed ? (
            <p className="py-6 text-[14px] text-slate-500">
              Research records are unavailable right now. Please{' '}
              <Link href="/research-publications" className="font-semibold text-purple-800 underline">
                view the research page
              </Link>
              .
            </p>
          ) : !summary ? (
            <div className="space-y-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-[62px] animate-pulse rounded-[14px] bg-slate-100" />
              ))}
            </div>
          ) : (
            <>
              <ul className="space-y-3">
                {data?.items?.length ? (
                  data.items.map((item) => (
                    <li
                      key={`${tab.key}-${item.id}`}
                      className="rounded-[14px] border border-slate-200/80 bg-white p-4 transition-colors hover:border-purple-200"
                    >
                      <p className="text-[14.5px] font-semibold leading-snug text-slate-900">{item.title}</p>
                      <p className="mt-1 text-[12.5px] text-purple-800">{item.people}</p>
                      {(item.detail || item.period) && (
                        <p className="mt-0.5 text-[12px] text-slate-500">
                          {[item.detail, item.period].filter(Boolean).join(' · ')}
                        </p>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="py-4 text-[14px] text-slate-500">No records yet.</li>
                )}
              </ul>

              {!!data?.total && (
                <div className="mt-6 text-center">
                  <Link
                    href={`/research-publications?tab=${tab.key}`}
                    className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-[14px] font-semibold text-purple-800 transition-transform hover:-translate-y-0.5 hover:border-purple-400"
                  >
                    View all {data.total} {tab.label.toLowerCase()} &rarr;
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
