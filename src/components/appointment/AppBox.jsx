import React from 'react'
import { useNavigate } from "react-router-dom";
import ScrollAnim from './ScrollAnim';

const AppBox = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mt-4 flex flex-col min-h-[60%] justify-center text-white items-center">
        <ScrollAnim />

        <button
          onClick={() => navigate("/contact")}
          className="text-white sm:py-3 py-2 rounded-full border-2 sm:text-xl text-sm sm:px-8 px-3 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300"
        >
          Book a Google meeting
        </button>
        <h2 className="sm:text-sm text-xs font-bold text-center  text-zinc-400 mb-7 mt-3">
          just click the button and select the time
        </h2>
      </div>
      <div className="bg-zinc-900 text-white mx-auto sm:mx-10 p-8  rounded-md flex flex-col sm:flex-row justify-between">
        <div>
          <div
            onClick={() => navigate("/contact")}
            className="sm:text-4xl text-2xl font-extrabold mb-2"
          >
            Or Connect with WebVenture on WhatsApp{" "}
          </div>

          <div>
            {" "}
            Quick and easy communication for your queries and project
            discussions.
          </div>
        </div>
        <button className="rounded-full mt-3 py-1 text-lg sm:py-0 sm:mt-0 sm:h-11 w-max  justify-center items-center border-2 sm:text-xl sm:px-8 px-5 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300">
          Contact
        </button>
      </div>
    </div>
  );
}

export default AppBox