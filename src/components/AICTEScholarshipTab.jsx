export default function AICTEScholarshipTab() {
  return (
    <div className="mt-8 flex w-full justify-center pb-2">
      <a
        href="https://www.aicte.gov.in/schemes/students-development-schemes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Click here for AICTE Scholarship/Fellowship Schemes"
        className="flex min-h-12 w-full max-w-fit items-center justify-center gap-2 rounded-md bg-purple-800 px-5 py-3 text-center text-sm font-semibold leading-snug text-white shadow-lg transition-colors hover:bg-purple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:text-left"
      >
        <span>Click here for AICTE Scholarship/Fellowship Schemes</span>
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 3h7v7" />
          <path d="M10 14 21 3" />
          <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
        </svg>
      </a>
    </div>
  )
}
