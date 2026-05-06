import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laurel · AI Research Engine",
  description:
    "Laurel is the AI research engine of the Brain Repair Foundation. It integrates Levi's clinical data with the literature and expert input to generate, prioritize, and update hypotheses.",
};

const inputs = [
  "EEG reports and quantitative EEG features",
  "Labs",
  "Medications, supplements, and treatment timelines",
  "MRI and imaging findings",
  "Genetic testing",
  "Multiomics data",
  "Organoid and model-system results, when available",
  "Sleep data",
  "Behavior and developmental observations",
  "Continuous glucose data",
  "GI and stool tracking",
  "Therapy data",
  "Clinical notes",
  "Expert notes",
  "Research papers",
  "Guidelines and treatment literature",
  "Lab and company capabilities",
];

const outputs = [
  {
    title: "Root-cause hypotheses",
    desc: "Ranked explanations for Levi's regression, epileptiform activity, overgrowth, and treatment response.",
  },
  {
    title: "Treatment hypotheses",
    desc: "Candidate interventions to discuss, evaluate, or study, with evidence, uncertainty, risks, and monitoring needs.",
  },
  {
    title: "Diagnostic suggestions",
    desc: "Tests or measurements that could reduce uncertainty or eliminate categories of hypotheses.",
  },
  {
    title: "Evidence maps",
    desc: "Structured summaries of what supports, weakens, or contradicts each hypothesis.",
  },
  {
    title: "Relapse and recovery monitoring",
    desc: "Signals that may predict worsening, rebound, or improvement.",
  },
  {
    title: "Expert and lab recommendations",
    desc: "People, labs, companies, and research groups who may be useful for a specific question.",
  },
  {
    title: "Experiment proposals",
    desc: "Targeted projects that could validate or falsify a hypothesis.",
  },
  {
    title: "Review packets",
    desc: "Briefings for expert review meetings, including what changed, what matters, and what decisions are pending.",
  },
];

const workflow = [
  "A new EEG report is added.",
  "Laurel extracts key changes: spike burden, sleep architecture, localization, amplitude, and comparison to prior EEGs.",
  "It updates the treatment-response timeline.",
  "It compares the new EEG pattern against the literature on DEE-SWAS relapse and recovery.",
  "It identifies hypotheses that became more or less likely.",
  "It recommends questions for the next expert review.",
  "It updates the monitoring plan and research agenda.",
];

const futureOutputs = [
  "Case-review templates",
  "Literature maps",
  "Open-source tooling",
  "Structured data models",
  "Clinical-research dashboards",
  "Relapse monitoring frameworks",
  "Family data-capture tools",
  "Research protocols",
  "Methods for AI-assisted rare disease investigation",
];

export default function LaurelPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Laurel</p>
            <h1>Laurel is the AI research engine of the Brain Repair Foundation.</h1>
            <p className="hero-sub">
              Laurel was built to answer one urgent question: what should we understand, test,
              monitor, fund, or try next for Levi?
            </p>
            <p className="hero-sub">
              It integrates Levi&rsquo;s longitudinal data, the scientific literature, and expert
              input to generate hypotheses, identify evidence gaps, and prepare structured reviews
              for human experts.
            </p>
            <div className="hero-cta-row">
              <Link href="/collaborate" className="btn btn-primary">
                Collaborate on Laurel
              </Link>
              <Link href="/fund" className="btn btn-secondary">
                Fund Laurel infrastructure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Laurel exists</p>
          <h2>The problem is not lack of information. It is lack of integration.</h2>
          <p>
            Levi&rsquo;s case generates many kinds of data: EEGs, labs, MRI findings, genetic
            tests, medications, sleep, behavior, glucose, GI tracking, omics, and developmental
            observations.
          </p>
          <p>
            At the same time, the relevant literature spans pediatric epilepsy, DEE-SWAS,
            language regression, overgrowth syndromes, mTOR and growth pathways, neuroplasticity,
            sleep architecture, immunology, metabolism, genetics, and therapeutics.
          </p>
          <p>No individual can hold all of that in working memory.</p>
          <p>Laurel exists to make the case continuously intelligible.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">Inputs</p>
              <h2>What Laurel ingests</h2>
              <p>
                Laurel is designed to integrate child-specific data with the broader scientific
                literature and expert input.
              </p>
              <ul className="list-clean list-two-col">
                {inputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: "1rem", fontSize: "0.92rem" }}>
                Some sources are live today; others are planned. We will publish a more detailed
                breakdown as the system matures.
              </p>
            </div>
            <div>
              <div className="diagram-placeholder">
                System diagram placeholder
                <br />
                Levi data + literature + experts → Laurel → hypotheses, tests, treatments,
                collaborators, monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">Outputs</p>
          <h2>What Laurel produces</h2>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            Laurel produces structured outputs designed for human review.
          </p>
          <div className="grid-2">
            {outputs.map((o) => (
              <div key={o.title} className="card">
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container-wide">
          <p className="eyebrow">Built for expert review</p>
          <h2>Laurel is not a doctor.</h2>
          <p style={{ maxWidth: "70ch" }}>
            Laurel does not replace clinicians, scientists, or parents. It does not issue medical
            orders. It organizes evidence, identifies gaps, generates hypotheses, and helps
            experts reason faster.
          </p>
          <p style={{ maxWidth: "70ch" }}>
            The goal is not to automate judgment. The goal is to make judgment better informed,
            more current, and more structured.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Example workflow</p>
          <h2>What Laurel does when a new EEG comes in.</h2>
          <ol className="list-clean" style={{ counterReset: "step", listStyle: "none" }}>
            {workflow.map((step, i) => (
              <li key={i} style={{ display: "flex", gap: "0.85rem", paddingLeft: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    color: "var(--color-warm)",
                    minWidth: "1.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Future vision</p>
          <h2>From one child to a reusable research engine.</h2>
          <p style={{ maxWidth: "65ch" }}>
            Laurel started with Levi because his case could not wait. Over time, the goal is to
            turn Laurel into reusable infrastructure for other children with severe developmental
            regression.
          </p>
          <p style={{ maxWidth: "65ch" }}>Potential future outputs include:</p>
          <ul className="list-clean list-two-col">
            {futureOutputs.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Help build Laurel</p>
              <h3>We are looking for collaborators in AI, clinical reasoning, and translational research.</h3>
              <p>
                Biomedical data integration, evidence synthesis, EEG analytics, privacy-preserving
                infrastructure, model evaluation, human-in-the-loop workflows.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/collaborate" className="btn btn-on-deep">
                Collaborate on Laurel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
