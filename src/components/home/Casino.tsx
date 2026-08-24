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
              <span>{game.tag}</span>
              <strong>{game.name}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
