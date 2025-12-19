// src/app/services/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const services = [
    {
      title: "POP Gypsum Board Design & Installation",
      description:
        "Expert design and installation of POP and gypsum board features for ceilings, walls, and decorative elements. We create smooth, durable, and stylish finishes that elevate the look and feel of any space.",
      icon: "/images/icons/pop.jpg",
    },
    {
      title: "Ceiling Design & Finishing",
      description:
        "Modern ceiling solutions including POP ceilings, gypsum ceilings, and decorative ceiling designs. From simple elegance to bold architectural styles, we deliver flawless finishes with precise detailing.",
      icon: "/images/icons/Ceiling.jpg",
    },
    {
      title: "Wall & Ceiling Screeding",
      description:
        "Professional wall and ceiling screeding services to achieve smooth, even surfaces ready for painting or finishing. Perfect for new builds, renovations, and interior upgrades.",
      icon: "/images/icons/screeding.jpg",
    },
    {
      title: "Painting & Surface Finishes",
      description:
        "High-quality interior painting using premium paints and techniques. We offer clean, long-lasting finishes that enhance color depth, texture, and overall ambiance.",
      icon: "/images/icons/painting.jpg",
    },
    {
      title: "Lighting Design & Installation",
      description:
        "Installation of modern lighting solutions including spotlights, LED strips, chandeliers, and concealed lighting. Our lighting designs enhance mood, depth, and functionality in every space.",
      icon: "/images/icons/lighting.jpg",
    },
    {
      title: "TV Console & Wall Features",
      description:
        "Custom TV consoles and entertainment wall designs incorporating gypsum, wood, lighting, and wall cladding for a sleek, modern, and functional living space.",
      icon: "/images/icons/console.jpg",
    },
    {
      title: "Partitions & Space Dividers",
      description:
        "Stylish partitions using gypsum board, glass, wood, or mixed materials to define spaces without compromising openness, lighting, or flow.",
      icon: "/images/icons/partition.webp",
    },
    {
      title: "Wall Cladding & Decorative Panels",
      description:
        "Installation of wall cladding and decorative panels to add texture, character, and luxury to feature walls in living rooms, offices, and commercial spaces.",
      icon: "/images/icons/cladding.jpg",
    },
    {
      title: "3D Wall Clock & Decorative Installations",
      description:
        "Creative installation of 3D wall clocks and custom wall décor pieces that serve as eye-catching focal points and enhance interior aesthetics.",
      icon: "/images/icons/decor.webp",
    },
    {
      title: "Custom Furniture & Interior Fittings",
      description:
        "Design and fabrication of custom furniture including wardrobes, cabinets, shelves, and storage units crafted to match your interior style and space requirements.",
      icon: "/images/icons/furniture.jpg",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
            Transforming Homes <br />
            <span>Across Nigeria</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto tracking-wider">
            End-to-end interior contracting solutions for luxury homes, estates,
            offices, and churches Nationwide.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-6 text-[#001f3f]">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We deliver high-quality, professional interior solutions with
              attention to detail, timely execution, and premium materials.
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
                  {/* <div className="text-6xl">🏛️</div>{" "} */}
                  {/* Temporary emoji placeholder */}
                  <Image src={service.icon} alt="" width={100} height={100} className="w-full h-52 object-cover"/>
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
          <Link
            href="/contact"
            className="px-12 py-3 rounded-full bg-blue-950 text-lg inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
