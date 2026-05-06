import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Brain Repair Foundation builds AI-enabled translational research infrastructure for children with acquired developmental regression, starting with Levi.",
};

const repairLetters = [
  {
    letter: "R",
    word: "Restoring",
    desc: "The lost is not gone. We are working to bring it back.",
  },
  {
    letter: "E",
    word: "Expression",
    desc: "Communication, language, intent, gesture, and the ability to be understood.",
  },
  {
    letter: "P",
    word: "Plasticity",
    desc: "The brain's capacity to change, relearn, adapt, and recover after disruption.",
  },
  {
    letter: "A",
    word: "Attention",
    desc: "The ability to orient, engage, learn, and stay connected to the world.",
  },
  {
    letter: "I",
    word: "Intelligence",
    desc: "Not a test score. The recovery of thinking, learning, memory, problem-solving, and developmental potential.",
  },
  {
    letter: "R",
    word: "Regulation",
    desc: "Sleep, mood, behavior, sensory processing, arousal, and the body's ability to return to balance.",
  },
];

const beliefs = [
  "Regression is not an endpoint.",
  "Suppressing harmful brain activity is only the first step.",
  "Recovery should be measured longitudinally, not guessed from occasional appointments.",
  "Families with dense data can accelerate science.",
  "AI can help organize evidence and generate hypotheses, but expert review and biological validation are essential.",
  "The first case can build infrastructure for many.",
  "Children with severe regression deserve urgency.",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">About</p>
            <h1>The Brain Repair Foundation was created because Levi could not wait.</h1>
            <p className="hero-sub">
              Levi&rsquo;s regression, DEE-SWAS diagnosis, and treatment response revealed a
              broader problem: complex pediatric regression requires faster integration of data,
              literature, expert judgment, and targeted research than the current system usually
              provides.
            </p>
            <p className="hero-sub">We are building that infrastructure.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Our mission</p>
          <h2>Accelerate precision recovery for children with acquired developmental regression.</h2>
          <p>
            We start with Levi because his case is urgent, deeply measured, and scientifically
            important. We are building systems, tools, and collaborations that can eventually
            help other children facing similar regression.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">REPAIR</p>
          <h2>Restoring Expression, Plasticity, Attention, Intelligence, and Regulation.</h2>
          <p className="lede" style={{ maxWidth: "65ch" }}>
            REPAIR is the working acronym for the functions we are trying to rebuild.
          </p>
          <div className="repair-block">
            {repairLetters.map((item, i) => (
              <div key={i} className="repair-letter">
                <span className="letter">{item.letter}</span>
                <span className="word">{item.word}</span>
                <span className="desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we believe</p>
          <h2>Working principles.</h2>
          <ul className="list-clean">
            {beliefs.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Founders</p>
          <h2>Who is behind this.</h2>
          <div className="grid-2">
            <div className="card">
              <h3>Founder</h3>
              <p className="muted">
                <span className="placeholder">[Founder name]</span>
              </p>
              <p>
                <span className="placeholder">
                  [Short bio: relationship to Levi, relevant background, role in the foundation.]
                </span>
              </p>
            </div>
            <div className="card">
              <h3>Founder</h3>
              <p className="muted">
                <span className="placeholder">[Founder name]</span>
              </p>
              <p>
                <span className="placeholder">
                  [Short bio: relationship to Levi, relevant background, role in the foundation.]
                </span>
              </p>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "1.5rem", fontSize: "0.92rem" }}>
            Founder bios and headshots will be added shortly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Advisors and collaborators</p>
          <h2>Coming soon.</h2>
          <p>
            We are forming a Scientific Advisory Board, a Levi Rapid Review Board, and a wider
            network of research and technology collaborators. Names will be added with explicit
            permission.
          </p>
          <p className="muted" style={{ fontSize: "0.92rem" }}>
            Possible categories: Scientific Advisory Board · Levi Rapid Review Board · Research
            collaborators · Technology collaborators · Funding partners.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Get involved</p>
              <h3>Help us move faster.</h3>
              <p>
                If you have relevant expertise — clinical, scientific, technical, or
                philanthropic — we want to hear from you.
              </p>
            </div>
            <div className="cta-bar-actions">
              <Link href="/collaborate" className="btn btn-on-deep">
                Collaborate
              </Link>
              <Link href="/contact" className="btn btn-on-deep-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
