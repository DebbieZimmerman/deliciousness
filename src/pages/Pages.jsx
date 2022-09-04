import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchresults/:search" element={<SearchResults />} />
      </Routes>
  );
}

export default pages;
