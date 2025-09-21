import { Experiences } from "../../data/experience";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

// Internal function for timeline items
function TimelineItem(props: Experiences) {
  return (
    <li className="relative pl-4 md:pl-5 left-[-4.5px]">
      <span className="absolute left-0 top-1.5 size-2 rounded-full bg-foreground/60" />
      <div className="text-sm text-foreground/60">{props.period}</div>
      <div className="flex flex-row gap-3 md:gap-4 mt-2">
        <Image src={props.image} alt={props.title} width={80} height={80} 
        className="relative flex shrink-0 object-contain rounded-full border border-black/10 size-14 md:size-16 bg-muted-background dark:bg-foreground"/>
        <div className="text">
          <div className="mt-0.5 font-medium">{props.org}</div>
          <div className="text-foreground/70 text-sm md:text-base">{props.title}</div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">{props.detail}</p>
        </div>
      </div>
    </li>
  );
}

export default function Journey({ experience, education }: { experience: Experiences[]; education: Experiences[] }) {
  return (
    <section aria-label="Journey" className="grid gap-10 lg:grid-cols-2 px-8">
        {/* Experience */}
        <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
                <Briefcase className="h-4 w-4" />
                Experience
            </div>
            <ol className="space-y-6 ml-2 border-s border-black/10 dark:border-white/10">
                {experience.map((item) => (
                    <TimelineItem key={item.title} {...item} />
                ))}
            </ol>
        </div>

        {/* Education */}
        <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
            <GraduationCap className="h-4 w-4" />
            Education
            </div>
            <ol className="space-y-6 ml-2 border-s border-black/10 dark:border-white/10">
            {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
            ))}
            </ol>
        </div>
    </section>
  );
}