import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMovie from "./AboutMovie";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<AboutMovie />} />
    </Routes>
  );
};

export default App;