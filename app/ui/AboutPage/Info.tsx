import { InfoIcon } from "lucide-react";

export default function Info({blurb, motivation}: {blurb: string; motivation: string}) {
  return (
<section className="space-y-4 px-8">
    <div className="mb-0 inline-flex items-center text-sm font-medium text-foreground/70">
        <InfoIcon className="mr-2 h-4 w-4" />
        Info
    </div>

    <p className="mt-2 text-foreground/80 leading-relaxed">{blurb}</p>
    <p className="text-foreground/70 leading-relaxed font-semibold">{motivation}</p>
</section>
  );
}