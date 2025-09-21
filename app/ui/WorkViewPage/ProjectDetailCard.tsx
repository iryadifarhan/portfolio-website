import Image from "next/image";
import { Work } from "../../data/works";
import { Skill } from "../../data/skills";
import { Cloud, ExternalLink, Github } from "lucide-react";
import { LinkButton } from "./LinkButton";

export function ProjectDetailCard( {work, skills}: {work: Work, skills: Skill[]} ) {
    
    const FIRST_BUTTON = "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium py-2.5 hover:opacity-90 active:opacity-80 transition";
    const SECOND_BUTTON = "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/15 text-sm font-medium py-2.5 hover:bg-foreground/5 active:bg-foreground/10 transition";

    function buildSkillSrcMap() {
      const m = new Map<string, string>();
      for (const s of skills as Array<{ name: string; src: string }>) {
        if (s?.name && s?.src) m.set(s.name, s.src);
      }
      return m;
    }
    
    const SKILL_SRC = buildSkillSrcMap();
    
    function logoFor(tag: string): string | undefined {
      return SKILL_SRC.get(tag);
    }

    return (
        <aside className="space-y-4 md:space-y-5 flex-1">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-foreground/5 p-4 md:p-5">
              <h2 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-foreground/60">
                Project details
              </h2>
              <dl className="mt-3 space-y-2 text-sm">
                {work.company && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Target</dt>
                    <dd className="font-medium text-right">{work.company}</dd>
                  </div>
                )}
                {work.scope && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Scope</dt>
                    <dd className="font-medium text-right">{work.scope}</dd>
                  </div>
                )}
                {work.period && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Timeline</dt>
                    <dd className="font-medium text-right">{work.year}, {work.period}</dd>
                  </div>
                )}
                {work.role.length > 0 && (
                  <div className="flex flex-row justify-between gap-8">
                    <dt className="text-foreground/60 mb-1">Role</dt>
                    <dd className="text-md text-right font-semibold text-pretty">
                      {work.role.join(" — ")}
                    </dd>
                  </div>
                )}
              </dl>

              {/* Action buttons: render only what exists */}
              {(work.linkExternal || work.gitHubLink || work.cloudLink) && (
                <div className="mt-4 flex flex-col lg:flex-row gap-3 lg:gap-2 justify-between">
                  {work.linkExternal && (
                    <LinkButton link={work.linkExternal} 
                    Icon={ExternalLink}
                    text="View live project"
                    className={FIRST_BUTTON}/>
                  )}

                  {work.gitHubLink && (
                    <LinkButton link={work.gitHubLink} 
                    Icon={Github}
                    text="View GitHub repository"
                    className={work.linkExternal ? SECOND_BUTTON : FIRST_BUTTON}/>
                  )}

                  {work.cloudLink && (
                    <LinkButton link={work.cloudLink} 
                    Icon={Cloud}
                    text="View project file"
                    className={SECOND_BUTTON}/>
                  )}
                </div>
              )}
            </div>

            {/* Tags / tech chips */}
            {work.tags.length > 0 && (
              <div className="text-center mt-7">
                <h2 className="font-semibold uppercase tracking-[0.15em] text-foreground/60">Tech Stacks</h2>
                <div className="mt-3 flex flex-wrap items-start gap-3 justify-center">
                  {work.tags.map((t) => {
                    const src = logoFor(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10
                                  px-3 py-1.5 text-xs leading-5 bg-foreground/5 h-8"
                        title={t}
                      >
                        {src ? (
                          <Image
                            src={src}
                            alt={t}
                            width={18}
                            height={10}
                            className="shrink-0 object-contain"
                          />
                        ) : (
                          <span
                            aria-hidden
                            className="inline-block h-2 w-2 rounded-full bg-foreground/50"
                          />
                        )}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
    );
}