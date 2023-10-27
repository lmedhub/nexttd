import { createTheme } from "@mui/material/styles";
import { amber, grey, deepOrange, blueGrey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const createCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        ...amber,
        ...(mode === "dark" && {
          main: amber[900],
        }),
      },
      secondary: {
        ...blueGrey,
        ...(mode === "dark" && {
          main: blueGrey[600],
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
      }),
      text: {
        ...(mode === "dark"
          ? {
              primary: "#fff",
              secondary: grey[500],
            }
          : {
              primary: grey[900],
              secondary: grey[800],
            }),
      },
    },
  });
};
