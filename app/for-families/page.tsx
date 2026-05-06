import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Families",
  description:
    "We started with Levi. Over time, we hope to turn what we build into tools, protocols, and research infrastructure that can help other families.",
};

const futureTools = [
  "Research maps",
  "Case-review templates",
  "Data-capture tools",
  "Family-friendly explanations",
  "Monitoring frameworks",
  "Questions to ask when a child is regressing",
  "Playbooks for dense data collection",
  "Ways to connect families with research efforts",
  "Eventually, tools that can support other complex cases",
];

export default function ForFamiliesPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">For families</p>
            <h1>For families facing developmental regression.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation started with Levi. We know what it feels like to watch
              a child lose words, skills, and time while answers remain incomplete.
            </p>
            <p className="hero-sub">
              We are not yet able to support other cases directly. Our current focus is building
              the research infrastructure around Levi&rsquo;s case. Over time, our goal is to
              turn what we learn into tools, protocols, and research infrastructure that can help
              other families.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we hope to make available over time</p>
          <h2>What we&rsquo;re building.</h2>
          <ul className="list-clean">
            {futureTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Stay connected</p>
          <h2>Follow the work.</h2>
          <p style={{ maxWidth: "60ch" }}>
            We share updates on Levi, DEE-SWAS, developmental regression, Laurel, research
            projects, and what we are learning about brain repair.
          </p>
          <Link href="/updates" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
            Subscribe to updates
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow eyebrow-quiet">Optional</p>
          <h2>Share your story.</h2>
          <p>
            If your child has experienced developmental regression, you may share your story with
            us. We cannot promise individual review or advice, but family stories may help shape
            future research infrastructure.
          </p>
          <p className="muted" style={{ fontSize: "0.92rem" }}>
            A structured submission form is coming. For now, please reach out via the contact
            page.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
