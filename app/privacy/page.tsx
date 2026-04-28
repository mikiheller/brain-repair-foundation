import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What the Brain Repair Foundation publishes openly, what is gated behind request access, and what is not published.",
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <article className="page-narrow">
        <p className="page-eyebrow">Privacy</p>
        <h1>Privacy notice</h1>

        <p>
          The Brain Repair Foundation is a small, family-run research organization. This page
          explains what we publish, what we keep behind a request-access gate, and how we treat
          information you send us.
        </p>

        <h2>What we publish openly</h2>
        <p>
          The methodology, synthesis memos, the ranked differential of root-cause theories, the
          diagnostics workspace, the treatments workspace, our running questions, and our
          negative results.
        </p>

        <h2>What is behind request access</h2>
        <p>
          The extracted clinical records, raw artifacts (PDFs of labs and imaging), and
          identifying details about the clinical team. The Levi AI Research Lab is gated; access
          is granted on request.
        </p>

        <h2>What we do not publish</h2>
        <p>
          Information that identifies clinicians or institutions in ways they have not consented
          to, and personal medical details about Levi beyond what is needed to make the work
          useful.
        </p>

        <h2>Information you send us</h2>
        <p>
          When you submit a Lab access request or email us directly, we receive your name, email
          address, affiliation, and the content of your message. We use this information to
          review and respond to your request and to grant Lab access if appropriate. We do not
          sell or share this information. Lab access can be revoked at any time.
        </p>

        <h2>Tracking and analytics</h2>
        <p>
          This site uses no third-party analytics, tracking pixels, or advertising cookies.
          Standard server logs may record requests for operational and security purposes. If we
          add privacy-respecting analytics in the future, we will note it here.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this notice or about how your information is handled:{" "}
          <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
        </p>
      </article>
    </div>
  );
}
