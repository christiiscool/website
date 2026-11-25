import type { Metadata } from "next";
import { CreativeShell } from "@/components/creative-shell";
import { CreativeProjectShowcase } from "@/components/creative-project-showcase";

export const metadata: Metadata = { title: "Things I've Made | Christi's Corner", description: "A playful collection of research, code, travel projects, trading experiments and things I've made." };

export default function WorkPage() {
  return <CreativeShell current="/work">
    <div className="cp-page-hero cp-work-hero">
      <div className="cp-hero-copy"><p className="cp-kicker">WELCOME TO MY LITTLE WORKBENCH ✳</p>
        <h1>things i've<br/><em>made.</em></h1>
        <p className="cp-lead">a collection of rabbit holes, code experiments, investment questions &amp; ideas that actually made it out of my notebook.</p>
      </div>
      <div className="cp-work-decor" aria-hidden="true">
        <span className="cp-work-decor-star">✳</span>
        <div className="cp-work-decor-note">ideas are <em>meant</em><br/>to be tried <span>↗</span></div>
        <div className="cp-work-decor-ticket"><small>ARCHIVE NO. 01—06</small><strong>made<br/>with curiosity</strong><span>✿ ✿ ✿</span></div>
      </div>
    </div>
    <section className="cp-listing" aria-labelledby="selected-projects-title">
      <div className="cp-section-heading"><span>01 / THE ARCHIVE</span><h2 id="selected-projects-title">pick a little rabbit hole <span aria-hidden="true">↘</span></h2></div>
      <CreativeProjectShowcase />
    </section>
    <section className="cp-end-note"><span aria-hidden="true">✳</span><p>the best projects begin with a question i can't stop thinking about.</p><a href="/contact">have one for me? say hi ↗</a></section>
  </CreativeShell>;
}
