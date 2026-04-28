import type { Metadata } from "next";
import RequestAccessForm from "./RequestAccessForm";

export const metadata: Metadata = {
  title: "Request Lab Access",
  description:
    "Request access to the Levi AI Research Lab, the working software system behind the Brain Repair Foundation.",
};

export default function RequestAccessPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Gated workspace</p>
        <h1>Request Access to the Levi AI Research Lab</h1>

        <p>
          The Levi AI Research Lab is the working software system behind the Brain Repair
          Foundation&rsquo;s methodology. It contains:
        </p>
        <ul>
          <li>
            The clinical vault &mdash; extracted records of every lab, imaging study, EEG,
            genetic panel, and clinical note in Levi&rsquo;s case.
          </li>
          <li>
            Normalized indexes &mdash; clinical timeline, test-results index, medications index,
            providers directory.
          </li>
          <li>
            The ranked differential of candidate root causes, with each theory&rsquo;s evidence
            tracked.
          </li>
          <li>The ranked diagnostics and treatments workspaces.</li>
          <li>The research corpus and synthesis memos.</li>
        </ul>

        <p>
          Access is gated because the Lab contains personal medical records and identifying
          details about Levi&rsquo;s clinical team. We grant access on request to:
        </p>
        <ul>
          <li>Clinicians and researchers with relevant expertise.</li>
          <li>Families with a child in a similar clinical situation.</li>
          <li>Engineers, designers, and methodologists interested in the system itself.</li>
        </ul>

        <h2>Request form</h2>
        <RequestAccessForm />

        <h2>What happens next</h2>
        <p>
          Requests are reviewed by Jake and Miki personally. We aim to respond within one week.
          If approved, you will receive a personal access link. Access can be revoked at any
          time.
        </p>
      </article>
    </div>
  );
}
