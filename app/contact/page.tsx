// src/app/contact/page.tsx

import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactSection from "../component/Form";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-navydark/90" /> {/* Fallback if no image */}
        {/* Optional: Add an image */}
        <div className="bg-black/50">
          <Image
          src="/images/contact.jpg"
          alt="Contact Lagos Elite Interiors"
          fill
          className="object-cover"
          priority
        />
        </div>
        {/* <div className="absolute inset-0 bg-navydark/70" /> */}
        <div className="relative z-10 container mx-auto px-4 bg-black/60 h-full flex justify-center  items-center flex-col">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Let’s discuss your project. We serve Lekki, Ikeja, Ikorodu, and all of Lagos.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <div>
        <ContactSection/>
      </div>
    </>
  );
}