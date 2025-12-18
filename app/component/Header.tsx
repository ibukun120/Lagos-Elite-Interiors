"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
// import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Portfolio", href: "/profile" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#001f3f] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-10 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-wide">
             Bright Basics Concept
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={pathname === link.href? `hover:text-[#d4af37] text-[#bc9208] font-semibold transition` : 'hover:text-[#d8ba56] font-semibold transition tracking-wider'}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
  
    </header>
  );
}