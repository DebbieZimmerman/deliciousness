import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
  );
}

export default pages;
