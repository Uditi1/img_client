import React from "react";
import Header from "../../ui/header/Header";
import ChangeForm from "../../components/adminSetting/ChangeForm";

const ChangePassword = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Change Password" />

      <ChangeForm />
    </div>
  );
};

export default ChangePassword;
