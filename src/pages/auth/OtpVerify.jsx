import React from "react";
import GreetingHeader from "../../components/auth/GreetingHeader";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-6 w-full">
      <GreetingHeader
        title="Verification"
        subTitle="We’ve sent an SMS with an activation code to your Email ‘kumarajay5@gmail.com’"
      />

      <div className="flex flex-col gap-2">
        <InputBox
          className="border-lightgray"
          label="OTP"
          placeholder="Enter 6 digit OTP"
        />

        <Button
          onClick={() => navigate("/create-password")}
          className="bg-purple h-[50px]"
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default OtpVerify;
