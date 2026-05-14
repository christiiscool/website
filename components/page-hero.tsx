import { MotionDiv } from "@/components/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[#111713]/10 bg-[radial-gradient(circle_at_top_left,rgba(200,255,90,0.42),transparent_32%),linear-gradient(135deg,#f7f3e8,#d8e4c9)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#111713] md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#526058]">{description}</p>
        </MotionDiv>
      </div>
    </section>
  );
}
