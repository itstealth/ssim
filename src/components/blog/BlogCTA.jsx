// src/components/blog/BlogCTA.jsx
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

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
    <div className="my-8 rounded-xl border border-[#D6DDED] overflow-hidden not-prose">
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
          2026&ndash;28 BATCH
        </span>
      </div>

      {/* Programme grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 bg-white">
        {programmes.map((prog) => (
          <Link
            key={prog.href}
            href={prog.href}
            className="block rounded-lg border border-[#E0E7F0] p-3 transition-all duration-150 hover:border-[#003366] hover:-translate-y-px"
          >
            <div className="text-xs font-semibold mb-0.5" style={{ color: "#003366" }}>
              {prog.name}
            </div>
            <div className="text-xs text-slate-500 mb-2">{prog.sub}</div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-semibold"
              style={{ color: "#C49A2A" }}
            >
              Know more
              <ArrowRight className="h-3 w-3" />
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
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#C8D3E5] transition-colors hover:border-[#003366]"
          style={{ color: "#003366" }}
        >
          <Download className="h-3.5 w-3.5" />
          Brochure
        </a>
        <a
          href="https://apply.ssim.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
          style={{ background: "#003366" }}
        >
          Apply Now &rarr;
        </a>
      </div>
    </div>
  );
}
