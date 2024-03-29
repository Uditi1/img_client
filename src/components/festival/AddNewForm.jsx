import React, { useState } from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import { useNavigate } from "react-router-dom";
import { ValidateList, ValidationTypes } from "../../utils/helpers";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { FetchApi } from "../../api/fetchApi";

const AddNewForm = () => {
  const navigate = useNavigate();
  const [festivalName, setFestivalName] = useState("");

  //categoryAdd api call started
  const addCategory = async (e) => {
    e.preventDefault();
    let validate_arr = [
      [festivalName, ValidationTypes.Empty, "Please enter Festival Name"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    let obj = {
      name: festivalName,
      tag: "festival",
    };

    try {
      let resp = await FetchApi(Endpoints.create, obj);
      if (resp?.status === "success") {
        toast.success(resp?.message);
        navigate(`/dashboard/festival/all-festival`);
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
      <form onSubmit={addCategory} className="w-[560px] h-[250px] bg-white rounded-[20px] p-5 flex flex-col gap-4 justify-center">
        <InputBox
          label="Festival Name"
          onChange={(e) => setFestivalName(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter Festival Name"
        />

        <Button type="submit" className="bg-purple text-white self-end w-[180px] h-[50px] text-[14px]">
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddNewForm;
