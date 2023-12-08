import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Designers from "./pages/Designers";
import Visit from "./pages/Visit";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Preloader from "./components/Preloader";
import Personal from "./pages/Personal";
import KimGeonRyeongProductPage from "./PersonalPage/Product/KimGeonRyeong-Product-Page";
import AnMyoungJiProductPage from "./PersonalPage/Product/AnMyoungJi-Product-Page";
import KimGoEunProductPage from "./PersonalPage/Product/KimGoEun-Product-Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/designers",
    element: <Designers />,
  },
  {
    path: "/visit",
    element: <Visit />,
  },
  {
    path: "/loader",
    element: <Preloader />,
  },
  {
    path: "/KimGeonRyeongProduct",
    element: <KimGeonRyeongProductPage />,
  },
  {
    path: "/AnMyoungJiProduct",
    element: <AnMyoungJiProductPage />,
  },
  {
    path: "/KimGoEunProduct",
    element: <KimGoEunProductPage />,
  },
]);

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      rotate: 45,
    },
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
