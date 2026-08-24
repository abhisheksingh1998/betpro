import Image from "next/image";
import { betBigSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function BetBig() {
  return (
    <section className="bet-big">
      <Image
        src={betBigSection.image}
        alt=""
        fill
        sizes="100vw"
        className="bet-big-bg"
        aria-hidden="true"
      />
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
