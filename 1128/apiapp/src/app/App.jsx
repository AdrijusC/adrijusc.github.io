import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";
import { SearchProvider } from "../context/SearchContext";

const App = () => (
  <SearchProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </SearchProvider>
);

export default App;