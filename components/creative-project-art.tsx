import type { ProjectVisual } from "@/data/creative-projects";

/** Original CSS objects / conceptual drawings, never a fabricated product screenshot or performance chart. */
export function CreativeProjectArt({ visual, compact = false }: { visual: ProjectVisual; compact?: boolean }) {
  return (
    <div className={`cp-art cp-art--${visual}${compact ? " cp-art--compact" : ""}`} aria-hidden="true">
      <span className="cp-art-spark cp-art-spark-one">✳</span>
      <span className="cp-art-spark cp-art-spark-two">✴</span>
      {visual === "passport" && <>
        <div className="cp-pp-ticket"><span>BOARDING PASS</span><strong>let's go<br/>somewhere.</strong><small>ADMIT ONE · 2027</small></div>
        <div className="cp-pp-book"><span>✻</span><b>pixel<br/>passport</b><i>collect little adventures</i></div>
        <div className="cp-pp-stamp">ST. GALLEN<br/><b>✺</b><small>POSTMARK</small></div>
        <div className="cp-pp-route">✈ — — — — ♡</div>
      </>}
      {visual === "factor" && <>
        <div className="cp-factor-paper">
          <span>RESEARCH NOTE / 02</span><strong>how do<br/><em>factors</em> move?</strong>
          <svg viewBox="0 0 300 130" role="img" aria-label="Decorative factor movement sketch"><path d="M4 108 L45 87 L79 97 L115 43 L149 67 L175 36 L214 61 L252 21 L293 30" fill="none" stroke="#1239d5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 119 L45 111 L79 119 L115 102 L149 106 L175 87 L214 102 L252 81 L293 86" fill="none" stroke="#e899a8" strokeWidth="4" strokeLinecap="round"/></svg>
          <small>schematic · not backtest data</small>
        </div>
        <div className="cp-factor-note">signal? <span>↗</span><br/>regime? <span>↝</span></div>
      </>}
      {visual === "roostoo" && <>
        <div className="cp-bot-window"><div className="cp-window-top"><span>● ● ●</span>bot / terminal</div><div className="cp-bot-lines"><p>&gt; loading signals...</p><p>&gt; momentum: <strong>watching</strong></p><p>&gt; risk checks: <strong>on</strong></p><p>&gt; execution: <strong>mock</strong></p><p className="cp-blink">_</p></div></div>
        <div className="cp-bot-ticket">TEST ENVIRONMENT <span>↗</span></div>
      </>}
      {visual === "alpha" && <>
        <div className="cp-alpha-paper"><span>NOTES ON BEHAVIOUR — 2026</span><strong>why do<br/>we do<br/><em>that?</em></strong><small>attention / stories / markets</small></div>
        <div className="cp-alpha-sticker">α ?</div><div className="cp-alpha-scribble">feelings ≠ facts ♡</div>
      </>}
      {visual === "fundos" && <>
        <div className="cp-os-folder"><div className="cp-os-tab">personal records</div><strong>FUND<br/><em>OS</em></strong><span>decide → review → learn</span><div className="cp-os-lines"><i/><i/><i/></div></div>
        <div className="cp-os-stamp">FILED<br/>WITH CARE</div>
      </>}
      {visual === "dell" && <>
        <div className="cp-dell-sheet"><small>ORIGINAL RESEARCH / 2025</small><strong>the real<br/><em>DELL.</em></strong><span>three theses · historical BUY · +20.9% ✳</span></div>
        <div className="cp-dell-clip">✣</div>
      </>}
    </div>
  );
}
