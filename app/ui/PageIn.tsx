"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageIn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // reset & retrigger the CSS animation
    el.classList.remove("animate-page-in");
    // force reflow so the browser sees it as a fresh animation
    void el.offsetWidth;
    el.classList.add("animate-page-in");
  }, [pathname]);

  return (
    <div ref={ref} className="animate-page-in w-[100%]">
      {children}
    </div>
  );
}