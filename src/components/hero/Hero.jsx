import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";
import RotatingText from "./RotatingText";
import video from "../../assets/EventPlanner.mp4"
const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-20 pt-28 h-auto sm:pt-20">
      {/* Background Video */}

      <div className="font-display flex flex-col items-center max-w-full sm:max-w-[90%] mx-auto text-center mt-10 sm:mt-20">
        <div className="text-5xl sm:text-8xl  text-white ">
          Simple, smart websites for
        </div>
        <RotatingText
          texts={[
            "Event Planners",
            "Architects",
            "Roofing",
            "Interior Designers",
            "Photographers",
            "Real Estate Agents",
            "Contractors",
            "Consultants",
          ]}
          mainClassName="px-2 text-5xl sm:text-8xl  w-max font-display overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
      </div>

      <div className="text-lg sm:text-xl text-white text-center mt-4 sm:mt-5">
        Built for clarity, speed, and growth.
      </div>
      <video
        className="w-full h-full object-cover z-0 py-5"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
    </div>
  );
};

export default Hero;
