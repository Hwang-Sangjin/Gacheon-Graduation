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
      <motion.div className="cursor" variants={variants} animate="default" />
    </>
  );
};

export default App;
