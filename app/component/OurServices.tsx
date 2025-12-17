import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiRenovate } from "react-icons/si";
import { RiProgress3Fill } from "react-icons/ri";

const OurServices = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <h2 className="text-4xl font-bold mb-12 text-[#001f3f]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center mb-4"><AiOutlineAntDesign size={70}/> </div>
              <h3 className="text-2xl font-semibold mb-4">Interior Design</h3>
              <p>Bespoke designs tailored to your vision and lifestyle.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center mb-4"><SiRenovate  size={70}/></div>
              <h3 className="text-2xl font-semibold mb-4">Full Renovation</h3>
              <p>Complete transformations with premium materials.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center mb-4"><RiProgress3Fill size={70}/></div>
              <h3 className="text-2xl font-semibold mb-4">Space Planning</h3>
              <p>Optimized layouts for functionality and elegance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
