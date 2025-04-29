import React from 'react'

const About = () => {
  return (
    <div className=" bg-black" id="about">
      <div className="container mx-auto py-20 relative">
        <div className="text-center md:w-6xl mx-auto pt-10 text-white space-y-2 px-3">
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
            maximize your marketing ROI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-3xl text-white mx-auto mt-10 flex-row space-y-7 ">
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">220+</h2>
            <p>Projects Done</p>
          </div>
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">2+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">100</h2>
            <p>Clients</p>
          </div>
        </div>
        <div className="absolute -buttom-3 left-1/2 transform -translate-x-6 bg-red-500 w-40 h-20 rounded-b-full rotate-180"></div>
      </div>
    </div>
  );
}

export default About