import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddForm from "./AddForm";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddForm />} />
    </Routes>
  );
};

export default MainRoutes;
