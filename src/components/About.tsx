import { Building2, IndianRupee, Star } from "lucide-react";
import { ABOUT } from "@/data/cafe-data";

const statIcons = [Building2, Star, IndianRupee] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-background bg-block-grid border-y-2 border-border"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="flex items-start gap-3 max-w-xl">
            <span className="mt-1 inline-flex rounded-sm border-2 border-primary/35 bg-primary/10 p-2 text-primary shadow-block">
              <Star className="h-6 w-6 fill-primary/25" aria-hidden />
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              {ABOUT.heading}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:text-right">
            {ABOUT.text}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border-2 border-border shadow-block">
          {ABOUT.stats.map((stat, i) => {
            const Icon = statIcons[i] ?? Star;
            return (
              <div
                key={stat.label}
                className="bg-card p-8 sm:min-h-[180px] flex flex-col justify-center border-border hover:bg-accent/50 transition-colors"
              >
                <div className="mb-4 inline-flex w-fit rounded-sm border border-primary/25 bg-primary/10 p-2.5 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
