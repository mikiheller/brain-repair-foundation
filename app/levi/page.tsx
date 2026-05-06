import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Levi's Story",
  description:
    "Levi is the reason the Brain Repair Foundation exists. Five years old, a developmental regression, and a DEE-SWAS diagnosis at age 5.75.",
};

const timeline = [
  {
    age: "Early development",
    text: "Levi developed normally early in life.",
  },
  {
    age: "Around age 1",
    text: "Already very large for his age — height, weight, and head circumference around the 99.9th percentile.",
  },
  {
    age: "Around age 2.5",
    text: "Family begins to notice very slow regression.",
  },
  {
    age: "Around age 3.5",
    text: "Receives an autism diagnosis. At first, his symptoms are relatively mild.",
  },
  {
    age: "Around age 4.5",
    text: "Regression has become severe.",
  },
  {
    age: "Around age 5",
    text: "Loses all spoken words.",
  },
  {
    age: "Age 5.75",
    text: "Diagnosed with DEE-SWAS. Initial EEG shows very high spike-wave burden — approximately 95% during sleep and 80% awake.",
  },
  {
    age: "After IV pulse steroids",
    text: "Two weeks after treatment, EEG shows a dramatic reduction in spikes. Four weeks later, some nighttime spike activity has returned, but burden remains substantially lower than baseline and sleep architecture looks more normal.",
  },
  {
    age: "Now",
    text: "Levi's family is working on three urgent goals: suppress harmful brain activity, identify root cause, and rebuild lost function.",
  },
];

export default function LeviPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Levi&rsquo;s story</p>
            <h1>Levi is the reason this exists.</h1>
            <p className="hero-sub">
              He is five years old. He developed normally early in life, then began a slow and
              severe developmental regression around age two and a half. Over the next three
              years, he lost language, skills, attention, and function. By age five, he had lost
              all spoken words.
            </p>
            <p className="hero-sub">
              At age five and three quarters, Levi was diagnosed with DEE-SWAS, a severe
              epilepsy-related disorder marked by high spike-wave burden during sleep. His
              diagnosis gave us the first concrete biological target after years of unexplained
              regression.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Timeline</p>
          <h2>How we got here.</h2>
          <p className="muted" style={{ marginBottom: "2rem" }}>
            Approximate ages and milestones. We will refine these as we publish more detail.
          </p>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.age} className="timeline-item">
                <p className="timeline-age">{item.age}</p>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="grid-2">
            <div>
              <p className="eyebrow">What we know so far</p>
              <h2>What we know</h2>
              <ul className="list-clean">
                <li>Levi experienced progressive developmental regression.</li>
                <li>He lost spoken language.</li>
                <li>He was diagnosed with DEE-SWAS with extremely high spike-wave burden.</li>
                <li>Initial IV pulse steroid treatment substantially reduced spike burden.</li>
                <li>Some spike activity rebounded after treatment, requiring close monitoring.</li>
                <li>He has a notable overgrowth phenotype — height, weight, and head circumference around the 99.9th percentile.</li>
                <li>Standard genetic testing has not yet produced a clear answer.</li>
                <li>Structural MRI did not identify an obvious seizure-causing lesion, though it noted patchy periventricular white matter findings.</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow eyebrow-quiet">Open questions</p>
              <h2>What we do not know yet</h2>
              <ul className="list-clean">
                <li>When Levi&rsquo;s epileptiform activity began.</li>
                <li>Whether DEE-SWAS fully explains the regression or is one part of a broader biological syndrome.</li>
                <li>What root cause connects regression, epileptiform activity, and overgrowth.</li>
                <li>Whether spike suppression will be sufficient for functional recovery.</li>
                <li>What predicts relapse in Levi&rsquo;s specific case.</li>
                <li>Which interventions will best support language, cognition, attention, and regulation after years of disruption.</li>
                <li>How much functional recovery is possible and over what time course.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why this case matters</p>
          <h2>One child, several urgent scientific questions.</h2>
          <p>Levi&rsquo;s case sits at the intersection of several open questions in pediatric neuroscience:</p>
          <ul className="list-clean">
            <li>How does prolonged epileptiform activity affect language, cognition, sleep, attention, and learning?</li>
            <li>When spike-wave burden is suppressed, what determines whether function returns?</li>
            <li>What explains the combination of regression, DEE-SWAS, and extreme overgrowth?</li>
            <li>Can dense longitudinal data reveal relapse or recovery earlier than standard clinical follow-up?</li>
            <li>Can a single deeply measured case become a model for faster translational research?</li>
          </ul>
          <p>The Brain Repair Foundation was created to answer these questions quickly enough to matter.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Our goals for Levi</p>
          <h2>Stop the spikes. Find the root cause. Repair the brain.</h2>
          <div className="grid-3">
            <div className="card card-step">
              <span className="step-num">Goal 01</span>
              <h3>Stop the spikes</h3>
              <p>
                Reduce or eliminate harmful epileptiform activity and monitor closely for rebound.
              </p>
            </div>
            <div className="card card-step">
              <span className="step-num">Goal 02</span>
              <h3>Find the root cause</h3>
              <p>
                Identify why this happened — through genetics, omics, imaging, organoids, pathway
                analysis, and functional validation.
              </p>
            </div>
            <div className="card card-step">
              <span className="step-num">Goal 03</span>
              <h3>Repair the brain</h3>
              <p>
                Rebuild lost function — communication, cognition, attention, sleep, regulation,
                learning retention, and daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Help us move faster</p>
              <h3>If you have relevant expertise, we want to hear from you.</h3>
              <p>
                DEE-SWAS, pediatric epilepsy, neurogenetics, overgrowth syndromes, omics,
                organoids, EEG analytics, language recovery, neuroplasticity, AI-enabled research
                infrastructure — and anything adjacent.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/collaborate" className="btn btn-on-deep">
                Collaborate with us
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
