"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Get current path for active link highlighting
    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full px-6 lg:px-16 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg" 
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/assets/QCSP.svg" 
            alt="Logo" 
            width={180} 
            height={45} 
            className="h-auto transition-all duration-300"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative px-2 py-1 font-medium text-sm transition-all duration-300 hover:text-yellow-500 ${
              activeLink === link.href 
                ? "text-yellow-500" 
                : scrolled ? "text-gray-800" : "text-gray-700"
            }`}
          >
            <span className="relative z-10">{link.name}</span>
            <span 
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-transform duration-300 ${
                activeLink === link.href ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
        ))}
        
        {/* Call to Action Button */}
        <button className="ml-4 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 text-sm">
          Get Started
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded-md relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isOpen 
                ? "rotate-45 translate-y-1.5 bg-gray-800" 
                : scrolled ? "bg-gray-800" : "bg-gray-700"
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
              isOpen 
                ? "opacity-0" 
                : scrolled ? "bg-gray-800" : "bg-gray-700"
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
              isOpen 
                ? "-rotate-45 -translate-y-1.5 bg-gray-800" 
                : scrolled ? "bg-gray-800" : "bg-gray-700"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full md:w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-4 border-b border-gray-100 text-gray-800 font-medium transition-colors duration-300 hover:text-yellow-500 ${
                activeLink === link.href ? "text-yellow-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button className="mt-6 py-3 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-md transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;