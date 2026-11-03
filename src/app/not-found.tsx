import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Own Pace",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.logo} href="/" aria-label="Own Pace home">
          <LogoMark />
          <b>Own Pace</b>
        </Link>
        <span className="chip mono"><i aria-hidden="true" />Error 404</span>
        <h1 className={styles.big}>This trail doesn&apos;t <em>go anywhere.</em></h1>
        <p className={styles.note}>There&apos;s nothing at this address. Head back to the trailhead.</p>
        <Link className="btn p" href="/">Back to the home page</Link>
      </div>
    </main>
  );
}
