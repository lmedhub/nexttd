import "./App.css";
import { ThemeProvider } from "@mui/material";
import { createContext, useState, useMemo } from "react";
import { createCustomTheme } from "./providers/theme"; // Import the custom theme function
import Navbar from "./components/NavBar";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
