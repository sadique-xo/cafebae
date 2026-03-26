import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/cafe-data";

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.name}
              className="bg-card border-border hover:border-primary/30 transition-colors duration-300 shadow-block"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">
                    {review.name}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {review.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10 text-sm">
          4.4★ on Google · 4.5★ YELLOW on Google
        </p>
      </div>
    </section>
  );
}
