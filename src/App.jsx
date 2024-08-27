import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)