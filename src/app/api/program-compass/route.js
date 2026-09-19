import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { evaluate } from "@/lib/program-compass";
import { DIM_LABEL, ITEMS } from "@/data/programCompassData";

/**
 * POST /api/program-compass — receives a completed Program Compass assessment.
 *
 * Two destinations, deliberately independent:
 *   1. Email to the outreach inbox (the thing admissions actually watches).
 *   2. The Google Apps Script webhook that appends a row to the response Sheet.
 *
 * Neither is allowed to fail the request on its own. The student has already
 * seen their result by the time this runs, so a 500 here would only lose the
 * lead — we record what succeeded and return 200 as long as at least one
 * destination accepted it.
 *
 * The scores are recomputed here from the raw answers rather than trusting the
 * numbers the browser sends, so a tampered payload can't fake a profile.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;
const VALID_ITEM_IDS = new Set(ITEMS.map((item) => item.id));

/* ------------------------------------------------------- rate limiting */

/**
 * Small in-memory sliding window, keyed by client IP. This is per-instance, not
 * distributed — enough to blunt casual form spam on a single App Service
 * instance without adding a Redis dependency for a page of this size.
 */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

/* ------------------------------------------------------------ helpers */

/** Strips HTML-significant characters before values go into the email body. */
function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]
  );
}

/** Caps free-text length so an oversized field can't bloat the mail or the Sheet. */
function clean(value, max = 200) {
  return String(value ?? "").trim().slice(0, max);
}

/* ----------------------------------------------------------- mail ---- */

const MAIL_USER = process.env.PROGRAM_COMPASS_MAIL_USER || process.env.EMAIL_USER;
const MAIL_PASS = process.env.PROGRAM_COMPASS_MAIL_PASS || process.env.EMAIL_PASS;
const MAIL_TO = process.env.PROGRAM_COMPASS_MAIL_TO || "outreach@ssim.ac.in";

function buildEmail(record) {
  const row = (label, value) => `
    <tr>
      <td style="padding:7px 0;font-weight:bold;color:#374151;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:7px 0;color:#4b5563;">${value}</td>
    </tr>`;

  const scoreRows = record.order
    .map((dim) => {
      const pct = Math.round(record.dimScore[dim] * 100);
      return `
      <tr>
        <td style="padding:5px 0;color:#374151;width:170px;">${DIM_LABEL[dim]}</td>
        <td style="padding:5px 0;width:160px;">
          <span style="display:inline-block;height:8px;width:${pct * 1.4}px;background:#6B21A8;border-radius:99px;"></span>
        </td>
        <td style="padding:5px 0;color:#111827;font-weight:bold;">${pct}%</td>
      </tr>`;
    })
    .join("");

  const programRows = record.ranked
    .map(
      (entry, i) => `
      <tr>
        <td style="padding:8px 0;color:#374151;">
          <strong>${i + 1}. ${escapeHtml(entry.program)}</strong>
        </td>
        <td style="padding:8px 0;color:#6B21A8;font-weight:bold;text-align:right;">${entry.match}%</td>
      </tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;padding:20px;background:#f9fafb;">
    <div style="background:#ffffff;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.06);">
      <h2 style="color:#6B21A8;margin:0 0 6px;border-bottom:2px solid #e5e7eb;padding-bottom:12px;">
        New Program Compass Submission
      </h2>
      <p style="color:#6b7280;font-size:13px;margin:10px 0 24px;">
        Received ${escapeHtml(new Date(record.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))} IST
      </p>

      <h3 style="color:#374151;margin:0 0 10px;font-size:16px;">Student details</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Name", escapeHtml(record.name))}
        ${row("Phone", `<a href="tel:${escapeHtml(record.phone)}" style="color:#6B21A8;text-decoration:none;">${escapeHtml(record.phone)}</a>`)}
        ${row("Email", `<a href="mailto:${escapeHtml(record.email)}" style="color:#6B21A8;text-decoration:none;">${escapeHtml(record.email)}</a>`)}
        ${row("Current college", escapeHtml(record.currentCollege))}
        ${row("Degree", escapeHtml(record.degree))}
        ${row("Graduating", escapeHtml(record.gradYear))}
        ${row("Source", escapeHtml(record.sourceCollege) + ` <span style="color:#9ca3af;">(${escapeHtml(record.channel)})</span>`)}
        ${row("Consent given", record.consent ? "Yes" : "No")}
      </table>

      <h3 style="color:#374151;margin:26px 0 10px;font-size:16px;">
        RIASEC profile &mdash; <span style="color:#6B21A8;">${escapeHtml(record.topCode)}</span>
      </h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${scoreRows}</table>

      <h3 style="color:#374151;margin:26px 0 10px;font-size:16px;">Recommended specializations</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${programRows}</table>

      <p style="margin:26px 0 0;padding-top:16px;border-top:1px solid #e5e7eb;color:#9ca3af;font-size:12px;">
        Sent automatically by the Program Compass assessment on ssim.ac.in.
        Reply to this email to reach the student directly.
      </p>
    </div>
  </div>`;
}

async function sendEmail(record) {
  if (!MAIL_USER || !MAIL_PASS) {
    console.warn("[program-compass] mail credentials not configured — skipping email");
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: MAIL_USER, pass: MAIL_PASS },
  });

  await transporter.sendMail({
    from: `"SSIM Program Compass" <${MAIL_USER}>`,
    to: MAIL_TO,
    subject: `Program Compass: ${record.name} — ${record.ranked[0]?.program || "result"} (${record.topCode})`,
    html: buildEmail(record),
    replyTo: record.email,
  });

  return true;
}

