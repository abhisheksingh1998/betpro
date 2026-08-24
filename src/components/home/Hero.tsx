import Image from "next/image";
import { hero } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
      </div>
      <div className="hero-inner">
        <div className="hero-brand">
          <span className="hero-eyebrow">{hero.eyebrow}</span>
          <p className="hero-brand-name">{hero.brandName}</p>
          <p className="hero-brand-tag">{hero.tagline}</p>
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
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>500+</strong>
            <span>Live Markets Daily</span>
          </div>
          <div className="hero-stat">
            <strong>2 Min</strong>
            <span>Instant ID Setup</span>
          </div>
          <div className="hero-stat">
            <strong>24/7</strong>
            <span>WhatsApp Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
