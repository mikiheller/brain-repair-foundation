import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Levi's Story",
  description:
    "Who Levi is, what happened, and where things stand. The personal context behind the Brain Repair Foundation.",
};

export default function LeviPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Personal context</p>
        <h1>Levi&rsquo;s Story</h1>

        <div className="image-placeholder" role="img" aria-label="Photo placeholder, recent photo of Levi">
          [PHOTO PLACEHOLDER &mdash; recent photo of Levi]
        </div>

        <p>
          Levi was born on July 2, 2020. His head circumference at birth was at the 45th
          percentile, and within his first year he grew to the 99th percentile in head
          circumference, height, and weight, where he has remained. Otherwise he was developing
          normally &mdash; meeting milestones, using words, making eye contact, playing.
        </p>

        <p>
          Around age 2.5, something changed. He began using words less often. He responded to his
          name less often. His play became more restrictive and more repetitive. He made less eye
          contact. By age 3 years and 10 months, he was diagnosed with autism. The regression
          continued. By age 4, he had only a few words. Around the time he turned 5, he stopped
          using words altogether. He began engaging in more self-stimulatory behavior. He stopped
          playing with toys.
        </p>

        <div className="image-placeholder" role="img" aria-label="Photo placeholder, optional earlier photo">
          [PHOTO PLACEHOLDER &mdash; earlier photo, optional]
        </div>

        <p>
          On March 10, 2026, a five-hour video EEG at Stanford revealed that Levi&rsquo;s brain was
          firing abnormal electrical activity through 95&ndash;100% of his sleep &mdash; a
          condition called DEE-SWAS (Developmental and/or Epileptic Encephalopathy with Spike-Wave
          Activation in Sleep), formerly known as CSWS or ESES. The diagnosis was a turning
          point. It explained the regression, named the mechanism, and pointed toward treatments.
        </p>

        <p>
          Levi has now received two intravenous methylprednisolone pulses (March and April 2026).
          His most recent EEG shows the spike-wave activity has dropped from 95&ndash;100% to 46%
          of sleep &mdash; below the diagnostic threshold for DEE-SWAS &mdash; with normal
          posterior dominant rhythm and intact sleep architecture for the first time across all
          his EEGs. His epileptologist described his response as the best she has seen.
        </p>

        <p>
          We do not know what caused the original injury. Five negative germline genetic workups
          have ruled out most coding-variant explanations. We are pursuing mosaic mTOR pathway
          activation, methylation/imprinting disorders, and seronegative cell-mediated
          neuroinflammation as the leading remaining hypotheses.
        </p>

        <p>
          Levi is currently five years old. He uses an AAC device. He has begun making eye
          contact again. He has started imitating his younger brothers. He used a fork for the
          first time recently. He has also begun showing new challenging behaviors &mdash;
          elopement, mild aggression, toileting regression &mdash; which the literature on
          post-suppression recovery suggests are part of developmental re-awakening rather than
          relapse.
        </p>

        <p>The Brain Repair Foundation exists for what comes next.</p>

        <hr />

        <p>
          <em>
            If your child has a similar condition and you would like to compare notes or request
            access to our research workspace, please <Link href="/contact">contact us</Link>.
          </em>
        </p>
      </article>
    </div>
  );
}
