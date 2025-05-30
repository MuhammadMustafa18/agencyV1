import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";
import RotatingText from "./RotatingText";
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
      <div className="aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/q1kPVtYjPFM"
          title="Event Planner Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full mt-5"
        ></iframe>
      </div>

      {/* Overlay */}
    </div>
  );
};

export default Hero;
