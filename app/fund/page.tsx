import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fund a Project",
  description:
    "We fund concrete research projects with clear hypotheses, timelines, and expected outputs.",
};

const principles = [
  "Relevant to Levi",
  "Scientifically plausible",
  "Concrete enough to execute",
  "Measurable",
  "Time-bounded",
  "Useful even if the answer is negative",
  "Capable of informing future cases",
];

const projects = [
  {
    num: "01",
    title: "DEE-SWAS relapse prediction map",
    goal: "Identify what predicts relapse after initial EEG response.",
    why: "Levi responded to steroids, but rebound remains a major concern. Understanding relapse risk could shape monitoring and treatment strategy.",
    outputs: [
      "Literature map",
      "Expert synthesis",
      "Monitoring checklist",
      "Relapse-risk framework",
      "Questions for future studies",
    ],
  },
  {
    num: "02",
    title: "Levi multiomics integration",
    goal: "Integrate genomic, transcriptomic, metabolomic, proteomic, clinical, growth, EEG, and treatment-response data.",
    why: "Levi's combination of regression, DEE-SWAS, and extreme overgrowth may point to a pathway-level root cause.",
    outputs: [
      "Ranked root-cause hypotheses",
      "Candidate pathway map",
      "Validation plan",
      "Lab-ready research questions",
    ],
  },
  {
    num: "03",
    title: "Patient-derived organoid / cellular model validation",
    goal: "Create or use Levi-derived cellular models to test candidate root-cause pathways.",
    why: "Genetics and omics can generate hypotheses. Functional models can help determine which hypotheses are biologically meaningful.",
    outputs: [
      "Cellular phenotype analysis",
      "Pathway validation",
      "Treatment-response assays",
      "Candidate therapeutic directions",
    ],
  },
  {
    num: "04",
    title: "EEG + sleep + behavior recovery dashboard",
    goal: "Build a longitudinal dashboard connecting EEG burden, sleep architecture, treatments, behavior, communication, and recovery markers.",
    why: "Recovery and relapse need to be measured over time, not guessed from isolated snapshots.",
    outputs: [
      "Integrated dashboard",
      "Monitoring metrics",
      "Expert-review packets",
      "Visual timeline",
      "Relapse / recovery signal tracking",
    ],
  },
  {
    num: "05",
    title: "Language recovery after epileptic regression",
    goal: "Identify and test strategies for rebuilding communication after prolonged epileptic or neurodevelopmental regression.",
    why: "Suppressing spikes may create an opportunity for recovery, but recovery likely requires targeted support.",
    outputs: [
      "Literature review",
      "Intervention map",
      "Outcome metrics",
      "Therapy tracking framework",
      "Expert recommendations",
    ],
  },
  {
    num: "06",
    title: "Rapid Review Board infrastructure",
    goal: "Build the process and materials for recurring expert review of Levi's case.",
    why: "Complex cases need structured, cross-disciplinary review.",
    outputs: [
      "Case packet template",
      "Review cadence",
      "Expert summaries",
      "Decision logs",
      "Hypothesis tracker",
    ],
  },
];

export default function FundPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Fund a project</p>
            <h1>Fund targeted research, not vague hope.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation funds specific projects designed to reduce uncertainty,
              validate hypotheses, and accelerate recovery for Levi and children with severe
              developmental regression.
            </p>
            <div className="hero-cta-row">
              <Link href="/contact" className="btn btn-warm">
                Contact us about funding
              </Link>
              <a href="#projects" className="btn btn-secondary">
                See current projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">Funding principles</p>
              <h2>How we choose projects.</h2>
              <p>Every project must be:</p>
              <ul className="list-clean">
                {principles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow eyebrow-quiet">Three core questions</p>
              <p>We prioritize projects that answer one of three questions:</p>
              <div className="grid-3" style={{ gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                <div className="card">
                  <span className="step-num">Question 01</span>
                  <h3>What is causing the regression?</h3>
                </div>
                <div className="card">
                  <span className="step-num">Question 02</span>
                  <h3>What intervention is most likely to help?</h3>
                </div>
                <div className="card">
                  <span className="step-num">Question 03</span>
                  <h3>How do we measure recovery or relapse earlier?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Current funding priorities</p>
          <h2>Six concrete projects.</h2>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            Each has a clear goal, a reason it matters, and tangible outputs. We will publish
            budget targets and progress as projects are funded.
          </p>
          <div className="grid-2">
            {projects.map((p) => (
              <div key={p.num} className="project">
                <p className="project-meta">Project {p.num}</p>
                <h3>{p.title}</h3>
                <p className="project-label">Goal</p>
                <p>{p.goal}</p>
                <p className="project-label">Why it matters</p>
                <p>{p.why}</p>
                <p className="project-label">Potential outputs</p>
                <ul className="list-clean" style={{ marginBottom: 0 }}>
                  {p.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Fund one of these projects</p>
              <h3>We&rsquo;ll send you a project brief.</h3>
              <p>
                Donation infrastructure, fiscal sponsorship, and 501(c)(3) status are being
                finalized. Reach out and we&rsquo;ll share current options for philanthropic
                gifts, research grants, and direct project sponsorship.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/contact" className="btn btn-on-deep">
                Contact us about funding
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
