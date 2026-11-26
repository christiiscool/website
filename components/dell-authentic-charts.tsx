"use client";

import { useState } from "react";
import { dellModel } from "@/data/dell-historical-data";

const formatBn = (value: number) => `$${(value / 1000).toFixed(1)}bn`;
const formatUSD = (value: number) => `$${value.toFixed(2)}`;

const thesisNotes = [
  {
    id: "01", name: "the direct model", tag: "ai infrastructure + execution",
    question: "Can Dell defend economics as AI servers scale?",
    debate: "The 2025 debate centred on AI-server margin pressure, intense hardware competition, and uncertain conversion of large AI orders into durable profitability.",
    view: "Dell could capture value beyond individual GPUs through the integration of compute, storage and networking, while its build-to-order, direct sales model supported cost discipline and customisation.",
    evidence: ["ISG growth alongside stable or improving margins", "AI server and storage order conversion", "Cash generation and disciplined inventory management"],
    breaks: "An undifferentiated, price-led AI-server market; sustained component inflation; or strong orders that fail to convert into cash and profit.",
    source: "Original deck, pp. 10–14",
  },
  {
    id: "02", name: "the tariffic test", tag: "supply-chain resilience",
    question: "Was Dell better prepared for tariff disruption?",
    debate: "The presentation identified potential import tariffs on China and Mexico as a near-term threat to electronics costs, supply continuity and hardware pricing.",
    view: "The original thesis argued Dell had begun diversifying its PC manufacturing footprint before the escalation, creating a relative advantage if competitors had to relocate at short notice.",
    evidence: ["A falling share of shipments originating in China", "Relative stability in gross margin and fulfilment", "No persistent loss of PC competitiveness from tariff pass-through"],
    breaks: "Critical components remain tariff-exposed, relocation proves costly, or rivals diversify just as effectively. This was a 2025 forecast, not an established outcome.",
    source: "Original deck, pp. 10, 15–16",
  },
  {
    id: "03", name: "refreshing revenue", tag: "commercial pc cycle",
    question: "Could PC replacements support the transition?",
    debate: "Investors worried about PC ASP competition, a delayed Windows 10 transition and uncertain demand for premium AI-capable PCs.",
    view: "The pitch expected a commercial upgrade cycle to support Dell's CSG volumes and ASPs, especially as enterprises replaced ageing machines ahead of Windows 10 end-of-support in October 2025.",
    evidence: ["Commercial PC shipment recovery by geography", "Mix-adjusted average selling prices", "CSG margins as AI PC components raise costs"],
    breaks: "Enterprises defer upgrades, AI PC functionality fails to command a premium, or higher component costs overwhelm price realisation.",
    source: "Original deck, pp. 10, 17–19",
  },
] as const;

export function DellThesisExplorer() {
  const [active, setActive] = useState(0);
  const item = thesisNotes[active];
  return <div className="dm-thesis-explorer">
    <div className="dm-thesis-tabs" role="tablist" aria-label="Three original Dell theses">
      {thesisNotes.map((t, index) => <button
        key={t.id} type="button" role="tab" id={`dm-tab-${index}`}
        aria-selected={active === index} aria-controls="dm-thesis-panel"
        className={`dm-thesis-tab ${active === index ? "is-active" : ""}`}
        onClick={() => setActive(index)}
      ><span>{t.id}</span><strong>{t.name}</strong><small>{t.tag}</small></button>)}
    </div>
    <div className="dm-thesis-content" id="dm-thesis-panel" role="tabpanel" aria-labelledby={`dm-tab-${active}`}>
      <div className="dm-thesis-heading"><span>THE QUESTION</span><h3>{item.question}</h3></div>
      <div className="dm-thesis-positions">
        <div><span className="dm-overline">the 2025 market concern</span><p>{item.debate}</p></div>
        <div><span className="dm-overline">my original variant view</span><p>{item.view}</p></div>
      </div>
      <div className="dm-thesis-test">
        <div><strong>what would validate it?</strong><ul>{item.evidence.map(entry=><li key={entry}>{entry}</li>)}</ul></div>
        <div><strong>what would break it?</strong><p>{item.breaks}</p><small>{item.source}</small></div>
      </div>
    </div>
  </div>;
}

