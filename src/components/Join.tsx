import { JoinForm } from "./JoinForm";
import styles from "./Join.module.css";

export function Join() {
  return (
    <section id="join" className="sec" data-sec="7" style={{ paddingTop: 0, paddingBottom: 0 }} aria-labelledby="join-h">
      <div className="wrap">
        <div className={`${styles.joinbox} rv`}>
          <div>
            <span className="mono">Early access</span>
            <h2 className={`h2 ${styles.h2}`} id="join-h">Start the climb with us.</h2>
            <p className={styles.lede}>We&apos;re in stealth and opening to a small group first. Leave your email and tell us who you are.</p>
          </div>
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
