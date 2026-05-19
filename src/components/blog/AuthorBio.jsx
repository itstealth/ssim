// src/components/blog/AuthorBio.jsx
export function AuthorBio() {
  return (
    <div className="my-8 rounded-xl border border-[#D6DDED] overflow-hidden">
      <div
        className="px-5 py-2 text-xs font-semibold text-white"
        style={{ background: "#003366" }}
      >
        About the Author
      </div>
      <div className="p-6 bg-white flex gap-4 items-start">
        <div
          className="h-14 w-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
          style={{ background: "#003366" }}
        >
          SE
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">SSIM Editorial Team</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            The SSIM Editorial Team comprises experienced academicians, researchers,
            management professionals, and career mentors dedicated to sharing insightful
            content on management education, MBA programs, leadership, entrepreneurship,
            placements, business analytics, and emerging industry trends. Backed by the
            academic excellence of SSIM – Siva Sivani Institute of Management, the
            team creates research-driven, student-focused, and industry-relevant content
            aligned with Google EEAT, Helpful Content, AIO, and GEO optimization standards.
          </p>
        </div>
      </div>
    </div>
  );
}
