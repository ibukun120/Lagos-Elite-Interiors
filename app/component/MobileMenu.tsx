import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navLinks: { name: string; href: string }[];
};

export default function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 h-[550px] bg-[#001f3f]/90 z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-end p-6">
        <button onClick={() => setIsOpen(false)} className="text-4xl">
          ×
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 mt-20 text-2xl">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="hover:text-gold transition font-semibold tracking-widest"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}