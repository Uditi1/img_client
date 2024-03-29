import React from "react";
import Sidebar from "../constant/Sidebar";
import Navbar from "../constant/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-wheat flex h-screen overflow-auto">
      <Sidebar />
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
