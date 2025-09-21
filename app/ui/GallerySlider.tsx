"use client";

import Image from "next/image";
import * as React from "react";

type Props = {
  images: string[];
  title: string;
};

const EASE_BTN =
  "transition active:scale-[0.98] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30";

export default function GallerySlider({ images, title }: Props) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [idx, setIdx] = React.useState(0);

  const dragState = React.useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    dragState.current.isDown = true;
    el.classList.add("cursor-grabbing");

    // position relative to element
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = el.scrollLeft;
  };

  const onMouseUpOrLeave = () => {
    const el = scrollerRef.current;
    dragState.current.isDown = false;
    el?.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.isDown) return;

    const dx = e.clientX - dragState.current.startX;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  // derive slide width (equal to scroller viewport width)
  const slideWidth = () => scrollerRef.current?.clientWidth ?? 0;

  const scrollToIndex = (next: number) => {
    const w = slideWidth();
    if (!scrollerRef.current || !w) return;
    scrollerRef.current.scrollTo({ left: next * w, behavior: "smooth" });
  };

  const prev = () => idx > 0 && scrollToIndex(idx - 1);
  const next = () => idx < images.length - 1 && scrollToIndex(idx + 1);

  // keep idx in sync while user scrolls/swipes
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = slideWidth();
        if (!w) return;
        const newIndex = Math.round(el.scrollLeft / w);
        if (newIndex !== idx) setIdx(newIndex);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [idx]);

  // keyboard support when the slider is focused
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  if (images.length === 0) return null;

  return (
    <div className="relative rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        role="region"
        aria-label={`${title} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseDownCapture={onMouseDown}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        onMouseMove={onMouseMove}
        className="
          flex snap-x snap-mandatory overflow-x-auto scroll-smooth
          /* hide scrollbars cross-browser */
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="relative min-w-full snap-center aspect-[16/9]">
            {src.endsWith('.gif') ? 
            (
              <img
              src={src}
              alt={images.length === 1 ? title : `${title} screenshot ${i + 1}`}
              className="object-cover w-full h-full select-none"
              draggable={false}
              />
            ) 
            : 
            (
              <Image
              src={src}
              alt={images.length === 1 ? title : `${title} screenshot ${i + 1}`}
              fill
              className="object-cover select-none"
              sizes="(min-width: 1024px) 960px, 100vw"
              priority={i === 0}
              draggable={false}
              />
            )
            }
          </div>
        ))}
      </div>

      {/* Edge gradients */}
      {images.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/25 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/25 to-transparent" />
        </>
      )}

      {/* Arrows (hidden when not needed) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className={`absolute cursor-pointer select-none left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full backdrop-blur
                        bg-background/40 hover:bg-background/60 border border-black/10 dark:border-white/10
                        grid place-items-center ${EASE_BTN} ${idx === 0 ? "opacity-0 pointer-events-none" : ""}`}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className={`absolute cursor-pointer select-none right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full backdrop-blur
                        bg-background/40 hover:bg-background/60 border border-black/10 dark:border-white/10
                        grid place-items-center ${EASE_BTN} ${idx === images.length - 1 ? "opacity-0 pointer-events-none" : ""}`}
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-3">
            {images.map((_, i) => (
              <li key={i}>
                <button
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-3 w-3 cursor-pointer rounded-full transition border border-white/80
                              ${i === idx ? "bg-black" : "bg-black/30 hover:bg-black/60"}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}