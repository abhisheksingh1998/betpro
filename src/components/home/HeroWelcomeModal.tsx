"use client";

import { useEffect, useState } from "react";
import { hero } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function HeroWelcomeModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="hero-modal-overlay"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        className="hero-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="hero-modal-close"
          aria-label="Close welcome popup"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <div className="hero-brand">
          <span className="hero-eyebrow">{hero.eyebrow}</span>
          <p className="hero-brand-name">{hero.brandName}</p>
          <p className="hero-brand-tag">{hero.tagline}</p>
        </div>

        <h1 id="hero-modal-title">{hero.headline}</h1>
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
    </div>
  );
}
