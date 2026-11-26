import Link from "next/link";
import { dellModel } from "@/data/dell-historical-data";
import { DellPcChart, DellSegmentChart, DellSensitivity, DellThesisExplorer, DellValuationBars } from "@/components/dell-authentic-charts";
import "@/styles/dell-original-report.css";

const full = (n: number) => `$${n.toFixed(2)}`;
const bill = (n: number) => `$${(n/1000).toFixed(1)}bn`;

function Chapter({number,subtitle}:{number:string;subtitle:string}) {
 return <div className="dm-chapter-number"><span>{number}</span><small>{subtitle}</small><i aria-hidden="true">✳</i></div>;
}

function ServerRack() {
 return <svg viewBox="0 0 600 540" className="dm-server-svg" role="img" aria-label="Original decorative illustration of three data-centre racks and cables, drawn like a scrapbook illustration">
  <defs><pattern id="dm-speckle" width="17" height="17" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1" fill="#ffffff" opacity=".21" /></pattern><linearGradient id="dm-server-face" x1="0" x2="1"><stop offset="0" stopColor="#292654"/><stop offset="1" stopColor="#12143d"/></linearGradient></defs>
  <g transform="translate(30 15) rotate(-7 300 270)">
    <rect x="22" y="60" width="538" height="420" rx="12" fill="#efe4df" stroke="#cbb9c0" strokeWidth="3"/>
    <path d="M45 82H540" stroke="#d4b5c1" strokeWidth="4" strokeDasharray="4 8"/>
    {[0,1,2].map(i=>{const x=70+i*165;return <g key={i}>
      <rect x={x} y="105" width="142" height="318" rx="7" fill="url(#dm-server-face)" stroke="#4e5bb2" strokeWidth="3"/>
      <rect x={x+11} y="118" width="120" height="28" rx="4" fill="#4b58ab"/>
      <circle cx={x+25} cy="132" r="5" fill="#ffe6e8"/><circle cx={x+43} cy="132" r="5" fill="#93c7ed"/>
      {Array.from({length:6},(_,j)=><g key={j}><rect x={x+13} y={161+j*37} width="116" height="27" rx="2" fill="#313469" stroke="#8b91d4" strokeWidth=".7"/><rect x={x+22} y={172+j*37} width="67" height="3" rx="1.5" fill="#a9baf3"/><circle cx={x+112} cy={174+j*37} r="3.5" fill={j%2===0?"#ec99bd":"#a1c0ff"}/></g>)}
      <rect x={x+5} y="429" width="6" height="27" fill="#403e67"/><rect x={x+130} y="429" width="6" height="27" fill="#403e67"/>
    </g>})}
    <path d="M145 455 Q165 490 350 500" stroke="#e69fb8" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </g>
  <path d="M505 80L519 50L540 78L568 82L546 101L548 132L522 114L498 131L503 105L481 89Z" fill="#f1b2c5" stroke="#e28ead" strokeWidth="3"/>
  <text x="325" y="500" textAnchor="middle" fontSize="17" fontFamily="serif" fontStyle="italic" fill="#2140c8" transform="rotate(-2 325 500)">a peek inside the machine ✳</text>
 </svg>;
}

function ArchitectureDiagram() {
 return <div className="dm-arch-box" role="img" aria-label="An enterprise AI workload sits above the integrated infrastructure, comprising PowerEdge compute, PowerSwitch networking, and PowerScale storage, with customisation and support around the stack">
  <div className="dm-arch-doodle" aria-hidden="true">a whole system, not a single box ↘</div>
  <div className="dm-arch-top"><span className="dm-arch-label">THE CUSTOMER</span><strong>enterprise AI workload</strong><small>private data · low latency · hybrid infrastructure</small></div>
  <div className="dm-arch-arrow" aria-hidden="true">↓</div>
  <div className="dm-arch-grid">
    <div className="dm-arch-card dm-arch-compute"><span>01 / COMPUTE</span><strong>PowerEdge</strong><p>GPU-intensive servers process and train models.</p><div className="dm-rack-mini" aria-hidden="true"><i/><i/><i/></div></div>
    <div className="dm-arch-card dm-arch-network"><span>02 / CONNECT</span><strong>PowerSwitch</strong><p>Network fabric moves data between the GPUs and storage.</p><div className="dm-switch-mini" aria-hidden="true"><i/><i/><i/><i/></div></div>
    <div className="dm-arch-card dm-arch-storage"><span>03 / STORE</span><strong>PowerScale</strong><p>High-throughput AI data storage keeps the compute fed.</p><div className="dm-disk-mini" aria-hidden="true"><i/><i/></div></div>
  </div>
  <div className="dm-arch-middle"><span>↔</span> <strong>integration, configuration & delivery</strong> <span>↔</span></div>
  <p className="dm-arch-note">The original thesis was about the system integration and enterprise deployment layer, not the assertion that Dell owns the underlying GPUs or all the software. Concept redrawn from the original pitch's product and architecture slides (pp. 3, 7, 12).</p>
 </div>;
}

