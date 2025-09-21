"use client";

import { EDUCATION, EXPERIENCE } from "../data/experience";
import { PERSONAL_DATA } from "../data/bio";
import { GALLERY } from "../data/snapshot_gallery";

import PageHeader from "../ui/PageHeader";
import Info from "../ui/AboutPage/Info";
import Journey from "../ui/AboutPage/Journey";
import SmallGallery from "../ui/AboutPage/SmallGallery";

export default function AboutPage() {
  return (
    <section className="w-full py-12 md:py-16 space-y-12 mt-10">
      <PageHeader title="About me" />
      <Info blurb={PERSONAL_DATA.blurb} motivation={PERSONAL_DATA.motivation} />
      <Journey experience={EXPERIENCE} education={EDUCATION} />
      <SmallGallery gallery={GALLERY} />
    </section>
  );
}
