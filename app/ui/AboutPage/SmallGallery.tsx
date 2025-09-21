import Image from "next/image";
import { motion } from "framer-motion";
import { CameraIcon } from "lucide-react";
import { Snapshot } from "../../data/snapshot_gallery";

export default function SmallGallery({ gallery }: { gallery: Snapshot[] }) {
  return (
    <section aria-label="Small gallery" className="space-y-4 px-8">
      <div className="mb-4.5 inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
        <CameraIcon className="h-4 w-4" />
        Little snapshots around my life
      </div>

      {/* Masonry / multi-column container */}
      <div className="columns-2 gap-4 sm:columns-3" id="photos">
        {gallery.map((g) => (
          <motion.div
            key={g.src}
            className="
              mb-4 break-inside-avoid
              overflow-hidden rounded-lg border border-black/10 bg-foreground/5
              dark:border-white/10
            "
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            style={{ willChange: "transform" }}
          >
            <Image
              src={g.src}
              alt={g.alt}
              // Prefer real dimensions if you have them; fallback keeps a sane ratio.
              width={1600}
              height={900}
              // Make the image fill the column width and keep natural height:
              sizes="(min-width: 640px) 33vw, 50vw"
              style={{ width: "100%", height: "auto" }}
              // Use cover for the same feel as your sample; switch to `object-contain` if you hate any cropping
              className="cursor-pointer w-full h-auto object-cover grayscale-30 opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-90"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}