import Image from "next/image";
import { casinoSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function Casino() {
  return (
    <section className="section" id="casino">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Casino floor</span>
          <h2>{casinoSection.title}</h2>
          <p>{casinoSection.subtitle}</p>
        </div>
        <div className="casino-strip">
          {casinoSection.games.map((game) => (
            <a
              key={game.name}
              href={WHATSAPP_URL}
              className="game-tile"
              data-tone={game.tone}
            >
              <Image
                src={game.image}
                alt={game.name}
                fill
                sizes="(max-width: 720px) 50vw, 25vw"
                className="game-tile-img"
              />
              <div className="game-tile-copy">
                <span>{game.tag}</span>
                <strong>{game.name}</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
