export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  seo?: {
    title: string;
    description: string;
    headline: string;
  };
  sections: { id: string; heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "reading-live-cricket-odds-without-noise",
    title: "Reading live cricket odds without the noise",
    date: "2026-08-12",
    category: "Cricket",
    excerpt:
      "A calm framework for spotting when in-play cricket prices overreact — and when to stay out.",
    readTime: "6 min",
    image: "/images/blog-cricket.png",
    seo: {
      title: "How to Read Live Cricket Odds Without the Noise | Betpro",
      description:
        "Learn how to read live cricket odds, understand changing markets and focus on useful information while following a live cricket match.",
      headline: "How to Read Live Cricket Odds Without the Noise",
    },
    sections: [
      {
        id: "start",
        heading: "Start with the session, not the slogan",
        paragraphs: [
          "Live cricket markets swing hardest when a single over changes the narrative. Before you react, note the required run rate, wickets in hand, and how the pitch has behaved across both innings.",
          "Betpro boards refresh quickly; use that speed to confirm the trend, not to chase every spike. If the price moved only because a social clip went viral, wait for the next over.",
        ],
      },
      {
        id: "filters",
        heading: "Three filters that save bankrolls",
        paragraphs: [
          "Filter one: Is the move explained by match state or by emotion? Filter two: Would you still like the price if the next ball is a dot? Filter three: Are you sizing for a scalp or a thesis?",
          "Players who answer those three questions consistently last longer than players who only watch the highlight reel.",
        ],
      },
      {
        id: "practice",
        heading: "Practice on smaller stakes",
        paragraphs: [
          "Use quieter midweek fixtures to rehearse your checklist. When IPL or international nights arrive, you already know your process.",
        ],
      },
    ],
  },
  {
    slug: "football-prematch-checklist-for-busy-nights",
    title: "A football pre-match checklist for busy weeknights",
    date: "2026-08-04",
    category: "Football",
    excerpt:
      "Five-minute prep that keeps midweek football bets disciplined when you cannot watch every lineup show.",
    readTime: "5 min",
    image: "/images/blog-football.png",
    sections: [
      {
        id: "timebox",
        heading: "Time-box your research",
        paragraphs: [
          "You do not need a full scout report. Give yourself five minutes: injuries, motivation (cup vs league), and travel. If nothing stands out, pass — there will be another kickoff.",
          "Betpro football markets reward patience more than volume. Skipping a fixture is a valid decision.",
        ],
      },
      {
        id: "prices",
        heading: "Compare openers to closers",
        paragraphs: [
          "Note where the price opened and where it sits an hour before kickoff. Sharp money often arrives late; recreational spikes often arrive early after headlines.",
        ],
      },
    ],
  },
  {
    slug: "responsible-limits-that-actually-stick",
    title: "Responsible limits that actually stick",
    date: "2026-07-22",
    category: "Mindset",
    excerpt:
      "Practical deposit and session rules Indian players can keep — without pretending willpower is infinite.",
    readTime: "4 min",
    image: "/images/blog-mindset.png",
    sections: [
      {
        id: "rules",
        heading: "Write the rule before the match",
        paragraphs: [
          "Decide deposit caps and session length while you are calm. Once the toss happens, negotiation with yourself gets expensive.",
          "Betpro support can help with cool-off requests. Use that option early, not after a losing streak.",
        ],
      },
      {
        id: "signals",
        heading: "Exit signals",
        paragraphs: [
          "If you are increasing stake size to recover, or refreshing balances every few seconds, close the app. Entertainment ends the moment recovery becomes the goal.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2) {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
