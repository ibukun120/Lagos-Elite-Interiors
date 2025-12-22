"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Portfolio", href: "/profile" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#001f3f] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-10 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold">
             {/* <h1 className="tracking-widest text-5xl">Bright</h1> 
             <h1 className="text-xl tracking-wider mt-1.5">Basics Concept</h1> */}
             <Image src="/images/favicon.io.jpeg" width={80} height={80} alt="logo"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={pathname === link.href? `hover:text-[#d4af37] text-[#bc9208] font-semibold text-sm transition` : 'hover:text-[#d8ba56] text-sm font-semibold transition tracking-wider'}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-4xl"
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