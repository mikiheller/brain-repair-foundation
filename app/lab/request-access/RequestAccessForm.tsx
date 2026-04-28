"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RequestAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      affiliation: String(data.get("affiliation") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      roleOther: String(data.get("roleOther") ?? "").trim(),
      reason: String(data.get("reason") ?? "").trim(),
      confidentiality: data.get("confidentiality") === "on",
      website: String(data.get("website") ?? ""),
    };

    if (!payload.fullName || !payload.email || !payload.affiliation || !payload.role || !payload.reason) {
      setStatus("error");
      setErrorMessage("Please fill out every required field.");
      return;
    }

    if (!payload.confidentiality) {
      setStatus("error");
      setErrorMessage("Please confirm the confidentiality agreement.");
      return;
    }

    try {
      const res = await fetch("/api/lab-access", {
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
        <strong>Thank you.</strong> Your request has been received. Jake or Miki will respond
        within one week from{" "}
        <a href="mailto:hello@brainrepairfoundation.org">hello@brainrepairfoundation.org</a>.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label className="form-label" htmlFor="fullName">
          Your full name <span aria-hidden="true">*</span>
        </label>
        <input
          className="form-input"
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email address <span aria-hidden="true">*</span>
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
        <label className="form-label" htmlFor="affiliation">
          Affiliation <span aria-hidden="true">*</span>
        </label>
        <input
          className="form-input"
          id="affiliation"
          name="affiliation"
          type="text"
          required
          aria-describedby="affiliation-hint"
        />
        <span id="affiliation-hint" className="form-hint">
          Institution, hospital, lab, or &ldquo;independent / family&rdquo;.
        </span>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="role">
          Role <span aria-hidden="true">*</span>
        </label>
        <select className="form-select" id="role" name="role" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="clinician">Clinician</option>
          <option value="researcher">Researcher</option>
          <option value="family">Family member with similar case</option>
          <option value="engineer">Engineer / designer / methodologist</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="roleOther">
          If &ldquo;Other,&rdquo; please specify
        </label>
        <input className="form-input" id="roleOther" name="roleOther" type="text" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="reason">
          Why are you requesting access? <span aria-hidden="true">*</span>
        </label>
        <textarea
          className="form-textarea"
          id="reason"
          name="reason"
          rows={6}
          required
          aria-describedby="reason-hint"
        />
        <span id="reason-hint" className="form-hint">
          About 200 words. What you hope to find or contribute, and how you came across the
          Foundation.
        </span>
      </div>

      <label className="form-checkbox">
        <input type="checkbox" name="confidentiality" required />
        <span>
          I agree not to share, redistribute, or republish content from the Lab without explicit
          written permission. I understand this material includes personal medical information.
        </span>
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
          {errorMessage || "Something went wrong. Please try again, or email hello@brainrepairfoundation.org."}
        </div>
      )}

      <div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Submit request"}
        </button>
      </div>
    </form>
  );
}
