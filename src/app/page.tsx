import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { LiveMatches } from "@/components/home/LiveMatches";
import { Casino } from "@/components/home/Casino";
import { About } from "@/components/home/About";
import { WhyUs } from "@/components/home/WhyUs";
import { BetBig } from "@/components/home/BetBig";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQ } from "@/components/home/FAQ";
import { SITE_URL } from "@/data/site";

const HOME_TITLE =
  "Betpro – Live Sports Odds, Cricket ID & Casino | Powered by Rollwin";
const HOME_DESCRIPTION =
  "Get your Betpro ID for live cricket, football, tennis, and casino tables. Instant WhatsApp onboarding, clear odds, and Rollwin-backed settlements.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Betpro",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-betpro.png`,
  description: HOME_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header variant="home" />
      <main>
        <Hero />
        <LiveMatches />
        <Casino />
        <About />
        <WhyUs />
        <BetBig />
        <BlogPreview />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
