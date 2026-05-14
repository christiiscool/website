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
  name: "Christi Chia",
  title: "Behavioural Finance | Asset Management | Investment Research",
  email: "christichia@gmail.com",
  github: "https://github.com/christiiscool",
  linkedin: "https://www.linkedin.com/in/christichia",
  location: "Singapore",
  summary:
    "I combine behavioural finance, asset management, private markets experience, and data-driven research to evaluate investments across public and private markets.",
  bio: "I am pursuing a Bachelor of Integrative Studies in Behavioural Finance and Asset Management at Singapore Management University, where I am a Global Impact Scholar and Dean's List recipient. My experience spans Blackstone finance analytics, private equity and private credit deal work at Alta Exchange, live portfolio management, and student-managed equity research. More detail is available through my LinkedIn profile.",
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
  href?: string;
};

export const research: ResearchItem[] = [
  {
    title: "Dynamic Factor Timing with an Options Risk Overlay",
    summary:
      "Condensed QF206 research project using ElasticNet to time momentum, reversal, low-volatility, and behavioural overreaction factors, with a SPY put option overlay for tail-risk protection and interactive backtest visuals.",
    tags: ["ElasticNet", "Factor timing", "Options overlay", "Backtesting"],
    date: "2026",
    category: "Quantitative Research",
    href: "/research/qf206-factor-timing",
  },
  {
    title: "Where Is Alpha Truly Generated?",
    summary:
      "Completed research report on behavioural alpha, examining how investor biases, alternative data, AI/ML signals, sentiment, attention, and narrative shifts can be formalised into systematic factors beyond traditional value, size, momentum, low-volatility, and quality models.",
    tags: ["Behavioural alpha", "Factor investing", "Alternative data", "AI/ML"],
    date: "2026",
    category: "Research Report",
    href: "/research/alpha-generation",
  },
  {
    title: "Dell Technologies Equity Research Thesis",
    summary:
      "BUY recommendation on Dell Technologies with 20.9% upside, supported by AI-optimised server demand, hybrid-cloud infrastructure positioning, and enterprise AI backlog growth.",
    tags: ["TMT", "Equity research", "AI infrastructure", "SMU-SMIF"],
    date: "2025",
    category: "Public Markets",
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
    title: "QF206 Dynamic Factor Timing Strategy",
    description:
      "Machine-learning factor allocation project using ElasticNet, Ridge, and XGBoost comparisons, SPY regime features, transaction-cost-aware backtesting, and an options-derived risk overlay.",
    stack: ["Python", "ElasticNet", "XGBoost", "Options data"],
    githubUrl: "https://github.com/christiiscool/qf206",
    demoUrl: "/research/qf206-factor-timing",
    metric: "8.55% annualised net return",
  },
  {
    title: "Fund Performance Monitoring Dashboard",
    description:
      "Reporting and analytics workflow for fund-level performance, FX exposure, tax return analysis, and portfolio company monitoring across private equity and private credit vehicles.",
    stack: ["Power BI", "Excel VBA", "Macros", "Fund analytics"],
    githubUrl: "https://github.com/christiiscool",
    demoUrl: "#",
    metric: "Global portfolio reporting",
  },
  {
    title: "Live Long/Short Multi-Asset Portfolio",
    description:
      "Family investment fund using fundamental and technical analysis across options, bonds, equities, and cash, with performance tracked against the S&P 500.",
    stack: ["Portfolio management", "Options", "Equities", "Risk allocation"],
    githubUrl: "https://github.com/christiiscool",
    demoUrl: "#",
    metric: "60% return in 2025",
  },
  {
    title: "Private Markets Deal Evaluation Toolkit",
    description:
      "Deal analysis framework for valuation, underwriting, investment memo preparation, credit risk review, LBO analysis, and downside scenario assessment.",
    stack: ["Capital IQ", "PitchBook", "FactSet", "Excel"],
    githubUrl: "https://github.com/christiiscool",
    demoUrl: "#",
    metric: "PE / private credit workflow",
  },
];

