"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ size = 9 }: { size?: 9 | 11 }) {
  
  const SIZE = {
    9: "h-9 w-9",
    11: "h-11 w-11",
  } as const;
  
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light mode"
      className={`cursor-pointer inline-flex items-center justify-center ${SIZE[size]} rounded-md
                 shadow-sm border border-black/10 dark:border-white/10
                 dark:bg-neutral-200/20
                 hover:bg-black/10 dark:hover:bg-white/15
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-black/20 dark:focus-visible:ring-white/30`}
    >
      {/* Sun */}
      <Sun
        aria-hidden
        className="
          pointer-events-none absolute h-4 w-4
          transition-all duration-400 ease-out
          opacity-100 scale-100 rotate-0
          dark:opacity-0 dark:scale-0 dark:-rotate-90
        "
      />

      {/* Moon */}
      <Moon
        aria-hidden
        className="
          pointer-events-none absolute h-4 w-4
          transition-all duration-400 ease-out
          opacity-0 scale-0 rotate-90
          dark:opacity-100 dark:scale-100 dark:rotate-0
        "
      />
    </button>
  );
}
