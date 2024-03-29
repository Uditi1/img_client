import React from "react";
import Button from "../../ui/buttons/Button";
import { Endpoints } from "../../api/endpoints";
import { FetchApi } from "../../api/fetchApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutData = ({ toggleLogoutModal }) => {
    
  const navigate = useNavigate();

  //logout api call started
  const logout = async (e) => {
    try {
      let resp = await FetchApi(Endpoints.logout);
      if (resp?.status === "success") {
        toast.success(resp?.data?.message);
        navigate("/");
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      } else {
        toast.error("Logout Failed");
        navigate("/");
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //logout api call end

  return (
    <div className="w-full h-full justify-center gap-6 flex flex-col">
      <img
        className="w-[60px] self-center h-[60px]"
        src="/images/logout-circle.png"
      />

      <div className="flex flex-col gap-2 items-center">
        <p className="font-satoshiBold text-darkBlue text-[20px]">Log out</p>
        <p className="font-satoshiRegular text-gray text-[16px]">
          Are you sure you want to Log out?
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={toggleLogoutModal}
          className="w-[130px] h-[55px] border-[1px] border-darkBlue text-darkBlue"
        >
          No
        </Button>
        <Button
          onClick={logout}
          className="w-[130px] h-[55px] bg-purple text-white"
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export default LogoutData;
