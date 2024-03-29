import React from "react";
import Header from "../../ui/header/Header";
import AddForm from "../../components/appSettings/AddForm";

const AddPopup = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Add New Popup" />

      <AddForm />
    </div>
  );
};

export default AddPopup;
