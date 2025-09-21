import Link from "next/link";
import { ClipboardCheckIcon, Mail } from "lucide-react";
import { LinkFormat } from "../../data/links";
import { useState } from "react";

export default function SocialLinks({email, links} : {email : string, links : LinkFormat[]}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        setCopied(true);
        await navigator.clipboard.writeText(email);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    };

    return(
        <aside className="space-y-8 md:w-64 lg:w-72">
          <div>
          <h2 className="text-lg font-medium text-foreground/80">Mail</h2>

          <div className="mt-3 flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-base hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {email}
            </a>

            <div className="relative h-[24px]">
              <button
                type="button"
                onClick={handleCopy}
                className="cursor-pointer inline-flex items-center justify-center rounded-md border border-border p-1 text-xs text-foreground/80 hover:bg-foreground/5 active:scale-85 transition"
                aria-label="Copy email to clipboard"
              >
                <ClipboardCheckIcon className="h-4 w-4" aria-hidden />
              </button>
              {copied && (
                <span className="absolute bg-foreground text-xs rounded-md p-1 text-white dark:text-black w-20 text-center -left-8 bottom-8">
                  Copied to clipboard!
                </span>
              )}
            </div>
          </div>
        </div>

          <div>
            <h2 className="text-lg font-medium text-foreground/80">Socials</h2>
            <ul className="mt-3 space-y-3">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
    )
}