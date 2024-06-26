import React from "react";
import { Link } from "react-router-dom";

import { projects } from "../constants/index";
import arrow from "../assets/icons/arrow.svg";
import ContactMe from "../components/ContactMe";
import Introduction from "../components/Introduction";

const Projects = () => {
  const content = [
    "Welcome to my Project Showcase, where creativity merges with technology. 🎈",
    "Explore 👀 my leisure-time project collection 📟 below, each demonstrating my adeptness in solving real-world problems, innovating, and delivering impactful solutions. "
  ];
  return (
    <section className="max-container">
      <Introduction first="My" second="Projects" content={content} />
      {/* My Projects */}
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            {/* icons */}
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            {/* content */}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppings font-semibold">
                {" "}
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500"> {project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="botder-slate-200" />
      <ContactMe />
    </section>
  );
};

export default Projects;
