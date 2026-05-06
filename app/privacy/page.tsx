import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the Brain Repair Foundation handles information you send us, and what we do and do not publish.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Privacy</p>
            <h1>Privacy notice.</h1>
            <p className="hero-sub">
              The Brain Repair Foundation is a small, family-led research organization. This page
              explains how we treat information you send us, and what we do and do not publish.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-narrow">
          <h2>Information you send us</h2>
          <p>
            When you submit the contact form, subscribe to updates, or email us directly, we
            receive your name, email address, organization, areas of expertise, and the content of
            your message. We use this information to review and respond to your message and to
            include you in updates if you opt in.
          </p>
          <p>
            We do not sell or share this information. You can ask us to remove your information
            at any time by emailing{" "}
            <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
          </p>

          <h2>What we publish</h2>
          <p>
            We aim to publish openly: methodology, research summaries, evidence maps, hypothesis
            trackers, monitoring frameworks, and negative results — to the extent that those
            outputs do not compromise the privacy of Levi, his family, or any clinicians, labs,
            or collaborators we work with.
          </p>

          <h2>What we do not publish</h2>
          <p>
            Information that identifies clinicians, labs, or collaborators without their
            permission, and personal medical details about Levi beyond what is needed to make the
            work useful for other children and families.
          </p>

          <h2>Medical and research disclaimer</h2>
          <p>
            The Brain Repair Foundation supports research, evidence synthesis, and expert
            collaboration. Laurel is a research and hypothesis-generation system, not a substitute
            for medical care. Nothing on this site is medical advice.
          </p>

          <h2>Tracking and analytics</h2>
          <p>
            This site uses no third-party analytics, tracking pixels, or advertising cookies.
            Standard server logs may record requests for operational and security purposes. If we
            add privacy-respecting analytics in the future, we will note it here.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this notice:{" "}
            <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
          </p>
        </div>
      </section>
    </>
  );
}
