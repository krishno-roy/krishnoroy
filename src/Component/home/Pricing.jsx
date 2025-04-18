import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly"); // 'monthly' or 'yearly'

  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for individuals",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "All features",
        "Account Manager",
        "Single Sign-On",
        "Collaboration tools",
      ],
    },
    {
      name: "Pro",
      description: "Best for professionals",
      monthlyPrice: 15,
      yearlyPrice: 12, // $12/month when billed yearly
      features: [
        "All Basic features",
        "Advanced analytics",
        "Priority support",
        "API access",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 30,
      yearlyPrice: 25, // $25/month when billed yearly
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom integrations",
        "Enterprise-grade security",
      ],
    },
  ];

  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === "yearly" ? "monthly" : "yearly"));
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Choose Plan That's Right For You
        </h1>
        <p className="text-lg md:text-xl">
          Choose the plan that works best for you, feel free to contact us.
        </p>
        <div className="bg-white shadow-md py-2  px-4 rounded-lg flex justify-center space-x-5 items-center inline-block">
          <button
            onClick={toggleBillingCycle}
            className={`text-lg md:text-xl w-[140px] bg-gray-200 py-2 rounded-xl ${
              billingCycle === "monthly"
                ? "font-bold text-[#54BD95]"
                : "text-gray-500"
            }`}
          >
            Bill Monthly
          </button>
          <button
            onClick={toggleBillingCycle}
            className={`py-2 px-4 rounded-xl text-lg md:text-xl w-[140px] ${
              billingCycle === "yearly"
                ? "bg-[#54BD95] text-white font-bold"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Bill Yearly
          </button>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
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
                {billingCycle === "yearly"
                  ? plan.yearlyPrice
                  : plan.monthlyPrice}
                {billingCycle === "yearly" && (
                  <span className="text-lg font-normal">/mo</span>
                )}
              </h2>
              {billingCycle === "yearly" && (
                <p className="text-sm mt-1">
                  {plan.yearlyPrice * 12} billed annually
                </p>
              )}
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
