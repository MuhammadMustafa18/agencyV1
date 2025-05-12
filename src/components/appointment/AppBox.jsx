import React from 'react'

const AppBox = () => {
  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center text-white mt-20 mb-10">
          Have something unique in mind?
        </h2>

        <button className="text-white py-3 rounded-full border-2 text-xl px-8 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300">
          Book a Google meeting
        </button>
        <h2 className="text-sm font-bold text-center  text-zinc-400 my-7">
          just click the button and select the time
        </h2>
      </div>
      <div className="max-w-[90%] bg-zinc-900 text-white mx-auto p-8  rounded-md flex flex-col sm:flex-row justify-between">
        <div>
          <div className="text-2xl font-extrabold mb-2">
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