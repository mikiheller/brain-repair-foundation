import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Agenda",
  description:
    "Our research agenda focuses on the biology, measurement, and recovery of severe developmental regression — starting with DEE-SWAS and Levi's case.",
};

const tracks = [
  {
    label: "Track 01",
    title: "DEE-SWAS and epileptic regression",
    headline: "How does spike-wave activity disrupt development, and what predicts recovery?",
    questions: [
      "What predicts response to steroids, benzodiazepines, valproate, ethosuximide, ketogenic diet, surgery, or other interventions?",
      "What predicts relapse after initial EEG improvement?",
      "How low does spike-wave burden need to be for recovery?",
      "Do spike amplitude, localization, sleep-stage disruption, or network spread matter more than spike-wave index alone?",
      "How quickly can language, attention, sleep, and cognition improve after spike suppression?",
      "What monitoring cadence is needed after treatment response?",
      "Which EEG features should be tracked longitudinally?",
    ],
  },
  {
    label: "Track 02",
    title: "Root-cause discovery",
    headline: "What caused the regression, epileptiform activity, and overgrowth?",
    questions: [
      "Is there a genetic cause not captured by standard testing?",
      "Could a regulatory, mosaic, mitochondrial, epigenetic, or pathway-level mechanism explain the phenotype?",
      "Are overgrowth and epilepsy connected through mTOR, PI3K-AKT, PTEN-like pathways, or another growth-signaling mechanism?",
      "Can multiomics narrow the causal search?",
      "Can organoids or cellular models validate candidate mechanisms?",
      "Which findings are causal, compensatory, downstream, or incidental?",
    ],
  },
  {
    label: "Track 03",
    title: "Recovery of lost function",
    headline:
      "What helps a child regain communication, attention, cognition, and regulation after regression?",
    questions: [
      "What helps rebuild language after prolonged epileptic or neurodevelopmental regression?",
      "What interventions improve learning retention?",
      "What role do sleep architecture and sleep-dependent learning play?",
      "What is the role of neuroplasticity windows after spike suppression?",
      "How should recovery be measured?",
      "Which outcomes matter daily, weekly, monthly, and yearly?",
      "What distinguishes true recovery from temporary fluctuation?",
    ],
  },
  {
    label: "Track 04",
    title: "Measurement infrastructure",
    headline: "Can dense data reveal relapse or recovery earlier?",
    questions: [
      "Can frequent EEG monitoring detect rebound earlier?",
      "Can behavior, sleep, CGM, or other wearable data predict EEG worsening?",
      "Can child-specific biomarkers of recovery be built?",
      "Can AI summarize change over time better than episodic clinical notes?",
      "What should a rapid-review packet include?",
      "How do we compare interventions when every child is different?",
    ],
  },
];

const openQuestions = [
  "Was Levi's regression primarily driven by DEE-SWAS, or did a deeper root cause produce both regression and epileptiform activity?",
  "What explains the combination of severe regression, high spike-wave burden, and extreme overgrowth?",
  "What predicts whether spike suppression leads to language recovery?",
  "How low does spike-wave burden need to be for recovery?",
  "Do spike amplitude, localization, or sleep architecture matter more than spike-wave index alone?",
  "What is the right monitoring cadence after steroid response?",
  "Are there measurable biomarkers that predict relapse before clinical decline?",
  "Which interventions plausibly improve recovery after years of disrupted sleep-dependent learning?",
  "How can we distinguish correlation from causality in a single deeply measured case?",
  "Which parts of Levi's recovery plan should generalize to other children?",
];

export default function ResearchPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Research agenda</p>
            <h1>The biology, measurement, and recovery of developmental regression.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation focuses on severe developmental regression, starting
              with DEE-SWAS and Levi&rsquo;s case. Our agenda is organized into four tracks:
              spike suppression, root cause, recovery, and measurement.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          {tracks.map((t) => (
            <div key={t.label} className="track">
              <p className="track-label">{t.label}</p>
              <h2>{t.title}</h2>
              <p className="lede" style={{ marginBottom: "1.25rem" }}>
                {t.headline}
              </p>
              <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)", marginBottom: "0.5rem" }}>
                Key questions
              </p>
              <ul className="list-clean">
                {t.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Open questions</p>
          <h2>Specifically what we are investigating now.</h2>
          <ul className="list-clean">
            {openQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Work on these questions with us</p>
              <h3>We are looking for researchers, clinicians, labs, and funders.</h3>
              <p>
                If you can help turn one of these questions into an answer — or sharpen one we
                are missing — we want to hear from you.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/collaborate" className="btn btn-on-deep">
                Collaborate on research
              </Link>
              <Link href="/fund" className="btn btn-on-deep-secondary">
                Fund a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
