import React from "react";
import SmallLogo from "../logos/SmallLogo";
import { Outlet } from "react-router-dom";

const AuthBox = () => {
  return (
    <div className="w-full h-[560px] flex flex-col gap-3 p-9 justify-center items-center bg-white rounded-[20px]">
      <SmallLogo />
      <Outlet />
    </div>
  );
};

export default AuthBox;
