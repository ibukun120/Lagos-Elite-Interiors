import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiRenovate } from "react-icons/si";
import { RiProgress3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
    const detail= [
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
    ]

  return (
    <>
      <section className="py-20 bg-white px-4 md:px-8">

        <div>
          <h1 className="text-5xl font-bold text-center mb-12 text-[#001f3f] tracking-wider">Our Services</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {detail.map((service, index) => (
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

                  <div className="mt-12 flex justify-center items-center">
                    <Link href='/service' className="text-blue-800 text-xl font-semibold px-10 py-2.5 rounded border-2 border-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-300">See More</Link>
                  </div>
      </section>
    </>
  );
};

export default OurServices;
