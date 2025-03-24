import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
      <BrowserRouter>
        <Toaster richColors />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
