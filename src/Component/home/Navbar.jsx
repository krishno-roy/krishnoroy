import React, { useState, useEffect } from "react";
import logoImage from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFD4D0]/80 backdrop-blur-md shadow-md"
          : "bg-[#FFD4D0]"
      }`}
    >
      <header className="container mx-auto px-4 py-3 relative flex items-center justify-between">
        <div className="bg-red-600 h-20 w-20 absolute md:ml-100 ml-60 rounded-full -mt-20"></div>
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img src={logoImage} alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-md">
          <li>
            <a href="#about" className="hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-red-500">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-red-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-red-500">
              Blog
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Let’s Talk
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFD4D0] px-4 pb-4">
          <ul className="flex flex-col gap-3 font-semibold text-md items-center">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#service" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => setIsOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-black text-white px-4 py-2 mt-2 rounded inline-block w-max"
                onClick={() => setIsOpen(false)}
              >
                Let’s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
