import { div } from 'framer-motion/client';
import React from 'react'
import { MdOutlineAddBusiness } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
const services = [
    {
      name: "Mobile App Development",
      icon: MdBorderColor,
    },
  {
    name: "UI/UX Design",
    icon: MdOutlineAddBusiness,
  },
  {
    name: "Website Maintenance",
    icon: FaShopify,
  },
  {
    name: "Hosting & Domain Setup",
    icon: MdOutlinePersonPin,
  },
  {
    name: "Branding & Logo Design",
    icon: MdRealEstateAgent,
  },
];
const websites = [
  {
    name: "Business Website",
    icon: MdOutlineAddBusiness,
  },
  {
    name: "E-commerce Website",
    icon: FaShopify,
  },
  {
    name: "Portfolio Website",
    icon: MdOutlinePersonPin,
  },
  {
    name: "Real Estate Website",
    icon: MdRealEstateAgent,
  },
  {
    name: "Booking / Appointment Website",
    icon: MdBorderColor,
  },
];
const Services2 = () => {
  return (
    <div className="flex justify-center flex-col my-25">
      <div className="w-full justify-items-center text-white sm:px-20 px-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="border-r-2 border-r-zinc-800">
          <h1 className="text-lg mb-3 text-zinc-400 font-mono">Websites</h1>
          <p className="text-3xl font-bold mb-6 w-[90%] sm:w-[75%]">
            A website makes your business visible 24/7 and helps attract more
            customers.
          </p>
          <p className="text-md w-[85%] text-zinc-400">
            A website helps people find your business online anytime, from
            anywhere. It builds trust and makes it easy for customers to learn
            about your products or services. Here are some popular websites:
          </p>
          <div className="mt-12">
            {websites.map((website) => (
              <div
                key={website.name}
                className="flex flex-row items-center font-mono justify-between pr-2 sm:pr-15 mb-3"
              >
                <div className="flex flex-row items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full">
                    <website.icon className="text-white text-xl" />
                  </div>
                  <p className="text-md">{website.name}</p>
                </div>
                <div className="">
                  <MdArrowOutward />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:mt-0 mt-10">
          <h1 className="text-lg text-zinc-400 mb-3 font-mono">Services</h1>
          <p className="text-3xl font-bold mb-6 w-[90%] sm:w-[75%]">
            High-quality digital services that give your business a competitive
            edge in a crowded market.
          </p>
          <p className="text-md text-zinc-400 mb-15 w-[85%]">
            Professional digital services like web development, SEO, and design
            help businesses attract, engage, and retain customers.
          </p>
          <div className="mt-12 ">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-row items-center font-mono justify-between pr-2 sm:pr-15 mb-3"
              >
                <div className="flex flex-row items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-2 rounded-full">
                    <service.icon className="text-white text-xl" />
                  </div>
                  <p className="text-md">{service.name}</p>
                </div>
                <div className="">
                  <MdArrowOutward />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="hover:bg-gradient-to-r font-bold hover:from-yellow-500 hover:to-orange-600 py-2 px-5 rounded-full hover:text-zinc-900 from-zinc-900 to-zinc-900 text-white border-amber-600 border-2 transition-all duration-300 ease-in-out">
          Have something specific in mind?
        </button>
      </div>
    </div>
  );
}

export default Services2