import React from 'react'

const AppBox = () => {
  return (
    <div>
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
        <button className="rounded-full mt-3 sm:mt-0 inline-block w-auto items-center border-2 text-xl px-8 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300">
          Contact
        </button>
      </div>
    </div>
  );
}

export default AppBox