"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/data";
import styles from "./Rail.module.css";

const STEP = 54;
const LAST = SECTIONS.length - 1;

/** The trail rail: one waypoint per section, filled up to the one in view, with a walker on the current one. */
export function Rail() {
  const [a, setA] = useState(0);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      let cur = 0;
      document.querySelectorAll("[data-sec]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = Number(el.getAttribute("data-sec"));
      });
      setA(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className={styles.rail} aria-label="Trail of sections">
      <span className={styles.fill} aria-hidden="true" style={{ height: (Math.round((a / LAST) * 100) / 100) * (STEP * LAST) }} />
      <svg className={styles.walker} viewBox="0 0 20 20" aria-hidden="true" style={{ top: 14 + a * STEP + 17 - 10 }}>
        <path d="M10 1 L18 17 L10 13 L2 17 Z" fill="#10291F" />
      </svg>
      {SECTIONS.map((s, i) => (
        <a
          key={s.id}
          className={`${styles.wp} ${i === a ? styles.on : i < a ? styles.past : ""}`}
          href={`#${s.id}`}
          aria-label={s.name}
          aria-current={i === a ? "location" : undefined}
        >
          <span className={styles.pin}><i /></span>
          <span className={styles.tag} aria-hidden="true"><small>WP {i + 1}</small>{s.name}</span>
        </a>
      ))}
    </nav>
  );
}
