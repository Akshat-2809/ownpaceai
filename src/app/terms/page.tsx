import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Own Pace",
  description: "The rules for using the Own Pace website and the early access form.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "This website", answer: "It describes a learning platform that is still in development. Plans and features may change." },
  { subject: "The early access form", answer: <>It doesn&apos;t send or store what you type, so it doesn&apos;t sign you up for anything. To reach us, write to {mail}.</> },
  { subject: "Illustrations", answer: "The trail map, diagram and elevation chart are illustrations, not product screenshots or real data." },
  { subject: "Questions", answer: <>Write to {mail}.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of this website (the &ldquo;Website&rdquo;), run by {LEGAL_ENTITY} (&ldquo;Own Pace&rdquo;,
          &ldquo;we&rdquo; or &ldquo;us&rdquo;), based in Bengaluru, India. By using the Website, you agree to them. If you
          don&apos;t agree, please don&apos;t use it.
        </p>
        <p>
          They don&apos;t cover our learning platform, which will have its own terms. How we handle personal data is explained in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "product",
    title: "A product in development",
    body: (
      <ul>
        <li><b>Plans, not promises.</b> Own Pace is in stealth. What the Website says about the platform, including how it adapts to each learner, describes what we are building and may change, arrive later or not happen at all.</li>
        <li><b>Not an offer.</b> Nothing on the Website is an offer to sell or supply anything.</li>
        <li><b>Illustrations.</b> The trail map, the Venn diagram and the elevation chart are illustrations. They are not screenshots of the product and don&apos;t show real data.</li>
      </ul>
    ),
  },
  {
    id: "early-access",
    title: "The early access form",
    body: (
      <ul>
        <li><b>How it works.</b> The form checks what you type in your browser and shows a thank-you message. It doesn&apos;t send or store anything, so we don&apos;t receive it.</li>
        <li><b>No sign-up.</b> Using the form doesn&apos;t create an account, a contract or a place on a list, and doesn&apos;t guarantee access, a date or a price.</li>
        <li><b>To reach us,</b> write to {mail}. If we later work together, for example on a pilot, it will be under a separate written agreement.</li>
      </ul>
    ),
  },
  {
    id: "contacting-us",
    title: "What you send us",
    body: (
      <p>
        Please don&apos;t send us confidential information unless we have agreed in writing to keep it confidential. If you send us
        ideas or feedback, you agree we may use them without owing you anything for them.
      </p>
    ),
  },
  {
    id: "ownership",
    title: "Names, content and design",
    body: (
      <>
        <p>
          The Website&apos;s text, design, illustrations and the Own Pace name and mark belong to Own Pace. You may view and share the
          Website for your own information, but please don&apos;t copy its content or design to pass it off as your own, or use our
          name in a way that suggests we endorse you.
        </p>
        <p>Other names on the Website, such as companies and universities in our founder&apos;s background, belong to their owners and are mentioned only to describe things.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "Using the Website",
    body: (
      <ul>
        <li>Don&apos;t try to break, overload or gain unauthorised access to the Website.</li>
        <li>Don&apos;t use the Website for anything unlawful.</li>
      </ul>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites, such as our founder&apos;s LinkedIn profile. We aren&apos;t responsible for their content.</p>,
  },
  {
    id: "warranty",
    title: "No warranty",
    body: <p>The Website is provided as it is. We try to keep it accurate and available, but we don&apos;t promise that it&apos;s complete, current or always online.</p>,
  },
  {
    id: "liability",
    title: "Limits on our liability",
    body: (
      <p>
        To the extent the law allows, we aren&apos;t liable for any loss that comes from using the Website or relying on its content.
        Nothing in these terms limits any liability that can&apos;t be limited under Indian law, or your rights as a consumer.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of India, and the courts at Bengaluru, Karnataka have jurisdiction.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We&apos;ll post the new version here with a new date. Using the Website after that means you accept the new terms.</p>,
  },
  {
    id: "contact",
    title: "Questions",
    body: <p>Write to {mail}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      intro="The rules for using this website and its early access form."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
