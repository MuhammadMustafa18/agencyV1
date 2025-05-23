import React from 'react'
import { useNavigate } from "react-router-dom";

const AppBox = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mt-4 flex flex-col min-h-[60%] justify-center items-center">
        <h2 className="sm:text-5xl text-4xl font-bold text-center text-white mt-20 px-2 sm:mb-5 mb-3">
          Have something unique in mind?
        </h2>

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
        <button className="rounded-full mt-5 py-2 sm:py-0 sm:mt-0 h-11 inline-flex sm:inline-block justify-center  w-1/2 sm:w-auto items-center border-2 text-xl px-8 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300">
          Contact
        </button>
      </div>
    </div>
  );
}

export default AppBox