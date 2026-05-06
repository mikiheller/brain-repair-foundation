"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const expertiseOptions = [
  "DEE-SWAS",
  "Pediatric epilepsy",
  "Neurogenetics",
  "Overgrowth syndromes",
  "mTOR / PI3K / PTEN",
  "Multiomics",
  "Organoids",
  "EEG analytics",
  "Sleep",
  "Language recovery",
  "Neuroplasticity",
  "Developmental regression",
  "AI / data infrastructure",
  "Therapeutics",
  "Funding",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const expertise = data.getAll("expertise").map((v) => String(v));

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organization: String(data.get("organization") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      iAm: String(data.get("iAm") ?? "").trim(),
      iAmOther: String(data.get("iAmOther") ?? "").trim(),
      expertise,
      expertiseOther: String(data.get("expertiseOther") ?? "").trim(),
      useful: String(data.get("useful") ?? "").trim(),
      help: String(data.get("help") ?? "").trim(),
      links: String(data.get("links") ?? "").trim(),
      subscribe: data.get("subscribe") === "on",
      website: String(data.get("website") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.iAm) {
      setStatus("error");
      setErrorMessage("Please fill out name, email, and tell us who you are.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <strong>Thank you.</strong> Your message has been received. We&rsquo;ll respond from{" "}
        <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input className="form-input" id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="organization">
          Organization
        </label>
        <input className="form-input" id="organization" name="organization" type="text" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="role">
          Role
        </label>
        <input className="form-input" id="role" name="role" type="text" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="iAm">
          I am a <span aria-hidden="true">*</span>
        </label>
        <select className="form-select" id="iAm" name="iAm" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="clinician">Clinician</option>
          <option value="researcher">Researcher</option>
          <option value="ai_data">AI / data expert</option>
          <option value="lab_company">Lab / company</option>
          <option value="funder">Funder</option>
          <option value="family">Family member</option>
          <option value="journalist">Journalist</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="iAmOther">
          If &ldquo;Other,&rdquo; please specify
        </label>
        <input className="form-input" id="iAmOther" name="iAmOther" type="text" />
      </div>

      <fieldset className="form-field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="form-label" style={{ marginBottom: "0.6rem" }}>
          Areas of expertise or interest
        </legend>
        <div className="checkbox-grid">
          {expertiseOptions.map((opt) => (
            <label key={opt} className="form-checkbox">
              <input type="checkbox" name="expertise" value={opt} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-field">
        <label className="form-label" htmlFor="expertiseOther">
          Other areas of expertise
        </label>
        <input
          className="form-input"
          id="expertiseOther"
          name="expertiseOther"
          type="text"
          placeholder="Anything else relevant"
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="useful">
          What is the most useful thing you think we should know?
        </label>
        <textarea className="form-textarea" id="useful" name="useful" rows={5} />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="help">
          How would you like to help?
        </label>
        <textarea className="form-textarea" id="help" name="help" rows={5} />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="links">
          Relevant links, publications, lab, company, or background
        </label>
        <textarea className="form-textarea" id="links" name="links" rows={3} />
      </div>

      <label className="form-checkbox">
        <input type="checkbox" name="subscribe" defaultChecked />
        <span>Yes, you may add me to Brain Repair updates.</span>
      </label>

      <input
        className="honeypot"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "error" && (
        <div className="form-error" role="alert">
          {errorMessage ||
            "Something went wrong. Please try again, or email hello@brainrepairfoundation.org."}
        </div>
      )}

      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
