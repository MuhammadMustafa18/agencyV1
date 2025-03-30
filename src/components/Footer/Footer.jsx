import React from 'react'
import GreenButton from '../navbar/GreenButton';

const Footer = () => {
  return (
    <footer className="bg-zinc-900  text-white py-8 mt-2">
      <div className="container mx-auto px-36 flex flex-row">
        <div className="text-4xl font-extrabold w-1/3">
          Do you like <br />
          what you see?
          <GreenButton
            bgcolor="bg-lime-300 text-black mt-4"
            s={36}
            text="Start a Project"
          />
        </div>
        <div className="flex flex-col text-gray-400 mx-10 w-1/3">
          {/* Links Section */}
          <div className="mb-40">
            <ul className="flex flex-col text-sm space-y-3 sm:flex">
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  About Us
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  Privacy Policy
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-out"
                >
                  Terms of Service
                  <span className="absolute top-5 left-0 w-0 h-0.25 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white relative group transition-colors duration-300 ease-in-ease"
                >
                  Contact
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
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};



export default Footer