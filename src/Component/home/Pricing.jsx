import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("tracking");

  const pricingPlans = [
    {
      name: "Basic Tracking",
      category: "tracking",
      description: "Start with essential tracking setups for your business",
      monthlyPrice: 30,
      yearlyPrice: 300,
      features: [
        "Google Analytics 4 setup",
        "Basic Google Ads tracking",
        "Basic Meta Pixel setup",
      ],
    },
    {
      name: "Premium Tracking",
      category: "tracking",
      description: "Enhanced tracking with event-based customization",
      monthlyPrice: 70,
      yearlyPrice: 600,
      features: [
        "Full GA4 + GTM setup",
        "Meta Pixel Conversion API",
        "Enhanced GAds Conversion Tracking",
        "Cookie Consent Banner Setup",
      ],
      featured: true,
    },
    {
      name: "Advanced Tracking",
      category: "tracking",
      description: "Complete tracking for enterprise-level insights",
      monthlyPrice: 150,
      yearlyPrice: 1200,
      features: [
        "GA4 & GTM full service",
        "Meta + Google Conversion APIs",
        "Custom Events & Funnels",
        "Cross-domain tracking",
        "Consent Mode v2 Setup",
      ],
    },
    {
      name: "Google Ads",
      category: "ads",
      description: "Boost leads and sales with optimized Google Ads campaigns",
      monthlyPrice: 200,
      yearlyPrice: 1800,
      features: [
        "Keyword research & ad creation",
        "Conversion tracking setup",
        "Performance optimization",
        "Weekly performance reports",
      ],
    },
    {
      name: "Facebook Ads",
      category: "ads",
      description: "Reach target audiences through Meta Ads effectively",
      monthlyPrice: 180,
      yearlyPrice: 1600,
      features: [
        "Audience research & creative setup",
        "Pixel & Conversion API integration",
        "Retargeting & Lookalike campaigns",
        "Monthly strategy sessions",
      ],
      featured: true,
    },
    {
      name: "TikTok Ads",
      category: "ads",
      description: "Drive engagement with viral TikTok ad strategies",
      monthlyPrice: 150,
      yearlyPrice: 1300,
      features: [
        "Video ad creation & management",
        "Pixel setup & event tracking",
        "Influencer strategy support",
        "Ad performance analysis",
      ],
    },
  ];

  const filteredPlans = pricingPlans.filter(
    (plan) => plan.category === selectedCategory
  );

  return (
    <div className="px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Choose the Right Plan for Your Business
        </h1>
        <p className="text-lg md:text-xl">
          Select a category and explore the plans we offer.
        </p>
        <div className="bg-white shadow-md py-2 px-4 rounded-lg flex justify-center space-x-5 items-center inline-block">
          <button
            onClick={() => setSelectedCategory("tracking")}
            className={`text-lg md:text-xl w-[180px] bg-gray-200 py-2 rounded-xl ${
              selectedCategory === "tracking"
                ? "font-bold text-[#54BD95]"
                : "text-gray-500"
            }`}
          >
            Tracking Setup
          </button>
          <button
            onClick={() => setSelectedCategory("ads")}
            className={`py-2 px-4 rounded-xl text-lg md:text-xl w-[160px] ${
              selectedCategory === "ads"
                ? "bg-[#54BD95] text-white font-bold"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Digital Ads
          </button>
        </div>
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className={`text-center p-6 shadow-lg rounded-xl transition-all duration-300 ${
              plan.featured ? "bg-[#FFD4D0] text-black" : "bg-white"
            }`}
          >
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl">{plan.name}</h1>
              <p className={plan.featured ? "text-black" : "text-gray-500"}>
                {plan.description}
              </p>
              <h2 className="text-4xl font-bold mt-4">
                <span>$</span>
                {selectedCategory === "ads"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                <span className="text-lg font-normal">/single project</span>
              </h2>
             
            </div>
            <div
              className={`p-5 rounded-xl transition-all duration-300 ${
                plan.featured ? "bg-white text-black" : "bg-gray-100"
              }`}
            >
              <ul className="space-y-4 text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="size-6 text-[#3da67c]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-6 py-3 rounded-xl text-xl font-semibold shadow-md transition-colors duration-300 ${
                  plan.featured
                    ? "bg-[#54BD95] text-white hover:bg-[#3da67c]"
                    : "text-[#54BD95] border border-[#54BD95] hover:bg-[#54BD95] hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
