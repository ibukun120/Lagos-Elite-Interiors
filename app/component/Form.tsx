"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { BiMobile } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import { PiHouseLine } from "react-icons/pi";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  location?: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // if (!response.ok) {
    //   throw new Error("Failed to submit");
    // }

    try {
      await fetch("https://formspree.io/f/xlgrdzno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data);

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData?.error || "Failed to submit");
      // }

      reset();
      alert("Message sent successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001f3f] mb-6">
            Start Your Project Today
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Fill out the form below and we’ll get back to you within 24 hours
            with a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name", { required: "Full name is required" })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="youremail@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="+234 800 000 0000"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Project Location
                </label>
                <input
                  {...register("location")}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Your Location"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  rows={6}
                  {...register("message", {
                    required: "Project description is required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="I need a full renovation for my 4-bedroom duplex..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-200 cursor-pointer hover:bg-blue-300 text-[#001f3f] py-4 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              We respect your privacy. Your information will only be used to
              contact you about your project.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-10 text-black">
            <h3 className="text-3xl font-bold text-[#001f3f]">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                {/* 📧 */}
                <MdEmail size={25} />
                <p
                  // href=":brightbasicsenterprises@gmail.com"
                  className="text-gold hover:underline"
                >
                  Email: brightbasicsenterprises@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* 📞 */}
                <BiMobile size={25} />
                <Link
                  href="tel:+2349063846519"
                  className="text-gold hover:underline"
                >
                  Tel: 09063846519 / 08072478674
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <IoLogoWhatsapp size={25} className="text-green-500" />
                <Link
                  href="https://wa.me/2349063846519"
                  target="_blank"
                  className="text-gold hover:underline"
                >
                  WhatsApp Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
