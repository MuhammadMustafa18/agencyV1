import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const GreenButton = ({ bgcolor, s, text, hidden }) => {
  return (
    <div>
      <div
        className={`${
          hidden ? "hidden md:inline-flex" : "inline-flex" // inline flex or hidden aik saath issue tha
        } items-center group`}
      >
        <a
          href="#"
          className={`text-black text-sm font-bold rounded-3xl ${bgcolor} py-2 px-6 flex items-center`}
        >
          {text}
        </a>
        <div className="relative -ml-1">
          {/* Forward Arrow */}
          <IoMdArrowForward
            size={s}
            className={`absolute text-black text-2xl rounded-full ${bgcolor} p-2 
                        transition-all duration-300 transform translate-x-0 opacity-0 group-hover:translate-x-4 group-hover:opacity-100`}
          />
          {/* Outward Arrow */}
          <MdOutlineArrowOutward
            size={s}
            className={`text-black text-2xl rounded-full ${bgcolor} p-2 
                        transition-all duration-300 transform translate-x-0 opacity-100 group-hover:translate-x-4 group-hover:opacity-0`}
          />
        </div>
      </div>
    </div>
  );
};

export default GreenButton;
