import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddForm from "./AddForm";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
