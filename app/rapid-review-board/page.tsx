import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rapid Review Board",
  description:
    "A structured expert-review process for complex pediatric developmental regression, starting with Levi.",
};

const reviewQuestions = [
  "What changed since the last review?",
  "What hypotheses became more likely?",
  "What hypotheses became less likely?",
  "What tests would reduce uncertainty?",
  "What treatments or experiments are worth considering?",
  "What should be monitored over the next 2–4 weeks?",
  "What would change our mind?",
  "What should Laurel track before the next review?",
];

const expertise = [
  "DEE-SWAS",
  "Pediatric epilepsy",
  "Neurogenetics",
  "Overgrowth syndromes",
  "mTOR / PI3K-AKT / PTEN-like pathways",
  "Neuroimmunology",
  "Neurodevelopmental regression",
  "Sleep and learning",
  "Language recovery",
  "EEG analytics",
  "Multiomics",
  "Organoids and disease modeling",
  "Translational therapeutics",
  "AI-assisted clinical reasoning",
];

const participation = [
  "One-time expert review",
  "Founding scientific roundtable",
  "Recurring Levi Rapid Review Board",
  "Research collaboration",
  "Advisory board membership",
  "Project-specific consultation",
];

export default function RapidReviewBoardPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Rapid Review Board</p>
            <h1>A rapid-review model for complex pediatric regression.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation is building a structured expert-review process for
              complex pediatric developmental regression, starting with Levi. Each review
              summarizes the latest data, current hypotheses, treatment responses, open
              questions, and proposed next actions.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Join a review
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why a Rapid Review Board</p>
          <h2>Complex regression needs more than episodic appointments.</h2>
          <p>
            Levi&rsquo;s case changes quickly. EEGs, treatments, labs, sleep, behavior, and
            development all evolve over time. The relevant literature is broad. The right next
            step depends on integrating many domains at once.
          </p>
          <p>
            A rapid-review board creates a structured way to bring experts together around the
            current state of the case.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">The review structure</p>
          <h2>Each review asks eight questions.</h2>
          <ol className="list-clean" style={{ counterReset: "step", listStyle: "none" }}>
            {reviewQuestions.map((q, i) => (
              <li key={i} style={{ display: "flex", gap: "0.85rem" }}>
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
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">Expertise we need</p>
              <h2>Who we are looking for.</h2>
              <ul className="list-clean list-two-col">
                {expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow eyebrow-quiet">Bounded ways to help</p>
              <h2>Participation models.</h2>
              <ul className="list-clean">
                {participation.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-secondary">
                Join a review →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
