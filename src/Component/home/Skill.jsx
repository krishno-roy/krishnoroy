import React from "react";

const Skill = () => {
  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
             Skills
          </h2>
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
            />
            <SkillBar
              title="Google Analytics 4"
              percent="95%"
              widthClass="w-11/12"
            />
            <SkillBar
              title="Google Ads Conversion Tracking"
              percent="80%"
              widthClass="w-10/12"
            />
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/2 space-y-6">
            <SkillBar
              title="Facebook Ads Conversion "
              percent="93%"
              widthClass="w-11/12"
            />
            <SkillBar
              title="Looker Studio"
              percent="80%"
              widthClass="w-10/12"
            />
            <SkillBar
              title="Data Visualisation"
              percent="70%"
              widthClass="w-8/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill bar as a reusable component
const SkillBar = ({ title, percent, widthClass }) => {
  return (
    <div>
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
