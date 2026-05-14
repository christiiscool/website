import { ExternalLink, GitBranch } from "lucide-react";
import { ProjectItem } from "@/data/site";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))] p-5">
        <div className="rounded-md border border-white/10 bg-black/45 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Dashboard
            </span>
            <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-200">
              {item.metric}
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-10/12 rounded-full bg-zinc-600" />
            <div className="h-2 w-7/12 rounded-full bg-zinc-700" />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[62, 84, 48, 72].map((height) => (
                <div key={height} className="flex h-20 items-end rounded bg-white/[0.03] p-1">
                  <div
                    className="w-full rounded-sm bg-stone-300/70"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-stone-50">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            <GitBranch size={16} />
            GitHub
          </a>
          <a
            href={item.demoUrl}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-stone-100 px-3 text-sm font-medium text-zinc-950 transition hover:bg-white"
          >
            <ExternalLink size={16} />
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
