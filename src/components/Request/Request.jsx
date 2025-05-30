import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { db } from "../../firebase/firebaseConfig"; // Make sure this path is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { filter } from 'framer-motion/client';
import InfiniteMenu from "./InfiniteMenu";
import corporate from "../../assets/corporate.png"
import roofing from "../../assets/roofing.jpg";
import realestate from "../../assets/realestate.png";
import ep from "../../assets/ep.jpg";
import ecom from "../../assets/ecom.jpg";

const items = [
  {
    image: corporate,
    link: "https://www.coachable.dev/",
    title: "Corporate",
    description:
      "Modern, responsive corporate website with a clean layout and professional branding.",
  },
  {
    image: roofing,
    link: "https://3degreesinc.com/",
    title: "Roofing",
    description:
      "Lead-generation focused roofing website with contact forms and a clean, trustworthy design.",
  },
  {
    image: realestate,
    link: "https://maximusmaximise.com/",
    title: "Real Estate",
    description:
      "Elegant real estate website showcasing property listings with intuitive navigation.",
  },
  {
    image: ep,
    link: "https://google.com/",
    title: "Event Planners",
    description:
      "Stylish and dynamic website tailored for event planning businesses with service highlights.",
  },
  {
    image: ecom,
    link: "https://google.com/",
    title: "Ecommerce",
    description:
      "Functional eCommerce website with product showcases, cart integration, and user-friendly design.",
  },
];

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
    <div className="text-white bg-zinc-900 h-full px-4 mt-20 py-20 sm:px-20">
      <div className="sm:text-5xl text-2xl text-center font-bold sm:mb-0 mb-5">
        Let's build something for your business.
      </div>
      <div className="text-sm sm:block hidden text-center my-2 max-w-[70%] mx-auto font-medium text-zinc-400">
        Whether you're starting from scratch or revamping your online presence,
        we craft websites that are fast, responsive, and built with your goals
        in mind. From booking systems to custom dashboards, we deliver real
        results — not just pretty pages.
      </div>
      <div className="relative bg-zinc-800 rounded-lg flex flex-col my-6 w-full">
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
          className={`absolute sm:top-3 top-4 ml-2 text-2xl transition duration-300 ${
            request.length ? "text-white" : " text-zinc-500"
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
      <div className='text-center sm:text-6xl text-4xl font-display'>Featured Designs</div>
      <div className='text-center text-lg text-zinc-400 mb-5'>That we can recreate for you</div>
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}

export default Request