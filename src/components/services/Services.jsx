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
    title: "E-commerce Website",
    image: img,
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: img,
  },
  {
    id: 4,
    title: "Real Estate Website",
    image: img,
  },
  {
    id: 5,
    title: "Booking / Appointment Website",
    image: img,
  },
];

const Each = () => {
 return (
   <div>
     {servicesData.map((service) => (
       <div key={service.id} className="group relative">
         <div className="flex">
           <div className="relative mt-4 overflow-hidden">
             <img
               src={service.image}
               alt={service.title}
               className="w-0 h-24 rounded-lg opacity-0 -translate-x-full transition-all duration-500 ease-in-out 
                           group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-24"
             />
           </div>
           <div className=" text-white text-4xl sm:text-7xl font-extrabold mt-5 ml-10">
             {service.title}
             {/* Image container with hover effect */}
           </div>
         </div>
         <div className="border-b-zinc-600 border-b-1 mt-5"></div>
         {/*hover pe examples of such websites and the image for attention catch, for sm the text appears by clicking*/}
       </div>
     ))}
   </div>
 );
};
const Services = () => {
  return (
    <div className="text-white  px-6 sm:px-16 py-6 bg-black">
      <div className="flex flex-col sm:flex-row items-start space-x-6 my-20">
        <div className="flex items-center md:min-w-1/4 text-md text-white">
          <LuDot size={42} />
          <h2 className="text-3xl font-extrabold">Popular Services</h2>
        </div>
        <div className="sm:min-w-3/4">
          <div className="text-2xl font-bold">
            Trusted by businesses like yours, these popular services make it
            easy to build a strong online presence
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
