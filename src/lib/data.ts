/** All page copy, ported word for word from design/Main.dc.html. */

/* sections, in page order: the trail rail and the anchors read from this */
export const SECTIONS = [
  { id: "top", name: "Trailhead" },
  { id: "problem", name: "The problem" },
  { id: "pillars", name: "Where we work" },
  { id: "adapt", name: "How it adapts" },
  { id: "infra", name: "Built to last" },
  { id: "mission", name: "Why" },
  { id: "founder", name: "Founder" },
  { id: "join", name: "Early access" },
] as const;

/* hero: the three learners' base walk times, scaled by the chosen pace */
export const PACES = [
  { label: "Gentle", mult: 1.6 },
  { label: "Steady", mult: 1 },
  { label: "Brisk", mult: 0.6 },
];

/* §01 */
export const PROBLEM: { title: string; text: string; best?: boolean }[] = [
  { title: "Ahead, and bored", text: "Some learners move faster than the class, and wait." },
  { title: "At their own pace", text: "Every learner on a path that adapts to them. That's what we're building.", best: true },
  { title: "Behind, and lost", text: "Others need more time, and the lesson moves on without them." },
];

/* §02 */
export const PILLARS: [title: string, text: string][] = [
  ["Large language models", "To explain, answer and guide in a way that responds to each learner."],
  ["Adaptive learning systems", "So the path changes with the learner, instead of staying fixed."],
  ["Intuitive experiences", "So learning feels simple, whoever is using it."],
];

/* §03 */
export const STOPS: { t: string; x: string }[] = [
  { t: "Learn", x: "A learner starts where they are, not where a syllabus assumes they should be." },
  { t: "Check", x: "The platform pays attention to how it is going: what clicked, and what did not." },
  { t: "Adjust", x: "The path changes: slow down, go deeper, or skip ahead, depending on the learner." },
  { t: "Next", x: "The next step is chosen for that learner, and the climb continues at their pace." },
];

/* §04 */
export const INFRA: { big: string; small?: string; title: string; text: string; spark: string }[] = [
  { big: "16", small: "+ yrs", title: "Software at scale", text: "Distributed systems and production-grade web services.", spark: "M2 40 L20 30 L36 34 L52 18 L70 22 L88 8 L108 4" },
  { big: "Observability", title: "Knowing what's working", text: "Years building monitoring for applications, platforms and ML models.", spark: "M2 22 H24 L32 6 L42 38 L52 22 H108" },
  { big: "AI in production", title: "Reliable, not just clever", text: "Keeping machine learning models reliable and performing in the real world.", spark: "M2 34 C30 34 30 10 55 10 S80 34 108 34" },
];

/* §05 */
export const FOUNDER_QUOTE = "Hiking, reading, and trying things that help him become";
export const FOUNDER_QUOTE_EM = "a little better than yesterday.";

export const TIMELINE: { y: string; title: string; text?: string; now?: boolean }[] = [
  { y: "Nov 2025 —", title: "Founder", text: "Building an AI-driven learning platform for personalized education at scale. Remote, from Bengaluru.", now: true },
  { y: "2025", title: "Back home to Bengaluru", text: "Moved back to India after many years in the U.S. to be closer to family." },
  { y: "2022 — 2025", title: "Staff Software Engineer · Fiddler AI", text: "Monitoring and observability for machine learning models in production. San Francisco Bay Area." },
  { y: "2013 — 2022", title: "eBay · Senior Engineer to Member of Technical Staff", text: "Real-time service monitoring, an event-based monitoring platform and distributed tracing, at very large data volumes." },
  { y: "2009 — 2012", title: "Earlier", text: "Rackspace, eBay Search quality engineering, Sears, and e-commerce and web development in Chicago." },
  { y: "Education", title: "Illinois Institute of Technology" },
];
