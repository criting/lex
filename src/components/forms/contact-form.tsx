"use client";

import { contact } from "@/content/provider";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  organisation: z.string().trim().optional(),
  matterType: z.string().min(1, "Select a matter type"),
  urgency: z.string().optional(),
  message: z.string().trim().min(20, "Add a little more detail (20+ characters)"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "demo" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({
      name: data.name,
      email: data.email,
      organisation: data.organisation || undefined,
      matterType: data.matterType,
      urgency: data.urgency || undefined,
      message: data.message,
    });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setSubmitting(true);

    if (!contact.endpoint) {
      await new Promise((r) => setTimeout(r, 450));
      setSubmitting(false);
      setStatus("demo");
      form.reset();
      return;
    }

    try {
      const res = await fetch(contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("demo");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({ message: "Could not send. Try email instead." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {!contact.endpoint ? (
        <div
          role="note"
          className="rounded-[var(--radius-control)] border border-rule bg-stone-deep/50 px-4 py-3 text-sm text-muted"
        >
          <strong className="text-ink">Demo form.</strong> No endpoint configured — submissions
          stay local. Set <code className="text-mono normal-case tracking-normal">contact.endpoint</code>{" "}
          in content to connect Formspree, Basin, or your API.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} />
        <Field label="Email" name="email" type="email" required error={errors.email} />
      </div>

      <Field label="Organisation" name="organisation" error={errors.organisation} optional />

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField
          label="Matter type"
          name="matterType"
          required
          error={errors.matterType}
          options={contact.matterTypes}
        />
        <SelectField
          label="Urgency"
          name="urgency"
          error={errors.urgency}
          options={contact.urgency}
          optional
        />
      </div>

      <Field
        label="Matter summary"
        name="message"
        as="textarea"
        required
        error={errors.message}
        hint="Facts, counterparties, and timing — no privileged detail needed for a first note."
      />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-seal" disabled={submitting}>
          {submitting ? "Sending…" : "Request consultation"}
        </button>
        {status === "demo" ? (
          <p role="status" className="m-0 text-sm text-seal">
            Demo received locally. Connect an endpoint to go live.
          </p>
        ) : null}
        {status === "error" && !Object.keys(errors).length ? (
          <p role="alert" className="field-error m-0">
            Something went wrong. Email {contact.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
  optional,
  error,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className={cn("field", error && "has-error")}>
      <label htmlFor={id}>
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal text-meta">optional</span> : null}
      </label>
      {as === "textarea" ? (
        <textarea id={id} name={name} required={required} aria-invalid={!!error} />
      ) : (
        <input id={id} name={name} type={type} required={required} aria-invalid={!!error} />
      )}
      {hint ? <p className="m-0 text-sm text-meta">{hint}</p> : null}
      {error ? (
        <p role="alert" className="field-error m-0">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  optional,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal text-meta">optional</span> : null}
      </label>
      <select id={id} name={name} required={required} defaultValue="" aria-invalid={!!error}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error ? (
        <p role="alert" className="field-error m-0">
          {error}
        </p>
      ) : null}
    </div>
  );
}
