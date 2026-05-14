import {
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  BrainCircuit,
  ChartCandlestick,
  Database,
  LineChart,
  LucideIcon,
  Mail,
  Newspaper,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

export const profile = {
  name: "Christopher Lee",
  title: "Behavioural Finance | Quantitative Investing | Investment Research",
  email: "hello@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  location: "Singapore",
  summary:
    "I build research-driven investment frameworks across behavioural finance, systematic trading, AI sentiment analysis, private markets, and data science.",
  bio: "My work sits at the intersection of markets, incentives, and data. I am interested in how investor behaviour, alternative data, machine learning, and disciplined research workflows can improve decision-making across public and private markets.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Market Notes", href: "/market-notes" },
  { label: "Contact", href: "/contact" },
];

export type ResearchItem = {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  category: string;
};

export const research: ResearchItem[] = [
  {
    title: "Sentiment Regimes and Cross-Sectional Equity Returns",
    summary:
      "A framework for classifying market sentiment regimes using news embeddings, factor returns, and volatility conditions.",
    tags: ["AI sentiment", "Equities", "Python", "NLP"],
    date: "2026",
    category: "Quantitative Research",
  },
  {
    title: "Behavioural Biases in Systematic Drawdown Management",
    summary:
      "Research note on how loss aversion and recency bias can distort portfolio de-risking rules during high-volatility periods.",
    tags: ["Behavioural finance", "Risk", "Systematic trading"],
    date: "2026",
    category: "Investment Research",
  },
  {
    title: "Private Credit Monitoring Dashboard Design",
    summary:
      "An institutional monitoring template for covenant tracking, spread movement, borrower fundamentals, and macro overlays.",
    tags: ["Private credit", "Dashboards", "Credit risk"],
    date: "2025",
    category: "Private Markets",
  },
  {
    title: "Factor Crowding and Momentum Reversal Signals",
    summary:
      "A study of factor crowding indicators and their relationship with short-horizon reversal risk in momentum portfolios.",
    tags: ["Factors", "Momentum", "Portfolio construction"],
    date: "2025",
    category: "Systematic Investing",
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  metric: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Market Sentiment Intelligence Engine",
    description:
      "NLP pipeline that classifies financial news, extracts market narratives, and maps sentiment shifts to asset-level watchlists.",
    stack: ["Python", "Transformers", "Pandas", "Next.js"],
    githubUrl: "https://github.com/yourusername",
    demoUrl: "#",
    metric: "12k+ articles processed",
  },
  {
    title: "Systematic Strategy Research Lab",
    description:
      "Research environment for signal testing, walk-forward validation, transaction cost modelling, and strategy diagnostics.",
    stack: ["Python", "NumPy", "Plotly", "FastAPI"],
    githubUrl: "https://github.com/yourusername",
    demoUrl: "#",
    metric: "Multi-factor backtests",
  },
  {
    title: "Private Markets Deal Screen",
    description:
      "Dashboard prototype for evaluating private equity and private credit opportunities using operating, leverage, and downside metrics.",
    stack: ["TypeScript", "Tailwind", "SQL", "Vercel"],
    githubUrl: "https://github.com/yourusername",
    demoUrl: "#",
    metric: "IC memo workflow",
  },
];

export const experiences = [
  {
    role: "Investment Research and Private Markets",
    firm: "Private Equity / Private Credit",
    period: "Recent",
    summary:
      "Supported investment evaluation, market mapping, financial analysis, credit monitoring, and investment memo development.",
  },
  {
    role: "Quantitative Research Projects",
    firm: "Independent Research",
    period: "Ongoing",
    summary:
      "Built Python research workflows for sentiment analysis, systematic trading, portfolio diagnostics, and market dashboarding.",
  },
  {
    role: "Behavioural Finance Research",
    firm: "Academic and Applied Work",
    period: "Foundation",
    summary:
      "Studied investor behaviour, decision-making under uncertainty, market anomalies, and the practical limits of rational models.",
  },
];

export const marketNotes = [
  {
    title: "What AI Sentiment Can and Cannot Tell Investors",
    date: "May 2026",
    summary:
      "A practical note on using language models as a market lens without mistaking narrative velocity for causal evidence.",
  },
  {
    title: "Credit Spreads, Liquidity, and the Private Credit Feedback Loop",
    date: "April 2026",
    summary:
      "How public-market repricing can influence private credit underwriting assumptions and portfolio monitoring.",
  },
  {
    title: "Momentum Works Until the Exit Door Narrows",
    date: "March 2026",
    summary:
      "A short reflection on crowding, behavioural herding, and why systematic signals need regime-aware risk controls.",
  },
];

export type SkillGroup = {
  label: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Research",
    icon: BookOpenText,
    skills: ["Investment memos", "Market mapping", "Factor research", "Behavioural finance"],
  },
  {
    label: "Quant",
    icon: LineChart,
    skills: ["Backtesting", "Signal design", "Risk diagnostics", "Systematic trading"],
  },
  {
    label: "Data",
    icon: Database,
    skills: ["Python", "Pandas", "NLP", "Dashboards"],
  },
  {
    label: "Markets",
    icon: ChartCandlestick,
    skills: ["Public equities", "Private equity", "Private credit", "Macro signals"],
  },
];

export const stats = [
  { label: "Research focus", value: "Public + Private Markets" },
  { label: "Core toolkit", value: "Python / TypeScript / AI" },
  { label: "Lens", value: "Behaviour + Data" },
];

export const highlights = [
  { icon: BrainCircuit, label: "AI sentiment research" },
  { icon: BarChart3, label: "Quantitative investing" },
  { icon: BriefcaseBusiness, label: "Private markets experience" },
  { icon: ShieldCheck, label: "Risk-aware frameworks" },
  { icon: TerminalSquare, label: "Python data science" },
  { icon: Newspaper, label: "Market notes and dashboards" },
  { icon: Mail, label: "Open to research conversations" },
];
