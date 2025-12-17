// src/app/portfolio/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  // Sample portfolio projects - replace with your real projects
  const projects = [
    {
      title: "Luxury Penthouse in Lekki Phase 1",
      category: "Residential",
      location: "Lekki, Lagos",
      image: "/images/portfolio/penthouse-lekki.jpg",
      description:
        "Complete interior design and renovation of a 5-bedroom penthouse with custom joinery and smart lighting.",
    },
    {
      title: "Modern Corporate Office",
      category: "Commercial",
      location: "Victoria Island, Lagos",
      image: "/images/portfolio/office-vi.jpg",
      description:
        "Full office fit-out including reception, boardroom, open workspaces, and executive suites.",
    },
    {
      title: "Elegant Family Villa",
      category: "Residential",
      location: "Ikoyi, Lagos",
      image: "/images/portfolio/villa-ikoyi.jpg",
      description:
        "Bespoke interior transformation featuring marble flooring, ceiling details, and custom furniture.",
    },
    {
      title: "Redeemed Church Sanctuary",
      category: "Worship Space",
      location: "Ikeja, Lagos",
      image: "/images/portfolio/church-ikeja.jpg",
      description:
        "Sanctuary renovation with new pulpit, acoustic panels, lighting, and seating arrangement.",
    },
    {
      title: "High-End Duplex Renovation",
      category: "Residential",
      location: "Magodo, Lagos",
      image: "/images/portfolio/duplex-magodo.jpg",
      description:
        "Full home makeover including kitchen, bedrooms, living areas, and outdoor entertainment space.",
    },
    {
      title: "Executive Office Suite",
      category: "Commercial",
      location: "Ikorodu Road, Lagos",
      image: "/images/portfolio/executive-office.jpg",
      description:
        "Premium office interior with wooden paneling, ergonomic furniture, and ambient lighting.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/images/port.jpg" // Add a stunning portfolio collage or single hero shot
          alt="Our completed interior projects in Lagos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our completed projects across luxury homes, offices,
            estates, and churches in Lagos.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f3f] mb-6">
              Completed Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              High-quality craftsmanship delivered on time for clients in Lekki,
              Ikeja, Ikorodu, Ikoyi, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-full md:min-h-96">
                  <div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-navydark/0 group-hover:bg-navydark/70 transition-colors duration-500" />
                </div>

                {/* Project Info - appears on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm uppercase tracking-wider text-gold mb-2">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="">
                    <div className="flex md:hidden flex-col justify-end p-8 text-black">
                      <span className="text-sm uppercase tracking-wider text-gold mb-2">
                        {project.category} • {project.location}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                {/* Always visible title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navydark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Create Your Dream Space
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Ready to start your project? Get in touch for professional
            consultation.
          </p>
          <Link href="/contact" className="btn-primary text-lg inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
