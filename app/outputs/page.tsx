import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outputs",
  description:
    "Tools, maps, protocols, essays, and research outputs from the Brain Repair Foundation.",
};

const categories = [
  {
    label: "Whitepapers",
    items: [
      "DEE-SWAS Treatment Landscape",
      "Brain Repair After Epileptic Regression",
      "AI-Enabled Case Review for Pediatric Regression",
      "Building a Research Engine Around One Child",
    ],
  },
  {
    label: "Literature maps",
    items: [
      "DEE-SWAS relapse predictors",
      "Language recovery after epileptic regression",
      "Overgrowth and epilepsy pathways",
      "Sleep architecture and learning recovery",
    ],
  },
  {
    label: "Tools",
    items: [
      "Laurel components",
      "Case-review packet templates",
      "Monitoring dashboards",
      "Hypothesis trackers",
    ],
  },
  {
    label: "Talks",
    items: ["Conference panels", "Invited talks", "Recorded briefings"],
  },
  {
    label: "Publications",
    items: ["Preprints", "Peer-reviewed publications", "Collaborative research outputs"],
  },
  {
    label: "Funded projects",
    items: ["Project summaries", "Progress updates", "Outputs and findings"],
  },
];

export default function OutputsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Outputs</p>
            <h1>Tools, maps, protocols, and research outputs.</h1>
            <p className="hero-sub">
              As we learn, we publish work products that may help others working on developmental
              regression and brain repair. This page will fill in over time — much of it is
              under construction.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid-2">
            {categories.map((c) => (
              <div key={c.label} className="card">
                <p className="step-num">{c.label}</p>
                <ul className="list-clean" style={{ marginBottom: 0 }}>
                  {c.items.map((item) => (
                    <li key={item} className="muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: "2rem", fontSize: "0.92rem" }}>
            These are placeholders for upcoming outputs. Subscribe to updates and we&rsquo;ll
            announce items as they are published.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Get the next output</p>
              <h3>Subscribe for the next release.</h3>
            </div>
            <div className="cta-bar-actions">
              <Link href="/updates" className="btn btn-on-deep">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
