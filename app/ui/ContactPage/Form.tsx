import { Check } from "lucide-react";
import { useRef, useState } from "react";

export default function Form ({email} : {email : string}) {
    const [phase, setPhase] = useState<"idle" | "loading" | "sent">("idle");
    const mailtoRef = useRef<HTMLAnchorElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phase !== "idle") return;

        const fd = new FormData(e.currentTarget);
        const nameInput = String(fd.get("name") ?? "");
        const emailInput = String(fd.get("email") ?? "");
        const messageInput = String(fd.get("message") ?? "");

        const subject = encodeURIComponent(`Portfolio contact from ${nameInput || "someone"}`);
        const body = encodeURIComponent(`From: ${emailInput}\n\n${messageInput}`);

        // Prepare the hidden mailto link
        if (mailtoRef.current) {
        mailtoRef.current.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }

        setPhase("loading");

        // Short delay so spinner is visible but user gesture still valid
        await new Promise((r) => setTimeout(r, 2020));

        // Trigger navigation via hidden anchor (more reliable than setting location)
        mailtoRef.current?.click();

        // Mark as sent (keeps the button in "Sent")
        setPhase("sent");
    };

    return (
        <div className="flex-1">
          <h2 className="text-lg font-medium text-foreground/80">Direct Mail Form</h2>

          <form onSubmit={onSubmit} className="mt-3 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                placeholder="Name"
                className="h-12 w-full rounded-xl border border-black/10 dark:border-white/10
                           bg-foreground/5 px-4 outline-none
                           focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 w-full rounded-xl border border-black/10 dark:border-white/10
                           bg-foreground/5 px-4 outline-none
                           focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
                required
                aria-label="Your email"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={8}
              className="w-full rounded-xl border border-black/10 dark:border-white/10
                         bg-foreground/5 p-4 outline-none
                         focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
              required
              aria-label="Your message"
            />

            {/* Hidden anchor used to launch the user's mail client */}
            <a ref={mailtoRef} className="hidden" />

            <button
              type="submit"
              disabled={phase !== "idle"}
              aria-busy={phase === "loading"}
              className="cursor-pointer relative w-full h-12 rounded-xl bg-black text-white dark:bg-white dark:text-black
                         font-medium tracking-tight
                         hover:opacity-90 active:opacity-80
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-black/20 dark:focus-visible:ring-white/30
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {/* Use a 1x1 CSS grid so all labels occupy the exact same space (no layout shift) */}
              <span className="grid place-items-center w-full h-full">
                {/* Idle */}
                <span
                  className={`col-start-1 row-start-1 transition-opacity duration-150 ${
                    phase === "idle" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Submit
                </span>

                {/* Loading */}
                <span
                  className={`col-start-1 row-start-1 flex items-center justify-center gap-2 transition-opacity duration-150 ${
                    phase === "loading" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <svg
                    className="size-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-90"
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  Sending…
                </span>

                {/* Sent */}
                <span
                  className={`col-start-1 row-start-1 flex items-center justify-center gap-2 transition-opacity duration-150 ${
                    phase === "sent" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Check className="size-5" aria-hidden="true" />
                  Sent
                </span>
              </span>
            </button>
          </form>
        </div>
    );
}