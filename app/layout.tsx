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
    "The Brain Repair Foundation conducts integrative case synthesis on a single rare pediatric brain injury, and publishes its methodology, synthesis, and negative results.",
  openGraph: {
    title: "Brain Repair Foundation",
    description:
      "Restoring Expression, Plasticity, Attention, Intelligence, and Regulation in Levi Heller.",
    url: siteUrl,
    siteName: "Brain Repair Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Repair Foundation",
    description:
      "Restoring Expression, Plasticity, Attention, Intelligence, and Regulation in Levi Heller.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "What we're working on" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/levi", label: "Levi" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/lab/request-access", label: "Lab access" },
  { href: "/privacy", label: "Privacy" },
];

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
              Brain Repair Foundation
            </Link>
            <nav className="site-nav" aria-label="Primary">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div>
              Brain Repair Foundation · {new Date().getFullYear()} ·{" "}
              <a href="mailto:hello@brainrepairfoundation.org">
                hello@brainrepairfoundation.org
              </a>
            </div>
            <nav className="site-footer-links" aria-label="Footer">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
