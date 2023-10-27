import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/misc/404";

function PrivatePage() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "text.primary" }}>private</Box>
  );
}

export default function PrivateRoutes() {
  return {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <PrivatePage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
