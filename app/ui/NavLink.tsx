"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function NavLink ({ className, text, target, onClick } : { className: string, text: string, target: string, onClick?: () => void }) 
{
    const pathname = usePathname();

    const scrollTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    
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
        <Link href={target} className={className} onClick={onClick} prefetch>
          {text}
        </Link>
      );

    return (
        <>{link}</>
    );
}