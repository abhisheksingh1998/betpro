import { betBigSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function BetBig() {
  return (
    <section className="bet-big">
      <div className="container bet-big-inner">
        <div>
          <h2>{betBigSection.title}</h2>
          <p>{betBigSection.description}</p>
        </div>
        <a href={WHATSAPP_URL} className="btn btn-mint">
          {betBigSection.ctaLabel}
        </a>
      </div>
    </section>
  );
}
