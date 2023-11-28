import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import BlackHeader from "../assets/header/BlackHeader.png";
import BlackHeaderTitle from "../assets/header/BlackHeaderTitle.png";
import WhiteHeader from "../assets/header/WhiteHeader.png";
import WhiteHeaderTitle from "../assets/header/WhiteHeaderTitle.png";
import { navLinks } from "../constants";

const Navbar = ({ blackColor }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return blackColor ? (
    <nav>
      <img src={BlackHeader} />
    </nav>
  ) : (
    <nav>
      <img src={WhiteHeader} />
    </nav>
  );
};

export default Navbar;
