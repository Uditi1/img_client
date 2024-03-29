import React from "react";
import Header from "../../ui/header/Header";
import Button from "../../ui/buttons/Button";
import ImagePopContainer from "./ImagePopContainer";
import { useNavigate } from "react-router-dom";

const AppPopup = () => {

  const navigate = useNavigate()

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="App Popup" />
      <div className=" w-full mt-3 flex flex-col gap-4">
        <Button
          onClick={() => navigate(`/dashboard/app-setting/add-popup`)}
          className="self-end w-[150px] h-[40px] bg-purple text-white text-[14px]"
        >
          + Add New Popup
        </Button>

        <ImagePopContainer />
      </div>
    </div>
  );
};

export default AppPopup;
