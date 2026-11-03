"use client";

import { useState } from "react";
import { PACES } from "@/lib/data";
import styles from "./Hero.module.css";

const CONTOURS = [
  "M-20 380 C120 330 220 400 360 340 S520 330 560 360",
  "M-20 320 C100 270 230 340 350 280 S500 270 560 300",
  "M30 260 C130 210 230 270 330 220 S470 200 520 240",
  "M90 200 C170 160 250 210 330 170 S440 150 470 180",
  "M170 150 C230 120 290 150 340 125 S410 110 430 135",
  "M240 110 C280 90 320 105 350 92 S395 85 400 100",
  "M300 82 C330 70 350 74 372 70 S392 76 380 86 S320 92 300 82",
];

/* learner A, B, C: their trail, colour and base walk time in seconds */
const TRAILS: [d: string, color: string, secs: number][] = [
  ["M60 400 C140 360 120 300 200 280 S300 220 280 170 S330 100 360 70", "#10291F", 9],
  ["M200 410 C230 350 300 340 310 280 S260 200 320 150 S350 100 360 70", "var(--accent)", 6.5],
  ["M470 400 C430 330 470 280 420 230 S380 150 400 120 S370 90 360 70", "#44584D", 11],
];

/** Three learners, three routes, one goal. The pace buttons change how fast they walk. */
export function HeroMap() {
  const [pace, setPace] = useState(1);
  const mult = PACES[pace].mult;

  return (
    <div className={styles.map}>
      <svg viewBox="0 0 520 420" role="img" aria-label="Illustration: three learners take three different trails to the same summit">
        <rect width="520" height="420" fill="#DCE7DF" />
        <g fill="none" stroke="rgba(16,41,31,.13)" strokeWidth="1.4">
          {CONTOURS.map((d) => <path key={d} d={d} />)}
        </g>
        {TRAILS.map(([d, color]) => <path key={d} className={styles.trail} d={d} style={{ stroke: color }} />)}
        {TRAILS.map(([d, color, secs]) => (
          <circle key={d} className={styles.hk} r="8" stroke="#FFFFFF" strokeWidth="3" style={{ fill: color, offsetPath: `path('${d}')`, animationDuration: `${secs * mult}s` }} />
        ))}
        <path d="M360 72 V28" stroke="#10291F" strokeWidth="3" />
        <path className={styles.flag} d="M362 28 L392 36 L362 46 Z" style={{ fill: "var(--accent)" }} />
        <text x="372" y="92" style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#10291F">GOAL</text>
        <g style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#44584D">
          <text x="40" y="414">LEARNER A</text>
          <text x="180" y="414">B</text>
          <text x="430" y="414">C</text>
        </g>
      </svg>
      <div className={styles.pace} role="group" aria-label="Choose a pace for the illustration">
        <span className="mono">Pace</span>
        {PACES.map((p, i) => (
          <button type="button" key={p.label} className={i === pace ? styles.on : undefined} aria-pressed={i === pace} onClick={() => setPace(i)}>
            {p.label}
          </button>
        ))}
      </div>
      <span className="cap">Three learners, three routes, one goal. Illustration only.</span>
    </div>
  );
}