export const experiences = [
  {
    role: "International Finance Intern",
    firm: "Blackstone",
    period: "Jun 2025 - Dec 2025",
    summary:
      "Supported global offices with fund-level performance analysis across multi-billion dollar private equity and private credit vehicles. Evaluated FX exposures, computed tax returns, automated reporting with VBA, Macros and Power BI, and developed dashboards for investment monitoring and capital deployment.",
    details: [
      "Analysed fund-level performance across private equity and private credit vehicles for global Blackstone offices.",
      "Evaluated FX exposures, tax returns, fund performance drivers, and portfolio company reporting outputs.",
      "Automated recurring workflows with VBA, Macros, and Power BI to improve reporting efficiency and investment monitoring.",
    ],
  },
  {
    role: "Private Equity Intern",
    firm: "Alta Exchange",
    period: "Jan 2025 - Jun 2025",
    summary:
      "Supported private equity and private credit deal origination and execution, including valuation analysis, underwriting, and investment memo preparation. Analysed a US$1.3B European private credit fund and a US$50M Japanese multifamily real estate private equity fund.",
    details: [
      "Worked on private equity and private credit deal origination, valuation analysis, underwriting, and investment memo preparation.",
      "Reviewed a US$1.3B evergreen European senior secured private credit fund, focusing on portfolio risk, first-lien positioning, and downside protection.",
      "Conducted asset-level and macro analysis for a US$50M Japanese multifamily real estate private equity fund, including underwriting, LBO analysis, IRR cases, and downside scenarios.",
    ],
  },
  {
    role: "Sector Head - TMT",
    firm: "SMU Student-Managed Investment Fund",
    period: "Aug 2024 - Present",
    summary:
      "Lead TMT coverage for SMU's live student-run long/short equity fund with c. SGD 200k AUM. Initiated a BUY recommendation on Dell Technologies with 20.9% upside, driven by AI server demand, hybrid-cloud infrastructure strength, and enterprise AI backlog growth.",
    details: [
      "Lead technology, media, and telecommunications coverage for SMU's live student-run long/short equity fund.",
      "Developed a Dell Technologies investment thesis centred on AI-optimised server demand, hybrid-cloud infrastructure, and enterprise AI backlog growth.",
      "Contribute to stock pitches, investment discussions, and portfolio research within a c. SGD 200k AUM student-managed mandate.",
    ],
  },
  {
    role: "Portfolio Management",
    firm: "Family Investment Fund",
    period: "Jan 2025 - Present",
    summary:
      "Started a live long/short multi-asset fund using fundamental and technical analysis. Achieved a 60% return in 2025, outperforming the S&P 500 by 34%, with allocations across cash, options, bonds, and equities.",
    details: [
      "Manage a live long/short multi-asset portfolio using fundamental and technical analysis across sectors.",
      "Built an allocation framework spanning cash, options, bonds, and equities.",
      "Track portfolio results against the S&P 500 while refining risk allocation and position sizing decisions.",
    ],
  },
];

export const education = [
  {
    school: "Singapore Management University",
    credential: "Bachelor of Integrative Studies in Behavioural Finance and Asset Management",
    period: "Aug 2024 - Apr 2028",
    summary:
      "Global Impact Scholarship Award recipient and Dean's List AY24-25. Champion of the APECS Venture Capital Competition 2025 and Social Impact Catalyst Case Competition 2025.",
    details: [
      "Involvements include SMU-SMIF, TMC External Relations Director, SMU Climb competitive team, Project Hai Khun Team Lead, and SMU Athletics.",
      "Academic focus combines behavioural finance, asset management, markets, and decision-making under uncertainty.",
    ],
  },
  {
    school: "National Junior College",
    credential: "GCE A-Level Examinations",
    period: "Jan 2018 - Dec 2023",
    summary:
      "Achieved 90/90 rank points. Organised a finance and business course for over 80 students through the Sapphire Scholars Programme and led service projects that raised more than $20,000 for cancer patients.",
    details: [
      "Spearheaded Project Aster and Above x Beyond, combining fundraising, team leadership, and community impact.",
      "Early exposure to finance education, business course design, and student-led initiatives.",
    ],
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
    skills: ["Investment memos", "Valuation analysis", "Underwriting", "Behavioural finance"],
  },
  {
    label: "Markets",
    icon: LineChart,
    skills: ["Private equity", "Private credit", "Long/short equities", "Portfolio management"],
  },
  {
    label: "Tools",
    icon: Database,
    skills: ["Excel VBA", "Power BI", "Bloomberg", "S&P Capital IQ"],
  },
  {
    label: "Platforms",
    icon: ChartCandlestick,
    skills: ["Eikon", "FactSet", "PitchBook", "Python"],
  },
];

export const stats = [
  { label: "Education", value: "SMU Global Impact Scholar" },
  { label: "Live investing", value: "60% return in 2025" },
  { label: "Research lens", value: "Behaviour + Asset Management" },
];

export const highlights = [
  { icon: BrainCircuit, label: "Behavioural finance and asset management" },
  { icon: BarChart3, label: "Live long/short portfolio management" },
  { icon: BriefcaseBusiness, label: "Blackstone international finance experience" },
  { icon: ShieldCheck, label: "Private equity and private credit deal analysis" },
  { icon: TerminalSquare, label: "Excel VBA, Power BI, Python, and LLMs" },
  { icon: Newspaper, label: "Equity research and market notes" },
  { icon: Mail, label: "Open to investment research conversations" },
];
