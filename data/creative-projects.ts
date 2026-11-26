/** Public-facing portfolio data. No confidential investment material. */
export type ProjectCategory = "code" | "markets" | "writing";
export type ProjectVisual = "passport" | "factor" | "roostoo" | "alpha" | "fundos" | "dell";

export type CreativeProject = {
  slug: string;
  number: string;
  title: string;
  short: string;
  eyebrow: string;
  category: ProjectCategory;
  categoryLabel: string;
  kind: string;
  year: string;
  visual: ProjectVisual;
  intro: string;
  why: string;
  built: string[];
  learn: string;
  note: string;
  tags: string[];
  source?: string;
  sourceLabel?: string;
};

export const creativeProjects: CreativeProject[] = [
  {
    slug: "pixel-passport",
    number: "01",
    title: "Pixel Passport",
    short: "A little illustrated travel planner that turns itineraries into adventures.",
    eyebrow: "the fun one ✿",
    category: "code",
    categoryLabel: "things i've built",
    kind: "Interactive travel app",
    year: "2026",
    visual: "passport",
    intro: "What if planning a trip felt more like collecting stamps in a game than wrestling with spreadsheets? Pixel Passport is my illustrated, phone-first travel planning experiment for an upcoming European exchange.",
    why: "I wanted my plans, bookings, budget, packing list, and spontaneous ideas to live in one place without losing the excitement of the trip itself.",
    built: [
      "An illustrated journey dashboard with destination postcards, avatars, stamps, and a travel map.",
      "Editable itineraries, packing inventories, expense tracking, booking notes, and a small travel journal.",
      "A browser-local demo with export/import so plans can be saved without pretending there is a connected account system.",
    ],
    learn: "The hardest design problem was making something playful without making practical information difficult to find. I kept the planning tools functional and let the game-like details provide delight around them.",
    note: "A personal project and work in progress. The current app stores records locally in the browser rather than in a cloud account.",
    tags: ["React", "travel", "interactive design", "maps"],
    source: "https://github.com/christiiscool/pixelpassport",
    sourceLabel: "explore the code",
  },
  {
    slug: "dynamic-factor-timing",
    number: "02",
    title: "Dynamic Factor Timing",
    short: "Can a portfolio respond when the market changes its mind?",
    eyebrow: "the quantitative one ✳",
    category: "markets",
    categoryLabel: "markets & research",
    kind: "Quantitative research",
    year: "2026",
    visual: "factor",
    intro: "A research prototype for allocating dynamically among equity factors, with an options-based layer designed to respond to elevated market stress.",
    why: "A factor that looks reliable on average can behave very differently across market regimes. I wanted to test whether a systematic allocation process could react to changing conditions rather than relying on fixed exposures.",
    built: [
      "A monthly walk-forward factor-timing pipeline using ElasticNet, with Ridge and XGBoost comparisons.",
      "Momentum, reversal, low-volatility and behavioural factor construction on a deliberately small equity universe.",
      "A SPY put-option overlay informed by options-market warnings, with turnover, costs and downside scenarios considered.",
    ],
    learn: "Backtest design matters at least as much as model complexity. The small stock universe and limited out-of-sample evidence mean the results should be treated as research, not evidence of a production-ready trading strategy.",
    note: "Historical backtests are simulated, sensitive to assumptions and not a guarantee of future performance.",
    tags: ["Python", "ElasticNet", "walk-forward", "options"],
    source: "https://github.com/christiiscool/Behavioural-Factor-Model-with-Options-Overlay",
    sourceLabel: "read the research code",
  },
  {
    slug: "roostoo-bot",
    number: "03",
    title: "Roostoo Trading Bot",
    short: "A mock-exchange trading bot built around signals, risk checks and execution.",
    eyebrow: "the automated one ☆",
    category: "code",
    categoryLabel: "things i've built",
    kind: "Algorithmic trading experiment",
    year: "2026",
    visual: "roostoo",
    intro: "An open-source team project that connects a hybrid momentum/mean-reversion signal framework to a mock-exchange execution loop.",
    why: "A trading strategy is more than an entry signal. I wanted to work through the less glamorous questions around risk sizing, trade validation, monitoring and what happens when a signal reaches execution.",
    built: [
      "EMA and RSI-based momentum alongside Bollinger-band and z-score mean-reversion signals.",
      "Weighted signal voting, an API client, execution guards and dynamic risk sizing.",
      "Dry-run and backtesting scripts, a trade journal, and deployment tooling for the mock environment.",
    ],
    learn: "Making a bot robust means learning to distrust perfect-looking backtests and to treat monitoring, failed orders and operational guardrails as part of the strategy itself.",
    note: "The repository describes a hackathon entry for a simulated exchange; it is not a live brokerage service.",
    tags: ["Python", "strategy design", "risk", "automation"],
    source: "https://github.com/christiiscool/roostoo-bot",
    sourceLabel: "see the bot on github",
  },
  {
    slug: "behavioural-alpha",
    number: "04",
    title: "Where Is Alpha Generated?",
    short: "On investor attention, narratives and the things that traditional factors miss.",
    eyebrow: "the curious one ♡",
    category: "writing",
    categoryLabel: "research & writing",
    kind: "Behavioural finance essay",
    year: "2026",
    visual: "alpha",
    intro: "A research essay asking where defensible investment alpha may come from as traditional factor investing becomes more widely understood and replicated.",
    why: "I was interested in the gap between the neat assumptions of financial models and the messier reality of how people actually absorb information, form beliefs and trade.",
    built: [
      "A framework connecting underreaction, overreaction, herding and attention to potential mispricing.",
      "An exploration of alternative data, sentiment and machine-learning signals as possible measurable indicators.",
      "A distinction between a compelling behavioural story and a tradable signal that survives transaction costs.",
    ],
    learn: "A behavioural hypothesis is only the beginning. For an anomaly to be useful, it needs a measurable definition, out-of-sample evidence and a plausible way to be implemented after costs.",
    note: "This is an exploratory research essay, not a recommendation to trade a specific security.",
    tags: ["behavioural finance", "sentiment", "research", "writing"],
  },
  {
    slug: "fund-os",
    number: "05",
    title: "Fund OS",
    short: "A personal workspace for recording portfolio decisions and the reasoning behind them.",
    eyebrow: "the practical one ✱",
    category: "code",
    categoryLabel: "things i've built",
    kind: "Portfolio workflow tool",
    year: "2026",
    visual: "fundos",
    intro: "A private-portfolio workspace concept that keeps investment decisions, approvals and actual fills distinct instead of treating a spreadsheet as a trading system.",
    why: "I wanted a more disciplined record of why a position was considered, what was actually approved, and what subsequently happened to it.",
    built: [
      "A Next.js workspace designed to integrate dated portfolio records and risk policies from Google Sheets.",
      "Separate decision records, approvals, fill information and integrity checks.",
      "Owner-access controls and explicit boundaries: the app does not place orders or fetch live quotes.",
    ],
    learn: "Good investment tooling needs auditability, clear state transitions and conservative assumptions about the reliability of imported data.",
    note: "This is a personal workflow project. No private account data or actual portfolio records are published here.",
    tags: ["Next.js", "portfolio tools", "audit trail", "Google Sheets"],
    source: "https://github.com/christiiscool/fund_os",
    sourceLabel: "view the public code",
  },
  {
    slug: "dell-equity-thesis",
    number: "06",
    title: "Dell Equity Thesis",
    short: "A 2025 BUY thesis: Dell as an integrated AI infrastructure provider, not simply a cyclical hardware maker.",
    eyebrow: "the fundamental one ✶",
    category: "markets",
    categoryLabel: "markets & research",
    kind: "Equity research",
    year: "2025",
    visual: "dell",
    intro: "An archival 2025 BUY pitch with a $115.60 target and approximately 20.9% implied upside from a historical $95.60 reference price, focused on enterprise AI integration, direct-customer economics and the PC refresh cycle.",
    why: "I wanted to test whether the market overemphasised Dell’s hardware cyclicality and near-term AI server margins while underrecognising its full-stack enterprise AI capabilities.",
    built: [
      "Three investment pillars: integrated AI infrastructure, structural direct-to-customer advantages and the commercial PC replacement cycle.",
      "A bottom-up ISG model using phased AI backlog conversion and incremental demand, alongside a region-by-region top-down CSG forecast.",
      "A DCF and segmented peer-valuation framework using approximately 11% WACC, 2% terminal growth and EV/EBITDA cross-checks.",
    ],
    learn: "AI adoption alone is not a valuation argument. The investment case must connect backlog conversion, margin resilience and cash generation to earnings power—and articulate exactly what would disprove it.",
    note: "Historical 2025 student research and valuation assumptions, not a current recommendation. The full model and original pitch deck are not reproduced on this public website.",
    tags: ["equity research", "AI infrastructure", "valuation"],
  },
];

export const getCreativeProject = (slug: string) => creativeProjects.find((item) => item.slug === slug);
