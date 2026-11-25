"use client";

import { useState } from "react";
import Link from "next/link";
import { creativeProjects, type ProjectCategory } from "@/data/creative-projects";
import { CreativeProjectArt } from "@/components/creative-project-art";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "everything", value: "all" },
  { label: "things i've built", value: "code" },
  { label: "markets & research", value: "markets" },
  { label: "writing", value: "writing" },
];

export function CreativeProjectShowcase() {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");
  const visible = creativeProjects.filter((p) => active === "all" || p.category === active);

  return <>
    <div className="cp-filters" role="group" aria-label="Filter projects by category">
      {filters.map((filter) => (
        <button key={filter.value} type="button" aria-pressed={active === filter.value}
          className={active === filter.value ? "cp-filter is-selected" : "cp-filter"}
          onClick={() => setActive(filter.value)}>{filter.label}</button>
      ))}
    </div>
    <div className="cp-project-grid">
      {visible.map((project, index) => (
        <Link href={`/work/${project.slug}`} key={project.slug} className={`cp-project-card ${index === 0 && active === "all" ? "cp-featured-card" : ""}`}>
          <div className="cp-project-image"><CreativeProjectArt visual={project.visual} compact /></div>
          <div className="cp-project-meta"><span>{project.number} / {project.categoryLabel}</span><span>{project.year}</span></div>
          <h2>{project.title}<span aria-hidden="true"> ↗</span></h2>
          <p>{project.short}</p>
          <div className="cp-project-tags">{project.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div>
        </Link>
      ))}
    </div>
    <p className="cp-showcase-footnote">Everything here is either a project, a research exercise, or a work in progress. The little drawings are illustrations—not fake product screenshots.</p>
  </>;
}