/* --------------------------------------------------------- sheet ----- */

/**
 * Appends the row to the Google Sheet via its Apps Script Web App.
 *
 * Called server-side so the webhook URL is never exposed to the browser — that
 * endpoint accepts anonymous POSTs, so a public URL would be an open write
 * path into the response Sheet.
 */
async function sendToSheet(record) {
  const url = process.env.PROGRAM_COMPASS_WEBHOOK_URL;
  if (!url) {
    console.warn("[program-compass] webhook URL not configured — skipping Sheet write");
    return false;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(record),
    signal: AbortSignal.timeout(10000),
  });

  return response.ok;
}

/* ---------------------------------------------------------- handler -- */

export async function POST(request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 15);
  const email = clean(body.email, 160);
  const currentCollege = clean(body.currentCollege, 160);
  const degree = clean(body.degree, 60);
  const gradYear = clean(body.gradYear, 30);

  if (!name || !currentCollege || !degree || !gradYear) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  // Keep only known item ids with in-range values — anything else is discarded
  // rather than trusted into the scoring engine.
  const answers = {};
  for (const [key, value] of Object.entries(body.answers || {})) {
    const numeric = Number(value);
    if (VALID_ITEM_IDS.has(key) && numeric >= 1 && numeric <= 5) {
      answers[key] = numeric;
    }
  }
  if (Object.keys(answers).length === 0) {
    return NextResponse.json({ error: "No assessment answers received" }, { status: 400 });
  }

  const { dimScore, axisScore, order, code, ranked } = evaluate(answers);

  const record = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    name,
    phone,
    email,
    currentCollege,
    degree,
    gradYear,
    sourceCollege: clean(body.sourceCollege, 160) || currentCollege,
    channel: body.channel === "college-link" ? "college-link" : "direct",
    consent: true,
    scores: dimScore,
    dimScore,
    workStyle: axisScore,
    order,
    topCode: code,
    ranked: ranked.slice(0, 3).map((entry) => ({
      program: entry.program.name,
      match: entry.match,
    })),
  };

  // Fire both destinations together; a failure in one must not block the other.
  const [mailResult, sheetResult] = await Promise.allSettled([
    sendEmail(record),
    sendToSheet(record),
  ]);

  const emailed = mailResult.status === "fulfilled" && mailResult.value === true;
  const sheeted = sheetResult.status === "fulfilled" && sheetResult.value === true;

  if (mailResult.status === "rejected") {
    console.error("[program-compass] email failed:", mailResult.reason);
  }
  if (sheetResult.status === "rejected") {
    console.error("[program-compass] sheet write failed:", sheetResult.reason);
  }

  if (!emailed && !sheeted) {
    // Log the whole record so the lead is at least recoverable from app logs.
    console.error("[program-compass] BOTH destinations failed, record:", JSON.stringify(record));
    return NextResponse.json(
      { error: "Could not save your response. Please contact admissions directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, emailed, sheeted, topCode: code });
}
