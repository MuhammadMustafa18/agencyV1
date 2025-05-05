import React from "react";
import {
  FaGlobe,
  FaBolt,
  FaShoppingCart,
  FaPencilAlt,
  FaMobileAlt,
  FaMagic,
  FaBrain,
} from "react-icons/fa";

const ServicesOverview = () => {
  return (
    <div>
      <div className="relative my-10 sm:my-50 h-[700px] flex items-center justify-center">
        {/* Circle elements */}
        <div className="absolute sm:w-180 sm:h-180 w-70 h-70 bg-zinc-900 rounded-full border-dotted border-2 border-zinc-600 text-white mx-auto"></div>
        <div className="absolute sm:w-80 sm:h-80 w-35 h-35 bg-zinc-900 rounded-full border-2 border-dotted border-zinc-600 text-white mx-auto"></div>

        {/* Title */}
        <div className="absolute top-[60px] text-4xl text-white text-center font-bold">
          Core services
        </div>

        {/* Service Tags with icons */}
        <div className="absolute sm:top-[320px] top-[335px] left-[50%] -translate-x-1/2  text-[10px] sm:text-xl py-2 px-5 rounded-full font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaGlobe /> Web Design
        </div>
        <div className="absolute sm:top-[220px] top-[280px] left-[4%] sm:left-[20%]  text-[9px] sm:text-xl py-2 px-5 rounded-full font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaBolt /> Website Speed Optimization
        </div>
        <div className="absolute sm:top-[220px] sm:right-[25%] top-[280px] right-[4%] text-[9px] sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaShoppingCart /> E-commerce Setup
        </div>
        <div className="absolute sm:top-[450px] sm:left-[27%]  top-[390px] left-[1%]  text-[9px] sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaPencilAlt /> Brand Identity Design
        </div>
        <div className="absolute top-[450px] right-[27%]  text-[9px] sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaMobileAlt /> Mobile-Responsive Layouts
        </div>
        <div className="absolute sm:top-[580px] sm:right-[25%] top-[390px] right-[5%]  text-[9px] sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaMagic /> UI/UX Enhancements
        </div>
        {/* <div className="absolute sm:top-[580px] sm:left-[25%] top-[390px] right-[2%]  text-xs sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaMagic /> UI/UX Enhancements
        </div> */}
        <div className="absolute sm:top-[580px] sm:left-[25%] top-[220px] left-[30%] text-[9px] sm:text-xl py-2 px-5 rounded-full font font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 flex items-center gap-2">
          <FaBrain /> SEO Basics Integration
        </div>

        {/* Additional Elements (unchanged) */}
        <div className="absolute sm:top-[120px] sm:left-[10%] top-[165px] left-[10%]  text-gray-400 font-extrabold text-[9px] sm:text-xl bg- border-gray-400 border-2 py-2 px-5 rounded-full">
          Fast Delivery
        </div>
        <div className="absolute sm:top-[120px] sm:right-[15%] top-[165px] right-[10%] text-gray-400 font-extrabold text-[9px] sm:text-xl bg- border-gray-400 border-2 py-2 px-5 rounded-full">
          Global Reach
        </div>
        <div className="absolute sm:top-[450px] sm:left-[8%] top-[510px] left-[8%] text-gray-400 font-extrabold text-[9px] sm:text-xl bg- border-gray-400 border-2 py-2 px-5 rounded-full">
          Custom Solutions
        </div>
        <div className="absolute sm:top-[450px] sm:right-[10%] top-[510px] right-[8%] text-gray-400 font-extrabold text-[9px] sm:text-xl bg- border-gray-400 border-2 py-2 px-5 rounded-full">
          Creative Designs
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
