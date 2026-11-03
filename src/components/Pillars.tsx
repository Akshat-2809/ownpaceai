import { PILLARS } from "@/lib/data";
import { Eyebrow } from "./Eyebrow";
import styles from "./Pillars.module.css";

// two lines per label, first baseline at y, second 22 below
const VENN_LABELS = [
  ["Large language", "models", 260, 110, "#E7EEE9"],
  ["Adaptive", "learning", 140, 340, "#E7EEE9"],
  ["Intuitive", "experiences", 380, 340, "#10291F"],
] as const;

export function Pillars() {
  return (
    <section id="pillars" className={`sec ${styles.sec}`} data-sec="2" aria-labelledby="pillars-h">
      <div className="wrap">
        <Eyebrow n="02">Where we work</Eyebrow>
        <h2 className="h2 rv" id="pillars-h">At the meeting point of three things.</h2>
        <div className={styles.venn}>
          <svg className="rv" viewBox="0 0 520 480" role="img" aria-label="Diagram: large language models, adaptive learning systems and intuitive experiences overlap at Own Pace">
            <g className={styles.vg}>
              <circle cx="260" cy="160" r="130" fill="rgba(16,41,31,.9)" />
              <circle cx="185" cy="300" r="130" fill="rgba(68,88,77,.75)" />
              <circle cx="335" cy="300" r="130" fill="rgba(255,122,26,.8)" />
              <g style={{ fontFamily: "var(--sans)" }} fontWeight="700" fontSize="17" textAnchor="middle">
                {VENN_LABELS.map(([a, b, x, y, fill]) => (
                  // both lines turn about the label's center, so they stay in order; set in SVG units because Safari misplaces fill-box origins
                  <text key={a} x={x} y={y} fill={fill} style={{ transformOrigin: `${x}px ${y + 4.5}px` }}>
                    {a}<tspan x={x} dy="22">{b}</tspan>
                  </text>
                ))}
              </g>
            </g>
            <circle cx="260" cy="250" r="44" fill="#E7EEE9" stroke="#10291F" strokeWidth="2" />
            <text x="260" y="246" textAnchor="middle" style={{ fontFamily: "var(--serif)" }} fontSize="16" fill="#10291F">Own</text>
            <text x="260" y="266" textAnchor="middle" style={{ fontFamily: "var(--serif)" }} fontSize="16" fill="#10291F">Pace</text>
          </svg>
          <div className={styles.pl}>
            <ol className={styles.list}>
              {PILLARS.map(([title, text], i) => (
                <li key={title} className={`${styles.pli} rv`}>
                  <span className={styles.n} aria-hidden="true">0{i + 1}</span>
                  <div><b>{title}</b><span>{text}</span></div>
                </li>
              ))}
            </ol>
            <p className="sub rv" style={{ marginTop: 8 }}>Our aim: high-quality education that is more accessible and more effective, at scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
