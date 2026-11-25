/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { CreativeShell } from "@/components/creative-shell";

export const metadata: Metadata = { title: "About | Christi's Corner", description: "Meet Christi: curious about markets and behaviour, usually climbing or dreaming up another project." };

export default function AboutPage() {
  return <CreativeShell current="/about">
    <div className="cp-about-hero">
      <div className="cp-about-title"><p className="cp-kicker">HELLO, INTERNET ♡</p><h1>a little<br/><em>about me.</em></h1><p>hi! i'm christi — curious about markets, people, places and how things work. i like a good spreadsheet, a good climb and an even better detour.</p><span className="cp-hand-star" aria-hidden="true">✳</span></div>
      <div className="cp-about-photos">
        <div className="cp-photo cp-photo--red"><img src="/art/photo-red.webp" alt="Christi in a red cardigan outside a colourful flower shop"/><span>caught in the wild ✿</span></div>
        <div className="cp-photo cp-photo--paris"><img src="/art/photo-paris.webp" alt="Christi visiting Paris"/><span>postcards from paris ♡</span></div>
        <div className="cp-about-doodle" aria-hidden="true">♡<small>little<br/>moments</small></div>
      </div>
    </div>
    <section className="cp-about-story"><div className="cp-story-label">01 / THE SHORT VERSION</div><div><h2>somewhere between<br/><em>curious &amp; caffeinated.</em></h2><p>I'm studying Behavioural Finance and Asset Management at Singapore Management University. The questions that stick with me are usually about how people make decisions, why markets behave the way they do, and whether an interesting idea can be tested instead of just talked about.</p><p>My work has taken me through finance and investing teams, research projects and quite a few lines of Python. This corner of the internet is where I keep the parts I can share publicly, along with everything else I'm curious about.</p></div></section>
    <section className="cp-about-life"><div className="cp-story-label">02 / OUTSIDE THE SPREADSHEETS</div><div className="cp-life-items"><article><span>01 ✳</span><h3>up a climbing wall</h3><p>Usually trying one more move, or convincing myself a sloper is actually holdable.</p></article><article><span>02 ✿</span><h3>somewhere new</h3><p>Travelling, collecting little memories and finding excuses to take too many photos.</p></article><article><span>03 ♡</span><h3>building something</h3><p>Interactive planners, research tools, small experiments — anything that makes an idea feel real.</p></article></div></section>
    <section className="cp-about-timeline"><div className="cp-story-label">03 / A FEW CHAPTERS</div><div><h2>the winding road <em>so far.</em></h2><div className="cp-timeline-list"><div><time>2026</time><p><strong>Ontario Teachers' Pension Plan</strong><br/>Private Capital internship, with a focus on investment analysis and research.</p></div><div><time>2025</time><p><strong>Blackstone &amp; Alta Exchange</strong><br/>Experience across finance analytics, private markets and investment workflows.</p></div><div><time>2024 — now</time><p><strong>Singapore Management University</strong><br/>Behavioural finance, asset management and research through a student-managed fund.</p></div></div></div></section>
    <section className="cp-about-cta"><p>enough about me. what have <em>you</em> been working on?</p><Link href="/contact">let's talk ↗</Link></section>
  </CreativeShell>;
}
