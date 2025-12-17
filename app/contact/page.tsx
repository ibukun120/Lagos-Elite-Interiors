// src/app/contact/page.tsx

import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-navydark/90" /> {/* Fallback if no image */}
        {/* Optional: Add an image */}
        {/* <Image
          src="/images/contact-hero.jpg"
          alt="Contact Lagos Elite Interiors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navydark/70" /> */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Let’s discuss your project. We serve Lekki, Ikeja, Ikorodu, and all of Lagos.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f3f] mb-6">
              Start Your Project Today
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Fill out the form below and we’ll get back to you within 24 hours with a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
              <form
                action="https://formspree.io/f/your-form-id" // Replace with Formspree, Getform, or your backend
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-800 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-lg font-medium text-gray-800 mb-2">
                    Project Location (e.g., Lekki, Ikeja)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Lekki Phase 1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="I need a full renovation for my 4-bedroom duplex..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer px-12 bg-blue-200 text-[#001f3f] text-lg py-4 font-semibold"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-6 text-center">
                We respect your privacy. Your information will only be used to contact you about your project.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-10 text-black">
              <div>
                <h3 className="text-3xl font-bold text-[#001f3f] mb-8">Contact Information</h3>
                <div className="space-y-6 text-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@lagoseliteinteriors.com" className="text-gold hover:underline">
                        info@lagoseliteinteriors.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-3xl">📞</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+2348000000000" className="text-gold hover:underline">
                        +234 800 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-3xl text-green-500"><IoLogoWhatsapp size={25} /></span>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/2348000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline"
                      >
                        +234 800 000 0000 (Click to Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-black">
                    <span className="text-3xl">📍</span>
                    <div>
                      <p className="font-medium">Service Areas</p>
                      <p>Lekki • Ikeja • Ikorodu • Ikoyi • Victoria Island • Mainland Lagos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Map Embed */}
              {/* <div className="mt-10 text-black">
                <h4 className="text-2xl font-semibold text-[#001f3f] mb-4">Find Us</h4>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500">
                  
                  <p>Google Maps Embed Here (Lagos Office Location)</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}