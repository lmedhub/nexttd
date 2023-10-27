import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/private";
import PublicRoutes from "./routes/public";

const isAuth = false;
const router = createBrowserRouter([isAuth ? PrivateRoutes() : PublicRoutes()]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
