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
        <div className="why-list">
          {whyUsSection.features.map((feature, index) => (
            <div key={feature.title} className="why-item">
              <div className="why-index">0{index + 1}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
