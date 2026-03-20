import { MapPin } from "lucide-react";
import { SITE } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url("/hero-bg.png")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black" />
      {/* Warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {SITE.name}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-brand-yellow font-medium mb-8">
          {SITE.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#brands"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-brand-yellow px-8 text-base font-semibold text-brand-black hover:brightness-110 shadow-glow transition-all"
          >
            Our Brands
          </a>
          <a
            href="https://maps.google.com/?q=Cafe+BAE+84+Hazaribagh+Road+Ranchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border-2 border-white/20 px-8 text-base font-semibold text-white hover:bg-white/5 hover:border-brand-yellow/60 transition-all"
          >
            <MapPin className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
