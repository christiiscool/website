"use client";

import { useState } from "react";

type ModelMetric = "return" | "sharpe" | "drawdown";
type HedgeMetric = "sharpe" | "return" | "drawdown";

const modelResults = [
  { name: "ElasticNet", value: "primary", return: 8.55, sharpe: 0.488, drawdown: -20.10, ic: 0.0911, r2: -0.0022 },
  { name: "Ridge", value: "linear baseline", return: 6.22, sharpe: 0.357, drawdown: -25.29, ic: 0.0624, r2: -0.0103 },
  { name: "XGBoost", value: "nonlinear", return: -5.51, sharpe: -0.322, drawdown: -43.58, ic: 0.0505, r2: -0.1961 },
] as const;

const hedges = [
  { name: "No hedge", budget: "0%", return: 8.55, sharpe: 0.488, drawdown: -20.10, activations: 0 },
  { name: "Light", budget: "0.25%", return: 8.79, sharpe: 0.504, drawdown: -19.00, activations: 5 },
  { name: "Fixed", budget: "0.50%", return: 9.05, sharpe: 0.520, drawdown: -17.89, activations: 5 },
  { name: "Mid", budget: "0.75%", return: 9.31, sharpe: 0.535, drawdown: -17.89, activations: 5 },
  { name: "High", budget: "1.00%", return: 9.56, sharpe: 0.550, drawdown: -17.89, activations: 5 },
  { name: "Highest", budget: "1.50%", return: 10.06, sharpe: 0.575, drawdown: -17.89, activations: 5 },
  { name: "Score-scaled", budget: "variable", return: 9.44, sharpe: 0.539, drawdown: -17.89, activations: 7 },
] as const;

const modelMetricInfo: Record<ModelMetric, { title: string; min: number; max: number; label: (value: number) => string; note: string }> = {
  return: { title: "Annualised net return", min: -10, max: 12, label: v => `${v.toFixed(2)}%`, note: "A model comparison over the same reported out-of-sample evaluation." },
  sharpe: { title: "Sharpe ratio", min: -0.45, max: 0.6, label: v => v.toFixed(3), note: "Higher is better. Negative values indicate poor risk-adjusted performance." },
  drawdown: { title: "Maximum drawdown", min: -50, max: 0, label: v => `${v.toFixed(2)}%`, note: "Less negative is better. The bars extend left of zero to show loss depth." },
};

function MetricButton({ active, onClick, children }: {active: boolean; onClick: ()=>void; children: React.ReactNode}) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={`qf-toggle${active ? " is-active" : ""}`}>{children}</button>;
}

export function ModelComparison() {
  const [metric,setMetric]=useState<ModelMetric>("sharpe");
  const info=modelMetricInfo[metric];
  const zero=((0-info.min)/(info.max-info.min))*100;
  return <div className="qf-interactive-panel">
    <div className="qf-panel-top">
      <div><p className="qf-small-label">INTERACTIVE / MODEL SELECTION</p><h3>Simple wins this round.</h3></div>
      <div className="qf-toggles" aria-label="Choose model comparison metric">
        <MetricButton active={metric==="sharpe"} onClick={()=>setMetric("sharpe")}>Sharpe</MetricButton>
        <MetricButton active={metric==="return"} onClick={()=>setMetric("return")}>Net return</MetricButton>
        <MetricButton active={metric==="drawdown"} onClick={()=>setMetric("drawdown")}>Max drawdown</MetricButton>
      </div>
    </div>
    <p className="qf-chart-descriptor">{info.title} · {info.note}</p>
    <div className="qf-model-chart" role="img" aria-label={`${info.title} comparison: ${modelResults.map(m=>`${m.name} ${info.label(m[metric])}`).join('; ')}`}>
      {modelResults.map((item,index)=>{
        const pct=((item[metric]-info.min)/(info.max-info.min))*100;
        const left=Math.min(zero,pct); const width=Math.abs(pct-zero);
        return <div className="qf-model-chart-row" key={item.name}>
          <div className="qf-chart-name"><strong>{item.name}</strong><small>{item.value}</small></div>
          <div className="qf-chart-track"><span className="qf-zero-line" style={{left:`${zero}%`}}/><span className={`qf-chart-bar qf-chart-bar-${index}`} style={{left:`${left}%`,width:`${Math.max(width,0.5)}%`}}/></div>
          <strong className="qf-chart-value">{info.label(item[metric])}</strong>
        </div>;
      })}
    </div>
    <div className="qf-chart-table-wrap"><table className="qf-data-table"><caption>Model diagnostics from the original QF206 written report, Appendix Table 16 and model comparison results.</caption><thead><tr><th>Model</th><th>Net return</th><th>Sharpe</th><th>Max DD</th><th>IC</th><th>OOS R²</th></tr></thead><tbody>{modelResults.map(item=><tr key={item.name}><th scope="row">{item.name}</th><td>{item.return.toFixed(2)}%</td><td>{item.sharpe.toFixed(3)}</td><td>{item.drawdown.toFixed(2)}%</td><td>{item.ic.toFixed(4)}</td><td>{item.r2.toFixed(4)}</td></tr>)}</tbody></table></div>
  </div>;
}

