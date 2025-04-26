import React from "react";

const ServicesOverview = () => {
  return (
    <div>
      <div className="relative my-8 h-[700px] flex items-center justify-center">
        {/* Circle elements */}
        <div className="absolute w-180 h-180 bg-black rounded-full border-dotted border-2 text-white mx-auto"></div>
        <div className="absolute w-80 h-80 bg-black rounded-full border-2 border-dotted text-white mx-auto"></div>

        {/* Title */}
        <div className="absolute top-[60px] text-4xl text-white text-center font-bold">
          Core services
        </div>

        {/* Service Tags */}
        <div className="absolute top-[220px] left-[50%] -translate-x-1/2 text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          🌐 Web Design
        </div>
        <div className="absolute top-[330px] left-[20%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          ⚡ Website Speed Optimization
        </div>
        <div className="absolute top-[330px] right-[20%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          🛒 E-commerce Setup
        </div>
        <div className="absolute top-[450px] left-[30%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          ✏️ Brand Identity Design
        </div>
        <div className="absolute top-[450px] right-[30%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          📱 Mobile-Responsive Layouts
        </div>
        <div className="absolute top-[580px] left-[25%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          ✨ UI/UX Enhancements
        </div>
        <div className="absolute top-[580px] right-[25%] text-white font-extrabold text-xl bg-black p-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-110">
          🧠 SEO Basics Integration
        </div>

        {/* Random Additional Elements Outside the Box */}
        <div className="absolute top-[120px] left-[10%] text-gray-400 font-extrabold text-lg bg-black border-gray-400 border-2 py-2 px-5 rounded-full">
          Fast Delivery
        </div>
        <div className="absolute top-[150px] right-[15%] text-gray-400 font-extrabold text-lg bg-black border-gray-400 border-2 py-2 px-5 rounded-full">
          Global Reach
        </div>
        <div className="absolute top-[450px] left-[8%] text-gray-400 font-extrabold text-lg bg-black border-gray-400 border-2 py-2 px-5 rounded-full">
          Custom Solutions
        </div>
        <div className="absolute top-[450px] right-[10%] text-gray-400 font-extrabold text-lg bg-black border-gray-400 border-2 py-2 px-5 rounded-full">
          Creative Designs
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
