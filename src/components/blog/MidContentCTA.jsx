import Link from "next/link";

export function MidContentCTA() {
  return (
    <div className="my-8 not-prose rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #002850 0%, #003d7a 100%)" }}>
      <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: label + headline + tags */}
        <div className="flex items-start gap-4">
          {/* Gold left accent bar */}
          <div className="hidden sm:block w-1 self-stretch rounded-full flex-shrink-0" style={{ background: "#C49A2A" }} />
          <div>
            <p
              className="text-[10px] font-bold tracking-widest uppercase mb-1"
              style={{ color: "#C49A2A" }}
            >
              PGDM 2026–28 &nbsp;·&nbsp; Admissions Open
            </p>
            <p className="font-semibold text-base leading-snug" style={{ color: "#ffffff" }}>
              Shape your management career at SSIM
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["AICTE Approved", "Triple Specialisation", "Strong Placements"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#cbd5e1" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: buttons */}
        <div className="flex gap-2 flex-shrink-0 self-start sm:self-center">
          <Link
            href="/admissions/pgdm-triple-specialisation"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#e2e8f0" }}
          >
            Explore Programmes
          </Link>
          <a
            href="https://apply.ssim.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: "#C49A2A", color: "#001f3f" }}
          >
            Apply Now →
          </a>
        </div>
      </div>
    </div>
  );
}
