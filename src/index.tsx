import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
