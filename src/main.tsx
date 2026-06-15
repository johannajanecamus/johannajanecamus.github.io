import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/johannaj.github.io">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
