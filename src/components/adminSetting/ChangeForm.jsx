import React, { useState } from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { ValidateList, ValidationTypes } from "../../utils/helpers";
import { toast } from "react-toastify";

const ChangeForm = () => {

    const userEmail = JSON.parse(localStorage.getItem('userEmail'))
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, confirmOldPassword] = useState("")

    //changePassword api call started
  const changePassword = async (e) => {
    e.preventDefault();
    let validate_arr = [
      [oldPassword, ValidationTypes.Empty, "Please enter Old Password"],
      [newPassword, ValidationTypes.Empty, "Please enter New Password"],
      [confirmPassword, ValidationTypes.Empty, "Please enter Confirm Password"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    let obj = {
      email: userEmail,
    }

    if(newPassword === confirmPassword){
        obj.password = confirmPassword
    } else {
        toast.error("Confirm Password and New Password are not same")
    }

    try {
      let resp = await FetchApi(Endpoints.changePassword, obj);
      if (resp?.status === "success") {

        toast.success(resp?.data?.message);
        navigate(`/dashboard/category/all-category`);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //changePassword api call end

  return (
    <div className="w-full mt-4 flex justify-center">
      <form
        onSubmit={changePassword}
        className="w-[560px] h-[522px] bg-white rounded-[20px] p-5 flex flex-col gap-4 justify-center"
      >
        <InputBox
          label="Old Password"
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter Old Password"
        />

        <InputBox
          label="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter New Password"
        />

        <InputBox
          label="Confirm Password"
          onChange={(e) => confirmOldPassword(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter Confirm Password"
        />
        <Button
          type="submit"
          className="bg-purple text-white self-end w-[180px] h-[50px] text-[14px]"
        >
          Save Change
        </Button>
      </form>
    </div>
  );
};

export default ChangeForm;
