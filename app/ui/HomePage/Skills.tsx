import Image from "next/image";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import { SKILLS, TABS, type Category } from "../../data/skills";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";

export default function Skills() {
  const [tab, setTab] = useState<Category>("languages");
  const filtered = useMemo(() => SKILLS.filter((s) => s.cat === tab), [tab]);

  // Arrow-key navigation for the tablist
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const moveFocus = useCallback(
    (dir: 1 | -1) => {
      const idx = TABS.findIndex((t) => t.key === tab);
      const next = (idx + dir + TABS.length) % TABS.length;
      tabRefs.current[next]?.focus();
      setTab(TABS[next].key);
    },
    [tab]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        moveFocus(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveFocus(-1);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [moveFocus]);

  // Animation variants
  const gridVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.045, delayChildren: 0.02 },
        },
        exit: { opacity: 0 },
      };

  const cardVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { stiffness: 420, damping: 28 },
        },
        exit: {
          opacity: 0,
          y: -6,
          scale: 0.98,
          transition: { duration: 0.15 },
        },
      };

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="bg-background text-foreground md:w-[100%] border-t border-black/10 dark:border-white/10"
    >
      <div className="px-8 py-15 md:py-20 lg:flex lg:items-start lg:gap-12 border-t border-black/10 dark:border-white/10">
        {/* Left: intro (fixed-ish width) */}
        <div className="space-y-4 shrink lg:basis-[32ch] lg:flex-none lg:shrink-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What I&apos;ve learned so far
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Over the span of my journey, I&apos;ve explored within a range of
            technologies, from low-level languages to modern web frameworks.
          </p>
          <p className="font-light text-foreground/50">
            Use the filters to see the stacks I&apos;ve worked with!
          </p>
        </div>

        {/* Right: filters + grid (takes remaining space) */}
        <div className="mt-8 lg:mt-0 lg:flex-1 lg:min-w-0 space-y-6">
          {/* Tabs with sliding highlight */}
          <LayoutGroup>
            <div
              role="tablist"
              aria-label="Filter skills"
              className="relative flex gap-2 w-[80vw] md:w-full mx-auto justify-evenly
                         overflow-x-auto no-scrollbar rounded-2xl border border-black/10
                         dark:border-white/10 bg-foreground/5 p-1"
            >
              {TABS.map((t, i) => {
                const selected = tab === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    aria-selected={selected}
                    aria-controls={`panel-${t.key}`}
                    onClick={() => setTab(t.key)}
                    className="cursor-pointer relative shrink-0 px-3 sm:px-4 py-1.5 rounded-xl text-sm font-medium
                               transition hover:outline-none hover:ring-1
                               hover:ring-black/20 dark:hover:ring-white/10
                               "
                  >
                    {/* Sliding pill (shared layout) */}
                    {selected && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-xl bg-background shadow-sm
                                   border border-black/10 dark:border-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 36,
                        }}
                        style={{ zIndex: 0 }}
                      />
                    )}
                    <span className="relative z-10">
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Grid */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {filtered.map((s) => (
                <motion.button
                  key={s.name}
                  type="button"
                  aria-label={s.name}
                  variants={cardVariants}
                  whileHover={
                    { y: -4, scale: 1.03 }
                  }
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  className="cursor-pointer group relative inline-flex items-center justify-center rounded-xl
                             bg-foreground/5 p-3 sm:p-4 border border-black/10 dark:border-white/10
                             shadow-sm focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-black/20 dark:focus-visible:ring-white/30
                             transition-transform duration-0 active:scale-95"
                  title={s.name}
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src={s.src}
                    alt={s.name}
                    width={80}
                    height={80}
                    className="object-contain h-20 w-20 select-none pointer-events-none
                               transition-all duration-300 ease-out
                               grayscale contrast-75 opacity-70
                               group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
                  />
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
