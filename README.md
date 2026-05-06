# Brain Repair Foundation Website

Public-facing website for the Brain Repair Foundation. Structure and copy follow the
specification in
[`brain_repair_foundation_website_structure_and_copy.md`](../brain_repair_foundation_website_structure_and_copy.md)
(outside this repo).

Stack:

- Next.js (App Router) + TypeScript
- Static-first pages with one server route for the contact form
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
| `/levi` | `app/levi/page.tsx` |
| `/laurel` | `app/laurel/page.tsx` |
| `/research` | `app/research/page.tsx` |
| `/how-we-work` | `app/how-we-work/page.tsx` |
| `/collaborate` | `app/collaborate/page.tsx` |
| `/fund` | `app/fund/page.tsx` |
| `/updates` | `app/updates/page.tsx` |
| `/rapid-review-board` | `app/rapid-review-board/page.tsx` |
| `/for-families` | `app/for-families/page.tsx` |
| `/outputs` | `app/outputs/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |

## Contact form flow

1. Visitor fills out the form at `/contact`.
2. The form `POST`s to `/api/contact`.
3. The route validates input server-side, strips honeypot submissions, and emails the
   submission via Resend to `CONTACT_TO_EMAIL`.
4. Visitor sees an in-page confirmation.

If `RESEND_API_KEY` is not configured, submissions are written to server logs so the
site continues to work in pre-launch environments.

### Environment variables

See [`.env.example`](./.env.example):

- `RESEND_API_KEY` — Resend API key.
- `CONTACT_TO_EMAIL` — destination address (default `hello@brainrepairfoundation.org`).
- `CONTACT_FROM_EMAIL` — verified sender (must be on a domain configured in Resend).
- `NEXT_PUBLIC_SITE_URL` — used in metadata, sitemap, and robots.

## Deployment notes

- Designed for Vercel deployment. Static pages are statically rendered; the only
  dynamic surface is `/api/contact`.
- Set the env vars above in your hosting environment.
- No analytics or tracking pixels are included by design.
