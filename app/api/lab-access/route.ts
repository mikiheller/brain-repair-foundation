import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RequestPayload = {
  fullName?: string;
  email?: string;
  affiliation?: string;
  role?: string;
  roleOther?: string;
  reason?: string;
  confidentiality?: boolean;
  website?: string;
};

const ROLE_LABELS: Record<string, string> = {
  clinician: "Clinician",
  researcher: "Researcher",
  family: "Family member with similar case",
  engineer: "Engineer / designer / methodologist",
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

function formatPlain(payload: Required<Pick<RequestPayload, "fullName" | "email" | "affiliation" | "role" | "reason">> & {
  roleOther?: string;
}): string {
  const roleLabel = ROLE_LABELS[payload.role] ?? payload.role;
  const roleLine =
    payload.role === "other" && payload.roleOther
      ? `${roleLabel} — ${payload.roleOther}`
      : roleLabel;

  return [
    "New Levi AI Research Lab access request",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Affiliation: ${payload.affiliation}`,
    `Role: ${roleLine}`,
    "",
    "Reason for requesting access:",
    payload.reason,
    "",
    "Confidentiality agreement: Accepted",
  ].join("\n");
}

function formatHtml(payload: Required<Pick<RequestPayload, "fullName" | "email" | "affiliation" | "role" | "reason">> & {
  roleOther?: string;
}): string {
  const roleLabel = ROLE_LABELS[payload.role] ?? payload.role;
  const roleLine =
    payload.role === "other" && payload.roleOther
      ? `${roleLabel} &mdash; ${escapeHtml(payload.roleOther)}`
      : escapeHtml(roleLabel);

  return `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, sans-serif; color: #1a1a1a;">
  <h2 style="margin:0 0 12px;">New Levi AI Research Lab access request</h2>
  <table style="border-collapse:collapse;font-size:14px;">
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Name</td><td>${escapeHtml(payload.fullName)}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Affiliation</td><td>${escapeHtml(payload.affiliation)}</td></tr>
    <tr><td style="padding:4px 8px 4px 0;color:#555;">Role</td><td>${roleLine}</td></tr>
  </table>
  <h3 style="margin:20px 0 8px;">Reason for requesting access</h3>
  <p style="white-space:pre-wrap;">${escapeHtml(payload.reason)}</p>
  <p style="color:#555;font-size:13px;">Confidentiality agreement: Accepted</p>
</body></html>`;
}

export async function POST(request: Request) {
  let payload: RequestPayload;
  try {
    payload = (await request.json()) as RequestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = (payload.fullName ?? "").trim();
  const email = (payload.email ?? "").trim();
  const affiliation = (payload.affiliation ?? "").trim();
  const role = (payload.role ?? "").trim();
  const reason = (payload.reason ?? "").trim();
  const roleOther = (payload.roleOther ?? "").trim();

  if (!fullName || !email || !affiliation || !role || !reason) {
    return NextResponse.json(
      { error: "Please fill out every required field." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!payload.confidentiality) {
    return NextResponse.json(
      { error: "Please confirm the confidentiality agreement." },
      { status: 400 },
    );
  }

  if (reason.length > 4000 || fullName.length > 200 || affiliation.length > 200) {
    return NextResponse.json({ error: "Submission is too long." }, { status: 400 });
  }

  const cleaned = { fullName, email, affiliation, role, reason, roleOther };
  const text = formatPlain(cleaned);
  const html = formatHtml(cleaned);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LAB_REQUEST_TO_EMAIL ?? "hello@brainrepairfoundation.org";
  const fromEmail =
    process.env.LAB_REQUEST_FROM_EMAIL ?? "requests@brainrepairfoundation.org";

  if (!apiKey) {
    console.warn(
      "[lab-access] RESEND_API_KEY not configured; logging request instead of emailing.\n",
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
        subject: `Lab access request — ${fullName}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[lab-access] Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your request right now. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivery: "email" });
  } catch (err) {
    console.error("[lab-access] Unexpected error", err);
    return NextResponse.json(
      { error: "Could not send your request right now. Please try again later." },
      { status: 500 },
    );
  }
}
