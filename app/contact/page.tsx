/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import {CreativeShell} from "@/components/creative-shell";

export const metadata:Metadata={title:"Say hi | Christi",description:"Get in touch with Christi about research, code, travel, climbing and unexpected ideas."};
export default function ContactPage(){return <CreativeShell current="/contact">
 <section className="aw-contact-stage aw-content-wide"><span className="aw-page-label">04 / a little hello</span><h1>you've got<br/><em>mail.</em></h1><p>Have a question, project, climbing recommendation, or something wonderfully random to share? I'd love to hear it.</p>
 <div className="aw-mail-envelope" aria-hidden="true"><div className="aw-envelope-paper"><span>TO: the curious internet</span><strong>from Christi, with love</strong><i>2026 / personal mail</i></div><div className="aw-envelope-back"/><div className="aw-envelope-flap"/><div className="aw-mail-stamp">C<br/>&#10043;</div></div>
 <div className="aw-contact-actions"><a className="aw-contact-button" href="mailto:christichia@gmail.com?subject=Hello%20from%20your%20website">send me an email &#8599;</a><a href="https://www.linkedin.com/in/christichia" target="_blank" rel="noopener noreferrer">linkedin &#8599;</a><a href="https://github.com/christiiscool" target="_blank" rel="noopener noreferrer">github &#8599;</a></div>
 <img className="aw-contact-flower" src="/art/archi/flower-keychain.svg" alt=""/>
 </section>
 </CreativeShell>}
