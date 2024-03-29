import React, { useState } from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import { ValidateList, ValidationTypes } from "../../utils/helpers";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTagContainer from "./SelectTagContainer";

const AddNewForm = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [dropdown, setDropdown] = useState();
  const selectedTag = useSelector((state) => state.categorySlice.categoryTag);

  //categoryAdd api call started
  const addCategory = async (e) => {
    e.preventDefault();
    let validate_arr = [
      [categoryName, ValidationTypes.Empty, "Please enter Category Name"],
      [dropdown, ValidationTypes.Empty, "Please select a Tag Name"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    let obj = {
      name: categoryName,
      tag: dropdown,
    };

    console.log(obj)

    try {
      let resp = await FetchApi(Endpoints.create, obj);
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
  //categoryAdd api call end

  return (
    <div className="w-full mt-4 flex justify-center">
      <form
        onSubmit={addCategory}
        className="w-[560px] h-[350px] bg-white rounded-[20px] p-5 flex flex-col gap-4 justify-center"
      >
        <SelectTagContainer onDropdown={setDropdown} />
        <InputBox
          label="Category Name"
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter Category Name"
        />

        <Button
          type="submit"
          className="bg-purple text-white self-end w-[180px] h-[50px] text-[14px]"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddNewForm;
