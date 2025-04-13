import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import HeroSection from "./components/HeroSection";
import Signup from "./Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<App />} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);
