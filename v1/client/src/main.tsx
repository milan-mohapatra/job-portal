import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { projectTheme } from "./styles/theme.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={projectTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
