import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "The Brain Repair Foundation's methodology of integrative case synthesis, the Levi AI Research Lab, and our publishing posture.",
};

export default function ApproachPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Methodology</p>
        <h1>Our Approach</h1>

        <h2>The problem we&rsquo;re addressing</h2>
        <p>
          Rare pediatric brain injuries &mdash; including epileptic encephalopathies, mosaic
          developmental disorders, and post-injury cognitive regression &mdash; sit in a
          methodological gap. The relevant evidence is fragmented across pediatric neurology,
          genetics, immunology, sleep medicine, endocrinology, and developmental psychology. No
          single specialist sees the whole picture. The published literature is large but
          uncoordinated. Each subspecialist works from the slice of the case they are responsible
          for.
        </p>
        <p>
          The result, in many cases, is that no one is doing the integrative synthesis work.
          Hypotheses do not get systematically tracked. Negative results do not get propagated
          across specialties. What was tried, what didn&rsquo;t work, and why are not durably
          recorded. Two years in, the family is often the only entity with the full picture
          &mdash; and the family rarely has the tools or the time to act on it.
        </p>

        <h2>Our methodology</h2>
        <p>
          The Brain Repair Foundation conducts integrative case synthesis on Levi Heller&rsquo;s
          case. The methodology has four layers, kept explicitly distinct:
        </p>
        <ol>
          <li>
            <strong>Extracted facts.</strong> Every clinical artifact (lab report, imaging study,
            EEG, genetic panel, clinical note) is extracted into a structured record with full
            provenance back to the source document.
          </li>
          <li>
            <strong>Normalized facts.</strong> Extracted records are normalized into structured
            indexes &mdash; a clinical timeline, a test-results index, a medications index &mdash;
            so that any fact in the case can be located, cited, and cross-referenced.
          </li>
          <li>
            <strong>Interpretation.</strong> Higher-order interpretation (differential diagnoses,
            ranked diagnostics, ranked treatments, candidate root causes) is maintained as a
            separate layer. Each interpretation is linked back to the facts that support it. When
            new evidence arrives, every existing interpretation is reassessed item by item.
          </li>
          <li>
            <strong>Synthesis.</strong> Research notes, literature reviews, and synthesis memos
            integrate the case-specific picture with the published literature.
          </li>
        </ol>
        <p>
          We treat this methodology as a research artifact in its own right. We publish it. We
          expect it to generalize.
        </p>

        <h2>The Levi AI Research Lab</h2>
        <p>
          The four-layer methodology lives in a working software system we built called the Levi
          AI Research Lab. It contains:
        </p>
        <ul>
          <li>A vault of extracted clinical records with provenance to source PDFs.</li>
          <li>
            Normalized indexes of every test, medication, provider, and clinical event.
          </li>
          <li>
            A ranked differential of candidate root causes, with each theory&rsquo;s supporting and
            contradicting evidence tracked over time.
          </li>
          <li>
            A ranked diagnostics workspace identifying what would be most informative to do next.
          </li>
          <li>
            A ranked treatments workspace, separated into ESES burden control and post-suppression
            recovery.
          </li>
          <li>A research corpus of papers, notes, and synthesis memos.</li>
          <li>
            An orchestrator that re-evaluates the entire system whenever new evidence arrives.
          </li>
        </ul>

        <figure>
          <div className="image-placeholder" role="img" aria-label="Placeholder for Lab screenshot">
            [SCREENSHOT 1: Timeline view of the clinical vault]
          </div>
          <figcaption>Timeline view of the clinical vault.</figcaption>
        </figure>
        <figure>
          <div className="image-placeholder" role="img" aria-label="Placeholder for Lab screenshot">
            [SCREENSHOT 2: Differential / Root Cause Theories workspace showing ranked candidates]
          </div>
          <figcaption>
            Differential / Root Cause Theories workspace, showing ranked candidates with evidence.
          </figcaption>
        </figure>
        <figure>
          <div className="image-placeholder" role="img" aria-label="Placeholder for Lab screenshot">
            [SCREENSHOT 3: Research synthesis note connecting clinical facts to published literature]
          </div>
          <figcaption>
            A research synthesis note connecting clinical facts to published literature.
          </figcaption>
        </figure>

        <h2>Request access</h2>
        <p>
          The Lab is gated. We grant access on request to clinicians, researchers, and families
          with similar cases. Access requires a short request, identification of your role, and
          agreement to a basic data-use note.
        </p>
        <p>
          <Link href="/lab/request-access" className="btn btn-primary">
            Request access to the Levi AI Research Lab
          </Link>
        </p>

        <h2>What we publish, and what we don&rsquo;t</h2>
        <ul>
          <li>
            <strong>Published openly:</strong> the methodology, the synthesis memos, the
            differential, the diagnostics workspace, the treatments workspace, our running
            questions, and our negative results.
          </li>
          <li>
            <strong>Behind request-access:</strong> the extracted clinical records, the raw
            artifacts (PDFs of labs and imaging), and identifying details about the clinical team.
          </li>
          <li>
            <strong>Not published:</strong> anything that identifies clinicians or institutions in a
            way they have not consented to, and personal medical details about Levi beyond what is
            needed to make the work useful.
          </li>
        </ul>
        <p>
          We publish negative results. Most of what we have learned is what is <em>not</em> the
          answer. We name those findings explicitly and keep them visible.
        </p>
      </article>
    </div>
  );
}
