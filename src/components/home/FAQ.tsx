import { faqSection } from "@/data/content";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Support</span>
          <h2>{faqSection.title}</h2>
          <p>{faqSection.subtitle}</p>
        </div>
        <div className="faq-list">
          {faqSection.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
