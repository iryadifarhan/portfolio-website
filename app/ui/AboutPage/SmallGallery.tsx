import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CameraIcon } from "lucide-react";
import { Snapshot } from "../../data/snapshot_gallery";

export default function SmallGallery({ gallery }: { gallery: Snapshot[] }) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section aria-label="Small gallery" className="space-y-4 px-8">
      <div className="mb-4.5 inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
        <CameraIcon className="h-4 w-4" />
        Little snapshots around my life
      </div>

      {/* Masonry / multi-column container */}
      <div className="columns-2 gap-4 sm:columns-3" id="photos">
        {gallery.map((g) => {
          const isActive = activePhoto === g.src;

          return (
            <motion.button
              key={g.src}
              type="button"
              aria-label={g.alt}
              aria-pressed={isActive}
              className="
                cursor-pointer inline-block
                group mb-4 break-inside-avoid
                overflow-hidden rounded-lg border border-black/10 bg-foreground/5
                dark:border-white/10
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-black/20 dark:focus-visible:ring-white/30
              "
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              style={{ willChange: "transform" }}
              title={g.alt}
              onClick={() =>
                setActivePhoto((prev) => (prev === g.src ? null : g.src))
              }
            >
              <Image
                src={g.src}
                alt={g.alt}
                // Prefer real dimensions if you have them; fallback keeps a sane ratio.
                width={1600}
                height={900}
                // Make the image fill the column width and keep natural height:
                sizes="(min-width: 640px) 33vw, 50vw"
                style={{
                  width: "100%",
                  height: "auto",
                  filter: isActive ? "none" : undefined,
                  opacity: isActive ? 1 : undefined,
                }}
                className="w-full h-auto object-contain select-none pointer-events-none
                transition-all duration-300 ease-out
                grayscale-50 contrast-90 opacity-80
                group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100
                group-focus-visible:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:contrast-100"
                loading="lazy"
              />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}