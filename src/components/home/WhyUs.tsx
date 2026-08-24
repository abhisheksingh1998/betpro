import Image from "next/image";
import { whyUsSection } from "@/data/content";

export function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Betpro</span>
          <h2>{whyUsSection.title}</h2>
          <p>{whyUsSection.subtitle}</p>
        </div>
        <div className="why-grid">
          {whyUsSection.features.map((feature, index) => (
            <article key={feature.title} className="why-card">
              <div className="why-card-media">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="why-card-body">
                <div className="why-index">0{index + 1}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
