import { Instagram } from "lucide-react";
import { INSTAGRAM } from "@/data/cafe-data";

export function InstagramFeed() {
  return (
    <section className="py-20 px-4 bg-brand-canvas border-y-2 border-border relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden lg:block opacity-30 pointer-events-none"
        aria-hidden
      >
        <div className="grid grid-cols-2 gap-1 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-none border border-primary/20 ${
                i % 3 === 0 ? "bg-primary/15" : "bg-brand-paper"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {INSTAGRAM.heading}
        </h2>
        <p className="text-muted-foreground mb-2">
          {INSTAGRAM.primary.handle} · {INSTAGRAM.secondary.handle}
        </p>
        <a
          href={INSTAGRAM.primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95 shadow-glow-sm hover:shadow-glow transition-all mt-4 border-2 border-primary"
        >
          <Instagram className="mr-2 h-5 w-5" />
          Follow {INSTAGRAM.primary.handle}
        </a>
      </div>
    </section>
  );
}
