import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Three triaged contact paths: clinicians and researchers, families with similar cases, and supporters.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Contact</p>
        <h1>Get Involved</h1>
        <p className="lede">
          The Brain Repair Foundation engages with three audiences. Please choose the path that
          fits.
        </p>

        <section className="contact-card">
          <h2>I am a clinician or researcher</h2>
          <p>
            If you have expertise relevant to pediatric epileptic encephalopathies, mosaic
            developmental disorders, neuroinflammation, post-injury cognitive recovery, or
            adjacent fields &mdash; and you are interested in engaging with our work &mdash; we
            would like to hear from you.
          </p>
          <p>
            Please email{" "}
            <a className="email-link" href="mailto:research@brainrepairfoundation.org">
              research@brainrepairfoundation.org
            </a>{" "}
            with a short note about your background and your area of interest.
          </p>
        </section>

        <section className="contact-card">
          <h2>I am a family with a similar case</h2>
          <p>
            If your child has been diagnosed with DEE-SWAS, CSWS, ESES, a related epileptic
            encephalopathy, or a rare developmental regression syndrome &mdash; and you would
            like to compare notes or request access to our research workspace &mdash; please
            reach out.
          </p>
          <p>
            Please email{" "}
            <a className="email-link" href="mailto:families@brainrepairfoundation.org">
              families@brainrepairfoundation.org
            </a>{" "}
            with a short description of your child&rsquo;s situation. We are not a clinical
            service and we cannot provide medical advice, but we are happy to share what we have
            learned.
          </p>
        </section>

        <section className="contact-card">
          <h2>I want to support the work</h2>
          <p>
            The most valuable support right now is introductions &mdash; to clinicians,
            researchers, and families with relevant expertise or cases. If you can help with
            that, or with anything else specific to the work, please reach out.
          </p>
          <p>
            Please email{" "}
            <a className="email-link" href="mailto:hello@brainrepairfoundation.org">
              hello@brainrepairfoundation.org
            </a>
            .
          </p>
        </section>

        <h2>General contact</h2>
        <p>
          <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>
        </p>
        <p>
          Jake Heller &mdash;{" "}
          <a href="mailto:jake@brainrepairfoundation.org">jake@brainrepairfoundation.org</a>
          <br />
          Miki Heller &mdash;{" "}
          <a href="mailto:miki@brainrepairfoundation.org">miki@brainrepairfoundation.org</a>
        </p>
      </article>
    </div>
  );
}
