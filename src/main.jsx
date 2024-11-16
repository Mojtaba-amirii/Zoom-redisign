import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import Navigation from "./components/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <App />
  </StrictMode>
);
