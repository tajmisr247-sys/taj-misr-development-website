"use client";

const partners = [
  "National Bank of Egypt",
  "CIB",
  "Egyptian Housing Ministry",
  "Orascom Construction",
  "Hassan Allam",
  "Dar Al-Handasah",
  "CBRE Egypt",
  "JLL",
];

export default function Partners() {
  // Duplicate for seamless infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center reveal">
          <span className="text-text-muted text-xs tracking-[0.2em] uppercase font-semibold">
            Trusted By Industry Leaders
          </span>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track flex gap-12 items-center">
          {allPartners.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 px-8 py-4 rounded-xl border border-light-gray bg-off-white/50 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group cursor-default"
            >
              <span className="text-text-muted text-sm font-medium tracking-wide whitespace-nowrap group-hover:text-gold transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
