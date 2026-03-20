import { ABOUT } from "@/data/cafe-data";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-brand-black">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
          {ABOUT.heading}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-2xl">
          {ABOUT.text}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ABOUT.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-charcoal rounded-2xl p-6 border border-white/5 hover:border-brand-yellow/20 transition-colors"
            >
              <div className="font-heading text-3xl font-bold text-brand-yellow mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
