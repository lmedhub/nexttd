import { Navigate } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/misc/404";
import DashBoard from "../pages/dashboard";
import MainPage from "../pages/main";

export default function PrivateRoutes() {
  return {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
