/**
 * DimensionIcon — the small stroke-only pictogram for each RIASEC dimension,
 * plus a generic "ws" dial for the work-style block. Reused on question cards,
 * the test side panel, the result legend and the program preview grid.
 *
 * Stroke is `currentColor`, so callers set the colour with a text-* class.
 */

const PATHS = {
  R: (
    <>
      <circle cx="7" cy="7" r="3.2" />
      <line x1="9.3" y1="9.3" x2="15.5" y2="15.5" />
      <rect x="14.2" y="14.2" width="5" height="5" rx="1.2" transform="rotate(45 16.7 16.7)" />
    </>
  ),
  I: (
    <>
      <circle cx="10.2" cy="10.2" r="6.2" />
      <line x1="14.7" y1="14.7" x2="20" y2="20" />
    </>
  ),
  A: (
    <>
      <path d="M4 20l2.6-.9L16.2 9.5l-2-2L4.9 17.1 4 20z" />
      <line x1="14.6" y1="4.6" x2="17.4" y2="7.4" />
    </>
  ),
  S: (
    <>
      <circle cx="8.3" cy="8" r="3" />
      <path d="M3.3 19.2c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2" />
      <circle cx="16.4" cy="9" r="2.5" />
      <path d="M14.6 19.2c0-2.4 1.1-4 3.6-4" />
    </>
  ),
  E: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </>
  ),
  C: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </>
  ),
  ws: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </>
  ),
};

export default function DimensionIcon({ dim, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[dim] || PATHS.ws}
    </svg>
  );
}
