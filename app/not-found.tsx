// app/not-found.tsx

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 w-full items-center justify-center h-[65vh] px-8">
      <div className="text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          404 — Page Not Found
        </h1>
        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-4 py-2 text-sm md:text-base hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden />
          Back to home
        </Link>
      </div>
    </section>
  );
}
