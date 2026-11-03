import { INFRA } from "@/lib/data";
import { Eyebrow } from "./Eyebrow";
import styles from "./Infra.module.css";

export function Infra() {
  return (
    <section id="infra" className="sec" data-sec="4" style={{ paddingTop: 0 }} aria-labelledby="infra-h">
      <div className="wrap">
        <Eyebrow n="04">Built to last</Eyebrow>
        <h2 className="h2 rv" id="infra-h">Engineered like infrastructure.</h2>
        <p className="sub rv">Behind Own Pace is a founder who spent 16+ years building systems that millions rely on: scalable, reliable, and watched closely in production.</p>
        <ul className={styles.infra}>
          {INFRA.map((c) => (
            <li key={c.title} className={`${styles.ic} rv`}>
              <svg className={styles.spark} viewBox="0 0 110 44" aria-hidden="true">
                <path d={c.spark} fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className={`${styles.big} ${c.small ? "" : styles.word}`}>{c.big}{c.small && <small>{c.small}</small>}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
