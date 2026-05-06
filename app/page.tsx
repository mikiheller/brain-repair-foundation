import Link from "next/link";

const repairLetters = [
  {
    letter: "R",
    word: "Restoring",
    desc: "The lost is not gone. We are working to bring it back.",
  },
  {
    letter: "E",
    word: "Expression",
    desc: "Communication, language, intent, gesture.",
  },
  {
    letter: "P",
    word: "Plasticity",
    desc: "The brain's capacity to change, relearn, and adapt.",
  },
  {
    letter: "A",
    word: "Attention",
    desc: "The ability to orient, engage, and stay connected.",
  },
  {
    letter: "I",
    word: "Intelligence",
    desc: "Thinking, learning, memory, problem-solving.",
  },
  {
    letter: "R",
    word: "Regulation",
    desc: "Sleep, mood, behavior, sensory processing, balance.",
  },
];

const goals = [
  {
    num: "01",
    title: "Stop the spikes",
    desc: "Suppress harmful epileptiform activity that may interfere with sleep, learning, language, attention, and development.",
  },
  {
    num: "02",
    title: "Find the root cause",
    desc: "Use genetics, imaging, omics, clinical history, organoids, and functional validation to understand why regression happened.",
  },
  {
    num: "03",
    title: "Repair the brain",
    desc: "Build a long-term recovery program focused on communication, cognition, attention, sleep, plasticity, regulation, and measurable functional gains.",
  },
];

const loop = [
  { num: "01", name: "Collect" },
  { num: "02", name: "Analyze" },
  { num: "03", name: "Prioritize" },
  { num: "04", name: "Validate" },
  { num: "05", name: "Monitor" },
  { num: "06", name: "Generalize" },
];

