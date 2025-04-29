import React from "react";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const PortfolioList = [
    {
      id: 1,
      label: "Google Tag Manager",
      Image: Portfolio1,
      Paragraph: "Google Tag manger Conversion tracking ",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 2,
      label: "Google Ads Conversion Tracking",
      Image: Portfolio2,
      Paragraph: "Marketing",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 3,
      label: "Conversion Tracking",
      Image: Portfolio3,
      Paragraph: "Stape | Server-Side Tracking Made Easy For Everyone",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 4,
      label: "Google Analytics 4",
      Image: Portfolio4,
      Paragraph:
        "Event-based model: More flexible and detailed tracking than Universal Analytics.",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 5,
      label: "Google Analytics 4 Reporting",
      Image: Portfolio5,
      Paragraph:
        "GA4 offers customizable, real-time reports focused on user behavior, events, and conversions",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 6,
      label: "Cookie Consent Mode V2",
      Image: Portfolio6,
      Paragraph:
        "Cookie Consent Mode v2 is a privacy framework by Google that adjusts how your website collects and uses data based on a user’s consent choices.",
      svg: <FaArrowRight className="text-white" />,
    },
  ];

  return (
    <div>
      <div className="bg-[#FFD4D0] py-14" id="portfolio">
        <div className="text-center md:w-2xl mx-auto pb-20 space-y-2 px-3">
          <h2 className="font-bold text-4xl">My Portfolio</h2>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6 -mt-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {PortfolioList.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white shadow-lg rounded-lg p-4 space-y-2"
            >
              <img
                src={portfolio.Image}
                alt={portfolio.label}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold">{portfolio.label}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">{portfolio.Paragraph}</p>
                <div className="p-4 bg-red-600 text-white rounded-full -rotate-45">
                  {portfolio.svg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
