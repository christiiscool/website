import Link from "next/link";
import "@/styles/creative-pages.css";
import "@/styles/archi-world.css";

export const creativeNavigation = [
 {label:"home",href:"/"}, {label:"work",href:"/work"}, {label:"about",href:"/about"}, {label:"journal",href:"/journal"}, {label:"say hi",href:"/contact"},
];

export function CreativeShell({children,current}:{children:React.ReactNode;current:string}){
 return <div className="creative-page aw-site">
   <a className="aw-skip" href="#main-content">Skip to content</a>
   <header className="aw-header"><Link className="aw-brand" href="/">Christi<span aria-hidden="true">*</span></Link>
     <nav className="aw-nav" aria-label="Main navigation">{creativeNavigation.map(n=><Link key={n.href} href={n.href} aria-current={current===n.href?"page":undefined}>{n.label}</Link>)}</nav>
     <details className="aw-menu"><summary>menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation">{creativeNavigation.map(n=><Link key={n.href} href={n.href} aria-current={current===n.href?"page":undefined}>{n.label}</Link>)}</nav></details>
   </header>
   <main className="aw-main" id="main-content">{children}</main>
   <footer className="aw-footer"><div className="aw-footer-top"><Link href="/" className="aw-footer-name">Christi<span>.</span></Link><span>made with curiosity &amp; a lot of little ideas</span><Link href="/contact" className="aw-footer-hello">say hello &#8599;</Link></div><div className="aw-footer-bottom"><span>personal archive / 2026</span><div><a href="https://github.com/christiiscool" target="_blank" rel="noreferrer">github &#8599;</a><a href="https://www.linkedin.com/in/christichia" target="_blank" rel="noreferrer">linkedin &#8599;</a></div><span>thanks for visiting &#10022;</span></div></footer>
 </div>;
}
