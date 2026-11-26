/** Original editorial vector illustrations. Conceptual, not financial data. */
export function DellHeroArt() {
  return (
    <svg className="dell-server-art" viewBox="0 0 730 660" role="img" aria-label="Editorial illustration of interconnected enterprise AI servers, storage and networking">
      <defs>
        <pattern id="dell-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.25" fill="#133ac5" opacity=".18" /></pattern>
        <linearGradient id="dell-server-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fcf6ed"/><stop offset="1" stopColor="#f7dde4"/></linearGradient>
        <filter id="dell-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="12" dy="16" stdDeviation="10" floodColor="#9f7f92" floodOpacity=".22"/></filter>
      </defs>
      <rect x="80" y="55" width="550" height="525" rx="12" fill="url(#dell-dots)" />
      <path d="M80 535C148 500 173 560 245 533S362 481 438 516s128 18 190-16" fill="none" stroke="#ef93b2" strokeWidth="4" strokeDasharray="10 9" />
      <g filter="url(#dell-shadow)">
        <path d="M176 165l180-59 103 59-180 63z" fill="#d6e1ff" stroke="#1636b6" strokeWidth="3" />
        <path d="M176 165v301l103 63V228z" fill="#cfdbfa" stroke="#1636b6" strokeWidth="3" />
        <path d="M279 228l180-63v301l-180 63z" fill="#f9e4ec" stroke="#1636b6" strokeWidth="3" />
        {Array.from({length:6},(_,i)=>{
          const y=258+i*38;return <g key={i}>
            <path d={`M296 ${y}l143 -50v28l-143 50z`} fill="#fffdfb" stroke="#153ac0" strokeWidth="2"/>
            <path d={`M309 ${y+7}l72 -25`} stroke="#153ac0" strokeOpacity=".65" strokeWidth="3"/>
            <circle cx="423" cy={y-29} r="4" fill={i===1||i===4?"#e78eaf":"#3db59c"}/>
          </g>;
        })}
        <path d="M176 165l103 63v301l-103-63z" fill="none" stroke="#1636b6" strokeWidth="3"/>
        {Array.from({length:5},(_,i)=><path key={i} d={`M190 ${210+i*48}l75 43`} stroke="#2345c8" strokeWidth="2" opacity=".4"/>)}
        <path d="M279 228l180-63" stroke="#1435ba" strokeWidth="4"/>
      </g>
      <path d="M457 368C519 374 536 342 550 295" fill="none" stroke="#e58eaf" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="550" cy="290" r="10" fill="#ec8fb1" stroke="#b44f7b" strokeWidth="3" />
      <g transform="translate(470 170) rotate(9)">
        <rect width="180" height="92" rx="5" fill="#fffdf9" stroke="#d7b9c6" strokeWidth="2" />
        <rect x="12" y="12" width="156" height="46" rx="2" fill="#fce3e9" />
        <text x="90" y="39" textAnchor="middle" fontSize="15" fontWeight="700" letterSpacing="2" fill="#123cc6">ENTERPRISE AI</text>
        <text x="90" y="76" textAnchor="middle" fontSize="12" fill="#956a7d">the whole system matters</text>
      </g>
      <g transform="translate(90 118) rotate(-12)">
        <rect width="130" height="72" rx="3" fill="#fae5e9" stroke="#dba8b8"/>
        <text x="65" y="31" textAnchor="middle" fontFamily="Georgia" fontStyle="italic" fontSize="24" fill="#173cc2">not just</text>
        <text x="65" y="55" textAnchor="middle" fontFamily="Georgia" fontStyle="italic" fontSize="24" fill="#173cc2">a box!</text>
      </g>
      <g fill="none" stroke="#163ec9" strokeWidth="4" strokeLinecap="round">
        <path d="M518 456l10 -27 11 27 28 8 -28 8 -11 28 -10-28 -27-8z"/>
        <path d="M117 389l7-17 7 17 17 5-17 6-7 17-7-17-18-6z"/>
        <path d="M590 354q24-19 44 2q11 12 7 27"/>
      </g>
      <path d="M635 386l-9-13 18-1" fill="none" stroke="#153ac9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <g transform="translate(340 568) rotate(-5)">
        <rect width="254" height="50" rx="4" fill="#f5c6d5" stroke="#dca2b8" strokeWidth="2"/>
        <text x="127" y="32" textAnchor="middle" fontFamily="Georgia" fontStyle="italic" fontSize="23" fill="#183bc5">research notes · 2025 ♡</text>
      </g>
    </svg>
  );
}

