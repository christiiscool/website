"use client";

import { useState } from "react";

const theses = [
  {
    number: "01", title: "Full-stack AI", short: "Integration > components", glyph: "✳",
    claim: "Enterprise AI needs a functioning system, not a pile of GPUs. Dell can deliver compute, storage, networking and deployment together.",
    market: "A low-margin server vendor exposed to AI hardware price competition.",
    variant: "An integrated solutions provider with opportunities across the surrounding infrastructure stack.",
    proof: ["AI server orders convert into ISG revenue", "Storage and broader infrastructure demand accompany compute growth", "Segment margins stabilise as the business scales"],
    break: ["AI compute becomes undifferentiated price competition", "Integration fails to translate into margins or attach sales", "AI spending slows before backlog becomes revenue"]
  },
  {
    number: "02", title: "Direct model", short: "Cost discipline + customisation", glyph: "↗",
    claim: "Build-to-order and direct customer relationships may offer advantages in inventory management, solution customisation and cash generation.",
    market: "Dell's pricing will inevitably be competed down as systems commoditise.",
    variant: "Execution and customer intimacy can partly offset hardware pricing pressure.",
    proof: ["Inventory and working-capital efficiency hold up", "ISG and consolidated margins resist competitive pressure", "Enterprise customer retention supports repeat demand"],
    break: ["Price competition erodes the advantage", "Customisation adds more cost than value", "Supply-chain interruptions weaken delivery economics"]
  },
  {
    number: "03", title: "PC refresh", short: "A cyclical earnings bridge", glyph: "⌁",
    claim: "The Windows 10 end-of-support cycle and commercial device replacement could support Dell's CSG earnings while ISG expands.",
    market: "PCs are a mature, structurally unattractive business with limited recovery potential.",
    variant: "A corporate refresh cycle can provide a near-term earnings bridge, without being the core long-term thesis.",
    proof: ["Enterprise unit demand improves", "Average selling prices and mix hold", "CSG earnings recover across major regions"],
    break: ["Corporate upgrades are postponed", "Premium AI-PC adoption remains muted", "IT spending weakness offsets the refresh"]
  }
];

export function DellThesisExplorer() {
  const [active, setActive] = useState(0);
  const thesis = theses[active];
  return (
    <div className="dell-explorer">
      <div className="dell-explorer-tabs" role="group" aria-label="Choose one of three investment thesis pillars">
        {theses.map((item, index) => (
          <button type="button" key={item.number} onClick={() => setActive(index)} aria-pressed={active === index} className={`dell-explorer-tab ${active === index ? "is-active" : ""}`}>
            <span>{item.number}</span><strong>{item.title}</strong><small>{item.short}</small>
          </button>
        ))}
      </div>
      <section className="dell-explorer-detail" aria-live="polite" aria-label={`Investment thesis: ${thesis.title}`}>
        <div className="dell-explorer-summary">
          <span className="dell-explorer-symbol" aria-hidden="true">{thesis.glyph}</span>
          <p className="dell-small-label">THE INVESTMENT ARGUMENT / {thesis.number}</p>
          <h3>{thesis.title}</h3>
          <p>{thesis.claim}</p>
        </div>
        <div className="dell-explorer-variant">
          <div className="dell-explorer-contrast"><small>THE MARKET'S NARROWER VIEW</small><p>{thesis.market}</p></div>
          <div className="dell-explorer-contrast dell-explorer-contrast-ours"><small>MY VARIANT VIEW</small><p>{thesis.variant}</p></div>
        </div>
        <div className="dell-explorer-checks">
          <div><h4><span aria-hidden="true">✳</span> What would support it?</h4><ul>{thesis.proof.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div><h4><span aria-hidden="true">×</span> What would break it?</h4><ul>{thesis.break.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
    </div>
  );
}