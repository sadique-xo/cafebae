import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LOCATIONS, SITE } from "@/data/cafe-data";

export function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-brand-charcoal">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-12">
          Find Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOCATIONS.map((loc) => (
            <Card
              key={loc.name}
              className="bg-brand-black border-white/10"
            >
              <CardHeader>
                <h3 className="font-heading text-xl font-bold text-white">
                  {loc.name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 text-white/80 text-sm">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex gap-3 text-white/80 text-sm">
                  <Phone className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-brand-yellow transition-colors">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex gap-3 text-white/80 text-sm">
                  <Clock className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <span>{loc.hours}</span>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-brand-yellow px-3 py-1.5 text-sm font-medium text-black hover:bg-brand-yellow/90"
                  >
                    <MapPin className="mr-1 h-4 w-4" />
                    Maps
                  </a>
                  <a
                    href={loc.zomato}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-brand-yellow px-3 py-1.5 text-sm font-medium text-black hover:bg-brand-yellow/90"
                  >
                    Zomato
                  </a>
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 p-6 bg-brand-black rounded-2xl border border-white/10">
          <h4 className="font-heading font-semibold text-white mb-3">
            Order Online
          </h4>
          <div className="flex flex-wrap gap-3">
            <a
              href={LOCATIONS[0].zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-brand-yellow px-3 py-1.5 text-sm font-medium text-black hover:bg-brand-yellow/90"
            >
              Zomato (Cafe BAE Lalpur)
            </a>
            <a
              href={LOCATIONS[1].zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-brand-yellow px-3 py-1.5 text-sm font-medium text-black hover:bg-brand-yellow/90"
            >
              Zomato (YELLOW Doranda)
            </a>
            <a
              href={SITE.petpooja}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Menu (PetPooja)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
