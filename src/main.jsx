import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import MotionEffects from "./components/MotionEffects";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MotionEffects />
    <AppRoutes />
  </BrowserRouter>
);
