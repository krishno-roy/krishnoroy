import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useEffect(() => {
    // Text animation (heading + paragraph) - from bottom on scroll
    gsap.from(".skill-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-text", // Trigger when this element enters the viewport
        start: "top 80%", // Start animation when element is 80% from the top of the viewport
        once: true, // Run animation once
      },
    });

    // Skill bars animation - from left with 0.8 second delay each on scroll
    gsap.utils.toArray(".skill-bar").forEach((el, index) => {
      gsap.from(el, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4 + index * 0.4, // 0.8s initial delay, then stagger by 0.8s
        scrollTrigger: {
          trigger: el, // Trigger when each skill bar enters the viewport
          start: "top 80%", // Start animation when element is 80% from the top of the viewport
          once: true, // Run animation once
        },
      });
    });
  }, []);

  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center skill-text">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
          <p className="text-base sm:text-lg mb-10">
            We specialize in advanced implementation and management of Google
            Tag Manager and Google Analytics 4, ensuring accurate and compliant
            data collection. Our expertise extends to setting up effective
            conversion tracking for both Google Ads and Facebook Ads, helping
            you measure and optimize your campaigns. With strong proficiency in
            Looker Studio and data visualization, we transform raw data into
            clear, actionable insights that support smarter business decisions.
          </p>
        </div>

        {/* Skill bars */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 space-y-6">
            <SkillBar
              title="Google Tag Manager"
              percent="99%"
              widthClass="w-12/12"
              index={0}
            />
            <SkillBar
              title="Google Analytics 4"
              percent="95%"
              widthClass="w-11/12"
              index={1}
            />
            <SkillBar
              title="Google Ads Conversion Tracking"
              percent="80%"
              widthClass="w-10/12"
              index={2}
            />
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/2 space-y-6">
            <SkillBar
              title="Facebook Ads Conversion"
              percent="93%"
              widthClass="w-11/12"
              index={3}
            />
            <SkillBar
              title="Looker Studio"
              percent="80%"
              widthClass="w-10/12"
              index={4}
            />
            <SkillBar
              title="Data Visualisation"
              percent="70%"
              widthClass="w-8/12"
              index={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill bar with animation class
const SkillBar = ({ title, percent, widthClass }) => {
  return (
    <div className="skill-bar">
      <p className="font-medium mb-1">{title}</p>
      <div className="flex items-center gap-2">
        <div className="grow bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-black h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${widthClass}`}
          ></div>
        </div>
        <span className="text-sm font-semibold w-14 text-right">{percent}</span>
      </div>
    </div>
  );
};

export default Skill;