export function DellSegmentChart() {
  const [year, setYear] = useState(2025);
  const selected = dellModel.rows.find(d=>d.year===year) ?? dellModel.rows[4];
  const width = 1000, bottom = 294, top = 22, scale = (bottom - top)/135000;
  const rowW = 54, gap = 38, offset = 55;
  const colors = { isg: "#1736c5", csg: "#a3b8ed", other: "#edb0c2" };
  return <div className="dm-chart-panel">
    <div className="dm-chart-heading"><div><span className="dm-overline">data / 01</span><h3>two businesses, different growth engines.</h3><p>Annual segment revenue, FY2021–FY2030. USD billions.</p></div><div className="dm-legend"><span><i style={{background:colors.isg}}/>ISG</span><span><i style={{background:colors.csg}}/>CSG</span><span><i style={{background:colors.other}}/>Other</span></div></div>
    <div className="dm-chart-scroll"><svg viewBox={`0 0 ${width} 360`} className="dm-svg-chart" role="img" aria-label="Stacked columns show ISG, CSG and Other revenue, historical 2021 to 2025 and forecast 2026 to 2030. Fiscal 2025 total was 95.6 billion US dollars, modeled 2030 total 120.8 billion.">
      {[0,40,80,120].map(n=><g key={n}><line x1="46" x2="986" y1={bottom-n*1000*scale} y2={bottom-n*1000*scale} stroke="#d8d3d7" strokeDasharray="4 7"/><text x="37" y={bottom-n*1000*scale+4} textAnchor="end" fontSize="13" fill="#756d81">{n}</text></g>)}
      <rect x={offset + 5* (rowW+gap) - 17} y="7" width="465" height="302" rx="9" fill="#e7e9fb" opacity="0.47" />
      <text x={offset+7*(rowW+gap)} y="19" fontSize="12" fill="#2944bb" textAnchor="middle">MODEL FORECAST</text>
      {dellModel.rows.map((r,i)=>{
        const x=offset+i*(rowW+gap), hCSG=r.csg*scale,hISG=r.isg*scale,hOther=r.other*scale;
        const active = selected.year===r.year;
        return <g key={r.year}>
          <rect x={x-7} y="26" width={rowW+14} height="278" rx="8" fill={active?"#fff9da":"transparent"} opacity=".7" />
          <rect x={x} y={bottom-hCSG} width={rowW} height={hCSG} fill={colors.csg}/>
          <rect x={x} y={bottom-hCSG-hISG} width={rowW} height={hISG} fill={colors.isg}/>
          {r.other>0&&<rect x={x} y={bottom-hCSG-hISG-hOther} width={rowW} height={hOther} fill={colors.other}/>}
          <text x={x+rowW/2} y="324" fontSize="13" fontWeight={active?"700":"400"} fill="#2b2460" textAnchor="middle">{String(r.year).slice(2)}{r.kind==="forecast"?"E":"A"}</text>
          {active&&<text x={x+rowW/2} y={bottom-(r.revenue*scale)-10} fontSize="15" fill="#1736c5" fontWeight="700" textAnchor="middle">{(r.revenue/1000).toFixed(1)}</text>}
        </g>;
      })}
      <line x1="46" x2="986" y1={bottom} y2={bottom} stroke="#b1aabc" />
    </svg></div>
    <div className="dm-year-picker" aria-label="Explore forecast years">{[2025,2026,2027,2028,2029,2030].map(y=><button key={y} type="button" aria-pressed={y===year} className={y===year?"is-active":""} onClick={()=>setYear(y)}>FY{y}{y>2025?"E":"A"}</button>)}</div>
    <div className="dm-year-stats"><div><span>ISG</span><strong>{formatBn(selected.isg)}</strong></div><div><span>CSG</span><strong>{formatBn(selected.csg)}</strong></div><div><span>consolidated</span><strong>{formatBn(selected.revenue)}</strong></div></div>
    <p className="dm-chart-footnote">Source: original model, Drivers!D14:M21. FY2021–FY2025 historical model inputs; FY2026–FY2030 original forecasts, <em>not realised results</em>. The historical “Other” revenue line is set to zero in the forward segment build—comparisons across the boundary require caution.</p>
  </div>;
}

