import { PROBLEM } from "@/lib/data";
import { Eyebrow } from "./Eyebrow";
import styles from "./Problem.module.css";

/* the line each card draws: ahead (rushing up), at their own pace (adapting), behind (flat) */
const LINES = [
  { d: "M10 70 L290 20", stroke: "#44584D", w: 3, dash: true, dot: [250, 27, "#10291F"] },
  { d: "M10 75 C80 75 90 40 150 45 S230 15 290 15", stroke: "var(--accent)", w: 3.5, dash: true, dot: [150, 45, "var(--accent)"] },
  { d: "M10 30 L290 30", stroke: "#44584D", w: 3, dash: false, dot: [60, 30, "#10291F"] },
] as const;

export function Problem() {
  return (
    <section id="problem" className="sec" data-sec="1" aria-labelledby="problem-h">
      <div className="wrap">
        <Eyebrow n="01">The problem</Eyebrow>
        <h2 className="h2 rv" id="problem-h">One pace was never right for everyone.</h2>
        <ul className={styles.three}>
          {PROBLEM.map((card, i) => {
            const l = LINES[i];
            return (
              <li key={card.title} className={`${styles.tc} ${card.best ? styles.best : ""} rv`}>
                <svg viewBox="0 0 300 90" aria-hidden="true">
                  <path d={l.d} style={{ stroke: l.stroke }} strokeWidth={l.w} fill="none" className={l.dash ? styles.dash : undefined} />
                  <circle cx={l.dot[0]} cy={l.dot[1]} r="9" style={{ fill: l.dot[2] }} />
                </svg>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
