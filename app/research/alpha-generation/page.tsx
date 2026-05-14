import Link from "next/link";
import { ArrowLeft, BrainCircuit, ChartCandlestick, Layers3, Network } from "lucide-react";

const sections = [
  {
    eyebrow: "1.1",
    title: "Where Is Alpha Truly Generated?",
    body: [
      "Traditionally, alpha is defined as the difference between an investment's realised return and the return expected from its risk profile. A positive alpha implies that returns exceeded what conventional market exposure would predict; a negative alpha implies underperformance.",
      "Yet the nature of alpha has changed. The Efficient Market Hypothesis suggests that persistent alpha should not exist in a perfectly efficient market, but real markets are not perfectly efficient. They are shaped by information frictions, structural constraints, incentive problems, and behavioural biases.",
      "As information access improves and factor investing commoditises many historical anomalies, defensible alpha increasingly comes from sources that are harder to reduce to traditional risk models. Behavioural biases are one such source. Fear, greed, overconfidence, herding, and limited attention can create repeatable distortions in prices when they appear at scale.",
    ],
  },
  {
    eyebrow: "1.2",
    title: "Behavioural Finance as a Foundation for Alpha Generation",
    body: [
      "Behavioural finance argues that investors often rely on heuristics: useful mental shortcuts that can misfire under uncertainty, ambiguity, or emotional pressure. Biases such as conservatism, overreaction, representativeness, loss aversion, anchoring, and herding do not always create mispricing. The opportunity appears when the wrong heuristic is applied by a large enough group of investors for long enough that prices deviate from intrinsic value.",
      "For behavioural mispricing to become exploitable, two conditions matter. First, groups of investors must exhibit a similar bias. Second, that bias must persist long enough for a strategy to capture it after costs. When both hold, behavioural alpha becomes endogenous: it emerges from the psychology and structure of markets themselves.",
      "The investment challenge is to convert behavioural ideas into measurable indicators that can be tested, monitored, and incorporated into portfolio construction.",
    ],
  },
  {
    eyebrow: "1.3",
    title: "Traditional and New Factors in Modern Investing",
    body: [
      "Traditional factors such as value, size, momentum, quality, and low volatility explain a meaningful portion of cross-sectional returns. But the last decade has expanded the factor toolkit.",
      "Machine learning models can identify nonlinear patterns across large datasets. Alternative data, including web traffic, transaction activity, search trends, social media, and satellite imagery, can reveal signals before they appear in financial statements. Behavioural factors can capture investor attention, sentiment, disposition effects, and herding. Narrative factors can measure flows driven by themes such as sustainability, climate transition, or AI enthusiasm.",
      "The core question is whether behavioural and alternative data indicators can be formalised into robust factors that explain returns beyond traditional models.",
    ],
  },
  {
    eyebrow: "1.6",
    title: "Hedge Funds as Proof of Concept",
    body: [
      "Behavioural alpha becomes more credible when theory connects with institutional practice. Quantitative hedge funds and systematic asset managers often build strategies around slow information diffusion, attention cycles, sentiment shifts, and investor overreaction.",
      "AQR-style strategies illustrate underreaction. Earnings surprises, analyst revisions, and institutional trading flows can reveal cases where investors process complex information slowly. A systematic portfolio can go long firms with positive surprises and upward revisions, while shorting firms with negative surprises and downward revisions, with sector and factor risk neutralised.",
      "Two Sigma-style approaches show how news velocity and natural language processing can turn attention into a signal. Prices may initially react to the intensity of information circulation, then reverse as attention fades and sentiment normalises. This links market behaviour to salience, limited processing capacity, and short-term emotional pressure.",
    ],
  },
];

const factorCards = [
  {
    icon: BrainCircuit,
    title: "Behavioural Biases",
    text: "Loss aversion, herding, anchoring, and overconfidence can create systematic deviations from fair value.",
  },
  {
    icon: Network,
    title: "Alternative Data",
    text: "Search trends, social sentiment, news velocity, web activity, and other nontraditional inputs can quantify attention and narrative pressure.",
  },
  {
    icon: Layers3,
    title: "AI and Machine Learning",
    text: "Nonlinear models can detect patterns in noisy behavioural datasets that traditional linear factors may miss.",
  },
  {
    icon: ChartCandlestick,
    title: "Portfolio Construction",
    text: "Behavioural signals become useful only when translated into testable, risk-aware, implementation-conscious strategies.",
  },
];

export default function AlphaGenerationPage() {
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
            Research Report
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#111713] md:text-7xl">
            Where Is Alpha Truly Generated?
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#445046]">
            A behavioural finance research report on alpha generation, investor bias,
            alternative data, AI-driven signals, and the evolution of systematic factors.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Behavioural alpha", "Factor investing", "Alternative data", "AI/ML", "Sentiment"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#111713]/10 bg-[#fffaf0] px-3 py-1.5 text-sm text-[#344238]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-14">
            <section className="rounded-[32px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
                Abstract
              </p>
              <p className="mt-5 text-lg leading-8 text-[#445046]">
                This report argues that as traditional factor premia become increasingly
                commoditised, a more defensible source of alpha may come from measurable
                behavioural distortions. If cognitive errors, emotional reactions, and
                attention cycles are systematic enough to model, they can become the basis
                for behavioural factors and portfolio signals.
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-24">
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

            <section className="rounded-[32px] bg-[#183b2b] p-6 text-[#f7f3e8] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8ff5a]">
                Conclusion
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Behavioural alpha is a bridge between psychology and systematic investing.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#d8e4c9] md:text-lg">
                The most interesting research opportunity is not simply identifying that
                investors are biased. It is designing measurable, repeatable, and
                implementation-aware indicators that capture when those biases affect prices.
                Behavioural finance becomes investable when it is translated into disciplined
                data, signal construction, and portfolio risk management.
              </p>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-5 shadow-[0_16px_42px_rgba(24,59,43,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
                Framework
              </p>
              <div className="mt-5 grid gap-4">
                {factorCards.map((card) => (
                  <div key={card.title} className="rounded-[20px] bg-[#edf3dc] p-4">
                    <card.icon size={20} className="text-[#183b2b]" />
                    <h3 className="mt-3 font-semibold text-[#111713]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#445046]">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
