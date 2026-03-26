import { ABOUT } from "@/data/cafe-data";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-background bg-block-grid border-y-2 border-border"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground max-w-xl">
            {ABOUT.heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl lg:text-right">
            {ABOUT.text}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border-2 border-border shadow-block">
          {ABOUT.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-8 sm:min-h-[180px] flex flex-col justify-center border-border hover:bg-accent/50 transition-colors"
            >
              <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
