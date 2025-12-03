'use client'
import React from "react";
import { useState } from "react";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_DATA } from "../data/bio";
import { NavLink } from "./NavLink";

const items = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const lineVariants = {
  closedTop:  { y: -4, rotate: 0 },
  closedBot:  { y:  4, rotate: 0 },
  openTop:    { y:  0, rotate: 45 },
  openBot:    { y:  0, rotate: -45 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-[100%] z-50 bg-background">
      <nav className="px-8 h-16 flex items-center justify-between relative gap-4 border-b border-black/10 dark:border-white/10 py-10 pt-11">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <NavLink onClick={() => setOpen(false)} target="/" text={PERSONAL_DATA.nickname} className="font-semibold tracking-tight text-2xl transition-opacity duration-200 ease-out active:opacity-70 hover:opacity-80"/>

          <div className="hidden md:contents">
            <ThemeToggle size={9}/>
          </div>
        </div>

        {/* Desktop: Links */}
        <div className="hidden lg:flex items-center gap-6">
          {items.map((it) => (
            <NavLink onClick={() => setOpen(false)} key={it.href} target={it.href} text={it.label} className="text-lg tracking-tight font-medium transition-opacity duration-200 ease-out active:opacity-70 hover:opacity-80"/>
          ))}

          <a
            href="https://binusianorg-my.sharepoint.com/personal/farhan_iryadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=EWdMVKgh3-lFizRDiWu1nPEBjAL9bz_vIn6tZLhAwa6Syg&e=NMfcZd"
            target="_blank"
            className="inline-flex items-center gap-2 text-lg font-medium px-4 py-1.5 rounded-2xl shadow-sm border border-black/10 transition-opacity duration-200 ease-out focus:outline-2 focus:outline-offset-2 focus:outline active:opacity-70 dark:bg-neutral-200/20 active:shadow
                       hover:shadow-md hover:bg-black/5 dark:hover:bg-white/10 /* hover */"
          >
            Resume 
            <Download size={21} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <div className="lg:hidden inline-flex items-center gap-2 pt-1">
          <button
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="cursor-pointer text-lg tracking-tight font-medium active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded
                       hover:opacity-90 /* hover */"
          >
            Menu
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="
              group /* hover */ cursor-pointer relative inline-flex h-9 w-9 items-center justify-center rounded-md
              bg-neutral-200/20
              border border-black/10
              shadow-inner
              active:bg-neutral-200/60
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-black/20
              text-black
              hover:bg-neutral-200/30 /* hover */
            "
          >
            {/* wrapper for the bars */}
            <span className="relative block h-3 w-4">
              {/* top bar */}
              <motion.span
                initial={false}
                animate={open ? "openTop" : "closedTop"}
                variants={lineVariants}
                transition={{ type: "spring", stiffness: 300, damping: 17 }}
                className="
                  absolute left-1/2 top-1/2 block h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2
                  rounded bg-black dark:bg-white
                  group-hover:scale-110 /* hover */
                "
              />
              {/* bottom bar */}
              <motion.span
                initial={false}
                animate={open ? "openBot" : "closedBot"}
                variants={lineVariants}
                transition={{ type: "spring", stiffness: 300, damping: 17 }}
                className="
                  absolute left-1/2 top-1/2 block h-[1.6px] w-4 -translate-x-1/2 -translate-y-1/2
                  rounded bg-black dark:bg-white
                  group-hover:scale-110 /* hover */
                "
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open:   { height: 'auto', opacity: 1, pointerEvents: 'auto' },
              closed: { height: 0,      opacity: 0, pointerEvents: 'none' },
            }}
            transition={{
              height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              opacity:{ duration: 0.3 }
            }}
            className="md:hidden absolute inset-x-0 top-full z-50 bg-background overflow-hidden"
          >
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-2 drop-shadow-md/10 border border-b border-black/10 dark:border-white/10">
              {items.map((it) => (
                <NavLink onClick={() => setOpen(false)} key={it.href} target={it.href} text={it.label} className="text-left py-1 tracking-tight px-4 text-lg font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/10"/>
                
              ))}

              <div className="inline-flex md:contents items-center gap-2 mx-4">
                <a
                  href={PERSONAL_DATA.resume_url}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 text-lg font-medium w-full py-2 rounded-2xl shadow-sm border border-black/10 dark:border-white/10 transition-opacity duration-200 ease-out focus:outline-2 focus:outline-offset-2 focus:outline active:opacity-70 dark:bg-neutral-200/20 active:shadow
                             hover:shadow-md hover:bg-black/5 dark:hover:bg-white/10 /* hover */"
                >
                  Resume 
                  <Download size={21} aria-hidden="true" />
                </a>

                <ThemeToggle size={11}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
