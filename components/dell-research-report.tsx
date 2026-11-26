import Link from "next/link";
import { DellHeroArt, StackArchitecture, RevenueModelDiagram, PriceTargetGraphic } from "@/components/dell-thesis-diagrams";
import { DellThesisExplorer } from "@/components/dell-thesis-interactive";
import "@/styles/dell-research.css";

const contents = [
  { id: "variant", title: "The variant perception" },
  { id: "integration", title: "The enterprise AI stack" },
  { id: "theses", title: "Three investment pillars" },
  { id: "model", title: "Forecasting the business" },
  { id: "valuation", title: "Valuation framework" },
  { id: "risks", title: "What changes the thesis" }
];

function ChapterHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="dell-chapter-header">
    <span className="dell-chapter-index">{number} / {eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function Arrow({ className = "" }: { className?: string }) {
  return <span className={className} aria-hidden="true">↗</span>;
}

export function DellResearchReport() {
  return (
    <article className="dell-report" id="dell-top">
      <div className="dell-report-utility"><Link href="/work">← back to my work</Link><span>INVESTMENT NOTE NO. 06 / ARCHIVE 2025</span></div>
      <header className="dell-report-hero">
        <div className="dell-report-hero-copy">
          <p className="dell-kicker">THE COMPANY NOTE <span>✳</span> DELL TECHNOLOGIES</p>
          <h1>more than<br/><em>a box.</em></h1>
          <p className="dell-report-dek">My case for looking beyond commodity hardware: enterprise AI needs integrated compute, storage and networking, and Dell is positioned to assemble the pieces.</p>
          <p className="dell-report-subdek">A student equity research pitch, reconstructed from my original notes. The figures below are the <strong>historical 2025 pitch assumptions</strong>, not live market prices.</p>
          <a className="dell-hero-jump" href="#variant">read the thesis <Arrow /></a>
        </div>
        <div className="dell-report-hero-art"><DellHeroArt /><div className="dell-hero-stamp" aria-label="Historical rating: Buy">BUY<span>2025 PITCH</span></div></div>
      </header>

      <section className="dell-metrics" aria-label="Historical thesis statistics">
        <div><span>REFERENCE PRICE</span><strong>$95.60</strong><small>in my original pitch notes</small></div>
        <div><span>PRICE TARGET</span><strong>$115.60</strong><small>historical valuation output</small></div>
        <div><span>IMPLIED UPSIDE</span><strong>+20.9%</strong><small>from that reference price</small></div>
        <div className="dell-metric-rating"><span>INVESTMENT VIEW</span><strong>BUY <i>✳</i></strong><small>not a current recommendation</small></div>
      </section>
      <div className="dell-report-body">
        <aside className="dell-toc"><p>IN THIS RESEARCH NOTE</p>
          <nav aria-label="Report contents">{contents.map((item,index)=><a href={`#${item.id}`} key={item.id}><span>{String(index+1).padStart(2,"0")}</span>{item.title}</a>)}</nav>
          <div className="dell-toc-note"><span>✳</span><p>question the narrative.<br/>then test the numbers.</p></div>
        </aside>
        <div className="dell-story">
          <section className="dell-chapter" id="variant">
            <ChapterHeading number="01" eyebrow="THE UNDERAPPRECIATED BUSINESS" title="The investment is not just about GPUs." description="The distinction is between selling components and delivering a working enterprise system." />
            <p>My variant perception was that investors were treating Dell predominantly as a cyclical, low-margin hardware manufacturer and focusing heavily on potential AI-server margin dilution. That perspective can miss the value of integrating the infrastructure around the compute layer.</p>
            <p>Enterprises deploying AI face data-governance, latency and cost constraints. Buying accelerators alone does not solve storage throughput, network connectivity, deployment and ongoing operations. My research framed Dell as a scaled partner in solving those system-level problems—not simply a reseller of individual parts.</p>
            <div className="dell-variant-visual" aria-label="Market perception compared with investment thesis">
              <div><small>WHAT THE MARKET SEES</small><strong>hardware<br/><em>with margin pressure.</em></strong><span>servers / PC cyclicality / competition</span></div>
              <span className="dell-variant-curve" aria-hidden="true">⇢</span>
              <div><small>WHAT MY THESIS SEES</small><strong>integrated<br/><em>AI infrastructure.</em></strong><span>compute + storage + networks + deployment</span></div>
            </div>
            <p>The key underwriting question was therefore <strong>whether backlog could convert into profitable ISG growth</strong>, not simply whether AI-related revenue would increase.</p>
          </section>

          <section className="dell-chapter" id="integration">
            <ChapterHeading number="02" eyebrow="THE BUSINESS IN ONE DIAGRAM" title="How the pieces fit together." description="This is a conceptual diagram of the integrated enterprise-AI proposition, not a chart of revenue contribution." />
            <StackArchitecture />
            <div className="dell-note-line"><span aria-hidden="true">↳</span> Products referenced in my pitch: PowerEdge XE AI servers, PowerScale and ObjectScale storage, plus networking and deployment infrastructure.</div>
            <div className="dell-two-col-copy"><p><strong>Why this could matter:</strong> enterprises often need hybrid or on-premises infrastructure for security, data locality, latency and economics. A vendor capable of integrating multiple layers can potentially participate in more of the deployment budget.</p><p><strong>Why this may not translate to upside:</strong> if procurement remains price-led, or Dell cannot retain value through storage and other infrastructure attachments, integrated delivery alone won't protect profitability.</p></div>
          </section>

          <section className="dell-chapter" id="theses">
            <ChapterHeading number="03" eyebrow="THREE PILLARS / INTERACTIVE" title="Three ways the thesis could work." description="Select each pillar to see the market's narrower interpretation, my variant view and the evidence that would validate or disprove it." />
            <DellThesisExplorer />
            <div className="dell-caveat-banner"><span>★</span><p><strong>The hierarchy matters.</strong> Full-stack enterprise AI and its effect on ISG earnings were the primary thesis. The direct model was a potential structural advantage; the commercial PC replacement cycle provided nearer-term support rather than the main source of long-run value.</p></div>
          </section>

          <section className="dell-chapter" id="model">
            <ChapterHeading number="04" eyebrow="FROM INDUSTRY STORY TO MODEL" title="Different segments. Different forecasting methods." description="My research forecast ISG bottom-up using backlog and incremental infrastructure demand, while forecasting CSG top-down through region-specific PC demand." />
            <RevenueModelDiagram />
            <p>For <strong>Infrastructure Solutions Group (ISG)</strong>, contracted backlog was the near-term visibility anchor, but I assumed a phased conversion rather than treating backlog as immediate revenue. Incremental AI adoption and new infrastructure orders supplied the forward-looking upside assumption. The critical variable was the <em>incremental ISG uplift</em>, and I tested the model against the risk of slower orders or margin compression.</p>
            <p>For <strong>Client Solutions Group (CSG)</strong>, I began with enterprise PC demand, then differentiated North America, EMEA and APAC by replacement-cycle and macro conditions. The Windows 10 end-of-support event in October 2025 was part of the original cyclical thesis, not a future catalyst today.</p>
            <p>After forecasting segment revenues and operating margins, I adjusted for taxes, capital expenditure and changes in working capital to derive unlevered free cash flow. I considered near-term margin pressure from AI product mix rather than assuming every additional AI server sale immediately raised profitability.</p>
            <div className="dell-method-footnote"><strong>What isn't shown:</strong> the full line-by-line operating forecast and individual backlog conversion percentages are not present in the source notes available for this page. The diagram intentionally shows methodology, not invented financial estimates.</div>
          </section>

          <section className="dell-chapter" id="valuation">
            <ChapterHeading number="05" eyebrow="THE VALUATION POSTCARD" title="The route to $115.60." description="A historical 2025 price-target snapshot—not a live quotation or an updated valuation." />
            <PriceTargetGraphic />
            <div className="dell-valuation-anchors">
              <div><span>≈ 11%</span><strong>WACC</strong><p>Discount rate applied to projected unlevered free cash flow.</p></div>
              <div><span>≈ 2%</span><strong>PERPETUAL GROWTH</strong><p>Conservative Gordon Growth terminal-value assumption.</p></div>
              <div><span>EV / EBITDA</span><strong>MARKET CROSS-CHECK</strong><p>Exit-multiple and comparable-company approach alongside the DCF.</p></div>
            </div>
            <div className="dell-valuation-method">
              <div className="dell-valuation-stage"><span>01 / START HERE</span><strong>Segment forecasts</strong><p>ISG backlog conversion and AI uplift + CSG regional demand.</p></div>
              <div className="dell-valuation-arrow" aria-hidden="true">→</div>
              <div className="dell-valuation-stage"><span>02 / CASH FLOW</span><strong>Discounted FCF</strong><p>Operating profit, taxes, working capital, capex and terminal value.</p></div>
              <div className="dell-valuation-arrow" aria-hidden="true">→</div>
              <div className="dell-valuation-stage"><span>03 / REALITY CHECK</span><strong>Segment peers</strong><p>ISG: HPE / Super Micro; CSG: HP Inc. / Lenovo.</p></div>
            </div>
            <p>The target was intended to be driven primarily by <strong>earnings growth from ISG</strong>, with only modest support from a valuation multiple re-rating. I did not base the thesis on Dell receiving the same multiple as a high-growth software business.</p>
            <p>The original notes describe a blended DCF and relative-valuation approach, but do not contain enough underlying forecast rows, share-count adjustments or peer multiples to reproduce a full numerical bridge to $115.60 here. Rather than fabricate a waterfall, this page makes the valuation method and assumptions explicit.</p>
          </section>

          <section className="dell-chapter" id="risks">
            <ChapterHeading number="06" eyebrow="HOW I WOULD TEST IT" title="A thesis should be easy to disprove." description="The evidence I would look for to decide whether the original investment argument was resolving—or breaking." />
            <div className="dell-risk-table" role="table" aria-label="Investment thesis monitoring checklist">
              <div className="dell-risk-row dell-risk-head" role="row"><div role="columnheader">MONITOR</div><div role="columnheader">SUPPORTIVE EVIDENCE</div><div role="columnheader">WHAT WOULD CONCERN ME</div></div>
              {[
                ["AI backlog → revenue", "Sustained conversion into ISG sales", "Slippage, cancellations or order slowdown"],
                ["ISG economics", "Margins stabilise despite AI-server mix", "Persistent price-led margin compression"],
                ["Enterprise attach", "Storage / networking follow AI compute", "Dell competes only on hardware price"],
                ["Commercial PCs", "Replacement demand and ASPs improve", "Delayed refresh and weak enterprise budgets"],
                ["Execution", "Inventory efficiency and cash conversion hold", "Supply-chain disruption or tariff pressure"]
              ].map((row,i)=><div className="dell-risk-row" role="row" key={row[0]}><div role="cell"><span className="dell-risk-num">{String(i+1).padStart(2,"0")}</span><strong>{row[0]}</strong></div><div role="cell">{row[1]}</div><div role="cell">{row[2]}</div></div>)}
            </div>
            <div className="dell-final-thought"><span>✳</span><div><small>THE CENTRAL QUESTION</small><h3>Can system-level differentiation become <em>durable earnings power?</em></h3><p>If that translation fails, AI demand alone is not enough to defend the original valuation. That is what makes the thesis falsifiable.</p></div></div>
          </section>
          <footer className="dell-article-footer"><div><strong>RESEARCH NOTE / 2025</strong><p>Adapted from my archived Dell Technologies pitch notes for a student-managed investment fund. The figures are historical assumptions, not current market prices. Diagrams are illustrative; this is not investment advice. The original full financial model has not been reproduced or independently revalidated.</p></div><Link href="/work" className="dell-back-button">back to the work archive <Arrow /></Link></footer>
        </div>
      </div>
    </article>
  );
}