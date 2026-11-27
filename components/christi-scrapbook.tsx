"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cameraPhotos = [
  {
    src: "/art/photo-red.webp",
    alt: "Christi standing outside a colourful flower shop",
    caption: "01 / afternoon wandering",
  },
  {
    src: "/art/photo-paris.webp",
    alt: "Christi visiting Paris",
    caption: "02 / little postcards",
  },
] as const;

const navigation = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "/journal", label: "journal" },
  { href: "/contact", label: "contact" },
];

function GoldenStar() {
  return (
    <svg viewBox="0 0 180 195" role="img" aria-label="Golden star keychain" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chi-star-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff4bf" />
          <stop offset=".3" stopColor="#e1b94c" />
          <stop offset=".58" stopColor="#f8dc83" />
          <stop offset="1" stopColor="#b58a35" />
        </linearGradient>
      </defs>
      <circle cx="91" cy="18" r="12" fill="none" stroke="#9fa6ab" strokeWidth="5" />
      <path d="M90 34 L110 75 L157 80 L122 111 L132 159 L90 136 L48 159 L58 111 L23 80 L70 75 Z" fill="url(#chi-star-gold)" stroke="#ad8d44" strokeWidth="3" strokeLinejoin="round" />
      <path d="M90 43 L102 86 L144 88 L112 112 L121 146 L90 126 L59 146 L68 112 L36 88 L78 86 Z" fill="none" stroke="#fff0b1" strokeWidth="2.5" opacity=".76" />
      <path d="M90 39 L90 133" stroke="#fff9d2" strokeWidth="2" opacity=".5" />
    </svg>
  );
}

function BlueClover() {
  return (
    <svg viewBox="0 0 230 220" role="img" aria-label="Translucent blue four-leaf clover charm" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chi-clover-blue" cx="35%" cy="24%" r="86%">
          <stop offset="0" stopColor="#f3fcff" stopOpacity=".95" />
          <stop offset=".55" stopColor="#b6d5dc" stopOpacity=".86" />
          <stop offset="1" stopColor="#769ba9" stopOpacity=".92" />
        </radialGradient>
      </defs>
      <path d="M113 84 C75 34 21 64 42 105 C13 136 54 181 107 144 C143 193 199 155 179 114 C208 77 163 39 117 84 Z" fill="url(#chi-clover-blue)" stroke="#7e9fa8" strokeWidth="3.5" />
      <path d="M110 87 C103 64 83 60 72 69 M108 99 C77 102 56 115 57 134 M123 103 C146 88 162 89 172 97 M121 118 C128 144 143 155 156 152" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity=".64" />
      <circle cx="115" cy="110" r="10" fill="#91b5bc" stroke="#fff" strokeWidth="3" />
      <path d="M114 105 C118 71 131 41 144 14" stroke="#9ca3a5" strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="145" cy="15" r="11" fill="none" stroke="#a5afb4" strokeWidth="5" />
    </svg>
  );
}

