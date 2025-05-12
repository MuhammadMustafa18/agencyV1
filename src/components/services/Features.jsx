import React from 'react'


import { FaMagic } from 'react-icons/fa';
import { FaSearchengin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";

const FeaturesData = [
  {
    name: "SUPERIOR TO WHATSAPP",
    description: [
      "On WhatsApp, people only see a profile picture and status.",
      "On a website, you showcase your brand, services, testimonials, and professionalism in one place—24/7",
      "Want to run ads? Apply for business loans? Partner with brands? - They Will almost always ask for your website as proof you're legit and serious.",
    ],
    image: FaWhatsapp,
    gradient: "from-red-500 to-green-500",
  },
  {
    name: "MOBILE OPTIMIZED",
    description: [
      "Most small business traffic comes from mobile",
      "A clean, mobile-friendly design builds trust instantly",
      "Touch-friendly navigation and buttons",
    ],
    image: FaMobile,
    gradient: "from-indigo-500 to-pink-500",
  },
  {
    name: "Basic SEO & Google My Business Link",
    description: [
      "Helps you appear in Google search results when people search for services you offer",
      "Increases visibility locally",
      "Brings new customers, not just referrals or repeat ones",
    ],
    image: FaSearchengin,
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    name: "Clear Calls to Action (CTAs)",
    description: [
      "Buttons like “Call Now,” “Get a Quote,” or “Book Appointment”",
      "Encourages visitors to take immediate action = potential leads",
      "Encourages conversions (calls, messages, bookings)",
    ],
    image: TbUrgent,
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Product Catalog",
    description: [
      "Displays services with images, prices, and details—professionally.",
      "Customers browse and decide faster, without waiting for a reply.",
      "Visual proof of quality helps close deals faster than a WhatsApp chat",
    ],
    image: AiFillProduct,
    gradient: "from-pink-500 to-orange-400",
  },
];



const Features = () => {
  return (
    <div className="text-black bg-white px-5 sm:px-20 py-10">
      <div className="font-mono text-3xl sm:text-4xl font-bold py-10">
        COMMON USE CASES
      </div>
      <div className="">
        {FeaturesData.map((featureData, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-10 sm:space-y-10 items-start ${
              index % 2 === 1 ? "sm:flex-row-reverse" : ""
            } mb-7 items-center`}
          >
            <div
              className={`w-full h-[450px] sm:w-[47%] flex justify-center items-center overflow-hidden bg-gradient-to-l ${featureData.gradient} rounded-2xl`}
            >
              <div className="flex flex-col w-70 items-center hover:bg-white shadow-2xl transition-colors justify-center bg-amber-50/70 rounded-2xl py-5 backdrop-blur-lg">
                <div className="w-[25%] text-6xl">
                  <featureData.image />
                </div>
                <div className="font-primary font-semibold sm:font-semibold text-xl sm:text-xl max-w-[40%] text-center py-4">
                  {/* heading */}
                  {featureData.name}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:w-[50%]">
              <div className="font-primary font-bold text-black sm:font-primary text-3xl sm:text-5xl px-5 py-1 pb-4 sm:py-4">
                {/* heading */}
                {featureData.name}
              </div>
              <ul className="list-disc font-primary text-zinc-500 min-w-[85%] pb-3 text-sm sm:text-base font-medium sm:font-medium px-5 space-y-0.5">
                {featureData.description.map((point, index) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="w-full mt-3 px-5">
                <div className="inline-flex text-sm sm:text-md py-2 px-5 rounded-full font-primary font-semibold text-white hover:border-amber-600 border-2 transition-all duration-500 ease-in-out hover:bg-gradient-to-r bg-gradient-to-r from-zinc-800 to-zinc-800 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 items-center gap-2">
                  <FaMagic /> View all benefits
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features