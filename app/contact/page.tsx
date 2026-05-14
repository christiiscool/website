import { GitBranch, Link2, Mail, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Reach out for research conversations, investment analysis collaborations, data projects, or opportunities in finance and AI."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="rounded-[28px] border border-[#111713]/10 bg-[#fffaf0] p-6 shadow-[0_16px_42px_rgba(24,59,43,0.08)]">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111713]">Contact details</h2>
          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-[#445046] transition hover:text-[#111713]"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-[#445046] transition hover:text-[#111713]"
            >
              <Link2 size={18} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-[#445046] transition hover:text-[#111713]"
            >
              <GitBranch size={18} />
              GitHub
            </a>
            <p className="flex items-center gap-3 text-sm text-[#445046]">
              <MapPin size={18} />
              {profile.location}
            </p>
          </div>
        </div>
        <div className="rounded-[28px] border border-[#111713]/10 bg-[#183b2b] p-6 shadow-[0_20px_60px_rgba(24,59,43,0.18)] md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c8ff5a]">Open to</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f7f3e8]">
            Investment research, systematic strategy, and AI finance conversations.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#d8e4c9]">
            Replace the placeholder email and social links in the data file, then connect a
            form provider later if you want a hosted contact form. For now, email keeps the
            site simple, fast, and Vercel-ready.
          </p>
          <ButtonLink href={`mailto:${profile.email}`} external className="mt-8">
            Email me
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
