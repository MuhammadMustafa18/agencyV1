import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";

const Description = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start space-x-6 px-5 sm:px-18 py-36">
      {/* Heading */}
      <div className="flex items-center md:min-w-1/4 text-md text-white">
        <LuDot size={42} />
        <h2 className="text-3xl font-extrabold">About us</h2>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-3xl sm:text-3xl text-white">
          We build high-quality websites that help businesses stand out, grow
          faster, and connect better with their customers.
        </p>
        <div className="mt-6">
          <GreenButton bgcolor="bg-lime-300" text={"More About us"} s={36} />
        </div>
      </div>
    </div>
  );
};

export default Description;
