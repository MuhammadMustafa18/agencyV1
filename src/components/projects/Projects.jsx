import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";
import img from "../../assets/1.jpg";
const projects = [
  {
    id: 1,
    title: "Marcem Events",
    when: 2025,
    description: "A Modern UI/UX design with backend integration for MARCEM.",
    image: img,
    tags: ["UI/UX", "React", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    when: 2025,
    description: "A full-stack web application with a responsive UI.",
    image: img,
    tags: ["Full Stack", "React", "Node.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    when: 2025,
    description: "An e-commerce platform with real-time database updates.",
    image: img,
    tags: ["E-commerce", "MongoDB", "Express"],
    link: "#",
  },
  {
    id: 4,
    title: "Project Four",
    when: 2025,
    description: "A portfolio website with smooth animations.",
    image: img,
    tags: ["Portfolio", "Animations", "GSAP"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="max-w-full mx-0 md:mx-12 py-18 px-6">
      <div className="flex flex-col text-white mb-6 items-left">
        <div className="flex flex-row">
          
          <div className="text-6xl font-mono">Our Portfolio </div>
        </div>
        <div className="text-xl mb-5 mt-3 ">Recent and best projects </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="rounded-2xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="flex flex-row items-center mt-3">
              <div className="text-md text-gray-300">{project.when}</div>
              <div className="ml-4 flex text-gray-300 flex-row items-center">
                <LuDot size={24} />
                <h3 className="text-md  font-semibold">{project.title}</h3>
              </div>
            </div>
            <p className="text-white mt-2 text-3xl font-semibold">
              {project.description}
            </p>

            {/* Tags Section */}
            <div className="flex flex-wrap mt-3 gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-zinc-900 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link} className="">
              <GreenButton
                bgcolor="bg-zinc-900 text-white mt-4"
                s={36}
                text="View Project"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center text-white mt-20 mb-10">
          Have something unique in mind?
        </h2>
        
        <button className="text-white py-3 rounded-full border-2 text-xl px-8 hover:bg-white hover:text-zinc-900 hover:scale-95 hover:font-bold transition duration-300">
          Book a meeting
        </button>
        <h2 className="text-sm font-bold text-center  text-zinc-400 my-7">
          Book a meeting in just a few clicks with Google Calendar. <br />No sign-ups
          needed, automatic reminders, and instant calendar updates.
        </h2>
      </div>
    </section>
  );
};

export default ProjectsSection;
