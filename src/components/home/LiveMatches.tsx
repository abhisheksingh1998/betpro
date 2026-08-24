import Image from "next/image";
import { matchesSection } from "@/data/content";
import { WHATSAPP_URL } from "@/data/site";

export function LiveMatches() {
  return (
    <section className="section" id="live-matches">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Live boards</span>
          <h2>{matchesSection.title}</h2>
          <p>{matchesSection.subtitle}</p>
        </div>
        <div className="matches-layout">
          {matchesSection.categories.map((cat) => (
            <a
              key={cat.name}
              href={WHATSAPP_URL}
              className="match-board"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cat.name} markets on WhatsApp`}
            >
              <div className="match-board-media">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="match-board-body">
                <h3>{cat.name}</h3>
                {cat.matches.map((match) => (
                  <div key={match.teams} className="match-row">
                    <div className="match-teams">{match.teams}</div>
                    <div className="match-meta">
                      <span
                        className={`badge ${
                          match.status === "LIVE" ? "badge-live" : "badge-upcoming"
                        }`}
                      >
                        {match.status}
                      </span>
                      <span>{match.league}</span>
                      <span>{match.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
