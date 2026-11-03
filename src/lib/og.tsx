import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Own Pace — Learn at your own pace.";

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="17" fill="#10291F" />
      <path d="M7 26 L15 14 L19 19 L23 12 L29 26 Z" fill="#E7EEE9" />
      <path d="M9 29 C14 24 20 27 27 21" fill="none" stroke="#FF7A1A" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}

/** Shared by opengraph-image and twitter-image. */
export function renderOgImage() {
  // Sync reads keep the image prerendered at build time (async fs would make it dynamic).
  const font = (file: string) => readFileSync(join(process.cwd(), "assets", file));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 72px", background: "#E7EEE9", color: "#10291F", fontFamily: "Young Serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Mark size={60} />
            <span style={{ fontSize: 44 }}>Own Pace</span>
          </div>
          <span style={{ fontFamily: "Space Mono", fontSize: 20, letterSpacing: "0.06em", color: "#44584D" }}>AI EDTECH · IN STEALTH · BENGALURU</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1, letterSpacing: "-0.02em" }}>
          <span>Learn at your</span>
          <span style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start" }}>
            own pace.
            <span style={{ height: 12, marginTop: 6, borderRadius: 6, background: "#FF7A1A" }} />
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px dashed rgba(16,41,31,.3)", paddingTop: 22 }}>
          <span style={{ fontFamily: "Space Mono", fontSize: 20, letterSpacing: "0.06em", color: "#44584D" }}>OWNPACEAI.COM</span>
          <span style={{ fontFamily: "Familjen Grotesk", fontSize: 22, color: "#44584D" }}>Personalized learning that adapts to each learner</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Young Serif", data: font("young-serif-latin-400-normal.woff"), style: "normal", weight: 400 },
        { name: "Space Mono", data: font("space-mono-latin-400-normal.woff"), style: "normal", weight: 400 },
        { name: "Familjen Grotesk", data: font("familjen-grotesk-latin-600-normal.woff"), style: "normal", weight: 600 },
      ],
    },
  );
}

export function renderAppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#E7EEE9" }}>
        <Mark size={136} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
