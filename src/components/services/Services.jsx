import React from "react";
import { LuDot } from "react-icons/lu";
import img from "../../assets/1.jpg";
import GreenButton from "../navbar/GreenButton";

const servicesData = [
  {
    id: 1,
    title: "Business Website",
    image: img,
  },
  {
    id: 2,
    title: "Ecommerce Website",
    image: img,
  },
  {
    id: 3,
    title: "Shopify",
    image: img,
  },
];
const Each = () => {
 return (
   <div>
     {servicesData.map((service) => (
       <div key={service.id}>
         <div className="text-white text-6xl font-extrabold mt-5 ml-10">{service.title}</div>
         <div className="border-b-zinc-600 border-b-1 mt-5"></div>
       </div>
     ))}
   </div>
 );
};
const Services = () => {
  return (
    <div className="text-white max-w-full px-0 sm:px-16 py-6 bg-zinc-900">
      <div className="flex flex-col sm:flex-row items-center space-x-6 my-20">
        <div className="flex flex-row sm:min-w-1/4 text-white mb-6 items-center">
          <LuDot size={42} />
          <div className="text-xl">Services</div>
        </div>
        <div className="sm:min-w-3/4">
          <div className="text-2xl font-bold">
            We are a digital marketing agency with expertise, and we’re on a br
            mission to help you take the next step in your business.
          </div>

          <GreenButton
            bgcolor="bg-lime-300 text-black mt-4"
            s={36}
            text="All services"
          />
        </div>
      </div>

      <div>
        <Each />
      </div>
    </div>
  );
};

export default Services;
