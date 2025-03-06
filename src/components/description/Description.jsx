import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";
import hero from "../../assets/hero.mp4";

const Description = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start space-x-6 p-18">
      {/* Heading */}
      <div className="flex items-center min-w-1/4 text-md text-white">
        <LuDot size={42} />
        <h2 className=" ">Who are we</h2>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-3xl sm:text-5xl font-bold text-white">
          We strive to deliver the best quality products and services to enhance
          your experience.
        </p>
        <div className="mt-6">
          <GreenButton bgcolor="bg-lime-300" text={"More About us"} s={36} />
        </div>
        
      </div>
    </div>
  );
};

export default Description;
