import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_ENTITY } from "@/lib/legal";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Own Pace",
  description: "What this website collects, what happens when you email us, why, who sees it, and your rights.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${EMAIL}?subject=Privacy`}>{EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "The early access form", answer: "It doesn’t send or store what you type. It checks your entries in your browser and shows a thank-you, and nothing reaches us." },
  { subject: "To reach us", answer: <>Write to {mail}. That&apos;s the only way a message gets to us.</> },
  { subject: "When you email us", answer: "We use what you write to reply to you. Nothing else." },
  { subject: "Cookies and tracking", answer: "None. No analytics, no advertising cookies, no tracking pixels." },
  { subject: "What we never do", answer: "Sell your data, use it for advertising, or follow you around the web." },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is run by {LEGAL_ENTITY} (&ldquo;Own Pace&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;), an AI edtech startup
          based in Bengaluru, India. For the personal data described here, we are the data fiduciary under India&apos;s Digital
          Personal Data Protection Act, 2023.
        </p>
        <p>
          This policy covers this website and the emails you send us. It doesn&apos;t cover the learning platform we are building,
          which is not yet available and will have its own privacy policy when it is.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you visit</h3>
        <p>
          Like any website, the service that hosts it keeps standard request logs (IP address, time, page requested, browser) for
          security and reliability. We use no cookies, analytics or advertising tools, and our fonts are served from our own domain.
        </p>
        <h3>When you use the early access form</h3>
        <p>
          Nothing. The form checks your email address and your choice of role in your browser, then shows a thank-you message.
          What you type isn&apos;t sent to us or to anyone else, and isn&apos;t stored. If you&apos;d like to hear from us, write to {mail}.
        </p>
        <h3>When you email us</h3>
        <p>We receive your email address, your name if you include it, and whatever you choose to write.</p>
        <h3>The illustrations on the page</h3>
        <p>The trail map, the diagram and the elevation chart are illustrations built into the page. They don&apos;t use or show anyone&apos;s real data.</p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <ul>
        <li><b>To reply to you</b> when you write to us, which you ask for by contacting us.</li>
        <li><b>To keep the website safe</b> and running.</li>
        <li><b>To meet legal duties</b> and answer lawful requests.</li>
      </ul>
    ),
  },
  {
    id: "who-can-see-it",
    title: "Who can see it",
    body: (
      <>
        <p>Only where needed:</p>
        <ul>
          <li><b>The service that hosts this website,</b> which keeps its request logs.</li>
          <li><b>The service that handles our email,</b> which stores and delivers the emails you send us.</li>
          <li><b>Professional advisers,</b> such as lawyers or accountants, where they need it to advise us.</li>
          <li><b>Authorities and courts,</b> where the law requires it or to protect our legal rights.</li>
        </ul>
        <p>These services act on our instructions. We don&apos;t sell your data or share it for anyone else&apos;s marketing.</p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Data outside India",
    body: <p>The services we use may process data outside India. Where they do, we only use countries and arrangements that Indian law allows.</p>,
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <ul>
        <li><b>Request logs</b> are kept by the hosting service for a short period under its own retention policy.</li>
        <li><b>Emails</b> are kept for as long as we need them to reply to you, then deleted. You can ask us to delete them sooner at any time.</li>
      </ul>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          You have the right to ask what personal data we hold about you and how we use it, to have it corrected, completed, updated or
          erased, and to nominate someone to act for you. To make a request, or to raise a concern, write to {mail}. We&apos;ll answer
          within 30 days.
        </p>
        <p>If you aren&apos;t satisfied with our answer, you may complain to the Data Protection Board of India.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "Keeping it safe",
    body: <p>The website is served over an encrypted connection, and access to our email is limited to the people at Own Pace who need it to reply to you.</p>,
  },
  {
    id: "children",
    title: "Children",
    body: (
      <>
        <p>
          Own Pace is building a learning platform, so some of the learners we hope to serve may be under 18. This website doesn&apos;t
          collect anything from anyone through its form, whatever their age.
        </p>
        <p>
          If you are under 18 and would like to hear from us, please ask a parent or guardian to write to {mail} for you. When the
          learning platform launches, its own privacy policy will explain how it handles children&apos;s data, including consent
          from a parent or guardian.
        </p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites, such as our founder&apos;s LinkedIn profile. Their own privacy policies apply there, not this one.</p>,
  },
  {
    id: "changes",
    title: "When this policy changes",
    body: (
      <p>
        We&apos;ll post the new version here with a new date. If the website starts collecting anything new, such as through a form
        that sends data to us, this policy will say so first. See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "How to reach us",
    body: (
      <div className={s.stuck}>
        <p><b>{LEGAL_ENTITY}</b> · Bengaluru, India</p>
        <p>Write to {mail}, with &ldquo;Privacy&rdquo; in the subject line.</p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      intro="What this website collects when you visit, what happens when you email us, and your rights."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
