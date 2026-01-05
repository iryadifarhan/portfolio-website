import Image from "next/image";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({name, location, quick_blurb, recent_education_title, recent_experience_title, recent_experience_org, recent_education_org}: 
  {name: string; location: string; quick_blurb: string; recent_education_title: string; recent_experience_title: string, recent_experience_org: string, recent_education_org: string }) {
  return (
    <section
      id="hero"
      className="text-foreground"
      aria-label="Intro"
    >
      <div className="w-full px-8 py-10 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          {/* Photo (left) */}
          <motion.button
            initial={{ borderRadius: 9999 }}
            animate={{ borderRadius: 150 }}
            whileHover={{ scale: 1.2  , rotate: 2, borderRadius: 16 }} // 16px ≈ rounded-2xl
            whileTap={{ scale: 1.2  , rotate: 2, borderRadius: 16 }} // 16px ≈ rounded-2xl
            whileFocus={{ scale: 1.2  , rotate: 2, borderRadius: 16 }} // 16px ≈ rounded-2xl
            transition={{ type: "tween", duration: 0.2, ease: "easeIn" }}
            className="
              relative shrink-0 size-44 lg:size-52
              rounded-full overflow-hidden ring-2 ring-black/90 dark:ring-white/70
              drop-shadow-xl/10
            "
          >
            <Image
              src="/me.webp"
              alt={`${name} portrait`}
              fill
              priority
              className="
                object-cover
                transition duration-500 ease-out
                contrast-110
              "
            />
          </motion.button>


          {/* Text (right) */}
          <div className="w-auto ">
            <h1 className="tracking-tight font-semibold
                           text-3xl leading-tight
                           md:text-4xl lg:text-5xl md:leading-[1.1]">
              Hello, I&apos;m <br />
              <span className="">{name}</span>
            </h1>

            <div className="flex flex-col gap-1.5">
              {/* Graduate */}
              <p className="mt-3 text-sm md:text-md text-foreground/70 inline-flex items-center gap-2">
              <GraduationCap className="min-w-[1rem] size-4 opacity-70" aria-hidden />
              <span>{recent_education_title}, {recent_education_org}</span>
              </p>
              
              {/* Career */}
              <p className="text-sm md:text-md text-foreground/70 inline-flex items-center gap-2">
              <Briefcase className="min-w-[1rem] size-4 opacity-70" aria-hidden />
              <span>{recent_experience_title}, {recent_experience_org}</span>
              </p>
              
              {/* Location */}
              <p className="text-sm md:text-md text-foreground/70 inline-flex items-center gap-2">
              <MapPin className="min-w-[1rem] size-4 opacity-70" aria-hidden />
              <span>{location}</span>
              </p>
              
            </div>
            <p className="mt-3 max-w-[60ch] text-pretty text-md text-foreground/80">
              {quick_blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
