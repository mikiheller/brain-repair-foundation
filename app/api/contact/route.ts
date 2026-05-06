import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  iAm?: string;
  iAmOther?: string;
  expertise?: string[];
  expertiseOther?: string;
  useful?: string;
  help?: string;
  links?: string;
  subscribe?: boolean;
  website?: string;
};

const I_AM_LABELS: Record<string, string> = {
  clinician: "Clinician",
  researcher: "Researcher",
  ai_data: "AI / data expert",
  lab_company: "Lab / company",
  funder: "Funder",
  family: "Family member",
  journalist: "Journalist",
  other: "Other",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPlain(p: {
  name: string;
  email: string;
  organization: string;
  role: string;
  iAm: string;
  iAmOther: string;
  expertise: string[];
  expertiseOther: string;
  useful: string;
  help: string;
  links: string;
  subscribe: boolean;
}): string {
  const iAmLabel = I_AM_LABELS[p.iAm] ?? p.iAm;
  const iAmLine = p.iAm === "other" && p.iAmOther ? `${iAmLabel} — ${p.iAmOther}` : iAmLabel;
  const expertiseList = [...p.expertise, p.expertiseOther].filter(Boolean).join(", ") || "—";
  return [
    "New Brain Repair Foundation contact submission",
    "",
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    `Organization: ${p.organization || "—"}`,
    `Role: ${p.role || "—"}`,
    `I am a: ${iAmLine}`,
    `Areas of expertise: ${expertiseList}`,
    "",
    "What we should know:",
    p.useful || "—",
    "",
    "How they would like to help:",
    p.help || "—",
    "",
    "Relevant links / publications / lab / company:",
    p.links || "—",
    "",
    `Permission to add to updates: ${p.subscribe ? "Yes" : "No"}`,
  ].join("\n");
}

function formatHtml(p: {
  name: string;
  email: string;
  organization: string;
  role: string;
  iAm: string;
  iAmOther: string;
  expertise: string[];
  expertiseOther: string;
  useful: string;
  help: string;
  links: string;
  subscribe: boolean;
}): string {
  const iAmLabel = I_AM_LABELS[p.iAm] ?? p.iAm;
  const iAmLine =
    p.iAm === "other" && p.iAmOther ? `${escapeHtml(iAmLabel)} &mdash; ${escapeHtml(p.iAmOther)}` : escapeHtml(iAmLabel);
  const expertiseList =
    [...p.expertise, p.expertiseOther].filter(Boolean).map(escapeHtml).join(", ") || "&mdash;";
  return `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, sans-serif; color: #1a1a1a;">
  <h2 style="margin:0 0 12px;">New Brain Repair Foundation contact submission</h2>
  <table style="border-collapse:collapse;font-size:14px;">
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Name</td><td>${escapeHtml(p.name)}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a></td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Organization</td><td>${escapeHtml(p.organization || "—")}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Role</td><td>${escapeHtml(p.role || "—")}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">I am a</td><td>${iAmLine}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Expertise</td><td>${expertiseList}</td></tr>
  </table>
  <h3 style="margin:20px 0 8px;">What we should know</h3>
  <p style="white-space:pre-wrap;">${escapeHtml(p.useful || "—")}</p>
  <h3 style="margin:20px 0 8px;">How they would like to help</h3>
  <p style="white-space:pre-wrap;">${escapeHtml(p.help || "—")}</p>
  <h3 style="margin:20px 0 8px;">Relevant links / publications / lab / company</h3>
  <p style="white-space:pre-wrap;">${escapeHtml(p.links || "—")}</p>
  <p style="color:#555;font-size:13px;">Permission to add to updates: ${p.subscribe ? "Yes" : "No"}</p>
</body></html>`;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const organization = (payload.organization ?? "").trim();
  const role = (payload.role ?? "").trim();
  const iAm = (payload.iAm ?? "").trim();
  const iAmOther = (payload.iAmOther ?? "").trim();
  const expertise = Array.isArray(payload.expertise) ? payload.expertise.filter(Boolean) : [];
  const expertiseOther = (payload.expertiseOther ?? "").trim();
  const useful = (payload.useful ?? "").trim();
  const help = (payload.help ?? "").trim();
  const links = (payload.links ?? "").trim();
  const subscribe = Boolean(payload.subscribe);

  if (!name || !email || !iAm) {
    return NextResponse.json(
      { error: "Please fill out name, email, and tell us who you are." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (
    name.length > 200 ||
    organization.length > 200 ||
    role.length > 200 ||
    useful.length > 4000 ||
    help.length > 4000 ||
    links.length > 2000
  ) {
    return NextResponse.json({ error: "Submission is too long." }, { status: 400 });
  }

  const cleaned = {
    name,
    email,
    organization,
    role,
    iAm,
    iAmOther,
    expertise,
    expertiseOther,
    useful,
    help,
    links,
    subscribe,
  };
  const text = formatPlain(cleaned);
  const html = formatHtml(cleaned);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "hello@brainrepairfoundation.org";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "contact@brainrepairfoundation.org";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not configured; logging submission instead of emailing.\n",
      text,
    );
    return NextResponse.json({ ok: true, delivery: "logged" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Brain Repair Foundation <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Contact — ${name}${organization ? ` (${organization})` : ""}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your message right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivery: "email" });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
