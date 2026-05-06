import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "We are looking for serious collaborators — clinicians, researchers, AI/data experts, labs, companies, and funders — to help understand, treat, and repair severe developmental regression.",
};

const groups = [
  {
    id: "clinicians",
    label: "For clinicians",
    title: "Clinicians",
    intro:
      "We are looking for clinicians with expertise in DEE-SWAS, pediatric epilepsy, epileptic encephalopathy, neurodevelopmental regression, neurogenetics, overgrowth syndromes, sleep and development, language regression, and complex case review.",
    ways: [
      "Join a rapid case review",
      "Advise on treatment-response monitoring",
      "Help define recovery metrics",
      "Identify relapse signals",
      "Recommend diagnostic paths",
      "Connect us to relevant experts",
    ],
    cta: "Contact us as a clinician",
  },
  {
    id: "researchers",
    label: "For researchers",
    title: "Researchers",
    intro:
      "We are looking for researchers working on DEE-SWAS and epileptic regression, developmental regression, neuroplasticity, language recovery, sleep-dependent learning, genetics and overgrowth, mTOR / PI3K-AKT / PTEN-like pathways, multiomics, organoids and cellular models, EEG analytics, and translational therapeutics.",
    ways: [
      "Collaborate on root-cause discovery",
      "Propose a targeted study",
      "Validate a candidate pathway",
      "Help build evidence maps",
      "Join a scientific roundtable",
      "Advise on fundable projects",
    ],
    cta: "Propose a research collaboration",
  },
  {
    id: "ai-data",
    label: "For AI and data experts",
    title: "AI & data experts",
    intro:
      "Laurel needs people who can help build reliable, interpretable, and useful research infrastructure. We are interested in biomedical data integration, evidence synthesis, literature agents, knowledge graphs, clinical reasoning systems, longitudinal dashboards, EEG analytics, privacy-preserving architecture, model evaluation, and human-in-the-loop workflows.",
    ways: [
      "Build Laurel components",
      "Evaluate outputs",
      "Design data models",
      "Improve evidence traceability",
      "Create research dashboards",
      "Support open-source tooling",
    ],
    cta: "Help build Laurel",
  },
  {
    id: "labs",
    label: "For labs and companies",
    title: "Labs & companies",
    intro:
      "We are interested in working with labs and companies that can help answer specific questions faster — omics, functional genomics, variant interpretation, organoids, cell models, EEG analytics, wearable monitoring, sleep measurement, therapeutic discovery, biomarker development, and translational study design.",
    ways: [
      "Run a targeted assay",
      "Provide platform access",
      "Co-design a validation study",
      "Contribute capabilities to specific tracks",
      "Sponsor an open-data effort",
    ],
    cta: "Discuss a project",
  },
  {
    id: "funders",
    label: "For funders",
    title: "Funders",
    intro:
      "We fund targeted work with clear hypotheses, timelines, and outputs. Funding can support expert evidence synthesis, data integration, omics analysis, organoid or cellular validation, EEG and monitoring infrastructure, rapid-review processes, translational collaborations, and open-source tools.",
    ways: [
      "Sponsor a specific project",
      "Underwrite Laurel infrastructure",
      "Back rapid-review board operations",
      "Fund a research track",
      "Match a community campaign",
    ],
    cta: "Fund a project",
  },
  {
    id: "families",
    label: "For families",
    title: "Families",
    intro:
      "We are starting with Levi and are not yet able to support other cases directly. Over time, our goal is to turn what we build into tools, protocols, and research infrastructure that can help other families facing developmental regression.",
    ways: [
      "Follow updates",
      "Share your story, if invited",
      "Join a future registry or waitlist",
      "Help us understand what families need from brain repair infrastructure",
    ],
    cta: "Follow updates",
    ctaHref: "/updates",
  },
];

export default function CollaboratePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Collaborate</p>
            <h1>Help us move faster.</h1>
            <p className="hero-sub">
              We are looking for serious collaborators who can help understand, treat, and repair
              severe developmental regression — starting with Levi and DEE-SWAS.
            </p>
            <div className="hero-cta-row">
              <Link href="/contact" className="btn btn-primary">
                Start a collaboration
              </Link>
              <a href="#clinicians" className="btn btn-secondary">
                See who we&rsquo;re looking for
              </a>
            </div>
          </div>
        </div>
      </section>

      {groups.map((g, idx) => (
        <section
          key={g.id}
          id={g.id}
          className={`section ${idx % 2 === 0 ? "" : "section-alt"} section-bordered`}
        >
          <div className="container-wide">
            <div className="split">
              <div>
                <p className="eyebrow">{g.label}</p>
                <h2>{g.title}</h2>
                <p>{g.intro}</p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Ways to help
                </p>
                <ul className="list-clean">
                  {g.ways.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <Link
                  href={g.ctaHref ?? "/contact"}
                  className="btn btn-secondary"
                  style={{ marginTop: "0.75rem" }}
                >
                  {g.cta} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">One inbound, structured</p>
              <h3>Tell us what you can do.</h3>
              <p>
                The contact form asks who you are, where you have expertise, and what you think
                we should know. We read every submission.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/contact" className="btn btn-on-deep">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
