import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/cafe-data";

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-brand-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.name}
              className="bg-brand-charcoal border-white/5 hover:border-brand-yellow/10 transition-colors duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-brand-yellow text-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="text-sm">
                  <span className="font-semibold text-white">{review.name}</span>
                  <span className="text-white/50"> · {review.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-white/60 mt-8">
          4.4★ on Google · 4.5★ YELLOW on Google
        </p>
      </div>
    </section>
  );
}
