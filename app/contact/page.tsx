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
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-50">Contact details</h2>
          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
            >
              <Link2 size={18} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
            >
              <GitBranch size={18} />
              GitHub
            </a>
            <p className="flex items-center gap-3 text-sm text-zinc-300">
              <MapPin size={18} />
              {profile.location}
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Open to</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50">
            Investment research, systematic strategy, and AI finance conversations.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
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