const tracks = [
  {
    label: "Track 01",
    title: "DEE-SWAS and epileptic regression",
    desc: "What predicts treatment response, relapse, and functional recovery after spike suppression?",
  },
  {
    label: "Track 02",
    title: "Root-cause discovery",
    desc: "What biological mechanism explains the combination of severe regression, epileptiform activity, and extreme overgrowth?",
  },
  {
    label: "Track 03",
    title: "Recovery of lost function",
    desc: "What helps rebuild language, attention, learning retention, regulation, and cognition after prolonged regression?",
  },
  {
    label: "Track 04",
    title: "Measurement infrastructure",
    desc: "Can frequent EEG, sleep, behavior, glucose, and other longitudinal data predict relapse and recovery earlier than episodic clinical visits?",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Brain Repair Foundation</p>
            <h1>
              Precision brain recovery for children with developmental regression.
            </h1>
            <p className="hero-sub">
              The Brain Repair Foundation builds AI-enabled research infrastructure to understand,
              treat, and repair severe childhood neurodevelopmental regression — starting with
              Levi, a five-year-old with DEE-SWAS.
            </p>
            <p className="hero-acronym">
              <strong>REPAIR</strong> · Restoring Expression, Plasticity, Attention, Intelligence,
              and Regulation
            </p>
            <div className="hero-cta-row">
              <Link href="/collaborate" className="btn btn-primary">
                Collaborate with us
              </Link>
              <Link href="/updates" className="btn btn-secondary">
                Follow updates
              </Link>
              <Link href="/fund" className="btn btn-ghost">
                Fund a project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-wide">
          <div className="repair-block" aria-label="REPAIR acronym">
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

      <section className="section section-bordered">
        <div className="container">
          <p className="eyebrow">The problem</p>
          <h2>Some children lose language, learning, and time.</h2>
          <p className="lede">
            For children with severe developmental regression, the path from symptoms to
            explanation can be slow, fragmented, and incomplete. Families may see a child lose
            words, skills, attention, sleep, communication, and daily function long before there
            is a clear biological target.
          </p>
          <p>Even when a target is found, the next questions are hard:</p>
          <ul className="list-clean">
            <li>What caused the regression?</li>
            <li>Which treatments are most likely to help?</li>
            <li>How do we know whether the brain is recovering?</li>
            <li>What predicts relapse?</li>
            <li>What should be measured every day, every week, and every month?</li>
            <li>How do we turn one child&rsquo;s data into a research program fast enough to matter?</li>
          </ul>
          <p>
            The Brain Repair Foundation exists because children like Levi cannot wait for the
            usual pace of research.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Our model</p>
          <h2>Stop the spikes. Find the root cause. Repair the brain.</h2>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            Our work is organized around three goals: suppress harmful brain activity, identify
            the biological root cause of regression, and rebuild lost function over time.
          </p>
          <div className="grid-3">
            {goals.map((g) => (
              <div key={g.num} className="card card-step">
                <span className="step-num">Goal {g.num}</span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2rem", color: "var(--color-text-muted)", maxWidth: "60ch" }}>
            For Levi, seizure suppression is only the beginning. The long game is recovery:
            helping the brain regain as much lost function as possible, measuring what works, and
            building a system that can learn over time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">The first flagship case</p>
              <h2>Levi is the reason this exists.</h2>
              <p>
                Levi developed normally early in life, then began a slow and devastating
                regression around age two and a half. Over time, he lost language, skills,
                attention, and function. By age five, he had lost all spoken words.
              </p>
              <p>
                At age five and three quarters, Levi was diagnosed with DEE-SWAS, a severe
                epileptic encephalopathy marked by high spike-wave burden during sleep. After IV
                pulse steroids, his EEG improved dramatically, though ongoing monitoring is needed
                to track rebound and recovery.
              </p>
              <p>
                We do not yet know exactly when Levi&rsquo;s epileptiform activity began, whether
                it fully explains the regression, or what root cause connects his seizures,
                regression, and extreme overgrowth phenotype. But we now have a biological target,
                a dense data stream, and an urgent reason to move faster.
              </p>
              <Link href="/levi" className="btn btn-secondary" style={{ marginTop: "1rem" }}>
                Read Levi&rsquo;s story →
              </Link>
            </div>
            <div>
              <div className="timeline">
                <div className="timeline-item">
                  <p className="timeline-age">Age 1</p>
                  <p className="timeline-text">
                    Already very large for his age — height, weight, and head circumference around
                    the 99.9th percentile.
                  </p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">Age 2.5</p>
                  <p className="timeline-text">Family begins to notice slow regression.</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">Age 3.5</p>
                  <p className="timeline-text">
                    Receives an autism diagnosis. Symptoms still relatively mild.
                  </p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">Age 4.5</p>
                  <p className="timeline-text">Regression has become severe.</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">Age 5</p>
                  <p className="timeline-text">Loses all spoken words.</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">Age 5.75</p>
                  <p className="timeline-text">
                    Diagnosed with DEE-SWAS. Initial EEG shows spike-wave burden of ~95% asleep
                    and ~80% awake.
                  </p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-age">After IV pulse steroids</p>
                  <p className="timeline-text">
                    Spike burden drops dramatically. Some rebound by week four, but burden remains
                    well below baseline and sleep architecture looks more normal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container-wide">
          <p className="eyebrow">Our research engine</p>
          <h2>Laurel is an AI research lab built around Levi&rsquo;s case.</h2>
          <p className="lede" style={{ color: "var(--color-text-on-deep-muted)", maxWidth: "60ch" }}>
            Laurel integrates Levi&rsquo;s clinical data with the scientific literature and
            expert input to generate, update, and prioritize hypotheses about root cause,
            treatment, monitoring, and recovery.
          </p>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            <div>
              <p className="eyebrow">Inputs</p>
              <ul className="list-clean">
                <li>EEGs and quantitative EEG features</li>
                <li>Labs, medications, and treatment timelines</li>
                <li>MRI and imaging findings</li>
                <li>Genetic testing and multiomics</li>
                <li>Sleep, behavior, and developmental observations</li>
                <li>Continuous glucose, GI, and therapy data</li>
                <li>Research literature and expert notes</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Outputs</p>
              <ul className="list-clean">
                <li>Ranked root-cause hypotheses</li>
                <li>Treatment hypotheses with evidence and risks</li>
                <li>Diagnostic test suggestions</li>
                <li>Relapse and recovery monitoring signals</li>
                <li>Evidence maps and contradictory findings</li>
                <li>Expert and lab recommendations</li>
                <li>Review packets for expert meetings</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "2rem", maxWidth: "70ch" }}>
            Laurel does not replace clinicians or scientists. It does the background work no
            human team can do continuously: remembering everything, reading broadly, connecting
            evidence, identifying uncertainty, and preparing the case for expert review.
          </p>
          <div className="hero-cta-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/laurel" className="btn btn-on-deep">
              Learn about Laurel
            </Link>
            <Link href="/collaborate" className="btn btn-on-deep-secondary">
              Help build Laurel
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">Operating model</p>
          <h2>A rapid translational loop.</h2>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            We collect dense data, generate hypotheses, review with experts, validate through
            tests and experiments, measure outcomes, and update the model.
          </p>
          <div className="loop">
            {loop.map((step) => (
              <div key={step.num} className="loop-step">
                <span className="num">{step.num}</span>
                <span className="name">{step.name}</span>
              </div>
            ))}
          </div>
          <Link href="/how-we-work" className="btn btn-ghost" style={{ marginTop: "1.5rem" }}>
            See how we work →
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="section-header-row">
            <div>
              <p className="eyebrow">Research focus</p>
              <h2>Questions we are actively investigating.</h2>
            </div>
            <Link href="/research" className="btn btn-secondary">
              Explore the research agenda →
            </Link>
          </div>
          <div className="grid-2">
            {tracks.map((t) => (
              <div key={t.label} className="card">
                <span className="step-num">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="split">
            <div>
              <p className="eyebrow">Join the work</p>
              <h2>We are looking for serious collaborators.</h2>
              <p>
                We are building a network of clinicians, researchers, AI/data experts, labs,
                companies, and funders who can help move faster for Levi and children like him.
              </p>
              <p>We are especially interested in collaborators with expertise in:</p>
              <Link href="/collaborate" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Collaborate with us
              </Link>
            </div>
            <div>
              <div className="tag-row">
                <span className="tag">DEE-SWAS</span>
                <span className="tag">Pediatric epilepsy</span>
                <span className="tag">Neurogenetics</span>
                <span className="tag">Overgrowth syndromes</span>
                <span className="tag">mTOR / PI3K-AKT / PTEN</span>
                <span className="tag">Multiomics</span>
                <span className="tag">Organoids</span>
                <span className="tag">EEG analytics</span>
                <span className="tag">Sleep architecture</span>
                <span className="tag">Language recovery</span>
                <span className="tag">Neuroplasticity</span>
                <span className="tag">Developmental regression</span>
                <span className="tag">AI evidence synthesis</span>
                <span className="tag">Translational therapeutics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <p className="eyebrow">Fund targeted work</p>
          <h2>Fund a specific project.</h2>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            We are not asking people to fund vague hope. We fund concrete projects with clear
            hypotheses, timelines, and expected outputs.
          </p>
          <ul className="list-clean list-two-col" style={{ marginTop: "1rem" }}>
            <li>DEE-SWAS relapse prediction map</li>
            <li>Levi multiomics integration</li>
            <li>Patient-derived organoid validation</li>
            <li>EEG + sleep + behavior recovery dashboard</li>
            <li>Language recovery after epileptic regression</li>
            <li>Rapid Review Board infrastructure</li>
          </ul>
          <Link href="/fund" className="btn btn-warm" style={{ marginTop: "1rem" }}>
            Fund a project
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-bar">
            <div className="cta-bar-text">
              <p className="eyebrow">Follow the work</p>
              <h3>Levi / Brain Repair updates.</h3>
              <p>
                Updates on DEE-SWAS, developmental regression, Laurel, root-cause discovery,
                funded research, expert review, and what we are learning about brain repair.
              </p>
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
