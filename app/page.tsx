/* eslint-disable @next/next/no-img-element */
import "../styles/artboard-home.css";

const navigation = [
  { label: "home", href: "#top", left: 64.4, width: 5.5 },
  { label: "about", href: "/about", left: 70.8, width: 5.6 },
  { label: "my work", href: "/work", left: 77.0, width: 6.9 },
  { label: "journal", href: "/journal", left: 84.5, width: 7.3 },
  { label: "say hi", href: "/contact", left: 92.2, width: 6.0 },
];

const selectedWork = [
  {
    number: "01",
    type: "quantitative research / 2026",
    title: "Dynamic Factor Timing",
    description:
      "A walk-forward study of machine-learning factor allocation and an options-based risk overlay.",
    href: "/work/dynamic-factor-timing",
  },
  {
    number: "02",
    type: "behavioural finance / 2026",
    title: "Where Is Alpha Truly Generated?",
    description:
      "Exploring investor behaviour, information frictions and the search for systematic alpha.",
    href: "/work/behavioural-alpha",
  },
  {
    number: "03",
    type: "other things i've built",
    title: "Pixel Passport & Other Experiments",
    description:
      "A playful travel planner, trading experiments and things I’ve been making.",
    href: "/work/pixel-passport",
  },
];

export default function Home() {
  return (
    <div className="artboard-home" id="top">
      <a className="artboard-skip" href="#about">
        Skip to content
      </a>
      <section className="artboard-hero" aria-label="Christi's personal corner of the internet">
        <div className="artboard-desktop">
          <img
            className="artboard-full-hero"
            src="/art/hero-collage.webp"
            width={1536}
            height={1024}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <div className="artboard-sr-only">
            <h1>Christi</h1>
            <p>
              Markets, code, climbing and collecting interesting experiences. A little
              place for my research, projects and the rest of life.
            </p>
          </div>
          <nav aria-label="Homepage navigation">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="artboard-spot"
                href={item.href}
                style={{ left: `${item.left}%`, top: "2.7%", width: `${item.width}%`, height: "5.1%" }}
              >
                <span className="artboard-sr-only">{item.label}</span>
              </a>
            ))}
          </nav>
          <a
            className="artboard-spot"
            href="/work"
            style={{ left: "5.3%", top: "55.8%", width: "17.6%", height: "8.0%" }}
          >
            <span className="artboard-sr-only">Explore my work</span>
          </a>
          <a
            className="artboard-spot"
            href="/about"
            style={{ left: "7.0%", top: "65.0%", width: "14.8%", height: "5.3%" }}
          >
            <span className="artboard-sr-only">Get to know me</span>
          </a>
        </div>

        <div className="artboard-mobile">
          <header className="artboard-mobile-header">
            <a href="#top" className="artboard-mobile-brand">christi ✳</a>
            <details className="artboard-mobile-menu">
              <summary>menu <span aria-hidden="true">＋</span></summary>
              <nav aria-label="Mobile navigation">
                <a href="#top">home</a>
                <a href="/about">about</a>
                <a href="/work">my work</a>
                <a href="/journal">journal</a>
                <a href="/contact">say hi</a>
              </nav>
            </details>
          </header>
          <div className="artboard-mobile-intro">
            <div className="artboard-mobile-star" aria-hidden="true">☆</div>
            <h1>Christi<span className="artboard-dot">.</span></h1>
            <p className="artboard-mobile-tagline">
              markets, code, climbing &amp;<br /> collecting interesting experiences ♡
            </p>
            <div className="artboard-mobile-actions">
              <a className="artboard-mobile-oval" href="/work">explore my work <span aria-hidden="true">→</span></a>
              <a className="artboard-mobile-plain" href="/about">get to know me <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="artboard-mobile-collage">
            <img
              src="/art/hero-mobile-collage.webp"
              width={946}
              height={937}
              loading="eager"
              alt="A nostalgic collage of Christi's birthday in a retro camcorder, a black-and-white photo filmstrip, a Paris postcard, pink stickers and keepsakes."
            />
          </div>
        </div>
      </section>

      <div className="artboard-ticker" aria-hidden="true">✳ &nbsp; photos, thoughts &amp; little things &nbsp; ♡ &nbsp; ✳</div>

      <section id="about" className="artboard-section artboard-about">
        <div className="artboard-index">01 / WHO'S THIS?</div>
        <div className="artboard-section-main">
          <p className="artboard-overline">a little introduction ♡</p>
          <h2>hi, i'm christi.<br /><em>nice to meet you!</em></h2>
          <p>
            I&apos;m a Singapore-based student who likes asking questions about markets,
            people and the way the world works. I love turning interesting ideas into
            research and small things I can actually build.
          </p>
          <p>
            When I&apos;m away from my laptop, I&apos;m probably climbing, travelling,
            taking photos or planning my next little adventure.
          </p>
          <a href="/about" className="artboard-text-link">a bit more about me <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="work" className="artboard-section artboard-work">
        <div className="artboard-index">02 / THE WORK FILES</div>
        <div className="artboard-section-main">
          <p className="artboard-overline">things i've made ✳</p>
          <h2>curiosity, but<br /><em>make it a project.</em></h2>
          <p>Some research, code and ideas that made it out of my head and onto a page.</p>
          <div className="artboard-work-list">
            {selectedWork.map((item) => (
              <a href={item.href} className="artboard-work-item" key={item.number}>
                <span className="artboard-work-number">{item.number}</span>
                <span className="artboard-work-description">
                  <small>{item.type}</small>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </span>
                <span className="artboard-work-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="artboard-section artboard-journal">
        <div className="artboard-index">03 / LITTLE NOTES</div>
        <div className="artboard-section-main">
          <p className="artboard-overline">pages from my brain ✿</p>
          <h2>the little<br /><em>thought archive.</em></h2>
          <p>
            A place for everything worth remembering: questions I&apos;m exploring,
            market notes and occasional stories beyond my desk.
          </p>
          <a href="/journal" className="artboard-text-link">browse my notes <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="contact" className="artboard-section artboard-contact">
        <div className="artboard-index">04 / SAY HELLO</div>
        <div className="artboard-section-main">
          <p className="artboard-overline">you made it to the end! ♡</p>
          <h2>come say <em>hi!</em></h2>
          <p>About markets, projects, travel plans, climbing—or anything interesting.</p>
          <a className="artboard-contact-button" href="mailto:christichia@gmail.com">send me a little note <span aria-hidden="true">↗</span></a>
          <div className="artboard-socials">
            <a href="https://github.com/christiiscool" target="_blank" rel="noreferrer">github ↗</a>
            <a href="https://www.linkedin.com/in/christichia" target="_blank" rel="noreferrer">linkedin ↗</a>
          </div>
        </div>
      </section>
      <footer className="artboard-footer">christi's corner ✳ <span>made with little moments ♡</span></footer>
    </div>
  );
}
