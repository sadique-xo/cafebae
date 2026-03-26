import Image from "next/image";
import {
  Coffee,
  Heart,
  MapPin,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { SITE } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden bg-brand-muted">
      {/* Fallback + depth behind photo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/40 via-brand-canvas to-brand-muted" aria-hidden />

      {/* Hero photo — full opacity; readability comes from scrims above, not from washing the image out */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/hero-bg.png"
          alt="Cafe BAE — café atmosphere in Ranchi"
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover object-center"
        />
      </div>

      {/* Light scrims: keep the scene visible; stronger only where text sits */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-white/25 via-white/5 to-background/88 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-r from-white/35 via-transparent to-white/10 pointer-events-none hidden sm:block"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Subtle pattern — does not obscure the photo */}
      <div
        className="absolute inset-0 z-[3] bg-hero-mosaic opacity-[0.14] mix-blend-multiply pointer-events-none"
        aria-hidden
      />

      {/* Decorative square blocks — sides only, low contrast */}
      <div
        className="absolute top-20 right-[6%] z-[3] hidden lg:grid grid-cols-4 gap-1 w-44 opacity-50 pointer-events-none"
        aria-hidden
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border border-primary/25 ${
              i % 5 === 0 ? "bg-primary/15" : "bg-white/40"
            }`}
          />
        ))}
      </div>
      <div
        className="absolute bottom-20 left-[4%] z-[3] hidden md:grid grid-cols-3 gap-1 w-32 opacity-45 pointer-events-none"
        aria-hidden
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border border-foreground/10 ${
              i % 4 === 1 ? "bg-primary/20" : "bg-white/35"
            }`}
          />
        ))}
      </div>

      {/* Floating “cute” icon badges */}
      <div
        className="absolute left-[5%] top-[30%] z-[4] hidden md:block pointer-events-none"
        aria-hidden
      >
        <div className="rounded-sm bg-white/85 backdrop-blur-sm border-2 border-primary/35 p-3 shadow-block animate-float-soft">
          <Coffee className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>
      </div>
      <div
        className="absolute right-[8%] top-[22%] z-[4] hidden lg:block pointer-events-none"
        aria-hidden
      >
        <div className="rounded-sm bg-white/85 backdrop-blur-sm border-2 border-primary/35 p-3 shadow-block animate-float-soft-delay">
          <Heart className="h-7 w-7 text-primary fill-primary/15" strokeWidth={2} />
        </div>
      </div>
      <div
        className="absolute right-[12%] bottom-[26%] z-[4] hidden lg:block pointer-events-none"
        aria-hidden
      >
        <div className="rounded-sm bg-white/85 backdrop-blur-sm border-2 border-primary/35 p-3 shadow-block animate-float-soft-slow">
          <UtensilsCrossed className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>
      </div>
      <div
        className="absolute left-[10%] bottom-[22%] z-[4] hidden sm:block pointer-events-none"
        aria-hidden
      >
        <div className="rounded-sm bg-primary/20 backdrop-blur-sm border-2 border-primary/40 p-2.5 shadow-block animate-float-soft-slow">
          <Sparkles className="h-6 w-6 text-primary" strokeWidth={2} />
        </div>
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[min(88vw,520px)] h-[280px] bg-primary/8 blur-[90px] pointer-events-none rounded-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl text-center border-2 border-foreground/12 bg-white/80 backdrop-blur-md px-6 py-10 sm:px-10 sm:py-12 shadow-block">
        <div className="flex items-center justify-center gap-2 mb-3 text-primary">
          <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Ranchi
          </p>
          <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
        </div>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
          {SITE.name}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-8 flex flex-wrap items-center justify-center gap-2">
          <Coffee className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 opacity-90" aria-hidden />
          <span>{SITE.tagline}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#brands"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-8 text-base font-semibold text-primary-foreground hover:brightness-95 shadow-glow transition-all border-2 border-primary"
          >
            <UtensilsCrossed className="h-5 w-5 shrink-0" aria-hidden />
            Our Brands
          </a>
          <a
            href="https://maps.google.com/?q=Cafe+BAE+84+Hazaribagh+Road+Ranchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-foreground/15 px-8 text-base font-semibold text-foreground hover:bg-muted hover:border-primary/40 transition-all"
          >
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
