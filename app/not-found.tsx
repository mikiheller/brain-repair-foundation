import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <p className="hero-eyebrow">404</p>
          <h1>Page not found.</h1>
          <p className="hero-sub">
            This page doesn&rsquo;t exist. Try the <Link href="/">home page</Link>,{" "}
            <Link href="/levi">Levi&rsquo;s story</Link>, <Link href="/laurel">Laurel</Link>, or{" "}
            <Link href="/contact">contact</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
