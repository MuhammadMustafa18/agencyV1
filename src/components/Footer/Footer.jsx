import React from 'react'
import GreenButton from '../navbar/GreenButton';
import { FaShoppingCart } from 'react-icons/fa';
import { TiArrowForward } from "react-icons/ti";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black  text-white py-8 mt-2">
      <div className="container max-w-[90%] mx-auto px-6 sm:px-18 grid grid-cols-1 sm:grid-cols-3">
        <div>

        <div className="text-3xl sm:text-4xl font-extrabold">
          Do you like <br />
          what you see?
        </div>
          <div className="inline-flex w-auto mt-5 text-xs sm:text-xl py-2 px-5 sm:px-5 rounded-full font-primary font-semibold text-white border-amber-600 border-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-zinc-900 to-zinc-900 hover:from-yellow-500 hover:to-orange-600 hover:text-zinc-900 items-center gap-2">
            <TiArrowForward/> Start a Project
          </div>
        </div>
        <div className="flex flex-col text-gray-400 sm:mx-10 mt-10 sm:mt-0">
          {/* Links Section */}
          <div className="mb-10">
            <ul className="flex flex-col text-sm space-y-3 sm:flex">
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  Discord
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  Whatsapp
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  Instagram
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-ease"
                >
                  All other options
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6">
            <a href="#" className="text-2xl hover:text-lime-300">
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a href="#" className="text-2xl hover:text-lime-300">
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a href="#" className="text-2xl hover:text-lime-300">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
            <a href="#" className="text-2xl hover:text-lime-300">
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className=" ">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} WebVenture. All rights reserved.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row pt-40 justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {currentYear} WebVenture Inc. All rights reserved
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:mustafatariq365@protonmail.com"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            mustafatariq365@protonmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a
              href="/sitemap"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Sitemap
            </a>
            <a
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="/cookie-policy"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer