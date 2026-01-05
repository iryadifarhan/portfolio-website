"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function NavLink ({ className, text, target, onClick } : { className: string, text: string, target: string, onClick?: () => void }) 
{
    const pathname = usePathname();
    const router = useRouter();

    const scrollTop = useCallback(() => {
      onClick?.();
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    }, [onClick]);

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (!onClick) return;

      e.preventDefault();
      scrollTop();

      // Give the close animation a brief head-start before navigating.
      setTimeout(() => {
        router.push(target);
      }, 180);
    };
    
    const link = pathname === target
    ? (
        <button
          type="button"
          onClick={scrollTop}
          className={`${className} cursor-pointer`}
        >
          {text}
        </button>
      )
    : (
        <Link href={target} className={className} onClick={handleClick} prefetch>
          {text}
        </Link>
      );

    return (
        <>{link}</>
    );
}
