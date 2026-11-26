import Link from "next/link";
import {CreativeShell} from "@/components/creative-shell";
import {HomeCollage, ProjectExhibit} from "@/components/archi-objects";
import {creativeProjects} from "@/data/creative-projects";

export default function HomePage(){
 const featured=[creativeProjects[0],creativeProjects[1],creativeProjects[5],creativeProjects[3]];
 return <CreativeShell current="/">
   <section className="aw-home-stage" aria-label="Welcome to Christi's website"><HomeCollage/></section>
   <section className="aw-home-intro aw-content-wide"><span className="aw-sidenote">01 / welcome, internet</span><div><h2>A little bit of <em>everything.</em></h2><p>Somewhere between an investment notebook, an experimental workbench, and a collection of things that make me happy. Feel free to poke around.</p><Link className="aw-inline-link" href="/about">more about me <span aria-hidden="true">&#8599;</span></Link></div><div className="aw-intro-flower" aria-hidden="true">&#10043;</div></section>
   <section className="aw-work-intro aw-content-wide"><div className="aw-section-rule"><span>02 / the things i've made</span><span>SELECTED WORK &#8595;</span></div><div className="aw-work-intro-title"><h2>Curiosity,<br/><em>collected.</em></h2><p>Research, coding experiments, and creative side quests. Every project starts with a question I couldn't quite leave alone.</p></div><div className="aw-project-grid aw-project-grid-home">{featured.map((p,i)=><ProjectExhibit key={p.slug} project={p} index={i}/>)}</div><div className="aw-archive-cta"><Link href="/work">see the whole archive &#8599;</Link></div></section>
   <section className="aw-home-note aw-content-wide"><div className="aw-home-note-photo"><img src="/art/archi/flower-shop.webp" alt="Christi outside a colourful green flower shop"/><span>off the clock &#9825;</span></div><div className="aw-home-note-body"><span>03 / beyond the screens</span><h2>Life's not all<br/><em>spreadsheets.</em></h2><p>When I'm not researching something, I'm climbing, visiting a new place, or collecting photos and little memories.</p><Link className="aw-inline-link" href="/about">come meet me &#8599;</Link></div><img className="aw-home-note-charm" src="/art/archi/flower-keychain.svg" alt=""/></section>
   <section className="aw-final-cta aw-content-wide"><span>A NOTE TO THE INTERNET</span><h2>have an interesting<br/><em>idea to share?</em></h2><Link href="/contact">let's talk &#8599;</Link></section>
 </CreativeShell>;
}
