import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navigation from "./components/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>
);
