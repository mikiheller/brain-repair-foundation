import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brainrepairfoundation.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brain Repair Foundation",
    template: "%s · Brain Repair Foundation",
  },
  description:
    "The Brain Repair Foundation builds AI-enabled translational research infrastructure for children with acquired developmental regression, starting with Levi and DEE-SWAS.",
  openGraph: {
    title: "Brain Repair Foundation",
    description:
      "Precision brain recovery for children with developmental regression. Starting with Levi and DEE-SWAS.",
    url: siteUrl,
    siteName: "Brain Repair Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Repair Foundation",
    description:
      "Precision brain recovery for children with developmental regression. Starting with Levi and DEE-SWAS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "/levi", label: "Levi" },
  { href: "/laurel", label: "Laurel" },
  { href: "/research", label: "Research" },
  { href: "/fund", label: "Fund" },
  { href: "/updates", label: "Updates" },
];

const footerExploreLinks = [
  { href: "/levi", label: "Levi" },
  { href: "/laurel", label: "Laurel" },
  { href: "/research", label: "Research" },
  { href: "/how-we-work", label: "How we work" },
];

const footerEngageLinks = [
  { href: "/collaborate", label: "Collaborate" },
  { href: "/fund", label: "Fund a project" },
  { href: "/rapid-review-board", label: "Rapid Review Board" },
  { href: "/for-families", label: "For families" },
];

const footerOrgLinks = [
  { href: "/about", label: "About" },
  { href: "/outputs", label: "Outputs" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

const BrandMark = () => (
  <svg
    className="site-brand-mark"
    viewBox="0 0 22 22"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="10" fill="#0f3a4f" />
    <path
      d="M2 11 L5 11 L6.5 7 L8 15 L9.5 9 L11 13 L12.5 8 L14 14 L15.5 10 L17 11 L20 11"
      stroke="#b76a2a"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-brand" aria-label="Brain Repair Foundation home">
              <BrandMark />
              <span>Brain Repair Foundation</span>
            </Link>
            <nav className="site-nav" aria-label="Primary">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/collaborate" className="nav-cta">
                Collaborate
              </Link>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-brand">
              <strong>Brain Repair Foundation</strong>
              <span className="site-footer-acronym">
                REPAIR · Restoring Expression, Plasticity, Attention, Intelligence, and Regulation
              </span>
              <p className="site-footer-mission">
                AI-enabled translational research infrastructure for children with acquired
                developmental regression. Starting with Levi and DEE-SWAS.
              </p>
            </div>
            <div className="site-footer-col">
              <h4>Explore</h4>
              <ul>
                {footerExploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer-col">
              <h4>Engage</h4>
              <ul>
                {footerEngageLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer-col">
              <h4>Organization</h4>
              <ul>
                {footerOrgLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="site-footer-base">
            <span>
              Brain Repair Foundation · {new Date().getFullYear()} ·{" "}
              <a href="mailto:hello@brainrepairfoundation.org">
                hello@brainrepairfoundation.org
              </a>{" "}
              · <Link href="/privacy">Privacy</Link>
            </span>
            <span className="site-footer-disclaimer">
              The Brain Repair Foundation supports research, evidence synthesis, and expert
              collaboration. Laurel is a research and hypothesis-generation system, not a
              substitute for medical care.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
