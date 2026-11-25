/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { ActivationTable, HedgeComparison, ModelComparison } from "@/components/factor-report-charts";
import "@/styles/factor-report.css";

function NumberLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="qf-chapter-label"><span>{index}</span><span>{children}</span></div>;
}

function Figure({ file, title, caption, size = "wide", width, height, alt }: { file: string; title: string; caption: string; size?: "wide"|"half"; width: number; height: number; alt: string }) {
  return <figure className={`qf-figure qf-figure-${size}`}>
    <div className="qf-figure-window"><div className="qf-window-chrome"><span aria-hidden="true">● ● ●</span><span>RESEARCH FIGURE / QF206</span><span aria-hidden="true">↗</span></div>
      <Image className="qf-original-plot" src={`/art/qf/${file}.webp`} width={width} height={height} alt={alt} sizes="(max-width: 760px) 100vw, (max-width: 1200px) 80vw, 1100px" />
    </div>
    <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
  </figure>;
}

export function DynamicFactorReport() {
  return <article className="qf-report" id="qf-top">
    <div className="qf-inner">
      <Link href="/work" className="qf-back">← back to my work</Link>
      <header className="qf-hero">
        <div className="qf-hero-copy">
          <p className="qf-eyebrow">THE MARKET FILES <span>NO. 02</span> / QUANTITATIVE RESEARCH</p>
          <h1>Dynamic<br /><em>Factor Timing.</em></h1>
          <p className="qf-deck">What if a portfolio could change its mind when market regimes shift?</p>
          <p className="qf-hero-description">A two-layer quantitative strategy combining machine-learning factor allocation with a selective SPY put-option risk overlay. A closer look at the model, the decisions behind the backtest, what the numbers say—and what they <em>don&apos;t</em>.</p>
          <div className="qf-hero-chips"><span>G1 · Group 4 course research</span><span>2026</span><span>Python + options</span><span>Simulated backtest</span></div>
        </div>
        <div className="qf-hero-illustration" aria-label="Illustration of a research notebook, four factor signals and an options protection ticket" role="img">
          <div className="qf-art-star" aria-hidden="true">✳</div>
          <div className="qf-art-paper"><div className="qf-art-heading">FIELD NOTES / 02</div><div className="qf-art-scribble">can markets<br/><em>change their minds?</em></div><svg viewBox="0 0 320 125" aria-hidden="true"><path d="M7 105L52 91L84 96L111 64L137 71L169 43L200 56L224 23L261 40L306 7" stroke="#0733c8" strokeWidth="5" fill="none" strokeLinecap="round"/><path d="M7 105L52 91L84 96L111 64L137 71L169 43L200 56L224 23L261 40L306 7V120H7Z" fill="#f3cad7" opacity=".44"/></svg><p>momentum · reversal<br/>low vol · behaviour</p></div>
          <div className="qf-art-ticket"><small>RISK OVERLAY</small><strong>SPY PUT</strong><span>~25Δ / ~30DTE</span></div>
          <div className="qf-art-tape" aria-hidden="true"/>
          <div className="qf-art-pink-star" aria-hidden="true">✴</div>
        </div>
      </header>
      <section className="qf-stat-ribbon" aria-label="Research summary">
        <div><span>77</span><small>out-of-sample months</small></div>
        <div><span>8.55<sup>%</sup></span><small>unhedged annualised net return</small></div>
        <div><span>0.488</span><small>unhedged Sharpe</small></div>
        <div><span>−17.89<sup>%</sup></span><small>fixed-overlay max drawdown</small></div>
      </section>
      <p className="qf-disclosure">All results are from the QF206 group research simulation, not an audited or live portfolio. In the original report, mean returns and risk-adjusted results did not meet the 5% statistical significance threshold.</p>
    </div>

    <div className="qf-reading-layout">
      <aside className="qf-toc"><span>IN THIS FILE</span>
        <a href="#qf-question">01 — the question</a><a href="#qf-blueprint">02 — the architecture</a><a href="#qf-testing">03 — the experiment</a><a href="#qf-models">04 — model results</a><a href="#qf-hedge">05 — the safety net</a><a href="#qf-limits">06 — what breaks</a><a href="#qf-source">07 — source & code</a>
        <div className="qf-toc-doodle" aria-hidden="true">✳<br/> ↗</div>
      </aside>
      <div className="qf-story">
        <section id="qf-question" className="qf-section">
          <NumberLabel index="01">THE QUESTION</NumberLabel>
          <h2>The problem with <em>standing still.</em></h2>
          <p className="qf-lead">Momentum can dominate one regime and disappoint in the next. Low-volatility stocks may protect capital in some periods but lag badly when leadership changes. Why should a factor portfolio hold the same mix in both?</p>
          <p>Traditional factor portfolios make a constant exposure assumption: decide how much value, momentum, or defensive characteristics to own, and keep the recipe broadly unchanged. This project asks whether observable market conditions can help forecast <em>which factor portfolios</em> are likely to perform better over the next month.</p>
          <div className="qf-contrast" aria-label="Static versus dynamic factor allocation illustration">
            <div className="qf-contrast-card"><span>STATIC APPROACH</span><strong>one fixed recipe</strong><div className="qf-contrast-stripes qf-static"><i/><i/><i/><i/></div><p>The same relative factor exposure, regardless of market conditions.</p></div>
            <div className="qf-contrast-arrow" aria-hidden="true">↝</div>
            <div className="qf-contrast-card is-dynamic"><span>OUR QUESTION</span><strong>adapt the recipe</strong><div className="qf-contrast-stripes qf-dynamic"><i/><i/><i/><i/></div><p>Forecast next-month factor returns, then update the blend as regimes evolve.</p></div>
          </div>
          <p>The key difference is the prediction target. Rather than train a model to forecast each stock&apos;s return directly, we first construct four factor portfolios, then predict their <em>next-period returns</em>. The result is an allocation model, not a single-stock price forecaster.</p>
        </section>

        <section id="qf-blueprint" className="qf-section">
          <NumberLabel index="02">THE ARCHITECTURE</NumberLabel>
          <h2>Two layers. <em>One portfolio.</em></h2>
          <p className="qf-lead">The first engine decides where equity exposure goes. The second asks when the cost of protection might be worth paying.</p>
          <div className="qf-process-diagram" aria-label="Strategy workflow: stock data to four factor portfolios; market regime inputs to ElasticNet factor forecasts; forecasts to stock weights and transaction costs; SPY options stress to conditional put hedge; combined portfolio evaluation">
            <div className="qf-process-top"><span>01 / THE ALPHA ENGINE</span><span>02 / THE PROTECTION ENGINE</span></div>
            <div className="qf-process-lanes"><div className="qf-process-lane"><div className="qf-process-node"><small>STOCK UNIVERSE</small><strong>6 liquid US equities</strong><span>price + volume</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node"><small>4 FACTOR PORTFOLIOS</small><strong>momentum · reversal</strong><span>low vol · overreaction</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node emphasized"><small>ELASTICNET</small><strong>predict factor returns</strong><span>SPY regime features</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node"><small>PORTFOLIO CONSTRUCTION</small><strong>blend + rebalance</strong><span>caps, smoothing, costs</span></div></div>
              <div className="qf-process-lane secondary"><div className="qf-process-node"><small>SPY OPTIONS</small><strong>skew · put demand</strong><span>rolling warning score</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node"><small>STRESS FILTER</small><strong>market confirmation</strong><span>volatility / drawdown</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node emphasized"><small>IF TRIGGERED</small><strong>buy a SPY put</strong><span>~25-delta · ~30 days</span></div><div className="qf-process-connector">↓</div><div className="qf-process-node"><small>PROTECTION BUDGET</small><strong>0.25–1.50% NAV</strong><span>fixed or score-scaled</span></div></div></div>
            <div className="qf-process-merge">↙ &nbsp; <span>combined portfolio returns + drawdown evaluation</span> &nbsp; ↘</div>
          </div>
          <h3 className="qf-subtitle">The ingredients: four factor ideas</h3>
          <div className="qf-factors"><div><span>↗</span><strong>Momentum</strong><p>Prefer stocks with stronger medium-term trends, primarily using 12–1 month returns.</p></div><div><span>↺</span><strong>Reversal</strong><p>Look for short-term mean reversion using the negative of the recent one-month return.</p></div><div><span>〰</span><strong>Low volatility</strong><p>Score stocks inversely to annualised realised volatility measured over roughly 252 trading days.</p></div><div><span>✳</span><strong>Overreaction</strong><p>Combine five-day return moves with abnormal trading volume as a proxy for attention-driven price pressure.</p></div></div>
          <div className="qf-mini-note"><span>THE MODEL ONLY SEES THREE MARKET REGIME SIGNALS</span><p>SPY realised volatility · six-month SPY momentum · cumulative SPY drawdown</p></div>
          <p>The model generates a predicted return for each factor. Predictions are normalised into allocations, individual factor stock weights are blended, gross exposure is re-normalised, and target stock weights are smoothed to reduce transaction costs. Negative factor weights are allowed: an unfavourable factor can be shorted rather than merely underweighted.</p>
          <Figure file="factor_heatmap" width={1500} height={900} title="Factor allocations really do change." caption="Original group report, Appendix Figure 4. The heatmap illustrates changing momentum, reversal, low-volatility and behavioural factor weights across the backtest." alt="Original report heatmap showing factor allocation changes over time. Momentum is often strongly positive while low-volatility weights move negative in later periods."/>
          <p className="qf-caption-follow">In the report&apos;s interpretation, momentum frequently dominates, while low-volatility exposure turns negative in later periods. The important caveat is that these patterns come from only six stocks, so factor scores can be heavily influenced by an outlier such as NVDA.</p>
        </section>

        <section id="qf-testing" className="qf-section">
          <NumberLabel index="03">THE EXPERIMENT</NumberLabel>
          <h2>A backtest with <em>memory.</em></h2>
          <p className="qf-lead">Every monthly prediction should use only information available before that decision. The evaluation uses an expanding-window, walk-forward design rather than training once on the whole history.</p>
          <div className="qf-timeline" aria-label="Walk-forward training illustration"><div><strong>training history</strong><span>available months up to t</span></div><div className="qf-timeline-arrow">→</div><div><strong>retrain model</strong><span>forecast t + 1 factor returns</span></div><div className="qf-timeline-arrow">→</div><div><strong>record result</strong><span>roll forward one month</span></div></div>
          <div className="qf-method-grid"><div><span>DATA</span><strong>AAPL, MSFT, NVDA, JPM, XOM, UNH</strong><p>Six US large-cap equities, with SPY as the broad-market proxy. Daily observations are aggregated for monthly decisions.</p></div><div><span>TRAINING</span><strong>minimum 24 months</strong><p>Model retrains on past data and makes one-month-ahead factor-return forecasts.</p></div><div><span>RISK CONTROLS</span><strong>±0.60 cap / 0.70 smoothing</strong><p>Allocation cap and 70% new / 30% previous weight blending to limit concentration and churn.</p></div><div><span>COSTS</span><strong>10 bps per unit turnover</strong><p>Equity turnover costs, plus a 2 bp switching cost when the fixed hedge activates or deactivates.</p></div></div>
          <p>Using daily price and volume history and institutional-style SPY options data, the team reports 77 out-of-sample monthly observations. The paper also describes raw price data spanning January 2018 to March 2026; those calendar dates are not the same thing as 77 out-of-sample months. Results below come from the team&apos;s reported evaluation rather than a newly rerun backtest.</p>
          <Figure file="gross_net" width={1380} height={690} title="The equity curve after costs." caption="Original group report, Appendix Figure 1. The gross and net strategies are close, although the gap compounds with turnover costs." alt="Line chart from the original QF206 report comparing cumulative wealth before and after trading costs from 2019 to early 2026."/>
        </section>

        <section id="qf-models" className="qf-section">
          <NumberLabel index="04">THE MODEL RESULTS</NumberLabel>
          <h2>Complexity wasn&apos;t <em>the edge.</em></h2>
          <p className="qf-lead">ElasticNet produced the strongest reported results. The nonlinear XGBoost model was much worse—an instructive warning against fitting a powerful model to a tiny, noisy dataset.</p>
          <ModelComparison/>
          <div className="qf-duo-figures"><Figure file="model_curves" width={1117} height={552} title="Models through time" caption="Original report, Appendix Figure 11. The reported cumulative equity curves compare ElasticNet, Ridge and XGBoost." alt="Original report line graph showing ElasticNet cumulative wealth outperforming Ridge and XGBoost, especially after 2023."/><Figure file="hedged_curve" width={1600} height={800} title="And with protection" caption="Original report, Appendix Figure 2. Shaded months mark options-overlay activations." alt="Backtested equity curves with and without SPY put options protection and yellow shaded activation windows."/></div>
          <div className="qf-editorial-note"><span>WHAT MATTERS MORE THAN THE HEADLINE RETURN</span><p>ElasticNet&apos;s information coefficient is positive at <strong>0.0911</strong>, yet its out-of-sample R² is <strong>−0.0022</strong>. A small directional signal is not the same as a reliable point forecast. The original tests also fail to establish a statistically significant mean return at the conventional 5% threshold.</p></div>
        </section>

        <section id="qf-hedge" className="qf-section">
          <NumberLabel index="05">THE SAFETY NET</NumberLabel>
          <h2>When does a put <em>earn its keep?</em></h2>
          <p className="qf-lead">Buying protection every month can be expensive. Instead, the project constructs an options-market warning score and asks for confirmation of broader equity stress before purchasing a put.</p>
          <div className="qf-hedge-how"><div><span className="qf-hedge-number">01</span><strong>Listen to options markets</strong><p>Twenty-four-month rolling z-scores combine implied skew, put-versus-call demand and deep out-of-the-money put demand.</p></div><div className="qf-hedge-join" aria-hidden="true">+</div><div><span className="qf-hedge-number">02</span><strong>Confirm the stress</strong><p>For the fixed overlay, the options warning must exceed its rolling 90th-percentile threshold and the SPY market-stress condition must be met.</p></div><div className="qf-hedge-join" aria-hidden="true">→</div><div className="qf-hedge-put"><span className="qf-hedge-number">03</span><strong>Purchase SPY protection</strong><p>A roughly 25-delta put with about 30 days to expiration, at a selected fraction of portfolio NAV.</p></div></div>
          <Figure file="warning" width={1600} height={667} title="The warning score is sparse—not a constant alarm." caption="Original group report, Appendix Figure 14. The highest reported observation was 4.436 in February 2020." alt="Options-based warning score from original research, showing a sharp peak in early 2020 and a rolling decision threshold."/>
          <h3 className="qf-subtitle">Five activation months. Two big payoffs.</h3>
          <p>The fixed 0.50% budget triggered five times in 77 months. The SPY puts performed strongly in February 2020 and March 2022. In the other three activations, the option premium largely decayed. These are actual figures from the group report, not illustrative returns.</p>
          <ActivationTable/>
          <div className="qf-stress-story"><div><span>FEBRUARY 2020 / COSTS INCLUDED</span><strong>+0.124% → +2.947%</strong><p>Unhedged net to fixed-overlay net in the report&apos;s detailed February example (Table 12). That is a <b>2.823 percentage-point</b> simulated improvement in the month—not a recurring monthly benefit.</p></div><div><span>THE OTHER SIDE OF THE TRADE</span><strong>3 of 5</strong><p>Three fixed-overlay activations suffered severe premium decay. Hedging helped in the stress months but the evidence is too sparse to conclude it will consistently time future crashes.</p></div></div>
          <HedgeComparison/>
          <Figure file="drawdown_fixed" width={1600} height={667} title="Protection shows up in the drawdown profile." caption="Original group report, Appendix Figure 8. The fixed hedge reduces the reported maximum drawdown from −20.10% to −17.89%." alt="Original research chart showing maximum drawdown over time with and without a put options overlay."/>
          <Figure file="overlay_scenarios" width={1600} height={800} title="Premium budgets change the path." caption="Original group report, Appendix Figure 15. Activation windows are shaded, with the gap between hedged and unhedged wealth paths visible after stress events." alt="Original QF206 chart comparing cumulative wealth paths for different SPY put hedge budgets."/>
        </section>

        <section id="qf-limits" className="qf-section">
          <NumberLabel index="06">THE HARD PART</NumberLabel>
          <h2>What could <em>break the thesis?</em></h2>
          <p className="qf-lead">A backtest is an experiment. The interesting next step is not to celebrate the best line on the chart—it&apos;s to ask what would make that result disappear.</p>
          <div className="qf-limit-list"><div><span>01</span><div><strong>Six stocks cannot stand in for a factor universe.</strong><p>The high-return NVDA path dominates the cross-section. Broadening to the S&amp;P 100/500 could reveal whether factor performance survives single-name dilution.</p></div></div><div><span>02</span><div><strong>Five fixed-overlay events are not enough.</strong><p>Two large successes, three costly false alarms: a small number of triggers means no strong inference about expected protective value.</p></div></div><div><span>03</span><div><strong>The forecasting evidence is statistically weak.</strong><p>The report gives a Sharpe test statistic around 1.57 and a mean-return t-statistic around 1.24, both below conventional 5% thresholds. OOS R² is also slightly negative.</p></div></div><div><span>04</span><div><strong>Real implementation is more fragile.</strong><p>Options data came from WRDS-style infrastructure, and executable bid-ask spreads, capacity, timing and data availability may differ materially from the simulation.</p></div></div></div>
          <div className="qf-what-next"><span>IF I TOOK THIS FURTHER...</span><p>Widen the stock universe, add longer genuinely untouched testing windows, examine signal performance by regime, test continuous risk-budgeting against option costs, and compare performance against simple static-factor and market benchmarks.</p><div aria-hidden="true">↗</div></div>
          <p>The research supports a useful <em>process</em>: factor timing should be evaluated out of sample, derivative protection needs explicit premium accounting, and every compelling result needs a falsification test. It does not yet support a claim of durable, production-ready alpha.</p>
        </section>

        <section id="qf-source" className="qf-section qf-source">
          <NumberLabel index="07">READ THE FINE PRINT</NumberLabel><h2>Methods, source <em>&amp; credits.</em></h2>
          <p>This page is an editorial presentation of the <strong>QF206 Quantitative Trading Strategies — G1 Group 4 Written Report</strong> (2026), a collaborative academic research project. Numerical charts and performance tables are drawn from that report; the strategy illustrations and interactive comparisons are website visuals built from the same documented methods and results.</p>
          <p>Original appendix figures shown here: Figures 1, 2, 4, 8, 11, 14 and 15. Comparison figures and tables are labelled in place. No live performance is represented and the site does not provide investment advice.</p>
          <div className="qf-source-buttons"><a href="https://github.com/christiiscool/Behavioural-Factor-Model-with-Options-Overlay" target="_blank" rel="noopener noreferrer">explore the research code ↗</a><Link href="/work">back to the project gallery ↗</Link></div>
        </section>
      </div>
    </div>
  </article>;
}
