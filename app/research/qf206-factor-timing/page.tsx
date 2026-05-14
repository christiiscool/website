import Link from "next/link";
import { ArrowLeft, GitBranch, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { Qf206InteractiveCharts } from "@/components/qf206-interactive-charts";

const sections = [
  {
    eyebrow: "Problem",
    title: "Static factor portfolios struggle when regimes change.",
    body: [
      "The report starts from a practical weakness in traditional factor investing: momentum, reversal, low volatility, and behavioural signals can work well in some regimes and fail in others. Instead of forecasting individual stock returns directly, the project forecasts factor portfolio performance, which is a cleaner and more stable target.",
      "The investment universe is intentionally compact: six large-cap equities, with SPY used as the market proxy. The goal is not to claim a production-ready fund, but to test whether a machine-learning factor timing framework can adapt exposure as volatility, momentum, and drawdown conditions evolve.",
    ],
  },
  {
    eyebrow: "Framework",
    title: "A two-layer quantitative strategy.",
    body: [
      "The first layer uses ElasticNet regression to dynamically allocate across four factor portfolios: momentum, reversal, low volatility, and behavioural overreaction. SPY-derived regime features, including realised volatility, six-month momentum, and cumulative drawdown, inform the model's factor timing decisions.",
      "The second layer adds an options-derived risk overlay. When both options-market stress and contemporaneous equity-market stress confirm elevated tail risk, the strategy allocates part of NAV to a SPY put option hedge. This preserves equity participation while adding asymmetric protection in stress periods.",
    ],
  },
  {
    eyebrow: "Backtest",
    title: "Walk-forward testing with transaction costs.",
    body: [
      "The strategy is evaluated through a 77-month walk-forward backtest using daily price and volume data from January 2018 to March 2026. The design compares ElasticNet against Ridge and XGBoost, includes transaction costs and turnover smoothing, and tests multiple hedge budget scenarios.",
      "The core model generated an annualised net return of 8.55% with a Sharpe ratio of 0.488. A fixed put overlay improved risk-adjusted performance and reduced maximum drawdown from -20.10% to -17.89%, while a score-scaled overlay achieved a Sharpe ratio of 0.539.",
    ],
  },
  {
    eyebrow: "Interpretation",
    title: "The strategy works best as a research prototype.",
    body: [
      "The strongest result is economic rather than statistical. ElasticNet produced a positive information coefficient of 0.091, but the Sharpe ratio and mean return did not reach conventional 5% significance thresholds over the available test window.",
      "The key learning is that factor premia are regime-dependent, and stress signals can improve allocation and drawdown control. The main limitations are the small stock universe, short out-of-sample period, dependence on options data infrastructure, and limited number of hedge activations.",
    ],
  },
];

const summaryCards = [
  {
    icon: Workflow,
    label: "Model",
    value: "ElasticNet factor timing",
    text: "Forecasts factor returns rather than individual stock returns.",
  },
  {
    icon: Layers3,
    label: "Factors",
    value: "Momentum, reversal, low vol, behavioural",
    text: "Combines classic and behavioural factor signals into a timed allocation.",
  },
  {
    icon: ShieldCheck,
    label: "Overlay",
    value: "SPY put hedge trigger",
    text: "Uses options stress plus equity stress confirmation for downside protection.",
  },
];

export default function Qf206FactorTimingPage() {
  return (
    <>
      <section className="border-b border-[#111713]/10 bg-[radial-gradient(circle_at_70%_20%,rgba(200,255,90,0.5),transparent_24%),linear-gradient(135deg,#f7f3e8,#d8e4c9)]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 rounded-full border border-[#111713]/15 bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#183b2b] transition hover:border-[#111713]/30"
          >
            <ArrowLeft size={16} />
            Research
          </Link>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
            Quantitative Trading Strategies
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#111713] md:text-7xl">
            Dynamic Factor Timing with an Options Risk Overlay
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#445046]">
            A condensed QF206 research project on machine-learning factor allocation,
            behavioural overreaction signals, and SPY put hedging for downside protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/christiiscool/qf206"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#183b2b] px-5 text-sm font-semibold text-[#f7f3e8] transition hover:bg-[#111713]"
            >
              <GitBranch size={16} />
              View GitHub repo
            </a>
            {["ElasticNet", "Factor timing", "Options overlay", "Walk-forward backtest"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex h-11 items-center rounded-full border border-[#111713]/10 bg-[#fffaf0] px-4 text-sm text-[#344238]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-5 md:grid-cols-3">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-5 shadow-[0_16px_42px_rgba(24,59,43,0.08)]"
            >
              <card.icon size={22} className="text-[#183b2b]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#59705f]">
                {card.label}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-[#111713]">{card.value}</h2>
              <p className="mt-3 text-sm leading-6 text-[#445046]">{card.text}</p>
            </div>
          ))}
        </section>

        <div className="mt-14 space-y-14">
          {sections.map((section) => (
            <section key={section.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111713] md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#445046] md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <Qf206InteractiveCharts />

          <section className="rounded-[32px] bg-[#183b2b] p-6 text-[#f7f3e8] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8ff5a]">
              Takeaway
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The value is in adaptive allocation, not a single static factor bet.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#d8e4c9] md:text-lg">
              The project shows how factor timing, behavioural signals, and options-market
              stress data can be combined into a disciplined research workflow. The results
              are promising but intentionally framed as a research prototype: the next step
              would be a broader universe, longer test window, richer regime features, and
              continuous hedge sizing tied to portfolio risk.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
