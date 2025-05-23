import React from "react";
import { LuDot } from "react-icons/lu";
import GreenButton from "../navbar/GreenButton";
import ep from "../../assets/ep.png";
import epAdmin from "../../assets/epAdmin.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Sample Event Planner",
    when: 2025,
    description:
      "A Modern UI design with Book quotes, estimate quotes, instagram-like gallary and much more.",
    image: ep,
    tags: ["UI/UX", "React", "Tailwind", "Firebase", "Cloudinary"],
    link: "https://eventplanner-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Sample Event Planner",
    when: 2025,
    description:
      "A proper/user-friendly backend admin panel to see/finalize booked quotes, add images, update services and security for admin access.",
    image: epAdmin,
    tags: ["UI/UX", "React", "Tailwind", "Firebase", "Cloudinary"],
    link: "https://eventplanner-admin.vercel.app/",
  },
];


const ProjectsSection = () => {
  return (
    <section className="max-w-full mx-0 sm:px-20 py-18 px-6">
      <div className="flex flex-col text-white mb-6 items-center">
        <div className="flex flex-row">
          <div className="text-7xl text-center font-display">
            Our Portfolio{" "}
          </div>
        </div>
        <div className="text-xl mb-5 mt-3 text-zinc-300">
          Recent and best projects{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="rounded-2xl sm:h-120 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:min-h-80 object-cover rounded-xl"
            />
            <div className="flex flex-row items-center mt-3 sm:h-[10%]">
              <div className="text-md text-gray-300">{project.when}</div>
              <div className="ml-4 flex text-gray-300 flex-row items-center">
                <LuDot size={24} />
                <h3 className="text-md  font-semibold">{project.title}</h3>
              </div>
            </div>
            <p className="text-white mt-2 text-xl sm:h-[20%] font-semibold">
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
            <div className="mt-3 flex flex-row items-center gap-2 w-max text-sm text-black bg-gradient-to-r font-semibold from-yellow-500 to-orange-600 px-4 py-2 hover:from-zinc-900 hover:to-zinc-900 hover:text-white border transition duration-200 rounded-full hover:border-amber-600">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              <MdOutlineArrowOutward />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
