import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CreativeShell } from "@/components/creative-shell";
import { CreativeProjectArt } from "@/components/creative-project-art";
import { DynamicFactorReport } from "@/components/dynamic-factor-report";
import { DellOriginalReport } from "@/components/dell-original-report";
import { creativeProjects, getCreativeProject } from "@/data/creative-projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return creativeProjects.map(({slug})=>({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const project = getCreativeProject((await params).slug);
  return { title: `${project?.title ?? "Project"} | Christi`, description: project?.short };
}

export default async function WorkDetailPage({params}: Props) {
  const project = getCreativeProject((await params).slug);
  if (!project) notFound();
  if (project.slug === "dynamic-factor-timing") {
    return <CreativeShell current="/work"><DynamicFactorReport /></CreativeShell>;
  }
  if (project.slug === "dell-equity-thesis") {
    return <CreativeShell current="/work"><DellOriginalReport /></CreativeShell>;
  }
  const nextProject = creativeProjects[(creativeProjects.findIndex((item) => item.slug === project.slug) + 1) % creativeProjects.length];
  return <CreativeShell current="/work">
    <article className="cp-detail-page">
      <Link href="/work" className="cp-back">← back to all the things i've made</Link>
      <div className="cp-detail-hero">
        <div className="cp-detail-head"><span className="cp-kicker">{project.categoryLabel} / {project.year}</span><h1>{project.title}<span aria-hidden="true">.</span></h1><p>{project.intro}</p>
          <div className="cp-project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="cp-detail-cover"><CreativeProjectArt visual={project.visual}/></div>
      </div>
      <div className="cp-detail-body">
        <aside className="cp-detail-aside"><span>PROJECT FILE / {project.number}</span><div>✶<br/><small>{project.kind}</small></div><p>{project.eyebrow}</p></aside>
        <div className="cp-detail-article">
          <section><span className="cp-story-index">01 / THE QUESTION</span><h2>where it started</h2><p>{project.why}</p></section>
          <section><span className="cp-story-index">02 / THE MAKING</span><h2>what i worked on</h2><ul>{project.built.map((item,i)=><li key={i}>{item}</li>)}</ul></section>
          <section><span className="cp-story-index">03 / IN HINDSIGHT</span><h2>what i learned</h2><p>{project.learn}</p></section>
          <aside className="cp-detail-note"><span>little footnote ♡</span><p>{project.note}</p></aside>
          <div className="cp-detail-actions">{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="cp-primary-action">{project.sourceLabel ?? "view the source"} ↗</a>}<Link href="/work" className="cp-secondary-action">back to the archive ↗</Link></div>
        </div>
      </div>
      <Link className="cp-next-project" href={`/work/${nextProject.slug}`}><span>CONTINUE EXPLORING ✳</span><strong>{nextProject.title} <i>↗</i></strong></Link>
    </article>
  </CreativeShell>;
}
