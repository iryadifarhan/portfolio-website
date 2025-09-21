"use client";

import { PERSONAL_DATA } from "./data/bio";
import { EDUCATION, EXPERIENCE } from "./data/experience";
import { WORKS } from "./data/works";

import Hero from "./ui/HomePage/Hero";
import Skills from "./ui/HomePage/Skills";
import RecentWorks from "./ui/HomePage/RecentWorks";
import QuickContact from "./ui/HomePage/QuickContact";


export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4">
      <Hero name={PERSONAL_DATA.name} location={PERSONAL_DATA.location} quick_blurb={PERSONAL_DATA.quick_blurb} 
      recent_education_title={EDUCATION[0].title} recent_education_org={EDUCATION[0].org}
      recent_experience_title={EXPERIENCE[0].title} recent_experience_org={EXPERIENCE[0].org} />
      <Skills />
      <RecentWorks works={ WORKS }/>
      <QuickContact />
    </section>
  );
}
