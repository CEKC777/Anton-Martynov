import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import Navbar from "./Navbar.jsx";
import Works from "./Works.jsx";
import Profile from "./Profile.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="works" element={<Works />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
