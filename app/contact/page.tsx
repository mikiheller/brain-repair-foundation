import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "If you can help us move faster, we want to hear from you. Tell us who you are, where you have expertise, and what you think we should know.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Contact</p>
            <h1>Contact us.</h1>
            <p className="hero-sub">
              If you can help us move faster, we want to hear from you. We read every submission.
            </p>
            <p className="hero-sub" style={{ fontSize: "1rem" }}>
              You can also reach us directly at{" "}
              <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-narrow">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
