import React from "react";
import hero from "../../assets/hero.mp4";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";

const Hero = () => {
  return (
    <div className="relative w-full h-screen px-4 sm:px-20 pt-20 sm:pt-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="object-cover w-full h-full rounded-3xl"
        autoPlay
        loop
        muted
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-20 left-0 sm:left-15 text-white p-6 bg-black bg-opacity-75 rounded-b-3xl">
        <div className="flex flex-row items-center tracking-tight">
          <LuDot size={42} />
          <h1 className="">Welcome to Our Website</h1>
        </div>
        <p className="text-3xl sm:text-7xl font-bold mt-2 mb-6">
          A web design and <br />
          branding agency{" "}
        </p>
        <GreenButton
          bgcolor="bg-zinc-900 text-white"
          s={36}
          text="Projects"
        />
      </div>
    </div>
  );
};

export default Hero;
