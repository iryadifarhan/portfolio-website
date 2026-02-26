import { InfoIcon } from "lucide-react";

export default function Info({blurb, hobbies, motivation}: {blurb: string; hobbies: string; motivation: string}) {
  return (
<section className="space-y-4 px-8">
    <div className="mb-0 inline-flex items-center text-sm font-medium text-foreground/70">
        <InfoIcon className="mr-2 h-4 w-4" />
        Info
    </div>

    <div className="mt-2 text-foreground/80 leading-relaxed space-y-2">
      <p>{blurb}</p>
      <p>{hobbies}</p>
    </div>
    <p className="text-foreground/70 leading-relaxed font-semibold">{motivation}</p>
</section>
  );
}