const bars = [
  { label: "DCF / Gordon growth", detail: "11.05% WACC · 2.0% terminal growth", value: dellModel.methods[0].price },
  { label: "DCF / exit multiple", detail: "7.03× terminal FY2030E EBITDA", value: dellModel.methods[1].price },
  { label: "Relative valuation", detail: "7.03× NTM EV/EBITDA peer median", value: dellModel.methods[2].price },
];

export function DellValuationBars() {
  const [active, setActive] = useState(0);
  return <div className="dm-valuation-viz">
    <div className="dm-valuations-guide"><span>$0</span><span>$50</span><span>$100</span><span>$150</span></div>
    {bars.map((bar,i)=><button key={bar.label} type="button" className={`dm-valuation-line ${i===active?"is-active":""}`} aria-pressed={i===active} onClick={()=>setActive(i)}>
      <span className="dm-valuation-row-label"><strong>{bar.label}</strong><small>{bar.detail}</small></span>
      <span className="dm-valuation-track"><span className="dm-valuation-ref" style={{left:`${dellModel.referencePrice/150*100}%`}}/><span className="dm-valuation-fill" style={{width:`${bar.value/150*100}%`}}/><span className="dm-valuation-dot" style={{left:`${bar.value/150*100}%`}}/></span>
      <strong className="dm-valuation-number">{formatUSD(bar.value)}</strong>
    </button>)}
    <div className="dm-weighted-result"><div><span>the original blended target</span><strong>{formatUSD(dellModel.targetPrice)}</strong><small>⅓ Gordon growth + ⅓ exit multiple + ⅓ relative valuation</small></div><div><span>historical upside</span><strong>+{(dellModel.upside*100).toFixed(1)}%</strong><small>versus {formatUSD(dellModel.referencePrice)} at the model's valuation date</small></div></div>
    <p className="dm-chart-footnote">Source: Football Field!J11:J17 and Valuation!C68, F68, D103. The graphic shows the original model's values; the methods are alternative estimates, not independent probabilities.</p>
  </div>;
}

function heatColor(price: number) {
  if(price<96) return "#f4d7e1";
  if(price<110) return "#f8e6eb";
  if(price<120) return "#f9f1dc";
  if(price<135) return "#dbe7ff";
  if(price<150) return "#b9cff9";
  return "#8ca9ec";
}

