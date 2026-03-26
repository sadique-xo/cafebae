import { Clock, MapPin, MapPinned, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LOCATIONS, SITE } from "@/data/cafe-data";

export function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-brand-muted">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="inline-flex rounded-sm border-2 border-primary/30 bg-primary/10 p-2 text-primary">
            <MapPinned className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Find Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LOCATIONS.map((loc) => (
            <Card
              key={loc.name}
              className="bg-card border-border hover:border-primary/35 transition-colors duration-300 shadow-block"
            >
              <CardHeader>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {loc.name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex gap-3 text-muted-foreground text-sm">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex gap-3 text-muted-foreground text-sm">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <span>{loc.hours}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
                  >
                    <MapPin className="mr-1 h-4 w-4" />
                    Maps
                  </a>
                  <a
                    href={loc.zomato}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
                  >
                    Zomato
                  </a>
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm border-2 border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 p-6 bg-card rounded-sm border-2 border-border shadow-block">
          <h4 className="font-heading font-semibold text-foreground mb-3">
            Order Online
          </h4>
          <div className="flex flex-wrap gap-2">
            <a
              href={LOCATIONS[0].zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
            >
              Zomato (Cafe BAE Lalpur)
            </a>
            <a
              href={LOCATIONS[1].zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:brightness-95 transition-all border-2 border-primary"
            >
              Zomato (YELLOW Doranda)
            </a>
            <a
              href={SITE.petpooja}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm border-2 border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all"
            >
              Menu (PetPooja)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
