import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaArrowRightLong } from "react-icons/fa6";

import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { div } from "framer-motion/client";

const ImageSwipe = ({ images = [], className = "" }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval); // clean up on unmount
  }, [images.length]);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("yo");
      setIndex((prev) => (prev + 1) % images.length);
    },
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
  });

  return (
    <div className={`overflow-hidden relative `}>
      <div
        {...handlers}
        className="relative flex transition-transform duration-300 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full flex sm:flex-row sm:space-x-10 flex-col sm:px-10 px-2"
          >
            <div className="relative sm:max-w-1/2">
              <img
                key={i}
                src={img.image}
                alt={`Slide ${i}`}
                className={`${className} `}
              />
              <button
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                className="absolute text-4xl text-white top-[50%] left-4"
              >
                <FaCircleChevronLeft />
              </button>
              <button
                onClick={() =>
                  setIndex((prev) => (prev - 1 + images.length) % images.length)
                }
                className="absolute text-4xl text-white top-[50%] right-4"
              >
                <FaCircleChevronRight />
              </button>
            </div>
            <div className="text-black sm:py-10 py-3 sm:max-w-1/2">
              <div className="text-black font-bold text-4xl px-2 sm:max-w-[80%] mb-4">
                {img.title}
              </div>
              {img.facts.map((fact, j) => (
                <div key={j} className="flex flex-col my-8 ">
                  <div>
                    <div className="font-bold text-3xl py-2 border-l-4 px-4">
                      {fact.stat}
                    </div>
                    <div className="font-medium sm:max-w-[70%] text-sm text-zinc-500 px-4 mt-2">
                      {fact.desc}
                    </div>
                  </div>
                </div>
              ))}
              <div className=" font-medium px-2 text-zinc-600 mb-4">
                {img.description}
              </div>
              <button className="bg-orange-400 mx-2 flex text-sm py-1 items-center text-white font-semibold px-3 rounded-full">
                Learn more <FaArrowRightLong className="text-sm ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="  flex justify-center my-4 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-black shadow-[0_0_10px_2px_rgba(255,255,255,1.0)]"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwipe;
