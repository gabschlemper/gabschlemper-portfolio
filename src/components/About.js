import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-grey-300 px-4 lg:px-14 py-14">
      <div>
        <div>
          <h1 className="text-2xl lg:text-3xl text-grey-100 uppercase text-center">
            About Me
          </h1>
          <div className="w-14 bg-grey-200 h-1 mt-2 mb-5 lg:mb-20 m-auto" />
          <div className="flex justify-between gap-10 mg:gap-0 flex-col lg:flex-row text-center lg:text-left">
            <img
              src="/logo.svg"
              alt="logo"
              width={250}
              height="auto"
              className="m-auto"
            />
            <div>
              <div className="flex-2 leading-8 lg:leading-10 lg:text-lg flex flex-col justify-center items-start max-w-5xl pb-10">
                <p>
                  Hi there!
                  <br />
                  I'm a front-end developer with a focus on HTML, CSS, and
                  ReactJS. I love building beautiful, responsive websites and
                  web applications that are easy to use and navigate.
                </p>
                <p>
                  ReactJS is one of my favorite tools to work with because of
                  its versatility and power. I enjoy using its components and
                  hooks to build dynamic and interactive interfaces that bring
                  websites to life.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-32">
                <span className="shrink text-white">my stack</span>
                <div className="flex grow justify-between">
                  <img
                    src="/js-icon.svg"
                    className="w-8 hover:scale-110 transition-all"
                    alt="JavaScript Icon"
                  />
                  <img
                    src="/html-icon.svg"
                    className="w-8 hover:scale-110 transition-all"
                    alt="Html Icon"
                  />
                  <img
                    src="/css-icon.svg"
                    className="w-8 hover:scale-110 transition-all"
                    alt="Css Icon"
                  />
                  <img
                    src="/react-icon.svg"
                    className="w-8 hover:scale-110 transition-all"
                    alt="React Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
