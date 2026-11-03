import { AdaptTrail } from "./AdaptTrail";
import { Eyebrow } from "./Eyebrow";

export function Adapt() {
  return (
    <section id="adapt" className="sec" data-sec="3" aria-labelledby="adapt-h">
      <div className="wrap">
        <Eyebrow n="03" tag="In development">How it adapts</Eyebrow>
        <h2 className="h2 rv" id="adapt-h">A path that changes as you climb.</h2>
        <AdaptTrail />
      </div>
    </section>
  );
}
