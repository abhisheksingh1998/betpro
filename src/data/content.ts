export const hero = {
  headline: "Odds that move with the game.",
  support:
    "Betpro gives you a clean path to live sports markets, instant IDs, and fast settlements — built for players who want clarity over clutter.",
  primaryCta: "Get Betpro ID",
  secondaryCta: "Talk on WhatsApp",
  image: "/images/hero.jpg",
};

export const matchesSection = {
  title: "Markets in play",
  subtitle:
    "Track cricket, football, and tennis boards with live status and sharp timing cues.",
  categories: [
    {
      name: "Cricket",
      accent: "cricket",
      image: "/images/sport-cricket.jpg",
      matches: [
        {
          teams: "Mumbai Titans vs Delhi Chargers",
          league: "Premier T20 Cup",
          time: "Today · 7:30 pm",
          status: "LIVE" as const,
        },
        {
          teams: "Chennai Kings vs Gujarat Riders",
          league: "Premier T20 Cup",
          time: "Today · 3:30 pm",
          status: "UPCOMING" as const,
        },
        {
          teams: "Sydney Strikers vs Melbourne Heat",
          league: "Southern Bash League",
          time: "Tomorrow · 1:45 pm",
          status: "UPCOMING" as const,
        },
      ],
    },
    {
      name: "Football",
      accent: "football",
      image: "/images/sport-football.jpg",
      matches: [
        {
          teams: "North United vs River FC",
          league: "Euro Club Night",
          time: "Today · 12:00 am",
          status: "LIVE" as const,
        },
        {
          teams: "Coastal Athletic vs Metro City",
          league: "Domestic Super League",
          time: "Tonight · 10:30 pm",
          status: "UPCOMING" as const,
        },
      ],
    },
    {
      name: "Tennis",
      accent: "tennis",
      image: "/images/sport-tennis.jpg",
      matches: [
        {
          teams: "A. Verma vs L. Costa",
          league: "ATP Hardcourt Series",
          time: "Today · 5:10 pm",
          status: "LIVE" as const,
        },
        {
          teams: "M. Singh vs R. Alvarez",
          league: "WTA Night Session",
          time: "Tomorrow · 4:00 pm",
          status: "UPCOMING" as const,
        },
      ],
    },
  ],
};

export const casinoSection = {
  title: "Live tables & quick games",
  subtitle:
    "Classic Indian favourites and global tables — same wallet, same Betpro ID.",
  games: [
    {
      name: "Teen Patti Live",
      tag: "HOT",
      tone: "mint",
      image: "/images/game-teenpatti.jpg",
    },
    {
      name: "Dragon Tiger",
      tag: "2x",
      tone: "mint",
      image: "/images/game-dragon-tiger.jpg",
    },
    {
      name: "Roulette Pro",
      tag: "LIVE",
      tone: "white",
      image: "/images/game-roulette.jpg",
    },
    {
      name: "Andar Bahar",
      tag: "FAST",
      tone: "mint",
      image: "/images/game-andar-bahar.jpg",
    },
    {
      name: "Poker Rooms",
      tag: "SKILL",
      tone: "white",
      image: "/images/game-poker.jpg",
    },
    {
      name: "Lucky Spin",
      tag: "NEW",
      tone: "mint",
      image: "/images/game-lucky-spin.jpg",
    },
    {
      name: "7 Up 7 Down",
      tag: "CLASSIC",
      tone: "white",
      image: "/images/game-7up7down.jpg",
    },
    {
      name: "Crash Arena",
      tag: "INSTANT",
      tone: "mint",
      image: "/images/game-crash.jpg",
    },
  ],
};

export const aboutSection = {
  eyebrow: "Rollwin powered · Player first",
  title: "Betpro is built for decisive sports fans",
  paragraphs: [
    "We started Betpro for people who follow markets as closely as they follow the scoreboard. No noise, no gimmicks — just verified IDs, readable odds, and support that answers when the game is live.",
    "Powered by Rollwin infrastructure, Betpro keeps deposits, withdrawals, and account access on a single secure lane so you can focus on the next over, set, or corner kick.",
  ],
  ctaLabel: "Request your demo ID",
  image: "/images/about.jpg",
  panelText: "One ID. Live sports. Tables that stay open when the night gets long.",
};

export const whyUsSection = {
  title: "The Betpro edge",
  subtitle: "Practical advantages designed around how Indian players actually bet.",
  features: [
    {
      title: "Instant ID on chat",
      description:
        "Message the desk, verify once, and receive login details without long forms or waiting rooms.",
      image: "/images/feature-id.jpg",
    },
    {
      title: "Live + pre-match depth",
      description:
        "Move between exchange-style cricket lines and fixed markets for football and tennis in one account.",
      image: "/images/feature-live.jpg",
    },
    {
      title: "Settlement you can trust",
      description:
        "Clear deposit rails and withdrawal queues with status updates — so wins do not sit in limbo.",
      image: "/images/feature-settle.jpg",
    },
    {
      title: "Desk that stays awake",
      description:
        "Hindi and English support around the clock for ID resets, payment checks, and market questions.",
      image: "/images/feature-support.jpg",
    },
  ],
};

export const betBigSection = {
  title: "Play bigger when the moment is right",
  description:
    "From IPL nights to Champions League midweeks, Betpro keeps liquidity and limits ready for players who scale with confidence.",
  ctaLabel: "Open Betpro on WhatsApp",
  image: "/images/bet-big.jpg",
};

export const faqSection = {
  title: "Help centre",
  subtitle: "Straight answers before you create your Betpro ID.",
  items: [
    {
      q: "How do I get a Betpro ID?",
      a: "Tap Get Betpro ID or WhatsApp. Share a mobile number, confirm age eligibility, and the desk will issue your credentials.",
    },
    {
      q: "Which sports can I bet on?",
      a: "Cricket is the core board, with football, tennis, and rotating special markets. Live casino tables sit in the same wallet.",
    },
    {
      q: "How fast are withdrawals?",
      a: "Most verified requests are processed within minutes during desk hours. Peak match nights may add a short queue.",
    },
    {
      q: "Is Betpro only on mobile?",
      a: "No. Use the responsive site on phone or desktop. Your Betpro ID works across both.",
    },
    {
      q: "What does “Powered by Rollwin” mean?",
      a: "Rollwin provides the gaming and settlement backbone behind Betpro — the brand you see, the rails underneath.",
    },
    {
      q: "Do you promote responsible play?",
      a: "Yes. Betpro is for adults 18+. Set limits, never chase losses, and contact support if you need a cool-off.",
    },
  ],
};

export const footer = {
  description:
    "Betpro delivers live sports markets and casino tables with Rollwin-backed reliability for players across India.",
  copyright: "© 2026 Betpro. All rights reserved. 18+ only. Play responsibly.",
};
