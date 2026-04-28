import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <h1>Brain Repair Foundation</h1>
          <p className="hero-acronym">
            Restoring Expression, Plasticity, Attention, Intelligence, and Regulation
          </p>
          <p className="hero-mission">
            Restoring function in our son Levi, and publishing what we learn along the way.
          </p>
          <div className="hero-thesis">
            <p>
              The Brain Repair Foundation exists to restore function in our son Levi, who at age
              2.5 began regressing from a typical developmental trajectory and was diagnosed in
              March 2026 with a severe form of epileptic encephalopathy that disrupts sleep,
              learning, and language. We are conducting integrative research on his case &mdash;
              combining clinical data, genetics, multi-omics, and the published literature &mdash;
              and we are publishing what we learn.
            </p>
            <p>
              Our optimization target is Levi. Our publishing posture is generous. If this work
              eventually helps other children with rare pediatric brain injuries, that is a welcome
              second-order outcome.
            </p>
          </div>
        </section>

        <section aria-labelledby="entry-points">
          <h2 id="entry-points" className="sr-only">
            Where to start
          </h2>
          <div className="entry-cards">
            <Link href="/approach" className="entry-card">
              <p className="entry-card-title">Our Approach</p>
              <p className="entry-card-desc">
                How we conduct integrative case synthesis, and what the Levi AI Research Lab looks
                like.
              </p>
              <span className="entry-card-arrow">Read &rarr;</span>
            </Link>
            <Link href="/work" className="entry-card">
              <p className="entry-card-title">What We&rsquo;re Working On</p>
              <p className="entry-card-desc">
                Active workstreams across stopping the seizures, finding root cause, and restoring
                function.
              </p>
              <span className="entry-card-arrow">Read &rarr;</span>
            </Link>
            <Link href="/lab/request-access" className="entry-card">
              <p className="entry-card-title">Request Lab Access</p>
              <p className="entry-card-desc">
                For clinicians, researchers, and families with similar cases.
              </p>
              <span className="entry-card-arrow">Request &rarr;</span>
            </Link>
          </div>

          <div className="secondary-links">
            <Link href="/people">People</Link>
            <Link href="/levi">Levi&rsquo;s Story</Link>
            <Link href="/contact">Get Involved</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
