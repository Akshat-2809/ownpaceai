import styles from "./Mission.module.css";

const CONTOURS = [
  "M-50 350 C200 280 400 380 650 300 S950 280 1050 320",
  "M-50 290 C200 220 420 320 660 240 S940 220 1050 260",
  "M0 230 C220 160 430 260 660 180 S930 160 1050 200",
  "M80 170 C260 110 440 200 660 130 S900 110 1000 140",
  "M200 110 C330 70 460 130 650 80 S860 60 920 90",
];

export function Mission() {
  return (
    <section id="mission" className="sec" data-sec="5" style={{ paddingTop: 0 }} aria-labelledby="mission-h">
      <div className="wrap">
        <div className={`${styles.band} rv`}>
          <svg className={styles.contour} viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="#E7EEE9" strokeWidth="1.5">
              {CONTOURS.map((d) => <path key={d} d={d} />)}
            </g>
          </svg>
          <h2 className={`mono ${styles.label}`} id="mission-h">Why we&apos;re building</h2>
          <p>To make high-quality education <span>more accessible</span> and more effective.</p>
          <small className="mono">Currently in stealth, validating product-market fit and core technology.</small>
        </div>
      </div>
    </section>
  );
}
