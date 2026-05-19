import Link from "next/link";

const programmes = [
  {
    name: "PGDM — Triple Spec",
    sub: "Finance · Marketing · HR",
    href: "/admissions/pgdm-triple-specialisation",
  },
  {
    name: "PGDM — BIFS",
    sub: "Banking & Insurance",
    href: "/admissions/pgdm-bifs",
  },
  {
    name: "PGDM — BA",
    sub: "Business Analytics",
    href: "/admissions/pgdm-ba",
  },
];

export function BlogCTA() {
  return (
    <div className="my-8 not-prose rounded-xl border border-[#D6DDED] overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: "#003366" }}
      >
        <p className="text-sm font-semibold text-white">Choose your programme</p>
        <span
          className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full whitespace-nowrap"
          style={{ background: "#C49A2A", color: "#001f3f" }}
        >
          2026–28 Batch
        </span>
      </div>

      {/* Programme grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white">
        {programmes.map((prog) => (
          <Link
            key={prog.href}
            href={prog.href}
            className="block rounded-lg border border-[#E0E7F0] p-3 transition-all duration-150 hover:border-[#003366] hover:-translate-y-px no-underline"
          >
            <div className="text-xs font-semibold mb-0.5" style={{ color: "#003366" }}>
              {prog.name}
            </div>
            <div className="text-[11px] mb-2" style={{ color: "#6b7a99" }}>
              {prog.sub}
            </div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: "#C49A2A" }}
            >
              Know more
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-[#E0E7F0] bg-white">
        <a
          href="https://ssim.ac.in/pdfs/footer/Student_Hand_Book_Batch_2025_27.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#C8D3E5] transition-colors hover:border-[#003366] no-underline"
          style={{ color: "#003366" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Brochure
        </a>
        <a
          href="https://apply.ssim.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg text-white hover:opacity-90 transition-opacity no-underline"
          style={{ background: "#003366" }}
        >
          Apply Now →
        </a>
      </div>
    </div>
  );
}
