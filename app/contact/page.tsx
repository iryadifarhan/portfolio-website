// app/contact/page.tsx
"use client";

import { PERSONAL_DATA } from "../data/bio";
import { LINKS } from "../data/links";

import Form from "../ui/ContactPage/Form";
import SocialLinks from "../ui/ContactPage/SocialLinks";
import PageHeader from "../ui/PageHeader";


export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-16 mt-10">
      <PageHeader title="Contact me" />

      <div className="flex flex-col md:flex-row justify-between gap-10 px-8">
        <SocialLinks email={PERSONAL_DATA.email} links={LINKS}/>
        <Form email={PERSONAL_DATA.email} />
      </div>

    </section>
  );
}
