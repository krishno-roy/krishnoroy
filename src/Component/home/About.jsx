import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // About Section Animation (Text Fade & Slide-In)
    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Experience Section Animation (Slide-Up and Fade-In)
    gsap.fromTo(
      ".experience-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        ease: "power2.out",
        stagger: 0.3, // Adds staggered delay for each item
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="bg-black" id="about">
      <div className="container mx-auto py-20 relative">
        {/* About Section Text */}
        <div className="text-center md:w-6xl mx-auto pt-10 text-white space-y-2 px-3 about-text">
          <h2 className="font-bold text-4xl">About Us</h2>
          <p>
            Hi, I’m Krisno — a Web Analytics & Conversion Tracking expert
            committed to helping businesses unlock the full potential of their
            data. I specialize in implementing and managing tools like Google
            Analytics 4, Google Tag Manager, Meta Pixel, and server-side
            tracking to deliver accurate, privacy-compliant insights. From
            custom event tracking and eCommerce measurement to advanced
            reporting in Looker Studio, I ensure your analytics ecosystem is
            built to drive growth. My mission is to turn complex data into
            clear, actionable strategies that improve user experience and
            maximize your marketing ROI.
          </p>
        </div>

        {/* Experience Section */}
        <div className="experience-section grid grid-cols-1 md:grid-cols-3 md:w-3xl text-white mx-auto mt-10 flex-row space-y-7">
          <div className="experience-item text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">220+</h2>
            <p>Projects Done</p>
          </div>
          <div className="experience-item text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">2+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="experience-item text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">100</h2>
            <p>Clients</p>
          </div>
        </div>

        {/* Decorative Shape */}
        <div className="absolute  left-1/2 transform -translate-x-5 bg-red-500 w-40 h-20 rounded-b-full rotate-180"></div>
      </div>
    </div>
  );
};

export default About;
