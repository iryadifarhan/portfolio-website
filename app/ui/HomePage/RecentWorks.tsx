import Image from "next/image";
import Link from "next/link";
import { Work } from "../../data/works";
import { ArrowRightIcon } from "lucide-react";

export default function RecentWorks({ works } : { works: Work[] }) {
  const recent = [...works]
    .sort((a, b) => b.year - a.year)
    .slice(0, 2);

  return (
    <section id="work" aria-label="Recent work" className="text-foreground w-full">
      <div className="px-8 py-15 md:py-20 border-t border-black/10 dark:border-white/10">
        <div className="mb-6 md:mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My Recent Works</h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-black/10 dark:border-white/10 bg-foreground/5 hover:bg-foreground/10 transition whitespace-nowrap"
          >
            View all
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {recent.map((w) => (
            <li key={w.slug}>
              <Link
                href={`/work/${w.slug}`}
                className="group block rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 hover:shadow-lg transition-shadow duration-600 ease-out bg-foreground/5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={w.cover}
                    alt={w.title}
                    fill
                    className="object-cover transition duration-600 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 560px, 100vw"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-40px_80px_-40px_rgba(0,0,0,.35)]"></div>
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">{w.title}</h3>
                  {w.tags?.length ? (
                    <span className="mt-1 text-sm text-foreground/60">{w.tags.slice(0,4).join(" · ")}</span>
                  ) : null}
                  {w.tags?.length > 4 && (
                    <span className="mt-1 text-sm text-foreground/60"> · and more!</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
