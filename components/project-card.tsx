import { ExternalLink, GitBranch } from "lucide-react";
import { ProjectItem } from "@/data/site";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] shadow-[0_18px_45px_rgba(24,59,43,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#183b2b]/25 hover:shadow-[0_24px_60px_rgba(24,59,43,0.12)]">
      <div className="border-b border-[#111713]/10 bg-[linear-gradient(135deg,#d8e4c9,#f7f3e8)] p-5">
        <div className="rounded-[22px] border border-[#111713]/10 bg-[#f8f6ec]/85 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-[#667064]">
              Dashboard
            </span>
            <span className="rounded-full bg-[#c8ff5a] px-2.5 py-1 text-xs font-semibold text-[#111713]">
              {item.metric}
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-10/12 rounded-full bg-[#183b2b]/30" />
            <div className="h-2 w-7/12 rounded-full bg-[#183b2b]/18" />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[62, 84, 48, 72].map((height) => (
                <div key={height} className="flex h-20 items-end rounded-2xl bg-[#183b2b]/8 p-1">
                  <div
                    className="w-full rounded-xl bg-[#183b2b]/70"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[#111713]">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#667064]">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#111713]/10 bg-[#edf3dc] px-2.5 py-1 text-xs text-[#344238]"
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
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#111713]/15 px-3 text-sm font-semibold text-[#183b2b] transition hover:border-[#111713]/30 hover:bg-[#edf3dc]"
          >
            <GitBranch size={16} />
            GitHub
          </a>
          <a
            href={item.demoUrl}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#183b2b] px-3 text-sm font-semibold text-[#f7f3e8] transition hover:bg-[#111713]"
          >
            <ExternalLink size={16} />
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
