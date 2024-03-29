import React from "react";
import Header from "../../ui/header/Header";
import AddImageForm from "../../components/category/AddImageForm";

const AddNewImage = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Add New Image" />

      <AddImageForm />
    </div>
  );
};

export default AddNewImage;
