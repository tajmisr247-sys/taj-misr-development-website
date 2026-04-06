"use client";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "50+", label: "Projects Delivered" },
  { value: "10K+", label: "Happy Families" },
  { value: "5M+", label: "Sqm Developed" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Taj Misr Architecture"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating accent card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-dark font-semibold text-sm">
                      Building Tomorrow&apos;s Landmarks
                    </p>
                    <p className="text-text-muted text-xs">
                      Since 2009 across Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold/20" />
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                Our Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
              A Legacy of{" "}
              <span className="text-gold">Trust</span> &{" "}
              <span className="text-gold">Innovation</span>
            </h2>

            <p className="text-text-muted leading-relaxed mb-4">
              Taj Misr Developments has been at the forefront of Egypt&apos;s
              real estate transformation for over 15 years. We combine
              visionary architectural design with world-class construction
              standards to create communities that stand the test of time.
            </p>

            <p className="text-text-muted leading-relaxed mb-8">
              Our portfolio spans residential compounds, commercial hubs, and
              mixed-use developments across Cairo, the New Administrative
              Capital, and the North Coast — each project a testament to our
              unwavering commitment to quality and innovation.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-off-white rounded-xl p-5 text-center group hover:bg-gold/5 transition-colors duration-300"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-xs tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
