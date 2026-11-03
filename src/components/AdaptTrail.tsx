"use client";

import { STOPS } from "@/lib/data";
import { useAutoStep } from "./useAutoStep";
import styles from "./Adapt.module.css";

/* the waypoints on the elevation line */
const POINTS: [x: number, y: number][] = [[125, 160], [375, 135], [625, 78], [875, 42]];
const LINE = "M0 180 C120 170 160 120 250 125 S380 150 500 95 S650 60 750 70 S900 30 1000 20";

/** Learn → Check → Adjust → Next. Steps itself every 3s until someone picks a waypoint. */
export function AdaptTrail() {
  const [st, pick] = useAutoStep(STOPS.length, 3000);

  return (
    <div className={`${styles.elev} rv`}>
      <svg viewBox="0 0 1000 200" aria-hidden="true">
        <defs>
          <linearGradient id="opg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#10291F" stopOpacity=".22" />
            <stop offset="1" stopColor="#10291F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${LINE} V200 H0 Z`} fill="url(#opg)" />
        <path d={LINE} fill="none" stroke="#10291F" strokeWidth="3" />
        <g stroke="#10291F" strokeWidth="2">
          {POINTS.map(([x, y]) => <line key={x} x1={x} y1="200" x2={x} y2={y} strokeDasharray="3 4" />)}
        </g>
        {POINTS.map(([x, y], i) => (
          <circle key={x} className={styles.pt} cx={x} cy={y} r={i === st ? 14 : 9} style={{ fill: i === st ? "var(--accent)" : "#F4F8F5" }} stroke="#10291F" strokeWidth="2.5" />
        ))}
      </svg>
      <div className={styles.stops} role="group" aria-label="Choose a step">
        {STOPS.map((s, i) => (
          <button type="button" key={s.t} className={`${styles.stop} ${i === st ? styles.on : ""}`} aria-pressed={i === st} onClick={() => pick(i)}>
            <small>Waypoint {i + 1}</small>
            <b>{s.t}</b>
          </button>
        ))}
      </div>
      <div className={styles.sdet}>
        <p aria-live="polite">{STOPS[st].x}</p>
        <span className="cap">Our approach · details to come</span>
      </div>
    </div>
  );
}
