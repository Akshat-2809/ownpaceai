"use client";

import { useState, type FormEvent } from "react";
import { ROLES, accessSchema } from "@/lib/access/schema";
import { EMAIL } from "@/lib/site";
import styles from "./Join.module.css";

type Errors = Partial<Record<"email" | "role", string>>;

/**
 * Front end only: the form checks what was typed in the browser and shows a thank-you.
 * Nothing is sent or stored, and no request is made.
 */
export function JoinForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = accessSchema.safeParse({ email: data.get("email") ?? "", role: data.get("role") ?? "" });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  }

  if (done) {
    return (
      <div className={styles.ok} role="status">
        <b>Thanks for your interest in Own Pace.</b>
        <p>We&apos;re opening to a small group first. To hear back from us, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </div>
    );
  }

  const clear = (key: keyof Errors) => () => errors[key] && setErrors((cur) => ({ ...cur, [key]: undefined }));

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label htmlFor="op-mail">Email</label>
      <input
        id="op-mail"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@email.com"
        required
        maxLength={254}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "op-mail-err" : undefined}
        onChange={clear("email")}
      />
      {errors.email && <p className={styles.err} id="op-mail-err" role="alert">{errors.email}</p>}
      <label htmlFor="op-role">I&apos;m a</label>
      <select
        id="op-role"
        name="role"
        defaultValue={ROLES[0]}
        aria-invalid={!!errors.role}
        aria-describedby={errors.role ? "op-role-err" : undefined}
        onChange={clear("role")}
      >
        {ROLES.map((r) => <option key={r}>{r}</option>)}
      </select>
      {errors.role && <p className={styles.err} id="op-role-err" role="alert">{errors.role}</p>}
      <button type="submit">Join early access</button>
    </form>
  );
}
