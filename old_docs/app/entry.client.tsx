import { ColorSchemeProvider } from "@nuco/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <ColorSchemeProvider>
      <HydratedRouter />
    </ColorSchemeProvider>
  </React.StrictMode>,
);
