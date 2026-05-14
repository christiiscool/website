import { ArrowRight, GitBranch, Link2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { MotionDiv, MotionSection } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { ResearchCard } from "@/components/research-card";
import { SectionHeading } from "@/components/section-heading";
import {
  experiences,
  highlights,
  profile,
  projects,
  research,
  skillGroups,
  stats,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="finance-grid relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.2),#050505_82%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Quantitative Investment Research
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/research">View research</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Explore projects
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                aria-label="GitHub"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
              >
                <GitBranch size={19} />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
              >
                <Link2 size={19} />
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40"
          >
            <div className="rounded-md border border-white/10 bg-black/60 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                    Research Monitor
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">Signals, sentiment, risk</p>
                </div>
                <span className="rounded-md bg-white/10 px-3 py-1 text-xs text-zinc-200">
                  Live draft
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-md border border-white/10 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm font-medium text-stone-100">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-44 rounded-md border border-white/10 p-4">
                <div className="flex h-full items-end gap-2">
                  {[38, 52, 44, 68, 61, 78, 56, 83, 72, 88, 69, 92].map((height) => (
                    <div key={height} className="flex-1 rounded-sm bg-white/[0.04]">
                      <div
                        className="mt-auto rounded-sm bg-stone-300/75"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {highlights.slice(0, 4).map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] p-3"
                  >
                    <item.icon size={17} className="text-zinc-300" />
                    <span className="text-sm text-zinc-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Featured research"
          title="Institutional-style notes with a data-first lens."
          description="Selected research placeholders designed for reports, memos, and publishable market analysis."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {research.slice(0, 2).map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </MotionSection>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured projects"
            title="Research tools, dashboards, and systematic workflows."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Experience snapshot"
            title="A portfolio built around market judgment and technical execution."
            description={profile.bio}
          />
          <div className="space-y-4">
            {experiences.map((item) => (
              <div key={item.role} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-stone-50">{item.role}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{item.firm}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Skills and stack" title="Finance, research, and data tooling." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-lg border border-white/10 bg-black/35 p-5">
                <group.icon size={22} className="text-stone-200" />
                <h3 className="mt-5 font-semibold text-stone-50">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
