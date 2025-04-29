import React from "react";
import Logo1 from "../../assets/google-analytics.png";
import Logo2 from "../../assets/tag.png";
import Logo3 from "../../assets/communication.png";
import Logo4 from "../../assets/logo (1).png";

const Serviec = () => {
  const Servicelist = [
    {
      id: 1,
      label: "Google Analytics 4",
      Image: Logo1,
      Paragraph:
        "Google Analytics 4 [GA4] is the next generation of Analytics which collects event-based data from both websites and apps. It is a new kind of property designed for the future of measurement: Collects both website and app data to better understand the customer journey",
    },
    {
      id: 2,
      label: "Google Tag manager",
      Image: Logo2,
      Paragraph:
        "Google Tag Manager is a tag management system that lets you configure and deploy tags on your website or mobile app, from an easy-to-use web interface. You can use Tag Manager to optimize your tag deployment, troubleshoot configuration errors, and modify tags that are already deployed.",
    },
    {
      id: 3,
      label: "Facebook Ads Conversion API",
      Image: Logo3,
      Paragraph:
        "The Conversions API essentially creates a direct and reliable link between your business's marketing data and Facebook. This feature enhances your advertising targeting and optimization. It collects event data from your website, apps, and offline conversions",
    },
    {
      id: 4,
      label: "Google Ads Conversion Tracking",
      Image: Logo4,
      Paragraph:
        "Google Ads Conversion Tracking is a tool that lets you measure what happens after a user clicks on your ad—such as purchases, sign-ups, or other valuable actions on your website. It helps you understand which ads, keywords, and campaigns are driving results so you can optimize your ad spend",
    },
  ];

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
            className="bg-white shadow-lg rounded-lg p-4 space-y-2"
          >
            <img src={service.Image} alt="" className="img" />
            <h3 className="text-lg font-semibold">{service.label}</h3>
            <p className="text-gray-600 pb-3">{service.Paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviec;
