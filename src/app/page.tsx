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

const HOME_TITLE = "Betpro – Live Sports Betting & Online Gaming";
const HOME_DESCRIPTION =
  "Explore Betpro for live sports markets, cricket, football and other online gaming options. Discover the platform and play responsibly.";
const HOME_URL = "https://www.bpexch.games/";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOME_URL,
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bpexch.games/#organization",
      name: "Betpro",
      url: "https://www.bpexch.games/",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bpexch.games/#website",
      name: "Betpro",
      url: "https://www.bpexch.games/",
      publisher: {
        "@id": "https://www.bpexch.games/#organization",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
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