const hedgeMetricInfo: Record<HedgeMetric,{name:string,max:number,format:(v:number)=>string,description:string}> = {
  sharpe:{name:"Sharpe ratio",max:0.62,format:v=>v.toFixed(3),description:"Risk-adjusted return improves with larger tested premiums, but five fixed trigger months are not enough to establish robustness."},
  return:{name:"Annualised return",max:11,format:v=>`${v.toFixed(2)}%`,description:"More premium bought more upside in the two successful stress events within this test window."},
  drawdown:{name:"Drawdown magnitude",max:23,format:v=>`${v.toFixed(2)}%`,description:"Shorter bars are better. Reported drawdown reaches a floor at the 0.50% premium budget."},
};

export function HedgeComparison() {
  const [metric,setMetric]=useState<HedgeMetric>("sharpe");
  const info=hedgeMetricInfo[metric];
  return <div className="qf-interactive-panel qf-hedge-panel">
    <div className="qf-panel-top"><div><p className="qf-small-label">INTERACTIVE / HEDGE SIZING</p><h3>How much protection?</h3></div>
      <div className="qf-toggles" aria-label="Choose hedge comparison metric">
        <MetricButton active={metric==="sharpe"} onClick={()=>setMetric("sharpe")}>Sharpe</MetricButton>
        <MetricButton active={metric==="return"} onClick={()=>setMetric("return")}>Return</MetricButton>
        <MetricButton active={metric==="drawdown"} onClick={()=>setMetric("drawdown")}>Drawdown</MetricButton>
      </div>
    </div>
    <p className="qf-chart-descriptor">{info.name} · {info.description}</p>
    <div className="qf-hedge-chart" role="img" aria-label={`${info.name} by premium budget: ${hedges.map(h=>`${h.name} ${info.format(h[metric])}`).join('; ')}`}>
      {hedges.map((item,index)=><div key={item.name} className="qf-hedge-chart-row">
        <div className="qf-hedge-label"><strong>{item.budget}</strong><span>{item.name}</span></div>
        <div className="qf-hedge-track"><div className={`qf-hedge-bar${index===2 ? " qf-hedge-fixed":""}${index===6 ? " qf-hedge-scaled":""}`} style={{width:`${Math.max(2,Math.abs(item[metric])/info.max*100)}%`}}/></div>
        <strong className="qf-hedge-value">{info.format(item[metric])}</strong>
      </div>)}
    </div>
    <div className="qf-chart-table-wrap"><table className="qf-data-table"><caption>QF206 written report, Appendix Table 18. Scenario performance is simulated.</caption><thead><tr><th>Premium</th><th>Return</th><th>Sharpe</th><th>Max DD</th><th>Activations</th></tr></thead><tbody>{hedges.map(item=><tr key={item.name}><th scope="row">{item.budget} <span className="qf-table-sub">{item.name}</span></th><td>{item.return.toFixed(2)}%</td><td>{item.sharpe.toFixed(3)}</td><td>{item.drawdown.toFixed(2)}%</td><td>{item.activations}</td></tr>)}</tbody></table></div>
  </div>;
}

export const activationResults=[
  {month:"Feb 2020",warning:4.436,put:"+568.8%",base:"+0.19%",overlay:"+2.95%",worked:true},
  {month:"Mar 2022",warning:0.823,put:"+333.9%",base:"−4.54%",overlay:"−2.89%",worked:true},
  {month:"Apr 2023",warning:0.402,put:"−85.9%",base:"+6.87%",overlay:"+6.29%",worked:false},
  {month:"May 2023",warning:0.500,put:"−99.8%",base:"+4.01%",overlay:"+3.42%",worked:false},
  {month:"May 2025",warning:0.547,put:"−99.9%",base:"+4.81%",overlay:"+4.23%",worked:false},
] as const;

export function ActivationTable() {
  return <div className="qf-chart-table-wrap qf-events-table"><table className="qf-data-table">
    <caption>Fixed-overlay triggers (QF206 report, Appendix Table 17). Base gross and overlay net returns use different cost conventions; they are shown as reported, not as a like-for-like performance spread.</caption>
    <thead><tr><th>Month</th><th>Put return</th><th>Base gross</th><th>Overlay net</th><th>Reading</th></tr></thead>
    <tbody>{activationResults.map(item=><tr key={item.month}><th scope="row">{item.month}</th><td>{item.put}</td><td>{item.base}</td><td>{item.overlay}</td><td><span className={`qf-event-outcome ${item.worked?"is-protection":"is-decay"}`}>{item.worked?"stress payoff":"premium decay"}</span></td></tr>)}</tbody>
  </table></div>;
}
