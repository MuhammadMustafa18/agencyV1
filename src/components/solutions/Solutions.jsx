import React, { useRef } from "react";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaAmazon,
  FaAirbnb,
  FaShopify,
  FaDribbble,
  FaBehance,
  FaRegNewspaper,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaConnectdevelop } from "react-icons/fa";

import { SiZillow, SiUdemy, SiCoursera } from "react-icons/si";
import { PiHouse, PiGraduationCap, PiTicketBold } from "react-icons/pi";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import {
  SiStripe,
  SiLinear,
  SiNotion,
  SiVercel,
  SiFigma,
  SiLoom,
  SiIntercom,
  SiSlack,
  SiFramer,
} from "react-icons/si";

const websiteTypes = [
  {
    title: "Event & Booking Websites",
    features: [
      "Calendar & event schedule",
      "Online booking forms",
      "Estimate Quote Generator - PDF",
      "Testimonials/gallery",
      "Contact & pricing info",
    ],
    examples: [
      { name: "EPlanner", icon: <FaConnectdevelop /> },
      { name: "Airbnb", icon: <FaAirbnb /> },
      { name: "Slack", icon: <SiSlack /> },
    ],
  },
  {
    title: "Real Estate & Property Listings",
    features: [
      "Form for property type, location, budget range",
      "Available Properties search & filters (location, price, type)",
      "Add Listing details with images & maps",
      "legal or condition-based concerns FAQ",
    ],
    examples: [
      { name: "Zillow", icon: <SiZillow /> },
      { name: "Airbnb", icon: <FaAirbnb /> },
      { name: "RMove", icon: <PiHouse /> },
    ],
  },

  {
    title: "Gym & Fitness Websites",
    features: [
      "Membership prices, Timings",
      "Facilities (machines, trainers, classes)",
      "Book a day pass",
      "Gallery for trust",
      "Testimonials, success stories",
    ],
    examples: [
      { name: "A-Fit", icon: <MdOutlineFitnessCenter /> },
      { name: "FitZone", icon: <GiMuscleUp /> },
      { name: "TrainerPro", icon: <PiTicketBold /> },
    ],
  },

  {
    title: "Business & Corporate Websites",
    audience: "SMEs, startups, consultants, law firms",
    features: [
      "Company overview",
      "Services/solutions",
      "Testimonials, Team profiles",
      "Contact form & map",
      "Modern layout with brand consistency",
    ],
    examples: [
      { name: "Stripe", icon: <SiStripe /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const Solutions = () => {
    const scrollRef = useRef()
  return (
    <div className="text-white sm:px-20 px-4 py-26 min-h-screen sm:py-30 ">
      <div className="mb-4 text-4xl font-bold">
        Solution for any business type
      </div>
      <div className="flex flex-row justify-between mb-8">
        <div className="sm:max-w-[60%] text-zinc-300">
          From global AI companies to category-defining marketplaces, successful
          businesses across industries grow and scale with Stripe.
        </div>
        <div className="flex flex-row space-x-2">
          <div
            onClick={() =>
              scrollRef.current.scrollBy({ left: -320, behavior: "smooth" })
            }
            className="p-2 bg-orange-500 rounded-full w-8 h-8"
          >
            <FaArrowLeftLong className="text-white" />
          </div>
          <div
            onClick={() =>
              scrollRef.current.scrollBy({ left: 320, behavior: "smooth" })
            }
            className="p-2 bg-orange-500 rounded-full w-8 h-8"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>

      {/* Grid of Website Solutions */}
      <div
        className="gap-6 flex py-4 px-2 overflow-x-auto scroll-smooth no-scrollbar"
        ref={scrollRef}
      >
        {websiteTypes.map((type, index) => (
          <div
            key={index}
            className="border-t-4 sm:min-w-[30%] py-4 min-w-[90%] border-orange-500 hover:scale-105 transition duration-500 px-6 pt-12 rounded-md bg-zinc-800"
          >
            <div className="mb-3 text-xl font-bold">{type.title}</div>
            <div className="grid grid-cols-1  gap-1 mb-5 pt-3">
              {type.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-zinc-200 gap-2"
                >
                  {i + 1}. {f}
                </div>
              ))}
            </div>{" "}
            <button className="flex flex-row gap-2 text-sm mb-16 items-center text-white font-semibold ">
              Sample section with images <IoIosArrowForward />
            </button>
            <div className="mb-1 text-sm text-zinc-400 max-w-[70%]">
              Best international examples - that we can recreate for you:
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-zinc-600 pt-3">
              {type.examples.map((ex, i) => (
                <div key={i} className="flex items-center gap-2 text-sm sm:text-lg">
                  <span className="text-white">{ex.icon}</span>
                  {ex.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
