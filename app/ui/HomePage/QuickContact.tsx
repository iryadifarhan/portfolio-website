import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function QuickContact() {

  return (
    <section id="contact" className="bg-background text-foreground w-full">
      <div className="px-8 py-15 md:py-20 border-t border-black/10 dark:border-white/10">
        <div className="grid gap-8 lg:grid-cols-[minmax(14rem,22rem)_1fr] lg:gap-12 items-start">
          {/* Left label */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contact me
          </h2>

          {/* Right copy + CTA */}
          <div className="space-y-6">
            <p className="text-lg md:text-2xl max-w-3xl">
              I&apos;d love to hear from you! Whether you have something in mind,
              need more info, or just want to chat, feel free to reach out!
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2
                         border border-black/10 dark:border-white/10
                         bg-foreground/5 hover:bg-foreground/10
                         transition focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-black/20
                         dark:focus-visible:ring-white/30 text-base font-medium"
            >
              Get in touch <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
