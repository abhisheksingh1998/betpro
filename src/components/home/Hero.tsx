import Image from "next/image";
import { hero } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-brand">
          <Image
            src="/logo-betpro.png"
            alt="Betpro — Powered by Rollwin"
            width={280}
            height={74}
            priority
          />
        </div>
        <h1>{hero.headline}</h1>
        <p className="hero-support">{hero.support}</p>
        <div className="hero-ctas">
          <a href={WHATSAPP_URL} className="btn btn-mint">
            {hero.primaryCta}
          </a>
          <a href={WHATSAPP_URL} className="btn btn-ghost">
            {hero.secondaryCta}
          </a>
        </div>
      </div>
      <div className="hero-rail" aria-hidden="true" />
    </section>
  );
}