export function StackArchitecture() {
  return (
    <div className="dell-stack-diagram" aria-label="Diagram of how enterprise AI needs connect to Dell's integrated compute, storage, networking and deployment stack">
      <div className="dell-stack-needs">
        <p className="dell-diagram-small">WHAT ENTERPRISES NEED</p>
        <div className="dell-stack-need"><span aria-hidden="true">01</span> Data control &amp; security</div>
        <div className="dell-stack-need"><span aria-hidden="true">02</span> Low latency &amp; throughput</div>
        <div className="dell-stack-need"><span aria-hidden="true">03</span> Hybrid deployment</div>
      </div>
      <div className="dell-stack-join" aria-hidden="true"><span>→</span></div>
      <div className="dell-stack-layers">
        <p className="dell-diagram-small">DELL'S SYSTEM-LEVEL OFFERING</p>
        <div className="dell-stack-layer"><span className="dell-layer-icon">✧</span><div><strong>Compute</strong><small>PowerEdge XE / AI servers</small></div></div>
        <div className="dell-stack-layer"><span className="dell-layer-icon">▤</span><div><strong>Storage</strong><small>PowerScale / ObjectScale</small></div></div>
        <div className="dell-stack-layer"><span className="dell-layer-icon">⌁</span><div><strong>Networking</strong><small>System connectivity</small></div></div>
        <div className="dell-stack-layer"><span className="dell-layer-icon">✳</span><div><strong>Integration</strong><small>Deployment &amp; orchestration</small></div></div>
      </div>
      <div className="dell-stack-join" aria-hidden="true"><span>→</span></div>
      <div className="dell-stack-outcome"><span className="dell-outcome-star" aria-hidden="true">✳</span><strong>Usable enterprise AI</strong><small>More than the price of a GPU or server chassis</small></div>
    </div>
  );
}

export function RevenueModelDiagram() {
  return (
    <div className="dell-revenue-grid">
      <div className="dell-revenue-track dell-isg-track">
        <div className="dell-track-heading"><span>01 / ISG</span><strong>build it bottom-up</strong><em>the structural engine</em></div>
        <div className="dell-track-two">
          <div className="dell-model-node"><small>already ordered</small><strong>Existing AI backlog</strong><span>phased conversion, not instant recognition</span></div>
          <div className="dell-model-node"><small>incremental</small><strong>New enterprise AI demand</strong><span>future infrastructure orders and expansion</span></div>
        </div>
        <div className="dell-model-connector" aria-hidden="true">↘ &nbsp;&nbsp;&nbsp;&nbsp; ↙</div>
        <div className="dell-model-result"><small>FORECAST OUTPUT</small><strong>ISG revenue &amp; margins</strong><span>test conversion, mix and scale economics</span></div>
      </div>
      <div className="dell-revenue-track dell-csg-track">
        <div className="dell-track-heading"><span>02 / CSG</span><strong>build it top-down</strong><em>the cyclical support</em></div>
        <div className="dell-model-node dell-region-top"><small>category backdrop</small><strong>Enterprise PC demand + refresh</strong><span>macroeconomics / Windows replacement cycle</span></div>
        <div className="dell-model-connector" aria-hidden="true">↓</div>
        <div className="dell-regions"><span>North America</span><span>EMEA</span><span>APAC</span></div>
        <div className="dell-model-connector" aria-hidden="true">↓</div>
        <div className="dell-model-result"><small>FORECAST OUTPUT</small><strong>CSG revenue &amp; margins</strong><span>differentiated regional assumptions</span></div>
      </div>
      <div className="dell-revenue-bottom">
        <div><strong>ISG + CSG</strong><small>Segment operating forecasts</small></div><span aria-hidden="true">→</span>
        <div><strong>Operating profit</strong><small>AI mix / margin assumptions</small></div><span aria-hidden="true">→</span>
        <div><strong>Unlevered FCF</strong><small>Less taxes, capex, Δ working capital</small></div>
      </div>
    </div>
  );
}

export function PriceTargetGraphic() {
  const current = 95.60, target = 115.60;
  const pct = ((target / current - 1) * 100).toFixed(1);
  return (
    <figure className="dell-price-figure" aria-label={`Historical 2025 pitch reference price $${current.toFixed(2)} to target $${target.toFixed(2)}, ${pct} percent implied upside`}>
      <div className="dell-price-axis">
        <div className="dell-price-axis-guide" />
        <div className="dell-price-marker dell-price-marker-ref"><span className="dell-marker-dot" /><small>REFERENCE PRICE</small><strong>$95.60</strong></div>
        <div className="dell-price-progress"><span>+{pct}%</span></div>
        <div className="dell-price-marker dell-price-marker-pt"><span className="dell-marker-dot"/><small>ORIGINAL TARGET</small><strong>$115.60</strong></div>
      </div>
      <figcaption>2025 pitch snapshot only · The bars show the change from the historical reference to the original price target, not price performance or a current recommendation.</figcaption>
    </figure>
  );
}