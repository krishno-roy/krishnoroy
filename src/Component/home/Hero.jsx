import React, { useEffect } from "react";
import HeroImage from "../../assets/hero.png";
import BackgroudnImg from "../../assets/bg.png";
import { Link } from "react-router";
import { gsap } from "gsap"; // Import GSAP
import ScrollToPlugin from "gsap/ScrollToPlugin"; // Import GSAP ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin); // Register the ScrollTo plugin

const Hero = () => {
  useEffect(() => {
    // Animation for the text elements (heading and paragraph)
    gsap.from(".hero-text h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-text p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // Animation for the buttons
    gsap.from(".hero-buttons button", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      stagger: 0.3, // Stagger buttons' appearance
    });

    // Animation for the hero image: Slide in from left with a bounce effect
    gsap.from(".hero-image", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  // Function to smoothly scroll to the portfolio section
  const handleScrollToPortfolio = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#portfolio", // ID of the portfolio section
      ease: "power3.out",
    });
  };

  return (
    <section className="bg-[#FFD4D0] px-7 pt-30 -mt-25" id="hero">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center hero-text">
          <div className="space-y-4 text-center md:text-left sm:space-x-0">
            <p>Web Analytics & Conversion Tracking Expert</p>
            <h1 className="text-[48px] font-bold">
              Hi There, I’m <br />
              <span className="text-red-500">Krishno Roy</span>
            </h1>
            <p>
              Welcome to my portfolio of captivating digital
              <br /> experiences. Explore my work and let's create something
              <br />
              extraordinary together.
            </p>
            <div className="space-x-5 hero-buttons">
              <button className="py-3 px-6 bg-black text-white text-xl font-bold">
                <Link to="https://www.fiverr.com/krisnh_o">Hire Me</Link>
              </button>
              <button
                onClick={handleScrollToPortfolio}
                className="py-3 px-6 border border-black text-xl"
              >
                <a href="#portfolio">Portfolio</a>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BackgroudnImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className="flex items-center justify-center min-h-screen w-full"
        >
          <img
            src={HeroImage}
            alt="header"
            className="mx-auto mt-4 hero-image z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
