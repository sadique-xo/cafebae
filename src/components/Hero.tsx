import { MapPin } from "lucide-react";
import { SITE } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden bg-brand-canvas">
      {/* Decorative square blocks */}
      <div
        className="absolute inset-0 bg-hero-mosaic opacity-60 pointer-events-none"
        aria-hidden
      />
      <div className="absolute top-20 right-[8%] hidden lg:grid grid-cols-4 gap-1 w-48 opacity-40 pointer-events-none" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border border-brand-yellow/30 ${
              i % 5 === 0 ? "bg-brand-yellow/20" : "bg-brand-paper/80"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-24 left-[5%] hidden md:grid grid-cols-3 gap-1 w-36 opacity-35 pointer-events-none" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border border-foreground/10 ${
              i % 4 === 1 ? "bg-primary/25" : "bg-background"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-brand-paper/85" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: `url("/hero-bg.png")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-paper/95 via-brand-canvas/90 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,560px)] h-[320px] bg-primary/10 blur-[100px] pointer-events-none rounded-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center border-2 border-foreground/10 bg-brand-paper/70 backdrop-blur-sm px-6 py-12 sm:px-10 shadow-block">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Ranchi
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
          {SITE.name}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-8">
          {SITE.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#brands"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-sm bg-primary px-8 text-base font-semibold text-primary-foreground hover:brightness-95 shadow-glow transition-all border-2 border-primary"
          >
            Our Brands
          </a>
          <a
            href="https://maps.google.com/?q=Cafe+BAE+84+Hazaribagh+Road+Ranchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-sm border-2 border-foreground/15 px-8 text-base font-semibold text-foreground hover:bg-muted hover:border-primary/40 transition-all"
          >
            <MapPin className="h-5 w-5 text-primary" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
