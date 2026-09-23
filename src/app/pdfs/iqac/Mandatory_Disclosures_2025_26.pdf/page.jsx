import { notFound } from "next/navigation";

// This brochure was removed. Without this page, requests to
// /pdfs/iqac/Mandatory_Disclosures_2025_26.pdf fall through to the
// afterFiles rewrite in next.config.mjs, which still serves the file from
// the separate Stealth-Rishabh/ssim-assets GitHub repo. This literal route
// is resolved before that rewrite, so it renders Next.js's own 404 page.
export default function Page() {
  notFound();
}
