import React from "react";
import Appbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};

export default Layout;
