import Link from "next/link";
import GallerySlider from "../GallerySlider";
import { Work } from "../../data/works";
import { ArrowLeftIcon } from "lucide-react";

export function ProjectHeading( {work} : {work: Work} ) {
    // slideshow images: cover + optional gallery
    const additionalImages = work.gallery ?? [];
    const images = [work.cover, ...additionalImages!].filter(Boolean);

    return (
        <section>
            <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition
                        rounded-lg border border-black/10 dark:border-white/10 px-3 py-1.5 text-xs lg:text-sm"
            aria-label="Back to all work"
            >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden />
            Back to all work
            </Link>

            {/* Title */}
            <header className="mt-4 md:mt-6">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">{work.title}</h1>
            </header>

            {/* Slideshow (scroll-snap, swipeable) */}
            {images.length > 0 && (
            <div className="mt-6 md:mt-8">
                <GallerySlider images={images} title={work.title} />
                {images.length > 1 && (
                <p className="mt-2 text-xs text-center text-foreground/60">
                    Swipe to see more views!
                </p>
                )}
            </div>
            )}
        </section>
    );
}