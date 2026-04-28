import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We're Working On",
  description:
    "Active workstreams across stopping the seizures, identifying root cause, and restoring function.",
};

type Status = "active" | "hold" | "closed";

type Workstream = {
  title: string;
  status: Status;
  updated: string;
  body: React.ReactNode;
};

function StatusBadge({ status }: { status: Status }) {
  const label =
    status === "active" ? "Active" : status === "hold" ? "On Hold" : "Closed";
  const cls =
    status === "active"
      ? "badge badge-active"
      : status === "hold"
      ? "badge badge-hold"
      : "badge badge-closed";
  return <span className={cls}>{label}</span>;
}

function WorkstreamCard({ item }: { item: Workstream }) {
  return (
    <article className="workstream">
      <div className="workstream-head">
        <h3 className="workstream-title">{item.title}</h3>
        <div className="workstream-meta">
          <StatusBadge status={item.status} />
          <span>Last updated {item.updated}</span>
        </div>
      </div>
      <div className="workstream-body">{item.body}</div>
    </article>
  );
}

const seizures: Workstream[] = [
  {
    title: "Tracking the durability of the steroid response",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        Levi received two IV methylprednisolone pulses (March 23&ndash;25 and April 23&ndash;25,
        2026). Spike-wave index trajectory across four EEGs is 95&ndash;100% (pre-pulse) &rarr;
        71% (post-pulse-1) &rarr; qualitatively &ldquo;occasional&rdquo; (UCSF) &rarr; 46%
        (post-pulse-2). Each subsequent EEG and the off-steroid trajectory will determine whether
        further pulses, an alternative immunomodulator, or a different approach is needed.
      </p>
    ),
  },
  {
    title: "Off-steroid cytokine and HPA-axis trajectory",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        A peripheral Th1/Th17 cytokine signal seen on residual steroid effect needs to be
        reassessed off-steroid to disambiguate real cytokine elevation from glucocorticoid floor
        effect. Paired AM cortisol + ACTH series will track HPA recovery.
      </p>
    ),
  },
];

const rootCause: Workstream[] = [
  {
    title: "Mosaic-sensitive deep sequencing",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        Five negative germline workups have ruled out high-VAF coding variants in most candidate
        genes. The leading remaining hypothesis &mdash; mosaic mTOR pathway activation (PROS
        spectrum) &mdash; has not been functionally tested because no panel on file uses
        &ge;500x deep sequencing on a mosaic-sensitive tissue with PIK3CA / AKT1 / AKT3 / PIK3R2
        coverage. We are pursuing this through the Stanford Snyder fPOP study and outside-lab
        options.
      </p>
    ),
  },
  {
    title: "Methylation and imprinting workup",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        EpiSign whole-methylome classifier (covers 60+ NDD episignatures including Sotos / Weaver
        / TBRS / ATR-X / Kabuki) is in progress. Targeted MS-MLPA at 11p15 (Beckwith-Wiedemann)
        and 5q35 (Sotos) is planned to cover what EpiSign does not.
      </p>
    ),
  },
  {
    title: "Seronegative cell-mediated neuroinflammation workup",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        A repeat off-steroid serum cytokine panel with sIL-2R, IL-6, TNF, IL-1-beta is the
        highest-priority discriminator. Whether to pursue intrathecal evaluation depends on the
        off-steroid cytokine result.
      </p>
    ),
  },
];

const restore: Workstream[] = [
  {
    title: "Post-suppression recovery framework",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        Building a structured framework for what to track and what to try once electrographic
        suppression is durable. This includes language emergence, AAC use, executive function,
        sleep architecture, behavioral regulation, social engagement, and motor coordination.
      </p>
    ),
  },
  {
    title: "Therapy and intervention coordination",
    status: "active",
    updated: "[DATE]",
    body: (
      <p>
        Coordinating the post-suppression therapy stack &mdash; speech, ABA, OT, AAC, and
        adjunctive interventions &mdash; so that what is being tried, what is improving, and what
        is not are tracked alongside the rest of the case.
      </p>
    ),
  },
];

export default function WorkPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Active workstreams</p>
        <h1>What We&rsquo;re Working On</h1>
        <p className="page-meta">Last updated [DATE]</p>

        <p className="lede">
          The Brain Repair Foundation has three goals for Levi: stop the seizures he is currently
          experiencing, identify the root cause of his brain injury, and restore the expression,
          plasticity, attention, intelligence, and regulation that the injury has affected. We are
          currently in the acute phase. Most of our day-to-day work is on the first two goals. The
          Foundation exists to ensure that the third goal &mdash; the longer, harder, less
          well-defined one &mdash; receives the same rigor, and continues past the acute phase
          regardless of how it resolves.
        </p>

        <section className="work-section">
          <h2>Stopping the seizures</h2>
          <p className="work-section-goal">
            Goal: sustained electrographic suppression with intact sleep architecture and no
            recurrence.
          </p>
          {seizures.map((w) => (
            <WorkstreamCard key={w.title} item={w} />
          ))}
          <p className="placeholder-block">
            [ADDITIONAL WORKSTREAM PLACEHOLDER &mdash; Jake and Miki to add up to two more.]
          </p>
        </section>

        <section className="work-section">
          <h2>Identifying root cause</h2>
          <p className="work-section-goal">
            Goal: a defensible mechanistic explanation for the regression, the EEG findings, the
            growth pattern, and the immunological signal &mdash; or a confident statement that no
            current technology can identify it.
          </p>
          {rootCause.map((w) => (
            <WorkstreamCard key={w.title} item={w} />
          ))}
          <p className="placeholder-block">
            [ADDITIONAL WORKSTREAM PLACEHOLDER &mdash; Jake and Miki to add up to two more.]
          </p>
        </section>

        <section className="work-section">
          <h2>Restoring function</h2>
          <p className="work-section-goal">
            Goal: recovery of the expression, plasticity, attention, intelligence, and regulation
            that have been affected &mdash; over years, in many small steps.
          </p>
          {restore.map((w) => (
            <WorkstreamCard key={w.title} item={w} />
          ))}
          <p className="placeholder-block">
            [ADDITIONAL WORKSTREAM PLACEHOLDER &mdash; Jake and Miki to add up to two more.]
          </p>
        </section>

        <section className="work-section">
          <h2>Closed and on-hold workstreams</h2>
          <p className="work-section-goal">
            We keep these visible because what didn&rsquo;t work is part of the record.
          </p>
          <p className="placeholder-block">
            [CLOSED WORKSTREAM PLACEHOLDER &mdash; example: &ldquo;Leucovorin trial &mdash; Closed
            [DATE]. Tried [DATES]. Discontinued because [REASON].&rdquo;]
          </p>
        </section>
      </article>
    </div>
  );
}
