import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { highlights, profile, skillGroups } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A research profile shaped by markets, behaviour, and data."
        description={profile.bio}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Personal thesis"
          title="Better investment judgment comes from combining discipline with curiosity."
          description="My background spans behavioural finance, quantitative investing, AI sentiment analysis, private equity, private credit, investment research, systematic trading, and Python data science projects."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-[26px] border border-[#111713]/10 bg-[#fffaf0] p-5 shadow-[0_14px_38px_rgba(24,59,43,0.07)]">
              <item.icon size={22} className="text-[#183b2b]" />
              <p className="mt-4 text-sm font-semibold text-[#111713]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-[#111713]/10 bg-[#d8e4c9]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Working style"
            title="I like research that can survive contact with messy reality."
            description="The portfolio is structured to host rigorous notes, coded research, dashboard prototypes, investment memos, and market commentary in one coherent system."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-[26px] border border-[#111713]/10 bg-[#fffaf0] p-5">
                <group.icon size={22} className="text-[#183b2b]" />
                <h2 className="mt-5 font-semibold text-[#111713]">{group.label}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#111713]/10 bg-[#edf3dc] px-2.5 py-1 text-xs text-[#344238]"
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
    </>
  );
}
