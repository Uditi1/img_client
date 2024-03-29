import React from "react";
import Header from "../../ui/header/Header";
import AddNewForm from "../../components/category/AddNewForm";

const AddNewCategory = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Add New Category" />

      <AddNewForm />
    </div>
  );
};

export default AddNewCategory;
