import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnim() {
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  var isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint

  useEffect(() => {
    

    isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
    const xPercent1 = isMobile ? 4 : 35; // Smaller movement on mobile
    const xPercent2 = isMobile ? -4 : -35; // Smaller movement on mobile
    gsap.set([boxRef1.current, boxRef2.current], { opacity: 0 });
    gsap.to(boxRef2.current, {
      xPercent: xPercent2, // Move it 50% of its own width to the right
      opacity: 1,

      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.to(boxRef1.current, {
      xPercent: xPercent1, // Move it 50% of its own width to the left
      opacity: 1,

      scrollTrigger: {
        trigger: boxRef1.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, [isMobile]);

  return (
    <div className="h-auto sm:p-10 p-5 flex w-full flex-col">
      <div className="flex w-full justify-start  ">
        <div ref={boxRef1} className="w-max font-bold sm:text-8xl text-4xl px-2">
          Have Something
        </div>
      </div>
      <div className="flex w-full justify-end ">
        <div
          ref={boxRef2}
          className="w-max font-bold sm:text-8xl text-4xl  px-2"
        >
          Unique In Mind?{" "}
        </div>
      </div>
    </div>
  );
}

export default ScrollAnim;