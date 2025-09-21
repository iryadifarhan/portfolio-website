"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AT = 70; // px scrolled before revealing

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > SHOW_AT);
    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollTop}
      className={[
        // mobile only
        "cursor-pointer md:hidden",
        // position
        "fixed right-8 bottom-15 z-[60]",
        // appearance
        "h-12 w-12 rounded-full bg-background/90 backdrop-blur",
        "shadow-lg ring-1 ring-black/10 dark:ring-white/10",
        "text-foreground",
        // animation
        "transition-all duration-300",
        show
          ? "opacity-100 translate-y-0 rotate-0 pointer-events-auto"
          : "opacity-0 translate-y-3 -rotate-60 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp className="h-7 w-7 mx-auto" aria-hidden />
    </button>
  );
}
