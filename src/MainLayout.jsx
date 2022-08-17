import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (
    <div >
      <Navbar />
      <div className="p-6  ">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
