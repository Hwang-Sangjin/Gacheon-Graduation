import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import BlackHeader from "../assets/header/BlackHeaderAll.png";
import BlackHeaderTitle from "../assets/header/BlackHeaderTitle.png";
import WhiteHeader from "../assets/header/WhiteHeaderAll.png";
import WhiteHeaderTitle from "../assets/header/WhiteHeaderTitle.png";
import { navLinks } from "../constants";

const SmallHeader = ({ blackColor }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return blackColor ? (
    <nav className="w-full flex items-center justify-center sticky">
      <img className="m-auto w-[70%]" src={WhiteHeader} />
      <ul className="list-none hidden sm:flex flex-row gap-10 absolute justify-self-end">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-tertiary"
            }  text-[18px] font-['Hack-Regular']`}
            onClick={() => setActive(link.title)}
          >
            <a href={`/${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className="w-full grid items-center  sticky justify-items-end">
      <img className="m-auto w-[70%]" src={BlackHeader} />
      <ul className="list-none hidden sm:flex flex-row gap-10 absolute">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-tertiary"
            }  text-[18px] font-['Hack-Regular']`}
            onClick={() => setActive(link.title)}
          >
            <a href={`/${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SmallHeader;
