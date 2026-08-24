import Image from "next/image";
import { matchesSection } from "@/data/content";

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
            <div key={cat.name} className="match-board">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
