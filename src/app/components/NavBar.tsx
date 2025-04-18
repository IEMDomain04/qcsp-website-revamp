"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-10 md:px-30 py-4 flex justify-between items-center shadow-md relative z-50 max-sm:flex-row-reverse">
      {/* Logo */}
      <div className="max-sm:w-4/5">
        <Image src="/assets/QCSP.svg" alt="Logo" width={400} height={100} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="border-b border-transparent hover:border-yellow-400 hover:text-yellow-400 duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          className="flex flex-col space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary/20 bg-opacity-50 px-6 py-4 shadow-md flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-transparent hover:border-yellow-400 hover:text-yellow-400 duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
