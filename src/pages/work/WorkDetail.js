import React from "react";
import { works } from "../../data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const WorkDetail = ({ id }) => {
  const item = works[id];
  if (!item) {
    return null;
  }

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center py-20 h-86">
          <h1 className="text-2xl lg:text-3xl uppercase pb-5 ">{item.title}</h1>
          <h3 className="pb-6 text-grey-100 max-w-xl leading-8 text-center lg:leading-10 lg:text-lg">
            {item.overview}
          </h3>
          <Button href={item.link}>Project Link</Button>
        </div>
        <div className="bg-white pb-16 px-5">
          <div className="max-w-4xl m-auto">
            <a
              href="/"
              className="text-black inline-flex items-center gap-2 ml-4 hover:opacity-50 mb-5 mt-10 py-2 px-4 border-b rounded-sm transition-all"
            >
              &larr; Go Back
            </a>
            <img src={item.img} alt={item.title} />
            <h4 className="lg:text-3xl">Project Description</h4>
            <p className="text-grey-200 leading-8">{item.description}</p>
            <h4 className="lg:text-3xl ">Tools Used</h4>
            <div className="flex gap-3">
              {item.tools.map((item, i) => (
                <span
                  key={i}
                  className="bg-grey-50 opacity-90 text-black px-3 py-2 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
            <h4 className="lg:text-3xl ">Features</h4>
            <ul>
              {item.features.map((item, i) => (
                <li
                  key={i}
                  className="text-grey-200 py-2 rounded-md list-disc ml-4"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4">
              <Button href={item.link}>Project Link</Button>
              <a
                href="/"
                className="text-black flex items-center gap-2 ml-4 hover:opacity-50"
              >
                &larr; Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;
