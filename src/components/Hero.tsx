import { HeroMap } from "./HeroMap";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className="wrap">
      <section className={styles.hero} data-sec="0" aria-labelledby="hero-h">
        <div>
          <span className="chip mono"><i aria-hidden="true" />AI edtech · in stealth · Bengaluru</span>
          <h1 className={styles.h1} id="hero-h">
            Learn at your{" "}
            <em>
              own pace.
              <svg viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 22 C70 6 150 30 296 10" fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="7" strokeLinecap="round" />
              </svg>
            </em>
          </h1>
          <p className={styles.lede}>We&apos;re building an AI-powered learning platform with personalized learning experiences that adapt to each learner.</p>
          <div className="btns">
            <a className="btn p" href="#join">Join early access</a>
            <a className="btn g" href="#adapt">How it adapts</a>
          </div>
        </div>
        <HeroMap />
      </section>
    </div>
  );
}
