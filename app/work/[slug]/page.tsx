import { notFound } from "next/navigation";
import { WORKS } from "../../data/works";
import { SKILLS } from "../../data/skills";
import { ProjectDetailCard } from "../../../app/ui/WorkViewPage/ProjectDetailCard";
import { ProjectDescription } from "../../../app/ui/WorkViewPage/ProjectDescription";
import { ProjectHeading } from "../../../app/ui/WorkViewPage/ProjectHeading";

type Params = { slug: string };

export default async function WorkDetailPage({ params }: {params: Promise<Params>}) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) return notFound();

  return (
    <article className="w-full">
      <div className="px-8 py-8 md:py-12 mt-6">
        {/* Heading & Slideshow */}
        <ProjectHeading work={work}/>

        {/* Overview + sidebar */}
        <section
          className="mt-8 md:mt-10 flex gap-10 lg:gap-12 flex-col-reverse lg:flex-row"
          aria-labelledby="project-overview-heading"
        >
          {/* Left: narrative */}
          <ProjectDescription work={work}/>

          {/* Right: quick facts card */}
          <ProjectDetailCard work={work} skills={SKILLS}/>
        </section>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}