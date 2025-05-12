import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { db } from "../../firebase/firebaseConfig"; // Make sure this path is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { filter } from 'framer-motion/client';
const suggestions = [
  "Website design for small business",
  "E-commerce platform development",
  "Responsive website redesign",
  "SEO optimization and website audits",
  "Mobile-friendly website development",
  "Branding and logo design services",
  "Social media integration for websites",
  "Custom web applications development",
  "Website maintenance and updates",
  "Landing page design for conversions",
  "User-friendly content management systems (CMS)",
  "Speed and performance optimization",
  "Digital marketing strategy implementation",
  "Website security enhancements",
  "Ongoing technical support for websites",
  "Consulting for web development best practices",
  "Interactive UI/UX design services",
  "Project quote for custom web features",
  "SEO keyword strategy and implementation",
  "Website redesign with modern design trends",
  "Building accessible websites for all users",
];
const Request = () => {
    const [request, setRequest] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [contact, setContact] = useState("");
    const [contactOpen, setcontactOpen] = useState(false);
    const searchService = (value) => {
      if (value.trim() === "") {
        setFilteredSuggestions([]);
      } else {
        
        const filtered = suggestions
          .filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          )
          .map((item) => item);
        setFilteredSuggestions(filtered);
      }
    };
    const handleContactSubmit = async () => {
        if(contact.length < 5){
            alert("Enter valid contact information");
            return ;
        }
        // firebase arc
        try {
            await addDoc(collection(db, "contacts"), {
              contact: contact,
              request: request,
              submittedAt: Timestamp.now()
            });
            alert("Your message has been submitted!");
            setContact("");
            setRequest("");
            setcontactOpen(false);
          } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("Failed to submit your message. Please try again later.");
          }

    } 
  return (
    <div className="text-white bg-zinc-900 px-4 mt-20 py-20 sm:px-20">
      <div className="sm:text-5xl text-2xl text-center font-bold sm:mb-0 mb-5">
        Let's build something for your business.
      </div>
      <div className="text-sm sm:block hidden text-center my-2 max-w-[70%] mx-auto font-medium text-zinc-400">
        Whether you're starting from scratch or revamping your online presence,
        we craft websites that are fast, responsive, and built with your goals
        in mind. From booking systems to custom dashboards, we deliver real
        results — not just pretty pages.
      </div>
      <div className="relative bg-zinc-800 rounded-lg flex flex-col mb-2 w-full">
        <textarea
          onFocus={() => setIsFocused(true)}
          //   onBlur={() => setIsFocused(false)}
          type="text"
          placeholder="describe project type, current problems, needs, fresh ideas"
          value={request}
          onChange={(e) => {
            setRequest(e.target.value);
            searchService(e.target.value);
          }}
          className="px-12 flex py-2 focus:outline-0 h-auto w-full my-1 rounded-lg"
        />
        <button></button>
        <div className="flex justify-end m-2">
          <button
            onClick={() => setcontactOpen(true)}
            className={` ${
              request.length
                ? "bg-white hover:bg-blue-300 text-black"
                : "bg-zinc-800 text-zinc-300"
            }     w-max flex cursor-pointer items-center font-semibold py-2 px-3 rounded-md text-sm transition duration-300`}
          >
            Send Message
            <FaArrowRightLong className="ml-1 text-sm" />
          </button>
        </div>

        <RiMessage2Fill
          className={`absolute sm:top-3 top-4 ml-2 text-2xl ${
            request.length
              ? "text-white"
              : " text-zinc-500"
          } `}
        />
      </div>
      {contactOpen && (
        <div className="fixed bg-zinc-800 top-[40%] sm:top-[40%] z-10 flex sm:w-[50%] sm:left-[25%] flex-col rounded-md items-center p-2 sm:p-8">
          <div className="font-bold mb-3 text-2xl p-2">Web venture</div>
          <div className="font-semibold mb-3">Add your contact information</div>
          <div className="font-medium mb-2 ">
            Any platform you prefer, I'll get back to you
          </div>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border-white border w-full sm:w-[50%] p-2"
          />
          <div className="flex flex-col items-center my-2 sm:my-5">
            <button
              onClick={handleContactSubmit}
              className="text-black bg-white py-1 px-14 mb-2 rounded-full font-semibold w-max"
            >
              Done
            </button>
            <button
              onClick={() => setcontactOpen(false)}
              className="text-white bg-black py-1 px-4 rounded-full font-semibold w-max"
            >
              Explore for now
            </button>
          </div>
        </div>
      )}
      {isFocused && filteredSuggestions.length > 0 && (
        <div className="flex sm:flex-row flex-col space-x-2">
          {filteredSuggestions.slice(0, 4).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                console.log(item);
                setRequest(item);
                setFilteredSuggestions([]);
                setIsFocused(false);
              }}
              // onClick={handleContactSubmit}
              className="text-white bg-zinc-800 hover:text-black hover:bg-white border text-xs cursor-pointer py-1 px-2 flex h-auto mb-2 rounded-full font-semibold w-max transition duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Request