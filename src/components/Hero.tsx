import { MapPin } from "lucide-react";
import { SITE } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-brand-black" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url("/hero-bg.png")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

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
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-brand-yellow px-8 text-base font-semibold text-black hover:bg-brand-yellow/90 transition-colors"
          >
            Our Brands
          </a>
          <a
            href="https://maps.google.com/?q=Cafe+BAE+84+Hazaribagh+Road+Ranchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border-2 border-white/30 px-8 text-base font-semibold text-white hover:bg-white/10 hover:border-brand-yellow transition-colors"
          >
            <MapPin className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
