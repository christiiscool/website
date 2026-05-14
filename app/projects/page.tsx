import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Quant projects, dashboards, and research systems."
        description="Reusable project cards for Python notebooks, data products, systematic trading tools, AI sentiment engines, and market dashboards."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
