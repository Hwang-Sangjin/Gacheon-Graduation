import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Designers from "./pages/Designers";
import Visit from "./pages/Visit";

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
