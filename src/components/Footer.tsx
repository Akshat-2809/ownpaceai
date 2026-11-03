import Link from "next/link";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL, FOUNDER_LINKEDIN } from "@/lib/site";
import styles from "./Footer.module.css";

const COLUMNS: { head: string; links: [label: string, href: string][]; notes?: string[] }[] = [
  { head: "Explore", links: [["The problem", "/#problem"], ["Where we work", "/#pillars"], ["How it adapts", "/#adapt"]] },
  { head: "Company", links: [["Founder", "/#founder"], ["Early access", "/#join"], ["LinkedIn ↗", FOUNDER_LINKEDIN]] },
  { head: "Contact", links: [[EMAIL, `mailto:${EMAIL}`]], notes: ["Bengaluru, India"] },
];

/** The summit: mountains on top, links below. */
export function Footer() {
  return (
    <footer className={styles.foot}>
      <svg className={styles.peaks} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 260 L0 190 L180 120 L300 170 L470 80 L600 150 L720 40 L860 140 L1000 90 L1150 160 L1300 110 L1440 170 L1440 260 Z" fill="#10291F" />
        <path d="M0 260 L0 220 L240 170 L420 210 L620 150 L800 200 L1000 160 L1200 210 L1440 180 L1440 260 Z" fill="#1B3B2E" />
        <path d="M720 40 V4" stroke="#E7EEE9" strokeWidth="3" />
        <path className={styles.sflag} d="M722 4 L752 12 L722 22 Z" style={{ fill: "var(--accent)" }} />
      </svg>
      <div className={styles.in}>
        <div className={styles.ftop}>
          <p className={styles.say}>Everyone reaches the top. At their own pace.</p>
          {COLUMNS.map((col) => (
            <nav key={col.head} aria-labelledby={`f-${col.head}`}>
              <h2 className={styles.head} id={`f-${col.head}`}>{col.head}</h2>
              {col.links.map(([label, href]) =>
                href.startsWith("http") ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                ) : href.startsWith("mailto:") ? (
                  <a key={label} href={href}>{label}</a>
                ) : (
                  <Link key={label} href={href}>{label}</Link>
                ),
              )}
              {col.notes?.map((n) => <p key={n}>{n}</p>)}
              {col.head === "Contact" && (
                <>
                  <Link href="/privacy">Privacy policy</Link>
                  <Link href="/terms">Terms of service</Link>
                </>
              )}
            </nav>
          ))}
        </div>
        <div className={`${styles.bot} mono`}>
          <span>© &rsquo;26 {LEGAL_ENTITY}. All rights reserved.</span>
          <span>▲ Summit reached</span>
        </div>
      </div>
    </footer>
  );
}
