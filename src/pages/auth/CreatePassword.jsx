import React from "react";
import GreetingHeader from "../../components/auth/GreetingHeader";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";

const CreatePassword = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <GreetingHeader
        title="Create New Password"
        subTitle="Please type something you’ll remember"
      />

      <div className="flex flex-col gap-2">
        <InputBox
          className="border-lightgray"
          label="Create New Password"
          placeholder="must be 8 characters"
        />

        <InputBox
          className="border-lightgray"
          label="Confirm Password"
          placeholder="repeat password"
        />

        <Button className="bg-purple h-[50px]">Update password</Button>
      </div>
    </div>
  );
};

export default CreatePassword;
