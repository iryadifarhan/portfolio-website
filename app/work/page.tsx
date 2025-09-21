// app/work/page.tsx
import Image from "next/image";
import Link from "next/link";
import { WORKS, type Work } from "../data/works";
import PageHeader from "../ui/PageHeader";

function WorkCard({ w }: { w: Work }) {
  return (
    <Link
      href={`/work/${w.slug}`}
      className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow duration-600 ease-out bg-card text-card-foreground"
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
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base md:text-lg font-semibold tracking-tight">{w.title}</h3>
        </div>
        {w.tags && w.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {w.tags.slice(0,4).map((t) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs opacity-80">
                {t}
              </span>
            ))}
            {w.tags.length > 4 && (
              <span className="rounded-full border px-3 py-0.5 text-xs opacity-80">
                . . .
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function WorkIndexPage() {
  const all = [...WORKS].sort((a, b) => b.year - a.year);
  return (
    <section className="w-full py-12 md:py-16 mt-10">
          <PageHeader title="My works" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-8 py-4">
          {all.map((w) => (
            <WorkCard key={w.slug} w={w} />
          ))}
        </div>
    </section>
  );
}