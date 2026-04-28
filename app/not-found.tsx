import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          This page doesn&rsquo;t exist. Try the <Link href="/">home page</Link>,{" "}
          <Link href="/approach">our approach</Link>, or{" "}
          <Link href="/contact">contact</Link>.
        </p>
      </article>
    </div>
  );
}
