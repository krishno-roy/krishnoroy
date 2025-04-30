import React, { useEffect } from "react";
import Logo1 from "../../assets/google-analytics.png";
import Logo2 from "../../assets/tag.png";
import Logo3 from "../../assets/communication.png";
import Logo4 from "../../assets/logo (1).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Serviec = () => {
  const Servicelist = [
    {
      id: 1,
      label: "Google Analytics 4",
      Image: Logo1,
      Paragraph:
        "Google Analytics 4 [GA4] is the next generation of Analytics which collects event-based data from both websites and apps.",
    },
    {
      id: 2,
      label: "Google Tag Manager",
      Image: Logo2,
      Paragraph:
        "Google Tag Manager lets you configure and deploy tags on your website or mobile app.",
    },
    {
      id: 3,
      label: "Facebook Ads Conversion API",
      Image: Logo3,
      Paragraph:
        "The Conversions API creates a direct and reliable link between your marketing data and Facebook.",
    },
    {
      id: 4,
      label: "Google Ads Conversion Tracking",
      Image: Logo4,
      Paragraph:
        "Measure what happens after a user clicks on your ad — purchases, sign-ups, or valuable actions.",
    },
  ];

  useEffect(() => {
    // Create a staggered animation for the service items
    gsap.fromTo(
      ".service-item",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.4, // 1 second stagger between each item
        scrollTrigger: {
          trigger: ".service-item",
          start: "top 80%", // Start animation when each service is 80% in view
          toggleActions: "play none none reset", // Reset when scroll up
          once: false, // Allow animation to trigger again
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto p-6" id="service">
      <div className="text-center md:w-5xl mx-auto pt-10 space-y-2 px-3">
        <h2 className="font-bold text-4xl">Services</h2>
        <p>
          Gain a complete view of your digital performance with expert web
          analytics and conversion tracking services. I specialize in setting up
          and configuring tools like Google Analytics 4, Google Tag Manager,
          Meta Pixel, and server-side tracking to ensure data accuracy and
          compliance. From custom event tagging and enhanced eCommerce tracking
          to multi-channel attribution and funnel visualization, I deliver
          actionable insights that empower data-driven decisions. Whether you're
          optimizing ad spend, improving UX, or scaling conversions, I help you
          transform raw data into real business growth
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {Servicelist.map((service) => (
          <div
            key={service.id}
            className="service-item bg-white shadow-lg rounded-lg p-4 space-y-2 opacity-0"
          >
            <img src={service.Image} alt={service.label} className="img" />
            <h3 className="text-lg font-semibold">{service.label}</h3>
            <p className="text-gray-600 pb-3">{service.Paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviec;
