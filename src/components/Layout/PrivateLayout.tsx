import { Box } from "@mui/material";
import Navbar from "../NavBar";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <Box>
      <>
        Private Layout:
        <Navbar />
        <Outlet />
      </>
    </Box>
  );
}
