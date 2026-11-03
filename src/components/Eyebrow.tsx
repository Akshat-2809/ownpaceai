import type { ReactNode } from "react";

/** The section label: numbered badge, name, and an optional "In development" tag. */
export function Eyebrow({ n, tag, children }: { n: string; tag?: string; children: ReactNode }) {
  return (
    <span className="eye mono rv">
      <b>{n}</b>
      {children}
      {tag && <span className="tagdev" style={{ marginLeft: 6 }}>{tag}</span>}
    </span>
  );
}
