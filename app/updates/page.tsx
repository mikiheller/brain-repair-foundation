import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Updates on Levi, DEE-SWAS, developmental regression, Laurel, root-cause discovery, funded research, and what we are learning about brain repair.",
};

const promises = [
  "Levi's progress",
  "EEG and monitoring lessons",
  "Laurel development",
  "Research questions",
  "Funded projects",
  "Expert review themes",
  "Literature findings",
  "Open questions",
  "Collaborator needs",
];

const exampleTitles = [
  "What changed after Levi's first steroid pulse",
  "What we are learning about DEE-SWAS relapse",
  "Why spike suppression is only the first goal",
  "Building Laurel: an AI research lab around one child",
  "What we mean by brain repair",
  "The case for a tumor-board model in severe developmental regression",
  "Open questions in language recovery after epileptic regression",
  "What dense longitudinal data can reveal",
  "Why overgrowth matters in Levi's root-cause search",
  "How we decide what to fund",
];

export default function UpdatesPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Updates</p>
            <h1>Levi / Brain Repair updates.</h1>
            <p className="hero-sub">
              Follow our work on DEE-SWAS, developmental regression, AI-enabled research
              infrastructure, root-cause discovery, and brain repair.
            </p>
            <form className="signup" aria-label="Subscribe to updates">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>
              Newsletter platform is being finalized. Subscribe and we&rsquo;ll add you to the
              list when it launches.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">What we send</p>
              <h2>Our newsletter promise.</h2>
              <p>We send updates on:</p>
              <ul className="list-clean">
                {promises.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="muted">
                Cadence is monthly to start. Posts may be technical, personal, or both.
              </p>
            </div>
            <div>
              <p className="eyebrow eyebrow-quiet">Coming up</p>
              <h2>Examples of what we&rsquo;ll publish.</h2>
              <ul className="list-clean">
                {exampleTitles.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Or just keep reading</p>
              <h3>Outputs page tracks what we publish.</h3>
              <p>
                Whitepapers, literature maps, tools, and protocols will land there as we produce
                them.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/outputs" className="btn btn-on-deep">
                See outputs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
