import { secondHomeTheme } from '../theme'

const meritTiers = [
  ['Tier I', '80+', '1–1,000', '775+', '1–200', '₹4,00,000'],
  ['Tier II', '70–79', '1,001–2,000', '750–774', '201–400', '₹3,00,000'],
  ['Tier III', '60–69', '2,001–3,000', '700–749', '401–600', '₹2,00,000'],
  ['Tier IV', '50–59', '3,001–4,000', '650–699', '601–800', '₹1,00,000'],
  ['Tier V', '45–49', '4,001–5,000', '600–649', '801–1,000', '₹50,000'],
]

const academicAwards = [
  ['Rank 1', '₹30,000', '₹30,000', '₹30,000'],
  ['Rank 2', '₹20,000', '₹20,000', '₹20,000'],
  ['Rank 3', '₹10,000', '₹10,000', '₹10,000'],
]

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] border-collapse text-left">
        <thead><tr>{headers.map((header) => <th key={header} className="bg-purple-50 px-3 py-2 text-[11px] font-bold uppercase text-slate-700">{header}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`} className={`border-b border-border px-3 py-2 text-xs text-dark ${index === row.length - 1 ? 'font-bold text-purple-700' : ''}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

export default function Scholarship() {
  return (
    <section id="admissions" className="px-4 py-[60px] lg:px-[60px]">
      <div className="text-center">
        <span className={secondHomeTheme.eyebrow}>Scholarships · Batch 2027–29</span>
        <h2 className={secondHomeTheme.title} style={{fontSize:'clamp(26px,3.5vw,42px)'}}>
          Merit awards of up to <span className="text-purple-700">₹4 Lakhs</span>
        </h2>
        <p className={`${secondHomeTheme.lead} mx-auto max-w-[720px]`}>
          Admission merit scholarships are based on qualifying entrance exam scores or ranks. Academic excellence awards recognize term ranks.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="bg-gradient-to-r from-purple-700 to-[#1B50EC] px-5 py-4 text-white">
            <h3 className="text-base font-bold">Admission Merit Scholarships</h3>
          </div>
          <Table
            headers={['Tier', 'CAT / XAT %ile', 'CMAT rank', 'MAT / ATMA score', 'ICET rank', 'Award']}
            rows={meritTiers}
          />
          <p className="px-4 py-3 text-xs text-slate-600">CAT/XAT figures are percentiles; MAT/ATMA figures are scores; CMAT and ICET figures are ranks. Amounts are in INR.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="bg-gradient-to-r from-purple-700 to-[#1B50EC] px-5 py-4 text-white">
            <h3 className="text-base font-bold">Academic Excellence Scholarships</h3>
            <p className="text-xs text-white/80">Term-rank awards listed in the brochure</p>
          </div>
          <Table headers={['Term rank', 'Term 1', 'Term 2', 'Term 3']} rows={academicAwards} />
          <p className="px-4 py-3 text-xs text-slate-600">Awards are subject to institute policy.</p>
        </div>
      </div>
    </section>
  )
}