function TariffIllustration() {
 return <div className="dm-tariff-graphic" role="img" aria-label="Illustrative flow of the original tariff thesis: diversified assembly footprint is a proposed buffer against tariff exposure and shipping disruption, conditional on component sourcing and costs">
   <div className="dm-tariff-path"><div className="dm-tariff-item"><span>2024</span><strong>footprint shifts</strong><small>manufacturing diversification in the original thesis</small></div><span className="dm-tariff-arrow" aria-hidden="true">↗</span><div className="dm-tariff-item dm-tariff-impact"><span>2025</span><strong>tariff shock</strong><small>risk to imported components and assembly</small></div><span className="dm-tariff-arrow" aria-hidden="true">↗</span><div className="dm-tariff-item"><span>HYPOTHESIS</span><strong>relative resilience</strong><small>if landed costs and lead times hold up better than peers</small></div></div>
   <p>What matters is the <em>actual delivered cost</em> of the hardware, not simply the country on the assembly label.</p>
 </div>;
}

function ForecastRecipe() {
 return <div className="dm-recipe-layout">
   <div className="dm-recipe-panel"><span className="dm-recipe-pin" aria-hidden="true">✳</span><span className="dm-overline">ISG / bottom-up</span><h3>orders, storage & servers.</h3>
     <div className="dm-recipe-input"><span>servers and networking</span><strong>modelled contract line items</strong></div><span className="dm-plus" aria-hidden="true">＋</span><div className="dm-recipe-input"><span>storage</span><strong>segment forecast assumptions</strong></div><span className="dm-equals" aria-hidden="true">↓</span><div className="dm-recipe-output">ISG revenue forecast</div>
     <p>The spreadsheet explicitly enumerates illustrative contract lines and storage revenue rather than relying on a single top-line growth extrapolation.</p>
   </div>
   <div className="dm-recipe-panel dm-recipe-pc"><span className="dm-recipe-pin" aria-hidden="true">♡</span><span className="dm-overline">CSG / top-down</span><h3>the PC replacement maths.</h3>
     <div className="dm-recipe-input"><span>regional PC industry units</span><strong>NA · EMEA · APAC · China · LatAm</strong></div><span className="dm-times" aria-hidden="true">× modelled market share</span><div className="dm-recipe-input"><span>Dell PC volumes</span><strong>units × average selling price</strong></div><span className="dm-equals" aria-hidden="true">↓</span><div className="dm-recipe-output">CSG revenue forecast</div>
     <p>The forecast explicitly separates demand by geography and then applies PC ASP assumptions. Its forecasts are not observed shipment results.</p>
   </div>
 </div>;
}

