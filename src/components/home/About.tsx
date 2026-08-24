import Image from "next/image";
import { aboutSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">{aboutSection.eyebrow}</span>
          <h2>{aboutSection.title}</h2>
          {aboutSection.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <a href={WHATSAPP_URL} className="btn btn-mint" style={{ marginTop: "0.5rem" }}>
            {aboutSection.ctaLabel}
          </a>
        </div>
        <div className="about-panel">
          <Image
            src={aboutSection.image}
            alt="Betpro live sports experience"
            fill
            sizes="(max-width: 880px) 100vw, 45vw"
            className="about-panel-img"
          />
          <div className="about-panel-copy">
            <p>{aboutSection.panelText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
