import React from "react";

const Skill = () => {
  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Core Design Skills
          </h2>
          <p className="text-base sm:text-lg mb-10">
            I excel in essential design skills, creating visually stunning and
            functional digital experiences. From UI design to UX research, my
            passion is to craft effective and memorable digital solutions.
          </p>
        </div>

        {/* Skill bars */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 space-y-6">
            <SkillBar
              title="Interaction Design"
              percent="90%"
              widthClass="w-11/12"
            />
            <SkillBar
              title="Usability Testing"
              percent="80%"
              widthClass="w-10/12"
            />
            <SkillBar title="User Research" percent="70%" widthClass="w-8/12" />
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/2 space-y-6">
            <SkillBar title="Figma" percent="80%" widthClass="w-10/12" />
            <SkillBar title="Prototyping" percent="60%" widthClass="w-7/12" />
            <SkillBar
              title="Information Architecture"
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
