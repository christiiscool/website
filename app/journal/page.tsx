import type { Metadata } from "next";
import Link from "next/link";
import { CreativeShell } from "@/components/creative-shell";

export const metadata: Metadata = {title: "Journal | Christi", description: "Little notes and open questions about markets, behaviour, building things and life beyond a screen."};

const thinkingAbout = [
 {number:"01",tag:"markets / attention",title:"When does a story become a signal?",text:"Market narratives can travel faster than the fundamentals underneath them. I'm interested in when attention reveals information and when it simply amplifies a crowded belief. The hard part is separating that story from a prediction that survives costs and out-of-sample testing.",related:"/work/behavioural-alpha",relatedLabel:"the related research"},
 {number:"02",tag:"making / process",title:"Making things that are actually useful",text:"A personal tool starts with the problems I run into repeatedly: planning a trip, tracking a decision, or comparing two competing ideas. Pretty interfaces are lovely, but I want the useful part to work even after the novelty wears off.",related:"/work/pixel-passport",relatedLabel:"the travel experiment"},
 {number:"03",tag:"learning / research",title:"The case for being wrong early",text:"A backtest, a thesis or an experiment can look convincing if you ask it easy questions. I want to get better at writing down what would disprove an idea before I become attached to it. That's as much a behavioural lesson as a technical one.",related:"/work/dynamic-factor-timing",relatedLabel:"the factor study"},
];

export default function JournalPage(){return <CreativeShell current="/journal">
  <div className="cp-journal-hero"><p className="cp-kicker">A SCRAPBOOK OF QUESTIONS ✳</p><h1>notes from<br/><em>my brain.</em></h1><div className="cp-journal-postmark" aria-hidden="true"><span>FRAGILE<br/>THOUGHTS</span><b>✳</b></div><p>half-formed questions, interesting rabbit holes and things worth remembering. not everything needs to be a polished research paper.</p></div>
  <section className="cp-journal-list"><div className="cp-section-heading"><span>01 / LITTLE THOUGHTS</span><h2>things i'm thinking about lately</h2></div>
    {thinkingAbout.map((note)=><article className="cp-journal-note" key={note.number}><div className="cp-journal-number">{note.number}<span>✳</span></div><div><p className="cp-journal-tag">{note.tag}</p><h3>{note.title}</h3><p>{note.text}</p><Link href={note.related}>open {note.relatedLabel} ↗</Link></div></article>)}
  </section>
  <section className="cp-journal-bottom"><span>♡</span><p>a living notebook, not a news feed.<br/>more pages will find their way here.</p><Link href="/work">meanwhile, explore what i've made ↗</Link></section>
</CreativeShell>}
