import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/cafe-data";

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="inline-flex rounded-sm border-2 border-primary/30 bg-primary/10 p-2 text-primary">
            <Quote className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            What People Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.name}
              className="bg-card border-border hover:border-primary/30 transition-colors duration-300 shadow-block"
            >
              <CardContent className="pt-6 relative">
                <Quote
                  className="absolute right-4 top-4 h-10 w-10 text-primary/15"
                  strokeWidth={1.5}
                  aria-hidden
                />
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
