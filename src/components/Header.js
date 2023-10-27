import React, { useState } from "react";
import { navItems } from "../data";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="fixed w-full z-50">
      <div className="bg-grey-300 px-4 lg:px-14 py-6 bg-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h2>Gabriela Schlemper</h2>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-6 ">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:opacity-50 transition-opacity cursor-pointer"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {openMenu ? (
          <button
            className="flex items-center hover:text-gray-70 lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src="close-icon.svg" alt="menu icon" />
          </button>
        ) : (
          <button
            className="flex items-center hover:text-gray-70 lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src="menuicon.svg" alt="menu icon" />
          </button>
        )}
      </div>
      {openMenu ? (
        <div className="text-white bg-black lg:hidden absolute w-full h-screen">
          <ul className="flex flex-col w-100% items-center py-4 ">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:opacity-50 transition-opacity cursor-pointer py-2"
              >
                <a onClick={() => setOpenMenu(false)} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