export function DellSensitivity() {
  const [method,setMethod] = useState<"tgr"|"emm">("tgr");
  const [active,setActive] = useState<string>("2:2");
  const colValues = method==="tgr" ? [0.01,0.015,0.02,0.025,0.03] : [5.032613,6.032613,dellModel.exitMultiple,8.032613,9.032613];
  const rates = [-.02,-.01,0,.01,.02].map(offset=>dellModel.wacc+offset);
  const rows = rates.map((rate,i) => ({rate, cells: colValues.map((driver,j)=>{
    const found = dellModel.sensitivity.find(x=>x.method===method&&Math.abs(x.wacc-rate)<.00001&&Math.abs(x.driver-driver)<.00001);
    if(!found) throw Error(`Missing audited sensitivity ${method}/${i}/${j}`);
    return {price:found.price,base:found.base,driver};
  })}));
  const [r,c]=active.split(":").map(Number);
  const chosen = rows[r]?.cells[c] ?? rows[2].cells[2];
  return <div className="dm-sensitivity-widget">
    <div className="dm-switcher"><button type="button" onClick={()=>{setMethod("tgr");setActive("2:2")}} aria-pressed={method==="tgr"} className={method==="tgr"?"is-active":""}>Terminal growth</button><button type="button" onClick={()=>{setMethod("emm");setActive("2:2")}} aria-pressed={method==="emm"} className={method==="emm"?"is-active":""}>Exit multiple</button></div>
    <div className="dm-sensitivity-scroll"><div className="dm-sensitivity-grid" role="group" aria-label="Historical model valuation sensitivity, select a scenario">
      <span className="dm-sensitivity-head dm-sensitivity-corner">WACC ↓ / {method==="tgr"?"TGR":"exit multiple"} →</span>
      {colValues.map((value,i)=><span key={i} className="dm-sensitivity-head">{method==="tgr"?`${(value*100).toFixed(1)}%`:`${value.toFixed(1)}×`}</span>)}
      {rows.map((row,i)=><div key={i} className="dm-sensitivity-row">
        <span className="dm-sensitivity-head">{(row.rate*100).toFixed(1)}%</span>
        {row.cells.map((value,j)=><button key={`${i}:${j}`} type="button" className={`dm-sensitivity-cell ${value.base?"is-base":""} ${active===`${i}:${j}`?"is-selected":""}`} style={{background:heatColor(value.price)}} onClick={()=>setActive(`${i}:${j}`)} aria-label={`${method==="tgr"?"Terminal growth rate":"Exit multiple"} ${method==="tgr"?(value.driver*100).toFixed(1)+" percent":value.driver.toFixed(1)+" times"}, WACC ${(row.rate*100).toFixed(1)} percent, price ${formatUSD(value.price)}`} aria-pressed={active===`${i}:${j}`}>{value.price.toFixed(1)}{value.base&&<span className="dm-base-star" aria-hidden="true">✳</span>}</button>)}
      </div>)}
    </div></div>
    <div className="dm-sensitivity-readout"><span>selected price scenario</span><strong>{formatUSD(chosen.price)}</strong><small>{method==="tgr"?"DCF Gordon growth":"DCF exit multiple"} · WACC {((rows[r]?.rate ?? dellModel.wacc)*100).toFixed(1)}% · {method==="tgr"?`TGR ${(chosen.driver*100).toFixed(1)}%`:`${chosen.driver.toFixed(1)}× exit EBITDA`}</small></div>
    <p className="dm-chart-footnote"><strong>Recomputed, not copied.</strong> The original workbook's Excel sensitivity-table caches contain repeated base-case values. This interactive grid independently evaluates the original FCFF, discount periods, debt/cash bridge and terminal-value formulas at each assumption pair. It is a reconstruction of the archived model, not a refreshed forecast.</p>
  </div>;
}

export function DellPcChart() {
  const picks = dellModel.rows.filter(row=>row.year>=2025);
  const base = picks[0];
  return <div className="dm-pc-mini-panel">
    <div className="dm-pc-meta"><span>FY2025A</span><span>FY2030E</span></div>
    <div className="dm-pc-compare"><div><span>PC units</span><strong>{base.pcUnits?.toFixed(1)}m <i>→</i> {picks[picks.length-1].pcUnits?.toFixed(1)}m</strong><small>modeled Dell units</small></div><div><span>PC average selling price</span><strong>${base.pcAsp?.toFixed(0)} <i>→</i> ${picks[picks.length-1].pcAsp?.toFixed(0)}</strong><small>USD / unit, model forecast</small></div><div><span>CSG revenue</span><strong>{formatBn(base.csg)} <i>→</i> {formatBn(picks[picks.length-1].csg)}</strong><small>forecast, not realised</small></div></div>
    <div className="dm-pc-indexes"><div className="dm-pc-track"><span>units <strong>1.06×</strong></span><div style={{width:`${Math.min(100,(picks[picks.length-1].pcUnits??0)/(base.pcUnits??1)*100/1.3)}%`}}/></div><div className="dm-pc-track"><span>ASP <strong>1.15×</strong></span><div style={{width:`${Math.min(100,(picks[picks.length-1].pcAsp??0)/(base.pcAsp??1)*100/1.3)}%`}}/></div></div>
    <p className="dm-chart-footnote">Source: original model, Drivers!H188:M192. These are FY2025 model historical inputs and FY2030 model assumptions. The 2025 thesis also discussed Windows 10 end-of-support on October 14, 2025 (original deck, p. 8).</p>
  </div>;
}
