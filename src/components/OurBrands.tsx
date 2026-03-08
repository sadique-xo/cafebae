import { ExternalLink, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BRANDS } from "@/data/cafe-data";

export function OurBrands() {
  return (
    <section id="brands" className="py-20 px-4 bg-brand-charcoal">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-12">
          Our Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANDS.map((brand) => (
            <Card
              key={brand.id}
              className="bg-brand-black border-white/10 overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {brand.name}
                    </h3>
                    {brand.subtitle && (
                      <Badge className="mt-2 bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30 hover:bg-brand-yellow/30">
                        {brand.subtitle}
                      </Badge>
                    )}
                  </div>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-brand-yellow transition-colors"
                    aria-label={`${brand.name} Instagram`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-brand-yellow/90 text-sm font-medium mt-1">
                  {brand.tagline}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80 text-sm">{brand.vibe}</p>
                <div className="text-white/60 text-sm space-y-1">
                  <p>{brand.address}</p>
                  <p>{brand.hours}</p>
                  {brand.price && (
                    <p className="text-brand-yellow/80">{brand.price}</p>
                  )}
                </div>
                <a
                  href={brand.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-black hover:bg-brand-yellow/90"
                >
                  {brand.cta.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
