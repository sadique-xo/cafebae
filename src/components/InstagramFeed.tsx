import { Instagram } from "lucide-react";
import { INSTAGRAM } from "@/data/cafe-data";

export function InstagramFeed() {
  return (
    <section className="py-20 px-4 bg-brand-black">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
          {INSTAGRAM.heading}
        </h2>
        <p className="text-white/60 mb-2">
          {INSTAGRAM.primary.handle} · {INSTAGRAM.secondary.handle}
        </p>
        <a
          href={INSTAGRAM.primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-black hover:brightness-110 shadow-glow-sm hover:shadow-glow transition-all mt-4"
        >
          <Instagram className="mr-2 h-5 w-5" />
          Follow {INSTAGRAM.primary.handle}
        </a>
      </div>
    </section>
  );
}
