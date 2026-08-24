import { aboutSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">{aboutSection.eyebrow}</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
              letterSpacing: "-0.03em",
              margin: "0 0 1.25rem",
              lineHeight: 1.1,
            }}
          >
            {aboutSection.title}
          </h2>
          {aboutSection.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <a href={WHATSAPP_URL} className="btn btn-mint" style={{ marginTop: "0.5rem" }}>
            {aboutSection.ctaLabel}
          </a>
        </div>
        <div className="about-panel">
          <p>
            One ID. Live sports. Tables that stay open when the night gets long.
          </p>
        </div>
      </div>
    </section>
  );
}
