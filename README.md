# Brain Repair Foundation Website

Public-facing v1 of the Brain Repair Foundation website. Built from the specification in
[`website-plan.md`](./website-plan.md).

Stack:

- Next.js (App Router) + TypeScript
- Static-first pages with one server route for the Lab access request form
- Email delivery via [Resend](https://resend.com); falls back to server logs if no API key is set

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values you have
npm run dev
```

Then visit `http://localhost:3000`.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — production server (after build)
- `npm run lint` — ESLint via `next lint`

## Pages

| Path | Source |
| --- | --- |
| `/` | `app/page.tsx` |
| `/approach` | `app/approach/page.tsx` |
| `/work` | `app/work/page.tsx` |
| `/research` | `app/research/page.tsx` |
| `/people` | `app/people/page.tsx` |
| `/levi` | `app/levi/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/lab/request-access` | `app/lab/request-access/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |

## Lab access request flow (v1)

1. Visitor fills out the form at `/lab/request-access`.
2. The form `POST`s to `/api/lab-access`.
3. The route validates input (server-side), strips honeypot submissions, and emails
   the request via Resend to `LAB_REQUEST_TO_EMAIL`.
4. Visitor sees an in-page confirmation.
5. Jake or Miki reviews the email and grants Lab access manually.

If `RESEND_API_KEY` is not configured, submissions are written to server logs (with a
warning) so the site continues to work in pre-launch environments.

### Environment variables

See [`.env.example`](./.env.example):

- `RESEND_API_KEY` — Resend API key.
- `LAB_REQUEST_TO_EMAIL` — destination address (default `hello@brainrepairfoundation.org`).
- `LAB_REQUEST_FROM_EMAIL` — verified sender (must be on a domain configured in Resend).
- `NEXT_PUBLIC_SITE_URL` — used in metadata, sitemap, and robots.

## Content placeholders

Copy still to be supplied by Jake and Miki is marked with bracketed placeholders, e.g.
`[DATE]`, `[PHOTO PLACEHOLDER]`, or `[ADDITIONAL WORKSTREAM PLACEHOLDER]`. Search the
codebase for `PLACEHOLDER` to find every occurrence.

Items still needed before launch (from `website-plan.md` §8):

1. Final domain confirmation.
2. Photos for `/levi` and `/people`.
3. Voice edits on bios and Levi's story.
4. Initial workstream selection on `/work`.
5. Initial research entries on `/research` (or keep the empty state).
6. Decision on automated magic-link Lab access (deferred from v1).
7. Optional legal review of confidentiality wording.
8. Email addresses provisioned: `hello@`, `jake@`, `miki@`, `research@`, `families@`.

## Deployment notes

- Designed for Vercel deployment. Static pages are statically rendered; the only
  dynamic surface is `/api/lab-access`.
- Set the env vars above in your hosting environment.
- No analytics or tracking pixels are included by design.
