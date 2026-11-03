import { Adapt } from "@/components/Adapt";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Infra } from "@/components/Infra";
import { Join } from "@/components/Join";
import { Mission } from "@/components/Mission";
import { Pillars } from "@/components/Pillars";
import { Problem } from "@/components/Problem";
import { Rail } from "@/components/Rail";
import { Top } from "@/components/Top";
import { EMAIL, FOUNDER_LINKEDIN, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  slogan: "Learn at your own pace.",
  email: EMAIL,
  founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Founder", sameAs: [FOUNDER_LINKEDIN] },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Top home />
      <Rail />
      <main id="top">
        <Hero />
        <Problem />
        <Pillars />
        <Adapt />
        <Infra />
        <Mission />
        <Founder />
        <Join />
      </main>
      <Footer />
    </>
  );
}
