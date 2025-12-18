import Image from "next/image";
import Link from "next/link";
import OurServices from "./OurServices";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero-luxury-living.jpg" // Place a high-quality image in public/images
          alt="Luxury interior living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
            Crafting Luxury Spaces in Lagos
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto tracking-wide">
            Professional interior contracting for luxury homes, estates, offices, and churches.
          </p>
          <Link href="/contact" className="px-10 py-3 bg-[#d4af37] rounded text-xl hover:bg-amber-400 transition duration-300">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Quick Services Preview */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <h2 className="text-4xl font-bold mb-12 text-[#001f3f]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Interior Design</h3>
              <p>Bespoke designs tailored to your vision and lifestyle.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Full Renovation</h3>
              <p>Complete transformations with premium materials.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Space Planning</h3>
              <p>Optimized layouts for functionality and elegance.</p>
            </div>
          </div>
        </div>
      </section> */}
      <OurServices/>
    </>
  );
}