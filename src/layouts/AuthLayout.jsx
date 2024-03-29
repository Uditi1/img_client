import React from "react";
import AuthBox from "../ui/boxes/AuthBox";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
 const navigate = useNavigate()

  return (
    <div className="h-screen w-full bg-wheat  m-auto">
      <div className="m-auto 2xl:w-[30%] xl:w-[40%] lg:w-[40%] md:w-[60%] h-full flex flex-col gap-4 justify-center">
        <AuthBox />

        {/* {window.location.pathname === "/" && (
          <p onClick={() => navigate('/forgot-password')} className="font-satoshiMedium text-[16px] cursor-pointer text-center text-purple">
            Forgot Password
          </p>
        )} */}
      </div>
    </div>
  );
};

export default AuthLayout;
