import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 container mx-auto px-4 md:px-8 bg-white flex gap-10 flex-col md:flex-row">
      {/* image div */}
      <div className="w-full md:w-1/2">
        <Image src='/images/about-us.jpg' width={600} height={400} alt="About-Image" className="w-full h-auto md:h-[600px]"/>
      </div>
      {/* text div */}
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#001f3f] tracking-wider">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto text-lg space-y-6 text-[#001f3f]">
          <p>
            BRIGHT BASICS CONCEPTS is a Lagos-based interior finishing and installation company specializing in high-quality residential and commercial projects.
          </p>
          <p>
            With over 7 years of hands-on industry experience, we deliver excellence in POP installations, screeding, painting, lighting, wall cladding, partitions, and custom furniture.
          </p>
          <p>
            Our company is fully registered with the Corporate Affairs Commission (CAC) and committed to professional standards, timely delivery, and premium workmanship.
          </p>

          <p>
            BRIGHT BASICS CONCEPTS is a CAC-registered interior contracting company with over 7 years of experience delivering premium interior finishing for luxury homes, estates, offices, and worship centers across Lagos.


          </p>
        </div>
      </div>
    </section>
  );
}
