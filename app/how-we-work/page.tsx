import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A rapid translational loop: collect, analyze, prioritize, validate, monitor, generalize.",
};

const steps = [
  {
    num: "01",
    title: "Collect dense longitudinal data.",
    body: "We collect and organize the data needed to understand change over time.",
    items: [
      "EEGs",
      "Labs",
      "Imaging",
      "Genetics",
      "Omics",
      "Treatments",
      "Sleep",
      "Behavior",
      "Glucose",
      "GI data",
      "Developmental observations",
      "Therapy inputs",
      "Expert notes",
    ],
    note: "The goal is to move from isolated snapshots to a living model of the child.",
  },
  {
    num: "02",
    title: "Analyze across domains.",
    body: "Laurel integrates child-specific data with research literature and expert knowledge. It looks for patterns across epilepsy, sleep, language, growth, genetics, metabolism, immune function, plasticity, and treatment response.",
  },
  {
    num: "03",
    title: "Prioritize what matters most.",
    body: "Not every hypothesis is worth pursuing immediately. We rank hypotheses by:",
    items: [
      "Plausibility",
      "Actionability",
      "Urgency",
      "Risk",
      "Cost",
      "Reversibility",
      "Evidence strength",
      "Expected value",
      "Ability to reduce uncertainty",
      "Relevance to Levi",
    ],
  },
  {
    num: "04",
    title: "Validate or rule out hypotheses.",
    body: "Depending on the question, validation may include:",
    items: [
      "Additional testing",
      "Expert review",
      "Reanalysis of existing data",
      "Functional genomics",
      "Pathway analysis",
      "Organoids or cellular models",
      "Targeted lab assays",
      "Treatment-response tracking",
      "Literature synthesis",
      "External replication",
    ],
  },
  {
    num: "05",
    title: "Monitor response and relapse.",
    body: "For children with regression, treatment response cannot be measured by occasional impressions alone. We need to track what changes, what does not, and what rebounds.",
    items: [
      "Spike-wave burden",
      "EEG localization and amplitude",
      "Sleep architecture",
      "Language attempts",
      "Communication",
      "Attention",
      "Regulation",
      "Learning retention",
      "Behavior",
      "Therapy response",
      "Labs",
      "Adverse effects",
      "Parent observations",
    ],
  },
  {
    num: "06",
    title: "Turn one case into infrastructure.",
    body: "Levi's case is the starting point. As we learn, we aim to produce tools and methods that can help others.",
    items: [
      "Research maps",
      "Review templates",
      "Dashboards",
      "Data models",
      "Funding playbooks",
      "Open-source tools",
      "Clinical-research protocols",
      "Expert networks",
      "Case-review frameworks",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">How we work</p>
            <h1>A rapid translational loop for brain repair.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation uses a continuous loop: collect dense data, analyze it,
              generate hypotheses, review with experts, validate through tests and experiments,
              measure outcomes, and update the model.
            </p>
            <div className="loop" style={{ marginTop: "1.5rem" }}>
              {steps.map((s) => (
                <div key={s.num} className="loop-step">
                  <span className="num">{s.num}</span>
                  <span className="name">{s.title.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="track"
              style={i === 0 ? { borderTop: "1px solid var(--color-rule)" } : undefined}
            >
              <p className="track-label">Step {s.num}</p>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              {s.items && (
                <ul className="list-clean list-two-col" style={{ marginTop: "0.75rem" }}>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {s.note && <p className="muted">{s.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Plug into the loop</p>
              <h3>If you want to help at any step, we want to hear from you.</h3>
            </div>
            <div className="cta-bar-actions">
              <Link href="/collaborate" className="btn btn-on-deep">
                Collaborate with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
