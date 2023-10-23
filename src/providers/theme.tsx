import { createTheme } from "@mui/material/styles";
import { amber, grey, deepOrange } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const createCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        ...amber,
        ...(mode === "light" && {
          main: amber[300],
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
