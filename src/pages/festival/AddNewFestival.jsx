import React from "react";
import Header from "../../ui/header/Header";
import AddNewForm from "../../components/festival/AddNewForm";

const AddNewFestival = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Add New Festival" />

      <AddNewForm />
    </div>
  );
};

export default AddNewFestival;
