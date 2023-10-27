import { Navigate } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/misc/404";
import PublicPage from "../pages/auth";

export default function PublicRoutes() {
  return {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/login", element: <PublicPage /> },
      { path: "/register", element: <PublicPage /> },
      { path: "*", element: <Navigate to="/login" replace /> },
    ],
  };
}
