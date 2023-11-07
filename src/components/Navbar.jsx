import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center px-2 sm:px-12 mx-auto">
        <img
          src={logo}
          alt="logo"
          className="sm:w-36 h-9 object-contain"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="mx-5 hidden sm:flex sm:flex-[2_2_0%]">
          <Marquee direction="right" speed={100} className="tracking-wider font-['Hack-Regular']">
            2023 Gachon University Industrial Design Dept. Graduation Exhibition
          </Marquee>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }  text-[18px] font-['Hack-Regular']`}
              onClick={() => setActive(link.title)}
            >
              <a href={`/${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
