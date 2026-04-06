"use client";

const projects = [
  {
    name: "De Joya",
    location: "New Administrative Capital",
    description:
      "A premium residential compound offering contemporary design with lush green landscapes and world-class amenities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tag: "Residential",
  },
  {
    name: "De Joya 3",
    location: "New Administrative Capital",
    description:
      "The latest phase in the De Joya collection, featuring smart-home enabled apartments with panoramic city views.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tag: "Smart Living",
  },
  {
    name: "Ezdan",
    location: "New Cairo",
    description:
      "An exclusive mixed-use development blending luxury living with vibrant commercial spaces in the heart of New Cairo.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    tag: "Mixed Use",
  },
  {
    name: "De Joya New Zayed",
    location: "Sheikh Zayed City",
    description:
      "Redefining west Cairo living with spacious villas and apartments surrounded by serene natural beauty.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    tag: "Villas",
  },
  {
    name: "Pukka",
    location: "North Coast",
    description:
      "A coastal paradise offering beachfront chalets and villas with breathtaking Mediterranean views.",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    tag: "Coastal",
  },
  {
    name: "Azure",
    location: "North Coast",
    description:
      "Premium beachfront residences designed for those who seek the ultimate in coastal luxury and relaxation.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    tag: "Luxury",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
              Portfolio
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Explore our diverse portfolio of landmark developments across
            Egypt&apos;s most sought-after locations.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.tag}
                </span>
                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90 text-xs font-medium">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide group/btn"
                >
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 group-hover/btn:after:w-full">
                    Discover More
                  </span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
