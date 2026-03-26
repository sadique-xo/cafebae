import { Camera, Heart, Instagram, Sparkles } from "lucide-react";
import { INSTAGRAM } from "@/data/cafe-data";

export function InstagramFeed() {
  return (
    <section className="py-20 px-4 bg-brand-canvas border-y-2 border-border relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden lg:flex flex-col justify-center gap-2 opacity-40 pointer-events-none pr-2"
        aria-hidden
      >
        <Camera className="h-8 w-8 text-primary ml-auto" strokeWidth={1.75} />
        <div className="grid grid-cols-2 gap-1 h-48 w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-none border border-primary/25 ${
                i % 3 === 0 ? "bg-primary/15" : "bg-brand-paper"
              }`}
            />
          ))}
        </div>
        <Heart className="h-7 w-7 text-primary fill-primary/20 ml-auto" strokeWidth={1.75} />
      </div>
      <div className="absolute left-6 top-10 opacity-30 pointer-events-none md:left-12" aria-hidden>
        <Sparkles className="h-10 w-10 text-primary" strokeWidth={1.5} />
      </div>
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className="flex justify-center gap-2 mb-4 text-primary">
          <Instagram className="h-8 w-8" strokeWidth={2} aria-hidden />
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {INSTAGRAM.heading}
        </h2>
        <p className="text-muted-foreground mb-2 flex flex-wrap items-center justify-center gap-2">
          <Heart className="h-4 w-4 text-primary fill-primary/30 shrink-0" aria-hidden />
          <span>
            {INSTAGRAM.primary.handle} · {INSTAGRAM.secondary.handle}
          </span>
          <Heart className="h-4 w-4 text-primary fill-primary/30 shrink-0" aria-hidden />
        </p>
        <a
          href={INSTAGRAM.primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-95 shadow-glow-sm hover:shadow-glow transition-all mt-4 border-2 border-primary"
        >
          <Instagram className="h-5 w-5" strokeWidth={2} />
          Follow {INSTAGRAM.primary.handle}
        </a>
      </div>
    </section>
  );
}
