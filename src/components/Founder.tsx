import Image from "next/image";
import founderPhoto from "@/assets/founder/mohan-garadi.jpg";
import { FOUNDER_QUOTE, FOUNDER_QUOTE_EM, TIMELINE } from "@/lib/data";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import styles from "./Founder.module.css";

export function Founder() {
  return (
    <section id="founder" className="sec" data-sec="6" style={{ paddingTop: 0 }} aria-labelledby="founder-h">
      <div className="wrap">
        <Eyebrow n="05">Founder</Eyebrow>
        <h2 className="h2 rv" id="founder-h">{FOUNDER_NAME}</h2>
        <div className={styles.fnd}>
          {/* the design's arched frame, with the round portrait set in it */}
          <figure className={`${styles.photo} rv`}>
            <Image src={founderPhoto} alt={`${FOUNDER_NAME}, founder of Own Pace`} sizes="(max-width: 980px) 70vw, 280px" placeholder="blur" />
            <figcaption className="mono">{FOUNDER_NAME} · Founder</figcaption>
          </figure>
          <div className="rv">
            <p className={styles.fq}>{FOUNDER_QUOTE} <span>{FOUNDER_QUOTE_EM}</span></p>
            <ol className={styles.tl}>
              {TIMELINE.map((t) => (
                <li key={t.title} className={`${styles.tr} ${t.now ? styles.now : ""}`}>
                  <span className={styles.y}>{t.y}</span>
                  <b>{t.title}</b>
                  {t.text && <span>{t.text}</span>}
                </li>
              ))}
            </ol>
            <div className="btns">
              <a className="btn g" href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
