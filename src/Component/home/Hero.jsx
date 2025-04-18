import React from "react";
import HeroImage from "../../assets/hero.png";
import BackgroudnImg from "../../assets/bg.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className=" bg-[#FFD4D0] px-7 pt-30 -mt-25">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <div className="space-y-4 text-center md:text-left sm:space-x-0">
            <p>UX Designer</p>
            <h1 className="text-[48px] font-bold">
              Hi There, I’m <br />
              <span className="text-red-500">Krishno Roy</span>
            </h1>
            <p>
              Welcome to my portfolio of captivating digital
              <br /> experiences. Explore my work and let's create something
              <br />
              extraordinary together.
            </p>
            <div className="space-x-5">
              <button className="py-3 px-6 bg-black text-white text-xl font-bold">
                <Link to="/">Hire Me</Link>
              </button>
              <button className="py-3 px-6 border border-black text-xl">
                <a href="#portfolio">Portfolio</a>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BackgroudnImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className="flex items-center justify-center min-h-screen w-full"
        >
          <img src={HeroImage} alt="header" className="mx-auto mt-4 z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