/** A real layer-based composition: no opaque image-map click targets or fake desktop UI. */
export function ChristiScrapbook() {
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = cameraPhotos[frameIndex];

  return (
    <section className="chi-hero" aria-labelledby="chi-home-title">
      <header className="chi-header">
        <Link href="/" className="chi-small-mark" aria-label="Christi home">c<span>✳</span></Link>
        <nav className="chi-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => <Link key={href} href={href} aria-current={href === "/" ? "page" : undefined}>{label}</Link>)}
        </nav>
      </header>

      <div className="chi-stage">
        <div className="chi-side-number" aria-hidden="true">CHRISTI'S CORNER / 2026</div>

        <Link href="/about" className="chi-polaroid chi-hover-lift" aria-label="Meet Christi and see her photographs">
          <div className="chi-polaroid-photo"><Image src="/art/photo-paris.webp" alt="Christi on a trip to Paris" fill sizes="(max-width: 800px) 145px, 180px" priority /></div>
          <span>collecting little moments ♡</span>
        </Link>

        <div className="chi-gold-star" aria-hidden="true"><GoldenStar /></div>

        <div className="chi-title-block">
          <p className="chi-intro-label">a little corner of the internet</p>
          <h1 id="chi-home-title">Christi<span className="chi-title-period">.</span></h1>
          <p className="chi-intro-copy">hi, i'm christi! i like finding patterns in markets, people, and the world around me. stay a while &amp; look around <span aria-hidden="true">♡</span></p>
          <div className="chi-title-links"><Link href="/work">peek at my work <span aria-hidden="true">↗</span></Link><Link href="/about">get to know me <span aria-hidden="true">↗</span></Link></div>
        </div>

        <Link href="/about" className="chi-filmstrip chi-hover-lift" aria-label="A film strip of photos of Christi; open About">
          <span className="chi-filmstrip-mark">35 mm &nbsp; 〰 &nbsp; 2026</span>
          <div className="chi-film-frame"><Image src="/art/photo-red.webp" alt="Christi outside a flower shop" fill sizes="(max-width: 800px) 120px, 160px" /></div>
          <div className="chi-film-frame"><Image src="/art/photo-paris.webp" alt="Christi in Paris" fill sizes="(max-width: 800px) 120px, 160px" /></div>
          <div className="chi-film-frame"><Image src="/art/photo-red.webp" alt="" fill sizes="(max-width: 800px) 120px, 160px" /></div>
          <span className="chi-filmstrip-bottom">a few frames of my life ♡</span>
        </Link>

        <div className="chi-camcorder">
          <div className="chi-camcorder-bar"><span className="chi-rec"><i /> REC</span><span>CHRISTI_CAM / 00:06</span><span>▰▰▱</span></div>
          <div className="chi-camcorder-screen">
            <Image src={frame.src} alt={frame.alt} fill sizes="(max-width: 800px) 220px, 300px" />
            <span className="chi-camcorder-reticle" aria-hidden="true" />
            <span className="chi-camcorder-timestamp">PLAY &nbsp; ▷</span>
          </div>
          <div className="chi-camcorder-control"><span>{frame.caption}</span><button type="button" onClick={() => setFrameIndex((n) => (n + 1) % cameraPhotos.length)} aria-label="Show next photo">next frame ↻</button></div>
        </div>

        <div className="chi-clover" aria-hidden="true"><BlueClover /></div>

        <Link href="/work/dynamic-factor-timing" className="chi-research-note chi-hover-lift">
          <div className="chi-paper-clip" aria-hidden="true">⌁</div>
          <span>THE LITTLE RESEARCH FILE / 01</span>
          <strong>the market has<br /><em>moods, too.</em></strong>
          <svg viewBox="0 0 204 52" aria-hidden="true"><path d="M0 38 L19 30 L38 35 L57 21 L75 27 L94 14 L113 17 L134 6 L150 19 L170 9 L204 3" fill="none" stroke="#2142cb" strokeWidth="2.8" strokeLinecap="round" /><path d="M0 42 L30 39 L60 42 L90 35 L120 38 L150 28 L175 33 L204 25" fill="none" stroke="#d27b88" strokeWidth="2" strokeDasharray="5 5" /></svg>
          <small>illustrative sketch · read the factor study ↗</small>
        </Link>

        <Link href="/work/dell-equity-thesis" className="chi-dell-stamp chi-hover-lift"><span>FILE NO. 02 / EQUITY RESEARCH</span><strong>the real<br />DELL.</strong><small>open the 2025 thesis ↗</small></Link>

        <div className="chi-red-dice" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <span className="chi-tiny-spark chi-spark-one" aria-hidden="true">✳</span>
        <span className="chi-tiny-spark chi-spark-two" aria-hidden="true">✧</span>
        <div className="chi-key-ring" aria-hidden="true"><span /></div>
        <p className="chi-corner-caption">drag your curiosity here ↗</p>
      </div>
      <div className="chi-hero-bottom"><span>scroll to explore</span><span aria-hidden="true">↓</span><span>made of research, photos &amp; little obsessions</span></div>
    </section>
  );
}
