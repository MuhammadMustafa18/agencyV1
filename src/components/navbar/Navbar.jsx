import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import GreenButton from "./GreenButton";
import { FaMagic } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useScroll(); // Get scrollY position
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 }); // Smooth animation
  const [navBg, setNavBg] = useState("bg-black");
  const [logoTranslate, setLogoTranslate] = useState(0);
  const [buttonTranslate, setButtonTranslate] = useState(0);
  const [navWidth, setNavWidth] = useState("100%"); // Full width by default
  const [navRadius, setNavRadius] = useState("0px"); // No border-radius initially

  useEffect(() => {
    return smoothScrollY.on("change", (latest) => {
      if (latest > 50) {
        setNavBg("bg-zinc-900/50 backdrop-blur-xl"); // Blurry background
        setLogoTranslate(100); // Move logo right
        setButtonTranslate(-100); // Move button left
        setNavWidth("85%"); // Decrease width
        setNavRadius("50px"); // Rounded corners
      } else {
        setNavBg("bg-zinc-900");
        setLogoTranslate(0); // Reset logo
        setButtonTranslate(0); // Reset button
        setNavWidth("100%"); // Full width
        setNavRadius("0px"); // No border-radius
      }
    });
  }, [smoothScrollY]);
  const navigate = useNavigate();

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between py-4 px-6 text-white z-50 transition-all duration-300 ${navBg}`}
      animate={{ width: navWidth, borderRadius: navRadius }}
      transition={{}}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center flex-shrink-0"
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <span
          onClick={() => navigate("/")}
          className="font-bold text-2xl tracking-tight cursor-pointer"
        >
          Web Venture.
        </span>
      </motion.div>
      {/* Middle menu
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-300">
          Services
        </a>
        <a href="#" className="hover:text-gray-300">
          Work
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
      </div> */}

      {/* Contact Button */}
      <motion.div transition={{ type: "spring", stiffness: 100, damping: 15 }}>
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r hidden sm:block font-semibold cursor-pointer from-yellow-500 to-orange-600 py-2 px-5 rounded-full text-zinc-900  hover:from-zinc-900 hover:to-zinc-900 hover:text-white hover:border-amber-600 border-2 transition-all duration-300 ease-in-out"
        >
          Contact us
        </button>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => navigate("/contact")}
          className="px-2 py-2  rounded-full border border-gray-500 text-white hover:text-gray-300"
        >
          <HiBars2 className="text-2xl" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
