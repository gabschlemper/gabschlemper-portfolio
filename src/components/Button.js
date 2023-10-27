import React from "react";

const Button = ({
  children,
  href,
  contained,
  uppercase,
  openNewTab,
  className,
}) => {
  return (
    <a
      href={href}
      className={`
      ${
        contained
          ? `bg-white text-grey-100`
          : `bg-black border border-white border-solid`
      }
      ${uppercase ? `uppercase` : `normal-case`}
        rounded-full  transition-all py-3 px-8 hover:cursor-pointer hover:opacity-50 ${className}
      `}
      // target={openNewTab ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Button;
