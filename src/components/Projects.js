import React from "react";
import { works } from "../data";
import Button from "./Button";

const Projects = () => {
  const worksData = Object.values(works);

  return (
    <section id="projects" className="px-4 lg:px-14 py-14">
      <div>
        <h1 className="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
          Recent Projects
        </h1>
        <div className="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-20 m-auto" />

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {worksData.map((item, i) => {
            return (
              <div
                key={i}
                className="text-center lg:text-left flex flex-col items-center shadow-2xl m-auto"
              >
                <a
                  className="hover:cursor-pointer hover:scale-105 transition-all"
                  href={item.url}
                >
                  <img
                    alt="project overview"
                    src={item.img}
                    className=""
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
