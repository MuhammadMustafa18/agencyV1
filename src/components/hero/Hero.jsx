import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-20 pt-28 sm:pt-20">
      {/* Background Video */}
      <div className="font-display max-w-full sm:max-w-[90%] mx-auto text-5xl sm:text-8xl text-white text-center mt-10 sm:mt-20">
        Simple, smart websites for growing businesses
      </div>
      <div className="text-lg sm:text-xl text-white text-center mt-4 sm:mt-8">
        Built for clarity, speed, and growth.
      </div>

      {/* Overlay */}
    </div>
  );
};

export default Hero;
