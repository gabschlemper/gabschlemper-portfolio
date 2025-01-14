import React from "react";
import { socialMediaData } from "../data";

const SocialMediaIcons = ({ horizontal, showMobile }) => {
  return (
    <div
      className={`gap-2  ${
        showMobile ? "flex mt-8 lg:mt-0" : "hidden left-14 absolute lg:flex "
      } ${horizontal ? "flex-row" : "flex-col"}`}
    >
      {socialMediaData.map((item, i) => {
        return (
          <a
            key={i}
            href={item.link}
            className="hover:opacity-50 transition-opacity"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.img} alt={item.title} className="w-8" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
