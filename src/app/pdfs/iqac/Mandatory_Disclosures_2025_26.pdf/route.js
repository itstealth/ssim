import { NextResponse } from "next/server";

// This brochure was removed. Without this route handler, requests to
// /pdfs/iqac/Mandatory_Disclosures_2025_26.pdf fall through to the
// afterFiles rewrite in next.config.mjs, which still serves the file from
// the separate Stealth-Rishabh/ssim-assets GitHub repo. This literal route
// is resolved before that rewrite, so it forces a real 404 instead.
export async function GET() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
