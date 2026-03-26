import { ExternalLink, Instagram, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BRANDS } from "@/data/cafe-data";

export function OurBrands() {
  return (
    <section id="brands" className="py-20 px-4 bg-brand-muted">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="inline-flex rounded-sm border-2 border-primary/30 bg-primary/10 p-2 text-primary">
            <Sparkles className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Our Brands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-stretch">
          {BRANDS.map((brand) => (
            <Card
              key={brand.id}
              className="bg-card border-border overflow-hidden hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 shadow-block h-full flex flex-col"
            >
              <CardHeader className="pb-2 shrink-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {brand.name}
                    </h3>
                    {brand.subtitle && (
                      <Badge className="mt-2 bg-primary/15 text-primary border-primary/30 hover:bg-primary/25">
                        {brand.subtitle}
                      </Badge>
                    )}
                  </div>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                    aria-label={`${brand.name} Instagram`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-primary/90 text-sm font-semibold mt-1">
                  {brand.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-0 min-h-0">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">{brand.vibe}</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>{brand.address}</p>
                    <p>{brand.hours}</p>
                    {brand.price && (
                      <p className="text-primary font-medium">{brand.price}</p>
                    )}
                  </div>
                </div>
                <a
                  href={brand.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-full shrink-0 items-center justify-center rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
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
