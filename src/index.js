import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../../movies mag/src/App.js";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);