import type { Metadata } from "next";
import { CreativeShell } from "@/components/creative-shell";

export const metadata: Metadata = { title: "Say Hi | Christi's Corner", description: "Get in touch with Christi about projects, research, climbing, travel or something interesting." };

export default function ContactPage(){return <CreativeShell current="/contact">
  <div className="cp-contact-hero"><p className="cp-kicker">GOT SOMETHING ON YOUR MIND? ✿</p><h1>come say<br/><em>hello!</em></h1><p>i'd love to hear about a project, an interesting investing question, a climbing recommendation — or just something you think i'd find cool.</p>
    <div className="cp-contact-links"><a className="cp-contact-primary" href="mailto:christichia@gmail.com?subject=Hello%20from%20your%20website">send me an email ↗</a><a href="https://www.linkedin.com/in/christichia" target="_blank" rel="noopener noreferrer">find me on linkedin ↗</a><a href="https://github.com/christiiscool" target="_blank" rel="noopener noreferrer">peek at my github ↗</a></div>
    <div className="cp-contact-envelope" aria-hidden="true"><div className="cp-envelope-stamp">✿</div><div className="cp-envelope-address">TO: SOMEONE CURIOUS<br/>FROM: CHRISTI ♡</div><b>WRITE SOON!</b></div>
  </div>
</CreativeShell>}
