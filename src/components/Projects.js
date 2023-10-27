import React from "react";
import Button from "./Button";
import { works } from "../data";

const Projects = () => {
  const worksData = Object.values(works);

  return (
    <section id="projects" className="px-4 lg:px-14 py-14">
      <div>
        <h1 className="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
          Projects
        </h1>
        <div className="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-20 m-auto" />

        <div className="flex items-center flex-col gap-20">
          {worksData.map((item, i) => {
            return (
              <div
                key={i}
                className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-3 lg:gap-6 shadow-2xl max-w-3xl"
              >
                <a
                  className="hover:cursor-pointer hover:scale-105 transition-all"
                  href={item.link}
                >
                  <img
                    alt="project overview"
                    src={item.img}
                    className="md:max-w-[350px]"
                  />
                </a>
                <div className="">
                  <h2 className="md:mb-3 text-lg">{item.title}</h2>
                  <h3 className="text-grey-100 mb-8">{item.overview}</h3>
                  <Button href={item.url}>View Project</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
