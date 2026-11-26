/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CreativeProject, ProjectVisual } from "@/data/creative-projects";

const A = "/art/archi";

export function HomeCollage() {
  return <div className="aw-world" aria-label="A personal collection of photographs and keepsakes">
    <div className="aw-locker aw-locker-one" aria-hidden="true"/><div className="aw-locker aw-locker-two" aria-hidden="true"/><div className="aw-locker aw-locker-three" aria-hidden="true"/>
    <div className="aw-deco aw-deco-cd" aria-hidden="true"><div className="aw-disc-label"><b>CHRISTI FM</b><span>little things / 01</span></div></div>
    <img className="aw-deco aw-deco-star" src={`${A}/star-charm.svg`} alt=""/>
    <img className="aw-deco aw-deco-cherries" src={`${A}/cherry-charm.svg`} alt=""/>
    <img className="aw-deco aw-deco-flower" src={`${A}/flower-keychain.svg`} alt=""/>
    <img className="aw-deco aw-deco-dice" src={`${A}/dice.svg`} alt=""/>
    <div className="aw-deco aw-deco-ticket" aria-hidden="true"><span>ONE WAY / SOMEWHERE</span><b>SEA -- ANYWHERE</b><i>PASSENGER: CHRISTI</i></div>
    <Link href="/about" className="aw-object aw-film" aria-label="See Christi's personal photographs and story">
      <div className="aw-film-holes" aria-hidden="true"/>
      <div className="aw-film-images"><img src={`${A}/selfie.webp`} alt="Christi taking a selfie"/><img src={`${A}/paris.webp`} alt="Christi visiting Paris"/></div>
      <div className="aw-film-holes" aria-hidden="true"/>
      <span className="aw-object-hint">my little photo roll</span>
    </Link>
    <Link href="/about" className="aw-object aw-polaroid" aria-label="Read about Christi">
      <div className="aw-polaroid-picture"><img src={`${A}/flower-shop.webp`} alt="Christi by a green flower-shop doorway"/></div>
      <span>somewhere sunny &#9825;</span>
    </Link>
    <Link href="/about" className="aw-object aw-camcorder" aria-label="Open Christi's photo journal">
      <div className="aw-cam-back" aria-hidden="true"/><div className="aw-cam-lens" aria-hidden="true"/>
      <div className="aw-cam-screen"><img src={`${A}/birthday.webp`} alt="Christi at her birthday celebration"/><span className="aw-rec">REC <i/></span><small>PLAY &#9656; 2025</small></div>
      <div className="aw-cam-label">handycam <span>01</span></div>
      <span className="aw-object-hint">press play on my memories</span>
    </Link>
    <div className="aw-world-copy"><span className="aw-world-eyebrow">a collection of moments / work / wonder</span><h1>Christi<span aria-hidden="true">.</span></h1><p>Hi, I'm Christi! I like understanding markets, building little things with code, climbing rocks and collecting memories along the way.</p><div className="aw-world-links"><Link href="/work">come explore <span aria-hidden="true">&#8599;</span></Link><Link href="/about">a bit about me <span aria-hidden="true">&#8599;</span></Link></div></div>
    <span className="aw-handwritten aw-handwritten-one" aria-hidden="true">hello there!</span>
    <span className="aw-handwritten aw-handwritten-two" aria-hidden="true">life lately &#9825;</span>
    <span className="aw-world-index" aria-hidden="true">VOL. 01 / WELCOME</span>
  </div>;
}

export function ProjectArtifact({visual}: {visual:ProjectVisual}) {
  switch (visual) {
    case "passport": return <div className="aw-art-object aw-art-passport">
      <div className="aw-passport"><span>PASSPORT</span><div className="aw-passport-globe">&#10035;</div><strong>pixel<br/>passport</strong><small>little adventures, big plans</small></div>
      <div className="aw-passport-ticket"><span>BOARDING PASS</span><b>SG &#8594; EVERYWHERE</b><i>seat 21A / window please</i></div><div className="aw-passport-stamp">NEXT<br/>STOP &#10022;</div>
    </div>;
    case "factor": return <div className="aw-art-object aw-art-factor">
      <div className="aw-factor-note"><span>RESEARCH / 02</span><h3>finding<br/>a signal.</h3><div className="aw-factor-chart"><img src="/art/qf/factor_heatmap.webp" alt="An actual factor weights heatmap from the research report"/></div><small>walk-forward / factor allocations</small></div><span className="aw-factor-scribble">what holds up<br/>out of sample?</span><div className="aw-factor-pin" aria-hidden="true"/>
    </div>;
    case "roostoo": return <div className="aw-art-object aw-art-bot"><div className="aw-bot-screen"><div className="aw-bot-top">&#9679; &#9679; &#9679; <span>mock-exchange // terminal</span></div><p>&gt; system.checks()</p><strong>signal: WATCH</strong><p>&gt; risk.validate()</p><span className="aw-bot-status">[ SIMULATION ONLY ]</span><i>_</i></div><div className="aw-bot-base"/><span className="aw-bot-sticker">bot notes / 003</span></div>;
    case "alpha": return <div className="aw-art-object aw-art-alpha"><div className="aw-alpha-page"><span>THOUGHTS ON / BEHAVIOUR</span><h3>where does<br/><em>alpha</em><br/>come from?</h3><div className="aw-alpha-loop" aria-hidden="true">&#8704; &#8594; &#945; &#8594; ?</div><p>attention, beliefs &amp; all the messy little things.</p></div><div className="aw-alpha-stamp">A LITTLE<br/>RESEARCH</div></div>;
    case "fundos": return <div className="aw-art-object aw-art-fund"><div className="aw-fund-folder"><span>ARCHIVE / SYSTEMS</span><h3>fund<br/>os.</h3><div className="aw-fund-paper"><b>DECISION LOG</b><p>01 / thesis</p><p>02 / risk</p><p>03 / review</p><span>DO NOT SKIP &#10003;</span></div></div><div className="aw-fund-tab">PERSONAL WORKSPACE</div></div>;
    case "dell": return <div className="aw-art-object aw-art-dell"><div className="aw-dell-paper"><small>2025 / ORIGINAL EQUITY RESEARCH</small><div className="aw-dell-server" aria-hidden="true"><i/><i/><i/><i/></div><h3>the real<br/><em>DELL.</em></h3><p>the direct model / the tariff test / the refresh</p><span className="aw-dell-target">HISTORICAL PT $115.56</span></div><div className="aw-dell-clasp" aria-hidden="true"/></div>;
  }
}

export function ProjectExhibit({project,index}:{project:CreativeProject,index:number}){
 return <Link className={`aw-project aw-project-${project.visual}`} href={`/work/${project.slug}`} aria-label={`Explore ${project.title}`}>
   <div className="aw-project-visual"><ProjectArtifact visual={project.visual}/><span className="aw-project-open" aria-hidden="true">open project &#8599;</span></div>
   <div className="aw-project-info"><div><span className="aw-project-meta">{project.number} / {project.categoryLabel} / {project.year}</span><h3>{project.title}</h3><p>{project.short}</p></div><span className="aw-project-arrow" aria-hidden="true">&#8599;</span></div>
 </Link>;
}
