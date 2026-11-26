/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {CreativeShell} from "@/components/creative-shell";

export const metadata:Metadata={title:"Journal | Christi",description:"Notes, open questions and thought scraps on markets, making things and life."};
const entries=[
 {id:"01",tag:"markets / attention",title:"When does a story become a signal?",copy:"Market narratives can move faster than the fundamentals underneath them. I'm interested in when attention reveals information, and when it simply amplifies a crowded belief. The challenge is separating a good story from a prediction that survives costs and out-of-sample testing.",related:"/work/behavioural-alpha",label:"related research"},
 {id:"02",tag:"making / process",title:"Making things that are actually useful",copy:"A personal tool usually starts with the problems I run into repeatedly: planning a trip, recording a decision, or comparing competing ideas. Pretty interfaces are lovely, but the useful part has to keep working after the novelty wears off.",related:"/work/pixel-passport",label:"the travel experiment"},
 {id:"03",tag:"learning / research",title:"The case for being wrong early",copy:"A backtest, thesis or experiment can look convincing if you only ask easy questions. I'm learning to write down what would disprove an idea before getting too attached to it. That's as much a behavioural lesson as a technical one.",related:"/work/dynamic-factor-timing",label:"the factor study"},
];
export default function JournalPage(){return <CreativeShell current="/journal">
 <section className="aw-page-title aw-journal-title aw-content-wide"><span className="aw-page-label">03 / notes from my brain</span><h1>little<br/><em>thoughts.</em></h1><p>An untidy collection of questions worth holding onto. More notebook than news feed.</p><img className="aw-journal-cherry" src="/art/archi/cherry-charm.svg" alt=""/></section>
 <section className="aw-journal-notes aw-content-wide"><div className="aw-section-rule"><span>PAGES FROM THE NOTEBOOK</span><span>OPEN QUESTIONS / 001-003</span></div><div className="aw-journal-grid">{entries.map((entry,i)=><article className={`aw-journal-card aw-journal-card-${i+1}`} key={entry.id}><div className="aw-journal-paper-top"><span>NOTE NO. {entry.id}</span><span>{entry.tag}</span></div><h2>{entry.title}</h2><p>{entry.copy}</p><Link href={entry.related}>open {entry.label} &#8599;</Link><span className="aw-journal-card-mark" aria-hidden="true">&#10035;</span></article>)}</div></section>
 <section className="aw-page-bottom aw-content-wide"><span>MORE TO COME</span><p>A living notebook. New ideas find their way here when they're ready.</p><Link href="/work">meanwhile, explore the projects &#8599;</Link></section>
 </CreativeShell>}
