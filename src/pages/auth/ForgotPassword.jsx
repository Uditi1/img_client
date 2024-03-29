import React from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import GreetingHeader from "../../components/auth/GreetingHeader";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-6 w-full">
      <GreetingHeader
        title="Forgot Password ?"
        subTitle="Don’t worry! It happens. Enter the Email ID where we will send the OTP."
      />
      <div className="flex flex-col gap-2">
        <InputBox
          className="border-lightgray"
          label="Email Id"
          placeholder="Enter Email Id"
        />

        <Button onClick={() => navigate('/otp-verify')} className="bg-purple h-[50px]">Continue</Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
