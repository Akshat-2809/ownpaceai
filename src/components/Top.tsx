import Link from "next/link";
import { LogoMark } from "./Logo";
import styles from "./Top.module.css";

/** Logo and the join button. Not sticky on desktop: the trail rail is the nav there. */
export function Top({ home = false }: { home?: boolean }) {
  return (
    <header className={styles.top}>
      <div className={styles.in}>
        <Link className={styles.logo} href={home ? "#top" : "/"} aria-label="Own Pace home">
          <LogoMark />
          <b>Own Pace</b>
        </Link>
        <Link className={styles.join} href={home ? "#join" : "/#join"}>Join early access</Link>
      </div>
    </header>
  );
}
