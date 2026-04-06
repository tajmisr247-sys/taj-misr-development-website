"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {/* Slide 1 - De Joya */}
        <div
          className="hero-slide absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
          }}
        />
        {/* Slide 2 - Ezdan */}
        <div
          className="hero-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')",
          }}
        />
        {/* Slide 3 - Skyline */}
        <div
          className="hero-slide absolute inset-0 bg-cover bg-center opacity-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold/60" />
            <span className="text-gold/80 text-xs tracking-[0.3em] uppercase font-medium">
              Premium Real Estate
            </span>
            <div className="w-12 h-px bg-gold/60" />
          </div>

          {/* Arabic tagline */}
          <p className="font-[Cairo] text-gold/90 text-lg md:text-xl mb-4 tracking-wide">
            شركة تاج مصر للتنمية العقارية
          </p>

          {/* Main headline */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Where Luxury
            <span className="block text-gold">Meets Legacy</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Crafting exceptional living experiences across Egypt&apos;s most
            prestigious destinations. Discover a new standard of refined urban
            living.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-gold px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase"
            >
              Register Your Interest
            </a>
            <a
              href="#projects"
              className="px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/30 text-white/90 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
