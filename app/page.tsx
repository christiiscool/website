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
      <section className="finance-grid relative overflow-hidden border-b border-[#111713]/10 bg-[#f7f3e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(200,255,90,0.48),transparent_24%),radial-gradient(circle_at_10%_20%,rgba(216,228,201,0.8),transparent_30%),linear-gradient(180deg,rgba(247,243,232,0.32),#f7f3e8_86%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#59705f]">
              Quantitative Investment Research
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#111713] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445046] md:text-xl">
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
                className="grid size-11 place-items-center rounded-full border border-[#111713]/15 bg-[#fffaf0] text-[#183b2b] transition hover:border-[#111713]/30 hover:bg-[#edf3dc]"
              >
                <GitBranch size={19} />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-full border border-[#111713]/15 bg-[#fffaf0] text-[#183b2b] transition hover:border-[#111713]/30 hover:bg-[#edf3dc]"
              >
                <Link2 size={19} />
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[36px] border border-[#111713]/10 bg-[#fffaf0]/85 p-4 shadow-[0_30px_90px_rgba(24,59,43,0.18)] backdrop-blur"
          >
            <div className="rounded-[28px] border border-[#111713]/10 bg-[#f8f6ec] p-5">
              <div className="flex items-center justify-between border-b border-[#111713]/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#667064]">
                    Research Monitor
                  </p>
                  <p className="mt-2 text-sm text-[#445046]">Signals, sentiment, risk</p>
                </div>
                <span className="rounded-full bg-[#c8ff5a] px-3 py-1 text-xs font-semibold text-[#111713]">
                  Live draft
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#111713]/10 bg-[#fffaf0] p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#667064]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#111713]">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-44 rounded-[24px] border border-[#111713]/10 bg-[#fffaf0] p-4">
                <div className="flex h-full items-end gap-2">
                  {[38, 52, 44, 68, 61, 78, 56, 83, 72, 88, 69, 92].map((height) => (
                    <div key={height} className="flex-1 rounded-full bg-[#183b2b]/10">
                      <div
                        className="mt-auto rounded-full bg-[#183b2b]"
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
                    className="flex items-center gap-3 rounded-full border border-[#111713]/10 bg-[#fffaf0] p-3"
                  >
                    <item.icon size={17} className="text-[#183b2b]" />
                    <span className="text-sm text-[#445046]">{item.label}</span>
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
          description="Selected equity research, private markets analysis, and behavioural finance work drawn from deal experience, live investing, and student-managed fund research."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {research.slice(0, 2).map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </MotionSection>

      <section className="border-y border-[#111713]/10 bg-[#d8e4c9]">
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
            <div key={item.role} className="rounded-[26px] border border-[#111713]/10 bg-[#fffaf0] p-5 shadow-[0_14px_38px_rgba(24,59,43,0.07)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-[#111713]">{item.role}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#667064]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#667064]">{item.firm}</p>
                <p className="mt-3 text-sm leading-6 text-[#445046]">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#111713]/10 bg-[#183b2b]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills and stack"
            title="Finance, research, and data tooling."
            className="[&_h2]:text-[#f7f3e8] [&_p:first-child]:text-[#c8ff5a]"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-[26px] border border-[#f7f3e8]/12 bg-[#f7f3e8]/8 p-5">
                <group.icon size={22} className="text-[#c8ff5a]" />
                <h3 className="mt-5 font-semibold text-[#f7f3e8]">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#f7f3e8]/12 px-2.5 py-1 text-xs text-[#d8e4c9]"
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
