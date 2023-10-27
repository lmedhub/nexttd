import "./App.css";
import { ThemeProvider } from "@mui/material";
import { useState, useMemo } from "react";
import { createCustomTheme } from "./providers/theme"; // Import the custom theme function
import Navbar from "./components/NavBar";
import { ColorModeContext } from "./providers/colorMode";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Outlet />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
