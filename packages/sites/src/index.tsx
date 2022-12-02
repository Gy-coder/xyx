import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import { generateRouteConfig } from "./utils/generateRouteConfig";
import "./index.css";
import Docs from "./pages/docs";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Docs />,
    children: generateRouteConfig(),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
