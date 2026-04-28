import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The purpose, posture, and structure of the Brain Repair Foundation, plus answers to common questions.",
};

export default function AboutPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">About</p>
        <h1>About the Brain Repair Foundation</h1>

        <h2>Purpose and posture</h2>
        <p>
          The Brain Repair Foundation has three goals for Levi Heller, in sequence: stop the
          seizures he is currently experiencing, identify the root cause of his brain injury, and
          restore the expression, plasticity, attention, intelligence, and regulation that the
          injury has affected.
        </p>
        <p>
          The first two goals are acute and finite. The third &mdash; restoring function &mdash;
          is the durable mission of this organization. We are currently in the acute phase, and
          the bulk of our day-to-day work is on goals one and two. The Foundation exists to
          ensure that the work on goal three &mdash; which is longer, harder, and less
          well-defined &mdash; happens with the same rigor as the acute work, and continues past
          the acute phase regardless of how it resolves.
        </p>
        <p>
          Our optimization target is Levi. Every decision about what to research, what to try,
          and who to engage is filtered through whether it helps him. We do not pretend to be a
          general-purpose research organization, and we do not pretend to optimize for goals
          beyond Levi&rsquo;s recovery.
        </p>
        <p>
          Our publishing posture is generous. The marginal cost of sharing what we learn is low
          and the potential value to other families is high. If our work eventually helps other
          children with rare pediatric brain injuries, that is a welcome second-order outcome,
          not the mission.
        </p>

        <h2>What the Foundation is</h2>
        <ul>
          <li>
            A focused research organization conducting integrative case synthesis on a single
            case.
          </li>
          <li>
            The home of the Levi AI Research Lab, a working software system that operationalizes
            our methodology.
          </li>
          <li>A platform for honest publishing of methodology, synthesis, and negative results.</li>
          <li>
            A vehicle for engaging clinicians, researchers, and other families in serious work on
            a serious case.
          </li>
        </ul>

        <h2>What the Foundation is not</h2>
        <ul>
          <li>
            A medical-advice resource. Nothing on this site is medical advice. Decisions about
            your child&rsquo;s care should be made with your clinical team.
          </li>
          <li>A general patient-advocacy organization for pediatric brain injury or epilepsy.</li>
          <li>
            A clinical service. We do not see patients, render diagnoses, or recommend treatments
            outside Levi&rsquo;s case.
          </li>
          <li>A fundraising vehicle at this time.</li>
        </ul>

        <h2>Privacy and publishing posture</h2>
        <ul>
          <li>
            <strong>Published openly:</strong> the methodology, synthesis memos, the ranked
            differential of root-cause theories, the diagnostics workspace, the treatments
            workspace, our running questions, and our negative results.
          </li>
          <li>
            <strong>Behind request-access:</strong> the extracted clinical records, raw artifacts
            (PDFs of labs and imaging), and identifying details about the clinical team. The Levi
            AI Research Lab is gated; we grant access on request to clinicians, researchers, and
            families with similar cases.
          </li>
          <li>
            <strong>Not published:</strong> information that identifies clinicians or institutions
            in ways they have not consented to, and personal medical details about Levi beyond
            what is needed to make the work useful.
          </li>
        </ul>

        <h2>FAQ</h2>

        <p className="faq-question">
          Why is this organization for Levi specifically and not for other children?
        </p>
        <p className="faq-answer">
          Because we are honest about what we are doing. We started this work for Levi and our
          optimization target is Levi. Conducting this work under the pretense that we are
          equally focused on every affected child would be misleading. We publish what we learn
          so that other families can benefit, but the work is being done because it matters for
          our son.
        </p>

        <p className="faq-question">Will the methodology generalize to other cases?</p>
        <p className="faq-answer">
          We believe so, but we are not the right people to claim that. The methodology is
          published; researchers and clinicians can evaluate it on its own merits.
        </p>

        <p className="faq-question">Can I get access to the Levi AI Research Lab?</p>
        <p className="faq-answer">
          If you are a clinician, researcher, or family with a similar case &mdash; yes, on
          request.{" "}
          <Link href="/lab/request-access">Submit a request here.</Link>
        </p>

        <p className="faq-question">How can I support the work?</p>
        <p className="faq-answer">
          The most useful forms of support right now are introductions to clinicians, researchers,
          and families with relevant expertise or cases. See <Link href="/contact">Get
          Involved</Link>. Financial-support paths will be added once the appropriate legal
          structure is in place.
        </p>

        <p className="faq-question">
          Are you affiliated with any university, hospital, or company?
        </p>
        <p className="faq-answer">
          No. The Brain Repair Foundation is independent. We collaborate with researchers and
          clinicians at multiple institutions but the Foundation itself has no institutional
          affiliation.
        </p>
      </article>
    </div>
  );
}
