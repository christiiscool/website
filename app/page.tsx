import Link from "next/link";
import { ChristiScrapbook } from "@/components/christi-scrapbook";
import "@/styles/christi-home.css";

const projects = [
  {
    href: "/work/dynamic-factor-timing",
    number: "01",
    kind: "QUANT RESEARCH / 2026",
    title: "Dynamic Factor Timing",
    description: "Do factors behave differently when market regimes change? A walk-forward research study with an options-risk overlay.",
    className: "chi-project--factor",
    cover: "factors & feelings",
  },
  {
    href: "/work/dell-equity-thesis",
    number: "02",
    kind: "EQUITY RESEARCH / 2025",
    title: "The Real Dell",
    description: "Three original investment theses, a financial model and a valuation case—revisited as a historical research note.",
    className: "chi-project--dell",
    cover: "DELL.",
  },
  {
    href: "/work/pixel-passport",
    number: "03",
    kind: "INTERACTIVE DESIGN / 2026",
    title: "Pixel Passport",
    description: "Making travel planning feel a little more like collecting postcards and a little less like organising a spreadsheet.",
    className: "chi-project--passport",
    cover: "pixel passport",
  },
  {
    href: "/work/behavioural-alpha",
    number: "04",
    kind: "BEHAVIOURAL FINANCE / 2026",
    title: "Where Is Alpha Generated?",
    description: "Notes on investor attention, narratives, and how to distinguish a compelling story from a testable signal.",
    className: "chi-project--alpha",
    cover: "α ?",
  },
];

export default function Home() {
  return (
    <main className="chi-home" id="top">
      <a href="#chi-content" className="chi-skip">Skip to content</a>
      <ChristiScrapbook />

      <div className="chi-ticker" aria-hidden="true"><span>✳ &nbsp; interesting questions &nbsp; ✿ &nbsp; postcards from everywhere &nbsp; ♡ &nbsp; little experiments &nbsp; ✳</span></div>

      <section className="chi-story" id="chi-content" aria-labelledby="chi-story-heading">
        <div className="chi-section-id">01 / A SMALL INTRODUCTION</div>
        <div className="chi-story-copy">
          <p className="chi-eyebrow">hello, hello <span aria-hidden="true">♡</span></p>
          <h2 id="chi-story-heading">a little bit of <em>everything.</em></h2>
          <p>I&apos;m a Singapore-based student interested in behavioural finance, markets and the ideas that make us rethink what we know. I like taking a question apart, testing it, and sometimes building something small along the way.</p>
          <p>Outside the spreadsheets: climbing, travelling, collecting photos, and planning whichever adventure comes next.</p>
          <Link href="/about" className="chi-ink-link">more of my story <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="chi-story-doodle" aria-hidden="true"><span>♡</span><small>always<br />curious!</small></div>
      </section>

      <section id="selected-work" className="chi-selected-work" aria-labelledby="chi-selected-heading">
        <div className="chi-section-id">02 / MY LITTLE ARCHIVE</div>
        <div className="chi-work-heading">
          <div><p className="chi-eyebrow">ideas, but make them real ✳</p><h2 id="chi-selected-heading">things i&apos;ve <em>made.</em></h2></div>
          <p>some research, code and curious rabbit holes that turned into something tangible.</p>
        </div>
        <div className="chi-project-board">
          {projects.map((project) => (
            <Link href={project.href} key={project.href} className={`chi-project ${project.className}`}>
              <div className="chi-project-cover">
                <span className="chi-cover-stamp">{project.kind}</span>
                <strong>{project.cover}</strong>
                {project.number === "01" && <svg viewBox="0 0 440 150" aria-hidden="true"><path d="M0 108 L35 99 L70 113 L105 69 L140 78 L175 45 L210 66 L245 27 L280 45 L315 18 L350 55 L390 33 L440 12" fill="none" stroke="#2a4dcc" strokeWidth="7" strokeLinecap="round" /><path d="M0 135 L50 124 L100 127 L150 103 L210 117 L255 82 L300 95 L365 61 L440 75" fill="none" stroke="#e0a6a6" strokeWidth="5" /></svg>}
                {project.number === "02" && <div className="chi-cover-dell-foot">THE DIRECT MODEL &nbsp; / &nbsp; THE TARIFF TEST &nbsp; / &nbsp; THE REFRESH</div>}
                {project.number === "03" && <div className="chi-cover-passport-stamp" aria-hidden="true">✳<span>ST. GALLEN<br />01 / 27</span></div>}
                {project.number === "04" && <div className="chi-cover-alpha-scribble">attention ≠ information</div>}
                <span className="chi-cover-serial">CHRISTI / {project.number}</span>
              </div>
              <div className="chi-project-meta"><span>{project.number} / {project.kind}</span><span>↗</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
        <Link href="/work" className="chi-all-work">open the full archive <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="chi-final-note" aria-labelledby="chi-note-heading">
        <div className="chi-final-note-paper">
          <span>03 / LITTLE THOUGHTS</span>
          <h2 id="chi-note-heading">a page for my <em>brain.</em></h2>
          <p>questions i&apos;m thinking about, ideas i&apos;m testing, and the occasional note from somewhere beyond my desk.</p>
          <Link href="/journal">browse the journal ↗</Link>
          <span className="chi-final-note-sticker" aria-hidden="true">✳</span>
        </div>
        <div className="chi-say-hi">
          <span>04 / LETTERS ARE WELCOME</span>
          <h2>come say <em>hi!</em></h2>
          <p>About markets, projects, climbing, travel—or something entirely unexpected.</p>
          <Link href="/contact">leave me a little note ↗</Link>
        </div>
      </section>
      <footer className="chi-footer"><Link href="/">Christi<span>✳</span></Link><span>made with curiosity &amp; a little bit of chaos ♡</span><div><a href="https://github.com/christiiscool" target="_blank" rel="noopener noreferrer">github ↗</a><a href="https://www.linkedin.com/in/christichia" target="_blank" rel="noopener noreferrer">linkedin ↗</a></div></footer>
    </main>
  );
}
