import React from "react";
import Button from "./Button";
import SocialMediaIcons from "./SocialMediaIcons";

const Home = () => {
  return (
    <section
      id="home"
      className="px-4 lg:px-14 py-6 lg:py-14 flex justify-center items-center h-screen "
    >
      <SocialMediaIcons />
      <div className="flex flex-col items-center">
        <h1 className="pb-5 lg:pb-10 text-center text-2xl lg:text-3xl uppercase">
          Hi, My Name is <strong> Gabriela Schlemper!</strong> 🖖
        </h1>

        <h3 className="pb-6 lg:pb-8 text-center text-grey-100 max-w-3xl leading-8 lg:leading-10 lg:text-lg">
          I am a dedicated front-end developer with a primary focus on HTML,
          CSS, and React. My passion lies in crafting visually stunning and
          responsive websites that come to life with dynamic and engaging user
          interfaces.
        </h3>
        <Button uppercase href="#projects">
          Projects
        </Button>
      </div>
    </section>
  );
};

export default Home;
