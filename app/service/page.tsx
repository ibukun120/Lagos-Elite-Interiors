// src/app/services/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const services = [
    {
      title: "Interior Design",
      description:
        "Custom, bespoke interior designs that reflect your personality and lifestyle. From concept to 3D visualization, we create elegant, functional spaces tailored for luxury homes, estates, and premium offices.",
      icon: "/images/icons/design.svg", // Replace with actual icon or use emoji
    },
    {
      title: "Full Home & Office Renovation",
      description:
        "Complete renovation services including flooring, ceiling work, painting, lighting, plumbing fixtures, and custom furniture installation. We handle everything with minimal disruption.",
      icon: "/images/icons/renovation.svg",
    },
    {
      title: "Space Planning & Optimization",
      description:
        "Professional layout planning to maximize usability and flow. Ideal for open-plan homes, corporate offices, and church sanctuaries needing efficient yet beautiful arrangements.",
      icon: "/images/icons/planning.svg",
    },
    {
      title: "Custom Furniture & Joinery",
      description:
        "Bespoke cabinetry, wardrobes, kitchen units, TV consoles, and wooden partitions crafted with premium materials and flawless finishing.",
      icon: "/images/icons/furniture.svg",
    },
    {
      title: "Lighting Design & Installation",
      description:
        "Strategic lighting solutions – ambient, task, and accent lighting using modern LED systems, chandeliers, and smart controls for dramatic and energy-efficient results.",
      icon: "/images/icons/lighting.svg",
    },
    {
      title: "Church & Worship Space Interiors",
      description:
        "Specialized design and contracting for churches: pulpits, altars, pews, acoustic treatments, stained glass integration, and sanctuary transformations.",
      icon: "/images/icons/church.svg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/images/ourserv.jpg" // Place a beautiful interior image in public/images
          alt="Luxury interior renovation in Lagos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Our Professional Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto tracking-wider">
            End-to-end interior contracting solutions for luxury homes, estates, offices, and churches in Lagos.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-6 text-[#001f3f]">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We deliver high-quality, professional interior solutions with attention to detail, timely execution, and premium materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 bg-navydark/10 flex items-center justify-center">
                  {/* Replace with actual SVG icons or use a placeholder image */}
                  <div className="text-6xl">🏛️</div> {/* Temporary emoji placeholder */}
                  {/* <Image src={service.icon} alt="" width={100} height={100} /> */}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#001f3f] mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#06325f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote.
          </p>
          <Link href="/contact" className="px-12 py-3 rounded-full bg-blue-950 text-lg inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}