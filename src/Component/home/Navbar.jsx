import React, { useState, useEffect } from "react";
import logoImage from "../../assets/Logo.png";
import { Link } from "react-router"; // ✅ ঠিক করা হয়েছে
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

  const handleScroll = (target) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY: 70 },
      ease: "power4.out",
    });
    setIsOpen(false);
  };

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
        <Link
          to="/"
          className="text-2xl font-bold"
          onClick={() => handleScroll("#hero")}
        >
          <img src={logoImage} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-md">
          <li>
            <button
              onClick={() => handleScroll("#hero")}
              className="hover:text-red-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#about")}
              className="hover:text-red-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#service")}
              className="hover:text-red-500"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#portfolio")}
              className="hover:text-red-500"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#blog")}
              className="hover:text-red-500"
            >
              Blog
            </button>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScroll("#contact")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Let’s Talk
          </button>
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
              <button onClick={() => handleScroll("#hero")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#about")}>About</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#service")}>Services</button>
            </li>
            <li>
              <button onClick={() => handleScroll("#portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("#blog")}>Blog</button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-black text-white px-4 py-2 mt-2 rounded inline-block w-max"
              >
                Let’s Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
