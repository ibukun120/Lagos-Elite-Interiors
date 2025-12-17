import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 container mx-auto px-4 bg-white flex gap-10 flex-col md:flex-row">
      {/* image div */}
      <div className="w-full md:w-1/2">
        <Image src='/images/about-us.jpg' width={600} height={400} alt="About-Image" className="w-full h-auto md:h-[512px]"/>
      </div>
      {/* text div */}
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#001f3f] tracking-wider">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto text-lg space-y-6 text-[#001f3f]">
          <p>
            We are a CAC-registered interior contracting company based in Lagos
            with over 10 years of experience delivering luxury transformations.
          </p>
          <p>
            Our team specializes in high-end residential estates, corporate
            offices, and sacred spaces (churches).
          </p>
          <p>
            We pride ourselves on professionalism, attention to detail, and
            timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
