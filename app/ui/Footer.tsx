// app/ui/Footer.tsx
"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { NavLink } from "./NavLink";
import { PERSONAL_DATA } from "../data/bio";

type Social = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  { href: "https://github.com/iryadifarhan", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/iryadifarhan", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/iryadifarhan", label: "Instagram", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="w-[100%] border-t border-black/10 dark:border-white/10 bg-background text-foreground">
      <div className="p-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm md:text-base tracking-tight">
          © {new Date().getFullYear()} <NavLink className="font-semibold hover:underline" text={PERSONAL_DATA.nickname} target="/"/>. All rights reserved.
        </p>

        {/* Social icons */}
        <ul aria-label="Social media" className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-md
                         border border-black/10 dark:border-white/10
                         bg-neutral-200/20 dark:bg-neutral-200/20
                         hover:bg-black/10 dark:hover:bg-white/10
                         active:bg-black/15 dark:active:bg-white/15
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-black/20 dark:focus-visible:ring-white/30
                         transition-colors"
            >
              <Icon aria-hidden className="h-4 w-4" />
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
