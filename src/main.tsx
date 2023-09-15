import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/space",
    element: <div>space</div>,
  },
  {
    path: "/product",
    element: <div>product</div>,
  },
  {
    path: "/designers",
    element: <div>designers</div>,
  },
  {
    path: "/visit",
    element: <div>visit</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