export function DellOriginalReport(){
  const original = dellModel.rows.find(r=>r.year===2025)!;
  const forecast = dellModel.rows.find(r=>r.year===2026)!;
  return <article className="dm-report" id="dm-top">
    <div className="dm-top-return"><Link href="/work">← back to things i've made</Link><span>RESEARCH ARCHIVE / 006</span></div>
    <header className="dm-hero">
      <div className="dm-hero-copy"><span className="dm-kicker">christi's research notebook <i>✳</i> 2025 ARCHIVE</span>
        <h1>the <em>real</em><br/><span>Dell.</span></h1>
        <p className="dm-hero-intro">A 2025 equity pitch about something more interesting than another hardware cycle: <strong>the economics of integrated enterprise AI, supply-chain resilience, and a commercial PC refresh.</strong></p>
        <div className="dm-hero-statline"><div><small>original view</small><strong>BUY</strong></div><div><small>historical target</small><strong>{full(dellModel.targetPrice)}</strong></div><div><small>implied upside</small><strong>+{(dellModel.upside*100).toFixed(1)}%</strong></div></div>
        <div className="dm-hero-actions"><a href="#dm-theses">read the thesis <span aria-hidden="true">↗</span></a><a href="#dm-valuation" className="dm-text-link">explore my model →</a></div>
        <p className="dm-history"><span aria-hidden="true">✳</span> Historical valuation: 4 March 2025 · Reference share price {full(dellModel.referencePrice)} · not a current recommendation</p>
      </div>
      <div className="dm-hero-picture"><div className="dm-art-sticker dm-art-sticker-one" aria-hidden="true">2025<br/>pitch</div><ServerRack/><div className="dm-art-corner" aria-hidden="true">♡</div></div>
    </header>
    <nav className="dm-contents" aria-label="In this report"><span>the story inside →</span><a href="#dm-question">the question</a><a href="#dm-theses">the 3 theses</a><a href="#dm-engine">the business</a><a href="#dm-model">my model</a><a href="#dm-valuation">valuation</a><a href="#dm-watch">what breaks it</a></nav>

    <section className="dm-section dm-opening" id="dm-question">
      <Chapter number="01" subtitle="the investment question" />
      <div className="dm-split-intro"><div><h2>what was the market <em>missing?</em></h2><p className="dm-large-lead">The pitch was not simply “AI is growing.” It asked whether Dell was being valued too much like a commoditised hardware company and too little like a scaled provider of integrated enterprise infrastructure.</p></div><div className="dm-postcard"><span>my original variant ♡</span><p>“The bottleneck is not just computing power. It's how an enterprise puts compute, storage and networking together.”</p><small>Recast from the original pitch's product analysis and market-variant pages (3–10).</small></div></div>
      <div className="dm-mini-metrics"><div><span>FY2025A revenue</span><strong>{bill(original.revenue)}</strong><small>historical model</small></div><div><span>FY2026E revenue</span><strong>{bill(forecast.revenue)}</strong><small>original projection</small></div><div><span>FY2025A operating margin</span><strong>{(original.ebit/original.revenue*100).toFixed(1)}%</strong><small>model historical</small></div><div><span>FY2026E operating margin</span><strong>{(forecast.ebit/forecast.revenue*100).toFixed(1)}%</strong><small>material forecast step-up</small></div></div>
    </section>

    <section className="dm-section" id="dm-theses"><Chapter number="02" subtitle="original slides 10–19" /><div className="dm-section-heading"><h2>three things i <em>believed.</em></h2><p>These are the original three theses from the presentation, including the tariff thesis that was missing from the earlier website draft. Choose a tab to inspect the variant view and its falsifiable tests.</p></div><DellThesisExplorer/></section>

    <section className="dm-section" id="dm-engine"><Chapter number="03" subtitle="how the engine fits together" /><div className="dm-section-heading"><h2>it's the <em>whole system.</em></h2><p>The core of the 2025 argument: a corporate AI workload needs functioning infrastructure, not just accelerators. This is the simplified architecture behind the pitch.</p></div><ArchitectureDiagram/><div className="dm-tariff-explainer"><h3>and what about the tariff risk?</h3><p>The original second thesis was a relative resilience argument—not a claim that tariffs could never hurt Dell. It relied on supply-chain diversification offsetting import-cost shocks better than the market expected.</p><TariffIllustration/></div></section>

    <section className="dm-section" id="dm-model"><Chapter number="04" subtitle="under the hood of my spreadsheet" /><div className="dm-section-heading"><h2>from idea to <em>numbers.</em></h2><p>The uploaded workbook contains a segmented driver build, a three-statement forecast and multiple valuation cross-checks. I've brought that underlying work into the page rather than inventing a revenue chart.</p></div><ForecastRecipe/><DellSegmentChart/><div className="dm-model-subsection"><div className="dm-annotation"><span>another little note ✳</span><h3>the PC cycle wasn't only about unit growth.</h3><p>The 2025 model assumed replacement demand and price/mix effects would both matter for CSG. In the spreadsheet, the PC average selling price rises faster than total modelled units through FY2030.</p></div><DellPcChart/></div></section>

    <section className="dm-section" id="dm-valuation"><Chapter number="05" subtitle="the historical price target" /><div className="dm-section-heading"><h2>how i got to <em>{full(dellModel.targetPrice)}.</em></h2><p>A transparent reconciliation of the historical target. The central valuation was not one DCF price: the model combined two DCF approaches with a relative-valuation midpoint at equal weights.</p></div>
      <DellValuationBars/>
      <div className="dm-valuation-assumptions"><div><span>11.05%</span><small>model WACC</small></div><div><span>2.0%</span><small>terminal growth rate</small></div><div><span>{dellModel.exitMultiple.toFixed(2)}×</span><small>peer EBITDA multiple</small></div><div><span>{bill(dellModel.terminalFcff)}</span><small>FY2030E FCFF</small></div></div>
      <div className="dm-model-bridge"><span className="dm-bridge-title">the logic behind the target</span><div><span>ISG + CSG forecasts</span><b>→</b><span>operating earnings</span><b>→</b><span>unlevered FCFF</span><b>→</b><span>discounted cash flow + peer check</span><b>→</b><span>⅓ + ⅓ + ⅓</span></div></div>
      <div className="dm-sensitivity-area"><div className="dm-section-heading"><h3>what happens when the assumptions move?</h3><p>Explore the reconstructed sensitivity of each original DCF method to its terminal assumptions and the discount rate. The central cells reproduce the base DCF values to rounding.</p></div><DellSensitivity/></div>
    </section>

    <section className="dm-section" id="dm-watch"><Chapter number="06" subtitle="risks and disconfirming evidence" /><div className="dm-section-heading"><h2>how the thesis could <em>break.</em></h2><p>An investment pitch only matters if its claims can be disproved. These are the items that would have mattered most when checking the original 2025 case.</p></div>
      <div className="dm-risk-grid">
        <div><span>01 / MARGINS</span><h3>AI revenue without AI profit</h3><p>Accelerating AI server shipments with weakening gross margins, poor backlog conversion or deteriorating working capital would undermine the central economics.</p></div>
        <div><span>02 / SUPPLY CHAIN</span><h3>tariff resilience fails</h3><p>Relocation costs or import exposure overwhelm the planned mitigation, creating a more sustained margin disadvantage than peers.</p></div>
        <div><span>03 / PC CYCLE</span><h3>refresh doesn't arrive</h3><p>Corporate upgrades are deferred, Dell cannot sustain ASP premiums, or the price of AI PC hardware rises faster than customers' willingness to pay.</p></div>
        <div><span>04 / TECHNOLOGY</span><h3>system differentiation erodes</h3><p>Architecture changes, stronger integrators or in-house enterprise infrastructure reduce the value of Dell's integrated offering.</p></div>
      </div>
      <details className="dm-audit-note"><summary><span>research notebook / provenance &amp; model caveats</span><span aria-hidden="true">＋</span></summary><div><p><strong>Historical sources.</strong> Christi's original 22-slide Dell equity presentation (especially slides 7, 10–21) and original financial model (Drivers, 3FS, Valuation and Football Field tabs). Figures are from the 2025 research snapshot, not refreshed market estimates.</p><p><strong>Model interpretation.</strong> FY2026–FY2030 numbers remain forecasts as of the original study. The sheet's model valuation date is 4 March 2025 even though a separate cover cell contains a volatile TODAY() formula; the source prices and target are anchored to the model's dated valuation cells. Some cached sensitivity-table entries do not recalculate correctly, so the sensitivity grid on this page has been recomputed from the underlying FCFF and discount formulas. Other assumptions and valuation bridge conventions have not been independently audited.</p><p><strong>Public display.</strong> This is a personal historical student research case study, not current financial advice. The original workbook, individual contract-level model drivers and original PDF are not published here.</p></div></details>
      <div className="dm-last-word"><span className="dm-scribble-star" aria-hidden="true">✳</span><h3>the biggest lesson?</h3><p>Being early on a trend isn't enough. A thesis needs to explain <em>what the market misses, which operating assumptions drive value, and what evidence would prove it wrong.</em></p><Link href="/work">back to all my projects ↗</Link></div>
    </section>
  </article>;
}
