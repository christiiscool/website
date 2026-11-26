/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CreativeShell } from "@/components/creative-shell";
import { ProjectExhibit } from "@/components/archi-objects";
import {creativeProjects} from "@/data/creative-projects";

export const metadata:Metadata={title:"Work | Christi",description:"Christi's collection of research, code, experiments and the occasional rabbit hole."};
export default function WorkPage(){return <CreativeShell current="/work">
 <section className="aw-page-title aw-work-page-title aw-content-wide"><span className="aw-page-label">01 / projects &amp; little obsessions</span><h1>the work<br/><em>archive.</em></h1><p>Some things I've built, investigated, or just really wanted to understand. Click anything that catches your eye.</p><div className="aw-work-title-objects" aria-hidden="true"><div className="aw-work-title-paper"><span>RESEARCH / LOG 001</span><strong>collecting<br/>little ideas.</strong><div className="aw-work-title-lines"><i/><i/><i/></div></div><div className="aw-work-title-photo"><img src="/art/archi/birthday.webp" alt=""/><span>work hard / play harder</span></div><img src="/art/archi/star-charm.svg" alt=""/></div></section>
 <section className="aw-projects-all aw-content-wide"><div className="aw-section-rule"><span>THE COLLECTION</span><span>06 PROJECTS / OPEN ANYTHING</span></div><div className="aw-project-grid aw-project-grid-all">{creativeProjects.map((p,i)=><ProjectExhibit key={p.slug} project={p} index={i}/>)}</div></section>
 <section className="aw-page-bottom aw-content-wide"><span>STILL CURIOUS?</span><p>The next thing is probably already taking shape in a notebook somewhere.</p><a href="mailto:christichia@gmail.com">write me a note &#8599;</a></section>
 </CreativeShell>}
